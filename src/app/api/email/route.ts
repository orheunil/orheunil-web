import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { regexEmail } from "@/utils";

export async function POST(req: Request) {
  try {
    const parseBody = await req.json();

    if (!parseBody.name) {
      return NextResponse.json(
        { status: 400, message: "이름을 입력해주세요." },
        { status: 400 },
      );
    }

    if (!parseBody.email) {
      return NextResponse.json(
        { status: 400, message: "이메일을 입력해주세요." },
        { status: 400 },
      );
    }

    if (!regexEmail.test(parseBody.email)) {
      return NextResponse.json(
        { status: 400, message: "올바른 이메일 형식이 아닙니다." },
        { status: 400 },
      );
    }

    if (!parseBody.phoneNumber) {
      return NextResponse.json(
        { status: 400, message: "전화번호를 입력해주세요." },
        { status: 400 },
      );
    }

    if (!parseBody.content || parseBody.content.length < 10) {
      return NextResponse.json(
        { status: 400, message: "문의 내용은 10자 이상 작성해주세요." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.SEND_ADDRESS,
        pass: process.env.SEND_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SEND_ADDRESS,
      to: process.env.RECEIVE_ADDRESS,
      subject: `옳은일 웹사이트 문의 메일`,
      html: `<p>
        <div>옳은일 웹사이트에서 발송된 문의 메일입니다.</div>
        <div>이름 : ${parseBody.name}</div>
        <div>이메일 : ${parseBody.email}</div>
        <div>전화번호 : ${parseBody.phoneNumber}</div>
        <div>내용 : ${parseBody.content}</div>
      </p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { status: 200, message: "메일 발송 완료" },
      { status: 200 },
    );
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { status: 500, message: error.message },
      { status: 500 },
    );
  }
}
