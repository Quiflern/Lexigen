import { prismadb } from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Authenticate the user
    const { userId } = auth();

    // Return an error if the user is not authenticated
    if (!userId) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    // Extract data from the request body
    const { title, description, templateUsed } = await req.json();

    // Create a new document entry in the database
    const createNewDoc = await prismadb.geminiOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed: templateUsed,
      },
    });

    // Revalidate the path to refresh any cached data
    revalidatePath("/");

    // Return the created document as the response
    return NextResponse.json(createNewDoc, { status: 200 });
  } catch (error) {
    // Return a server error response in case of failure
    return new NextResponse("POST, NEW DOC ERROR", { status: 500 });
  }
}
