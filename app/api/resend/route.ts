import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, audienceId } = await request.json();

    const data = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add contact', error }, { status: 500 });
  }
}