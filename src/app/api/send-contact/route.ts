import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import  {ContactEmail}  from '../../emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { fullName, email, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'veelydia958@gmail.com',
      subject: `New message from ${fullName}`,
      replyTo: email,
      react: ContactEmail({ fullName, email, message }), // styled with react-email
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
