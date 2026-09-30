// USER CONFIRMATION EMAIL TEMPLATE
// Sent to the person who submitted the contact form.
// ─────────────────────────────────────────────────────────────────────────────

export interface UserTemplateData {
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function userEmailTemplate(
  data: UserTemplateData
): string {

  const {
    name,
    inquiryType,
    subject,
    message,
  } = data;

  const preview =
    message.length > 180
      ? message.substring(0, 180) + "…"
      : message;

  const year = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8"/>

  <meta
    name="viewport"
    content="width=device-width,initial-scale=1.0"
  />

  <title>
    We Received Your Message – AGOO Clinic
  </title>

</head>


<body
  style="
    margin:0;
    padding:0;
    background:#f4f7f9;
    font-family:'Segoe UI',Arial,sans-serif;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="
    background:#f4f7f9;
    padding:32px 0;
  "
>

<tr>
<td align="center">


<table
  width="600"
  cellpadding="0"
  cellspacing="0"
  style="
    max-width:600px;
    background:#ffffff;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 4px 24px rgba(0,0,0,0.08);
  "
>


<!-- HEADER -->

<tr>

<td
  style="
    background:linear-gradient(
      135deg,
      #075985 0%,
      #0891b2 55%,
      #06b6d4 100%
    );
    padding:32px 40px 24px;
    text-align:center;
  "
>




<h1
  style="
    color:#ffffff;
    margin:0;
    font-size:28px;
    font-weight:900;
  "
>
  Message Received!
</h1>


<p
  style="
    color:rgba(255,255,255,0.85);
    margin:10px 0 0;
    font-size:14px;
    line-height:1.5;
  "
>

Hi

<strong style="color:#cffafe;">
  ${escapeHtml(name)}
</strong>,

we received your message and our clinic team will get back to you as soon as possible.

</p>

</td>

</tr>


<!-- ACCENT STRIP -->

<tr>

<td
  style="
    background:#cffafe;
    padding:10px 40px;
    text-align:center;
  "
>



</td>

</tr>


<!-- BODY -->

<tr>

<td style="padding:36px 40px;">


<p
  style="
    font-size:15px;
    color:#444;
    line-height:1.8;
    margin:0 0 24px;
  "
>

Thank you for contacting
<strong>AGOO Clinic</strong>!

We've received your

<strong style="color:#075985;">
  ${escapeHtml(inquiryType)}
</strong>

inquiry.

Our team will review your message and contact you as soon as possible.

</p>


<!-- INQUIRY SUMMARY -->

<div
  style="
    background:#f0f9ff;
    border:1px solid #bae6fd;
    border-radius:12px;
    padding:24px;
    margin-bottom:28px;
  "
>

<p
  style="
    margin:0 0 14px;
    font-size:11px;
    font-weight:800;
    text-transform:uppercase;
    letter-spacing:1.5px;
    color:#075985;
  "
>
  📋 Your Inquiry Summary
</p>


<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
>

<tr>

<td
  style="
    padding:6px 0;
    font-size:13px;
    color:#555;
    font-weight:700;
    width:35%;
  "
>
  Inquiry Type:
</td>

<td
  style="
    padding:6px 0;
    font-size:13px;
    color:#075985;
    font-weight:700;
  "
>
  ${escapeHtml(inquiryType)}
</td>

</tr>


<tr>

<td
  style="
    padding:6px 0;
    font-size:13px;
    color:#555;
    font-weight:700;
  "
>
  Subject:
</td>

<td
  style="
    padding:6px 0;
    font-size:13px;
    color:#111;
    font-weight:600;
  "
>
  ${escapeHtml(subject)}
</td>

</tr>


<tr>

<td
  style="
    padding:6px 0;
    font-size:13px;
    color:#555;
    font-weight:700;
    vertical-align:top;
  "
>
  Message:
</td>

<td
  style="
    padding:6px 0;
    font-size:13px;
    color:#555;
    line-height:1.7;
  "
>
  ${escapeHtml(preview)}
</td>

</tr>

</table>

</div>


<!-- WHAT HAPPENS NEXT -->

<div style="margin-bottom:28px;">

<p
  style="
    margin:0 0 14px;
    font-size:11px;
    font-weight:800;
    text-transform:uppercase;
    letter-spacing:1.5px;
    color:#075985;
  "
>
  ⏱ What Happens Next?
</p>


<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
>

<tr>

<td style="padding:8px 0;">

<span
  style="
    display:inline-block;
    width:26px;
    height:26px;
    background:#e0f2fe;
    border-radius:50%;
    text-align:center;
    line-height:26px;
    font-size:12px;
    font-weight:800;
    color:#075985;
    margin-right:10px;
  "
>
  1
</span>

<span
  style="
    font-size:13px;
    color:#444;
  "
>
  Our clinic team will review your inquiry.
</span>

</td>

</tr>


<tr>

<td style="padding:8px 0;">

<span
  style="
    display:inline-block;
    width:26px;
    height:26px;
    background:#e0f2fe;
    border-radius:50%;
    text-align:center;
    line-height:26px;
    font-size:12px;
    font-weight:800;
    color:#075985;
    margin-right:10px;
  "
>
  2
</span>

<span
  style="
    font-size:13px;
    color:#444;
  "
>
  We'll contact you using the details you provided.
</span>

</td>

</tr>


<tr>

<td style="padding:8px 0;">

<span
  style="
    display:inline-block;
    width:26px;
    height:26px;
    background:#e0f2fe;
    border-radius:50%;
    text-align:center;
    line-height:26px;
    font-size:12px;
    font-weight:800;
    color:#075985;
    margin-right:10px;
  "
>
  3
</span>

<span
  style="
    font-size:13px;
    color:#444;
  "
>
  For urgent clinic concerns, please contact the clinic directly.
</span>

</td>

</tr>

</table>

</div>


<!-- QUICK CONTACT -->

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="margin-bottom:28px;"
>

<tr>


<td
  width="50%"
  style="padding-right:8px;"
>

<a
  href="tel:+918903489173"
  style="
    display:block;
    background:#f0f9ff;
    border:1px solid #bae6fd;
    border-radius:10px;
    padding:14px;
    text-align:center;
    text-decoration:none;
  "
>

<div
  style="
    font-size:22px;
    margin-bottom:4px;
  "
>
  📞
</div>

<div
  style="
    font-size:11px;
    font-weight:800;
    color:#075985;
    text-transform:uppercase;
    letter-spacing:1px;
  "
>
  Call Us
</div>

<div
  style="
    font-size:12px;
    color:#555;
    margin-top:2px;
  "
>
  +91 89034 89173
</div>

</a>

</td>


<td
  width="50%"
  style="padding-left:8px;"
>

<a
  href="https://wa.me/918903489173?text=Hi%20AGOO%20clinic!%20I%20sent%20a%20contact%20form%20inquiry."
  style="
    display:block;
    background:#f0f9ff;
    border:1px solid #bae6fd;
    border-radius:10px;
    padding:14px;
    text-align:center;
    text-decoration:none;
  "
>

<div
  style="
    font-size:22px;
    margin-bottom:4px;
  "
>
  💬
</div>

<div
  style="
    font-size:11px;
    font-weight:800;
    color:#075985;
    text-transform:uppercase;
    letter-spacing:1px;
  "
>
  WhatsApp
</div>

<div
  style="
    font-size:12px;
    color:#555;
    margin-top:2px;
  "
>
  Chat With Us
</div>

</a>

</td>

</tr>

</table>


<!-- APPOINTMENT CTA -->

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
>

<tr>

<td align="center">

<a
  href="https://agooclinic.com"
  style="
    display:inline-block;
    background:#0891b2;
    color:#ffffff;
    padding:14px 36px;
    border-radius:10px;
    text-decoration:none;
    font-weight:900;
    font-size:14px;
    letter-spacing:0.5px;
    box-shadow:0 6px 20px rgba(8,145,178,0.3);
  "
>
 Visit AGOO Clinic
</a>

</td>

</tr>

</table>


</td>

</tr>


<!-- FOOTER -->

<tr>

<td
  style="
    background:#075985;
    padding:28px 40px;
    text-align:center;
  "
>

<p
  style="
    margin:0 0 6px;
    font-size:14px;
    font-weight:800;
    color:#ffffff;
  "
>
  AGOO Clinic
</p>


<p
  style="
    margin:0;
    font-size:11px;
    color:rgba(255,255,255,0.65);
    line-height:1.7;
  "
>
  Quality clinic Care &amp; Healthy Smiles
  <br/>

  <a
    href="https://agooclinic.com"
    style="
      color:#ffffff;
      text-decoration:none;
    "
  >
    agooclinic.com
  </a>

  &nbsp;|&nbsp;

  <a
    href="mailto:info@agooclinic.com"
    style="
      color:#ffffff;
      text-decoration:none;
    "
  >
    info@agooclinic.com
  </a>

</p>


<p
  style="
    margin:12px 0 0;
    font-size:10px;
    color:rgba(255,255,255,0.3);
  "
>
  © ${year} AGOO Clinic. All rights reserved.
  <br/>
  You received this email because you submitted
  a contact form on the AGOO Clinic website.
</p>

</td>

</tr>


</table>

</td>
</tr>

</table>

</body>
</html>
  `;
}