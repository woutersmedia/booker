import { neon } from "@neondatabase/serverless";
import { PartnerType } from "@/types/Partner";
import { validate as isUuid } from "uuid";

const databaseUrl = process.env.DATABASE_URL;

export const getPartners = async (): Promise<PartnerType[]> => {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set");
  }

  const sql = neon(databaseUrl);

  try {
    const partners = await sql("SELECT * FROM partners", []);

    return partners as PartnerType[];
  } catch (error) {
    console.error("Error fetching partners:", error);
    throw new Error("Failed to fetch partners");
  }
};

export const getPartnerByUuid = async (
  uuid: string,
): Promise<PartnerType | null> => {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set");
  }

  if (!isUuid(uuid)) {
    throw new Error(`Invalid UUID: ${uuid}`);
  }

  const sql = neon(databaseUrl);

  try {
    const partners = await sql("SELECT * FROM partners WHERE uuid = $1", [
      uuid,
    ]);

    return partners.length > 0 ? (partners[0] as PartnerType) : null;
  } catch (error) {
    console.error(`Error fetching partner with uuid ${uuid}:`, error);
    throw new Error("Failed to fetch partner");
  }
};

export async function updatePartner(uuid: string, partnerData: Partial<PartnerType>) {
  const res = await fetch(`/api/partners/${uuid}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(partnerData),
  });

  if (!res.ok) {
    throw new Error("Failed to update partner");
  }

  return res.json();
}

export async function createPartner(partnerData: Partial<PartnerType>) {
  const res = await fetch(`/api/partners`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(partnerData),
  });

  if (!res.ok) {
    throw new Error("Failed to create partner");
  }

  return res.json();
}
