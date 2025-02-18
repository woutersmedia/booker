import { NextRequest, NextResponse } from "next/server";
import { updatePartner } from "@/lib/updatePartner";
import { validate as isUuid } from "uuid";

export async function PATCH(req: NextRequest, { params }: { params: { uuid: string } }) {
  const { uuid } = await params;

  if (!isUuid(uuid)) {
    return NextResponse.json({ error: `Invalid UUID: ${uuid}` }, { status: 400 });
  }

  try {
    const data = await req.json();
    const updatedPartner = await updatePartner(uuid, data);

    if (!updatedPartner) {
      return NextResponse.json({ error: "Partner not found or not updated" }, { status: 404 });
    }

    return NextResponse.json({ message: "Partner updated successfully", partner: updatedPartner });
  } catch (error) {
    console.error("Error updating partner:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
