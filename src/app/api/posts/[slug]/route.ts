import { db } from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req: any, { params }: any) => {
  const { slug } = params;

  try {
    const post = await db.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
