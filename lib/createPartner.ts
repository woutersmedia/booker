import { neon } from "@neondatabase/serverless";
import { PartnerType } from "@/types/Partner";
import { v4 as uuidv4 } from "uuid";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

export const createPartner = async (data: Partial<PartnerType>): Promise<PartnerType | null> => {
  const sql = neon(databaseUrl);
  const newUuid = uuidv4();

  try {
    const partners = await sql(
      `INSERT INTO partners ("firstName", "prefix", "lastName", "artistName", "type", uuid)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        data.firstName || null,
        data.prefix || null,
        data.lastName || null,
        data.artistName || null,
        Array.isArray(data.type) ? data.type : `{${data.type}}`,
        newUuid,
      ],
    );

    return partners.length > 0 ? (partners[0] as PartnerType) : null;
  } catch (error) {
    console.error("Error creating new partner:", error);
    throw new Error("Failed to create partner");
  }
};
