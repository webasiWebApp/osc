'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  mobile: string;
  message: string;
}) {
  if (!data.name || !data.email || !data.message) {
    return { error: 'Please fill in all required fields.' };
  }

  try {
    await resend.emails.send({
      from: 'OSC Contact Form <onboarding@resend.dev>',
      to: 'infopraveenmaleesha@gmail.com',
      subject: `New Enquiry from ${data.name}`,
      replyTo: data.email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9fbff; border-radius: 12px; overflow: hidden; border: 1px solid #e0e8ff;">
          <div style="background: #03045E; padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.05em;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">Oral-Systemic Conference</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8eeff; font-size: 13px; color: #7888aa; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; width: 130px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8eeff; font-size: 15px; color: #03045E; font-weight: 500;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8eeff; font-size: 13px; color: #7888aa; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8eeff; font-size: 15px; color: #03045E;"><a href="mailto:${data.email}" style="color: #0077B6; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8eeff; font-size: 13px; color: #7888aa; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Mobile</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e8eeff; font-size: 15px; color: #03045E;">${data.mobile || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 13px; color: #7888aa; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top; padding-top: 20px;">Message</td>
                <td style="padding: 12px 0; font-size: 15px; color: #353535; line-height: 1.7; padding-top: 20px;">${data.message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f0f4ff; padding: 20px 32px; text-align: center; border-top: 1px solid #e0e8ff;">
            <p style="color: #7888aa; font-size: 12px; margin: 0;">This email was sent from the contact form on the OSC website. Reply directly to respond to ${data.name}.</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Resend error:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }
}