import { neon } from "@neondatabase/serverless";
import { PartnerType } from "@/types/Partner";

export const getPartners = async (): Promise<PartnerType[]> => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    const partners = await sql("SELECT * FROM partners", []);

    return partners as PartnerType[];
  } catch (error) {
    console.error("Error fetching partners:", error);
    throw new Error("Failed to fetch partners");
  }
};

export const getPartnerByUuid = async (uuid: string): Promise<PartnerType | null> => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    const partners = await sql("SELECT * FROM partners WHERE uuid = $1", [uuid]);
    return partners.length > 0 ? (partners[0] as PartnerType) : null;
  } catch (error) {
    console.error(`Error fetching partner with uuid ${uuid}:`, error);
    throw new Error("Failed to fetch partner");
  }
};