import { neon } from "@neondatabase/serverless";
import { PartnerType } from "@/types/Partner";
import { isUuid } from "@/lib/isUuid";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

export const updatePartner = async (
  uuid: string,
  data: Partial<PartnerType>,
): Promise<PartnerType | null> => {
  if (!isUuid(uuid)) {
    throw new Error(`Invalid UUID: ${uuid}`);
  }

  const sql = neon(databaseUrl);

  try {
    const partners = await sql(
      `UPDATE partners
       SET "firstName"  = $1,
           "prefix"     = $2,
           "lastName"   = $3,
           "artistName" = $4,
           "type"       = $5
       WHERE uuid = $6
       RETURNING *`,
      [
        data.firstName || null,
        data.prefix || null,
        data.lastName || null,
        data.artistName || null,
        Array.isArray(data.type) ? data.type : `{${data.type}}`,
        uuid,
      ],
    );

    return partners.length > 0 ? (partners[0] as PartnerType) : null;
  } catch (error) {
    console.error(`Error updating partner with uuid ${uuid}:`, error);
    throw new Error("Failed to update partner");
  }
};
