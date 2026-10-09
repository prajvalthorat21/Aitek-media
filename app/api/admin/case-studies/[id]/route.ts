import { NextResponse } from "next/server";
import  connectDB  from "@/lib/db";
import CaseStudy from "@/models/CaseStudy";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await connectDB();
  const data = await req.json();

  const updated = await CaseStudy.findByIdAndUpdate(
    id,
    {
      ...data,
      publishedAt:
        data.status === "published" ? new Date() : undefined,
    },
    { new: true }
  );

  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await connectDB();
  await CaseStudy.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
