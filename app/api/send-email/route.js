import nodemailer from 'nodemailer';

export async function POST(req) {
  const { phoneNumber, name } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@orego.group',
    subject: 'Neue Kontaktaufnahme über Orego',
    html: `
      <div style="backgorund: d3d3d3; width: 100%; height: 100%;> 
        <div style="font-family: Verdana, sans-serif; backgroundcolor: #ffffff;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #ddd; max-width: 70%;">
            <h2 style="color: #107AB0;">Neue Kontaktaufnahme</h2>
            <p style="font-size: 16px;">Sehr geehrtes Orego-Team,</p>
            <p style="font-size: 16px;">ein neuer Nutzer hat das Kontaktformular ausgefüllt. Hier sind die Details:</p>
            <ul style="font-size: 16px; list-style-type: none; padding: 0; ">
              <li style="padding: 5px 0;"><strong>Name:</strong> ${name}</li>
              <li style="padding: 5px 0;"><strong>Telefonnummer:</strong> ${phoneNumber}</li>
            </ul>
            <p style="font-size: 16px;">Bitte nehmen Sie so schnell wie möglich Kontakt mit dem Nutzer auf.</p>
            <p style="font-size: 16px;">Mit freundlichen Grüßen,<br/>Ihr Orego-System</p>
          </div>
      </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}