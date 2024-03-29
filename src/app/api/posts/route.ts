import { getAuthSession } from "@/utils/auth";
import { db } from "@/utils/connect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * ((page as any) - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  try {
    const [posts, count] = await db.$transaction([
      db.post.findMany(query),
      db.post.count({ where: query.where }),
    ]);
    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

// Create A Post
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
    const post = await db.post.create({
      data: { ...body, userEmail: session.user.email },
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
