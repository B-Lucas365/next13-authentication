import {NextResponse, NextRequest} from 'next/server'
import {connectDB} from "@/config/dbConfig"
import User from "@/models/userModel"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import  {cookies}  from 'next/headers'
import { UserTypes } from '../../../../types/userTypes'

connectDB()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()

        //check if user exists
        const user: UserTypes | null = await User.findOne({email: reqBody.email})
        if(!user) {
            throw new Error("User does not exists")
        }

        //check if password is correct
        const isPasswordCorrect = await bcrypt.compare(
            reqBody.password,
            user.password
        )

        if(!isPasswordCorrect) {
            throw new Error('Invalid Credentials')
        }

        //return token
        const dataToEncrypt = {
            _id: user._id,
            name: user.userName,
            email: user.email
        }

        const token = jwt.sign(dataToEncrypt, process.env.jwt_secret!, {
            expiresIn: '1d'
        })

        cookies().set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            expires: new Date(Date.now() + 1000 * 60 * 60* 24) // 1dia
        })

        return NextResponse.json({
            message: 'Login successfully',
            sucess: true,
            data: token
        })
        


    } catch (err: any) {
        return NextResponse.json({ message: err.message}, { status: 500 });
    }
}