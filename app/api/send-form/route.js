import nodemailer from 'nodemailer';
import { Buffer } from 'buffer';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const formValues = Object.fromEntries(formData.entries());

    // Extract the file if it exists
    const polizeibericht = formData.get('polizeibericht');

    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.de",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@orego.group',
      subject: 'Neue Schadensmeldung',
      html: `
        <div style="background: #d3d3d3; width: 100%; height: 100%;">
          <div style="font-family: Verdana, sans-serif; background-color: #ffffff;">
            <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #ddd; max-width: 70%;">
              <h2 style="color: #107AB0;">Neue Schadensmeldung</h2>
              <p style="font-size: 16px;">Sehr geehrtes Team,</p>
              <p style="font-size: 16px;">Ein neuer Nutzer hat das Schadensformular ausgefüllt. Hier sind die Details:</p>
              <ul style="font-size: 16px; list-style-type: none; padding: 0;">
                <li style="padding: 5px 0;"><strong>Anrede:</strong> ${formValues.anrede}</li>
                <li style="padding: 5px 0;"><strong>Vorname:</strong> ${formValues.vorname}</li>
                <li style="padding: 5px 0;"><strong>Nachname:</strong> ${formValues.nachname}</li>
                <li style="padding: 5px 0;"><strong>Handynummer:</strong> ${formValues.handynummer}</li>
                <li style="padding: 5px 0;"><strong>E-Mail:</strong> ${formValues.email}</li>
                <li style="padding: 5px 0;"><strong>Unfalldatum:</strong> ${formValues.unfalldatum}</li>
                <li style="padding: 5px 0;"><strong>Unfallort:</strong> ${formValues.unfallort}</li>
                <li style="padding: 5px 0;"><strong>Unfallhergang:</strong> ${formValues.unfallhergang}</li>
                <li style="padding: 5px 0;"><strong>Kennzeichen:</strong> ${formValues.kennzeichen}</li>
                <li style="padding: 5px 0;"><strong>Versicherungsdaten:</strong> ${formValues.versicherungsdaten}</li>
                <li style="padding: 5px 0;"><strong>Mietwagen benötigt:</strong> ${formValues.mietwagen}</li>
              </ul>
              <p style="font-size: 16px;">Bitte nehmen Sie so schnell wie möglich Kontakt mit dem Nutzer auf.</p>
              <p style="font-size: 16px;">Mit freundlichen Grüßen,<br/>Ihr System</p>
            </div>
          </div>
        </div>
      `,
      attachments: []
    };

    // Add the file as an attachment if it exists
    if (polizeibericht && polizeibericht.name) {
      const buffer = await polizeibericht.arrayBuffer();
      mailOptions.attachments.push({
        filename: polizeibericht.name,
        content: Buffer.from(buffer),
      });
    }

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}