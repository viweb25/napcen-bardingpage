import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "233963d2-f4b0-4f25-9a2f-bf7e151ac018";

    // Build comprehensive message with all technical RFQ details if present
    const extraDetails = [
      data.company ? `Company: ${data.company}` : '',
      data.industry ? `Industry: ${data.industry}` : '',
      data.airflow ? `Airflow: ${data.airflow} ${data.unit || 'CMH'}` : '',
      data.temp ? `Operating Temp: ${data.temp}` : '',
      data.timeline ? `Timeline: ${data.timeline}` : '',
      data.location || data.country ? `Location: ${[data.location, data.country].filter(Boolean).join(', ')}` : '',
    ].filter(Boolean).join('\n');

    const messageContent = [
      data.desc || data.message || '',
      extraDetails ? `\n--- Technical Specifications ---\n${extraDetails}` : ''
    ].filter(Boolean).join('\n');

    const payload = {
      access_key: ACCESS_KEY,
      subject: `New Inquiry: ${data.application || data.equipment || data.product || 'Website Contact'} — NAPCEN`,
      from_name: data.name || "NAPCEN Lead",
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone || data.mobile,
      application: data.application || data.equipment || data.product,
      message: messageContent || "General inquiry from NAPCEN website",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Inquiry sent successfully" });
    } else {
      console.error("Web3Forms Response Error:", result);
      return NextResponse.json({ error: result.message || 'Failed to send inquiry' }, { status: 400 });
    }
  } catch (error) {
    console.error("Error sending inquiry:", error);
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 });
  }
}
