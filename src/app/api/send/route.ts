// src/app/api/send/route.ts

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { username, email, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'Znisa-Port <onboarding@resend.dev>',
      to: ['prateek_655@live.com'],
      subject: `New message from ${username}`,
      react: React.createElement(EmailTemplate, { username, email, message }),
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
