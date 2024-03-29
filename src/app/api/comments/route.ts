import { getAuthSession } from "@/utils/auth";
import { db } from "@/utils/connect";
import { NextResponse } from "next/server";

// GET Comments POST
export const GET = async (req: any) => {
  const { searchParams }: any = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await db.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

// Create a Comments
export const POST = async (req: any) => {
  const session: any | undefined = await getAuthSession();

  if (!session) {
    return NextResponse.json(
      { message: "Not Authenticated!" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const comment = await db.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return NextResponse.json(comment, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
