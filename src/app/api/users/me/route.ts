import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const {searchParams} = new URL(request.nextUrl)
    console.log(searchParams.get('user'))

    return NextResponse.json({
      message: "Users get request accessed successfully",
      data: {
          name: "john doe",
          email: "teste@teste"
      }
    });


  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
