import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  analytics: true,
  prefix: "portfolio-contact",
});

const escapeHtml = (value: string = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

    const { success } = await ratelimit.limit(ip);
    if (!success) {
    return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
    );
    }
    
    const { name, email, projectType, details, budget, timeline, website } = await req.json();

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof details !== "string" ||
        (projectType !== undefined && typeof projectType !== "string") ||
        (budget !== undefined && typeof budget !== "string") ||
        (timeline !== undefined && typeof timeline !== "string") ||
        (website !== undefined && typeof website !== "string")
        ) {
        return Response.json(
            { error: "Invalid form data." },
            { status: 400 }
        );
    }

    if (!name || !email || !details) {
  return Response.json(
    { error: "All fields are required." },
    { status: 400 }
  );
}

if (website) {
  return Response.json({ success: true });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanName = name.trim();
const cleanEmail = email.trim();
const cleanDetails = details.trim();

if (!emailRegex.test(cleanEmail)) {
  return Response.json(
    { error: "Please provide a valid email address." },
    { status: 400 }
  );
}
const safeName = escapeHtml(cleanName);
const safeEmail = escapeHtml(cleanEmail);
const safeProjectType = escapeHtml(projectType);
const safeDetails = escapeHtml(cleanDetails);
const safeBudget = escapeHtml(budget);
const safeTimeline = escapeHtml(timeline);

    if (name.length > 100 || email.length > 150 || details.length > 5000) {
        return Response.json(
            { error: "One or more fields exceed the allowed length." },
            { status: 400 }
        );
    }

    const { data, error } = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: ["jamshed0930@gmail.com"],
      replyTo: cleanEmail,
      subject: `New Contact Form Message from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 700px;">
    
    <h2 style="margin-bottom: 24px;">
      New Project Inquiry
    </h2>

    <div style="background: #f7f7f7; padding: 18px; border-radius: 6px; margin-bottom: 24px;">
      <p style="margin: 0 0 12px;">
        <strong>Name</strong><br />
        ${safeName}
      </p>

      <p style="margin: 0 0 12px;">
        <strong>Email</strong><br />
        ${safeEmail}
      </p>

      <p style="margin: 0 0 12px;">
        <strong>Project Type</strong><br />
        ${safeProjectType}
      </p>

      <p style="margin: 0 0 12px;">
        <strong>Budget</strong><br />
        ${safeBudget || "Not specified"}
      </p>

      <p style="margin: 0;">
        <strong>Timeline</strong><br />
        ${safeTimeline || "Not specified"}
      </p>
    </div>

    <hr style="margin: 24px 0; border: 0; border-top: 1px solid #ddd;" />

    <h3 style="margin-bottom: 12px;">
      Project Details
    </h3>

    <div style="background: #fafafa; border-left: 3px solid #222; padding: 16px; white-space: pre-line;">
      ${safeDetails.replace(/\n/g, "<br />")}
    </div>

  </div>
`,
        });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch {
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}