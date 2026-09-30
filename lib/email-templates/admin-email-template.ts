// ADMIN EMAIL TEMPLATE
// Sent to AGOO Clinic when somebody submits the contact form.
// ─────────────────────────────────────────────────────────────────────────────

export interface AdminTemplateData {
  name: string;
  email: string;
  phone?: string;
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

export function adminEmailTemplate(
  data: AdminTemplateData
): string {
  const {
    name,
    email,
    phone,
    inquiryType,
    subject,
    message,
  } = data;

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

  <title>New Inquiry - AGOO Clinic</title>
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
  style="background:#f4f7f9;padding:32px 0;"
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
    padding:32px 40px;
    text-align:center;
  "
>


<h1
  style="
    color:#ffffff;
    margin:0;
    font-size:27px;
    font-weight:900;
  "
>
  New clinic Inquiry
</h1>

<p
  style="
    color:rgba(255,255,255,0.85);
    margin:10px 0 0;
    font-size:14px;
  "
>
  New message received from the AGOO Clinic website
</p>

</td>
</tr>


<!-- ACCENT -->

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

A new inquiry has been submitted through the
<strong>AGOO Clinic</strong> website.

</p>


<!-- CONTACT DETAILS -->

<div
  style="
    background:#f0f9ff;
    border:1px solid #bae6fd;
    border-radius:12px;
    padding:24px;
    margin-bottom:24px;
  "
>

<p
  style="
    margin:0 0 16px;
    font-size:11px;
    font-weight:800;
    text-transform:uppercase;
    letter-spacing:1.5px;
    color:#075985;
  "
>
  👤 Patient Information
</p>


<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
>

<tr>

<td
  style="
    padding:7px 0;
    font-size:13px;
    color:#555;
    font-weight:700;
    width:35%;
  "
>
  Name:
</td>

<td
  style="
    padding:7px 0;
    font-size:13px;
    color:#111;
    font-weight:600;
  "
>
  ${escapeHtml(name)}
</td>

</tr>


<tr>

<td
  style="
    padding:7px 0;
    font-size:13px;
    color:#555;
    font-weight:700;
  "
>
  Email:
</td>

<td
  style="
    padding:7px 0;
    font-size:13px;
  "
>
  <a
    href="mailto:${escapeHtml(email)}"
    style="
      color:#075985;
      text-decoration:none;
      font-weight:600;
    "
  >
    ${escapeHtml(email)}
  </a>
</td>

</tr>


<tr>

<td
  style="
    padding:7px 0;
    font-size:13px;
    color:#555;
    font-weight:700;
  "
>
  Phone:
</td>

<td
  style="
    padding:7px 0;
    font-size:13px;
  "
>

${phone
      ? `
<a
  href="tel:${escapeHtml(phone)}"
  style="
    color:#075985;
    text-decoration:none;
    font-weight:600;
  "
>
  ${escapeHtml(phone)}
</a>
`
      : "Not provided"
    }

</td>

</tr>


<tr>

<td
  style="
    padding:7px 0;
    font-size:13px;
    color:#555;
    font-weight:700;
  "
>
  Inquiry Type:
</td>

<td
  style="
    padding:7px 0;
    font-size:13px;
    color:#075985;
    font-weight:700;
  "
>
  ${escapeHtml(inquiryType)}
</td>

</tr>

</table>

</div>


<!-- INQUIRY -->

<div
  style="
    background:#ffffff;
    border:1px solid #e5e7eb;
    border-radius:12px;
    padding:24px;
    margin-bottom:24px;
  "
>

<p
  style="
    margin:0 0 16px;
    font-size:11px;
    font-weight:800;
    text-transform:uppercase;
    letter-spacing:1.5px;
    color:#075985;
  "
>
  📋 Inquiry Details
</p>


<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
>

<tr>

<td
  style="
    padding:7px 0;
    font-size:13px;
    color:#555;
    font-weight:700;
    width:35%;
    vertical-align:top;
  "
>
  Subject:
</td>

<td
  style="
    padding:7px 0;
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
    padding:7px 0;
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
    padding:7px 0;
    font-size:13px;
    color:#555;
    line-height:1.7;
    white-space:pre-wrap;
  "
>
  ${escapeHtml(message)}
</td>

</tr>

</table>

</div>


<!-- QUICK ACTIONS -->

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="margin-bottom:28px;"
>

<tr>

${phone
      ? `
<td
  width="50%"
  style="padding-right:8px;"
>

<a
  href="tel:${escapeHtml(phone)}"
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
  Call Patient
</div>

</a>

</td>
`
      : ""
    }


<td
  width="${phone ? "50%" : "100%"}"
  style="padding-left:8px;"
>

<a
  href="mailto:${escapeHtml(email)}"
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
  ✉️
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
  Reply by Email
</div>

</a>

</td>

</tr>

</table>


<p
  style="
    margin:0;
    padding:14px;
    background:#fff7ed;
    border-radius:8px;
    color:#9a3412;
    font-size:12px;
    line-height:1.6;
  "
>
  ⚠️ Please review and respond to this inquiry through your
  normal patient communication process.
</p>

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
  clinic Care &amp; Healthy Smiles
</p>

<p
  style="
    margin:12px 0 0;
    font-size:10px;
    color:rgba(255,255,255,0.4);
  "
>
  © ${year} AGOO Clinic. All rights reserved.
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
