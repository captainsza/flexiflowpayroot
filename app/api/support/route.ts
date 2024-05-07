import sendEmail from "@/lib/utils/sendMail";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { name, email, subject, message } = await req.json()
    if (name && email && subject && message) {
        const res = await sendEmail({ name, email, subject, message })
        return NextResponse.json({ message: "Email sent successfully", success: true })
    }
    return NextResponse.json({ message: "Please fill all fields", success: false })

}