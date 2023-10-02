import {NextResponse, NextRequest} from 'next/server'
import {connectDB} from "@/config/dbConfig"
import User from "@/models/userModel"
import bcrypt from 'bcryptjs'

connectDB()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()

        //check if user already exists
        const user = await User.findOne({email: reqBody.email})
        if(user) {
            throw new Error("User already exists")
        }

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(reqBody.password, salt)
        reqBody.password = hashedPassword

        //create user
        const newUser = new User(reqBody)
        await newUser.save()

        return NextResponse.json({
            message: 'Users registered successfuly',
            sucess: true,
        })


    } catch (err: any) {
        return NextResponse.json({ message: err.message}, { status: 500 });
    }
}