import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'


export const ValidationTokenAndGetUserId = async (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || ""
        const decodedToken: any = jwt.verify(token, process.env.jwt_secret!)

        return decodedToken._id

    } catch(error: any) {
        throw new Error(error.message)
    }
}