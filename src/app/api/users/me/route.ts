import { NextRequest, NextResponse } from "next/server";
import { ValidationTokenAndGetUserId } from "../../../../helpers/tokenValidation";
import User from "@/models/userModel"

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const userId = await ValidationTokenAndGetUserId(request)
    const user = await User.findOne({_id: userId}).select("-password")

    return NextResponse.json({
      message: "Users get request accessed successfully",
      data: user
    });


  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
