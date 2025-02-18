import { NextRequest, NextResponse } from "next/server";
import { createPartner } from "@/lib/createPartner";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const newPartner = await createPartner(data);

    if (!newPartner) {
      return NextResponse.json({ error: "Failed to create partner" }, { status: 400 });
    }

    return NextResponse.json({ message: "Partner created successfully", partner: newPartner }, { status: 201 });
  } catch (error) {
    console.error("Error creating partner:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
