import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import VideoTestimonial from "@/models/VideoTestimonial";

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectDB();
  try {
    await VideoTestimonial.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}