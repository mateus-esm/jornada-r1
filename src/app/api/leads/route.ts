import { NextResponse } from "next/server";

const WEBHOOK_URL =
  "http://72.61.219.156:5678/webhook/3880b715-f259-4740-9581-66dec7dda9a5";

export async function POST(request: Request) {
  const payload = await request.json();

  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Failed to submit lead" },
      { status: response.status },
    );
  }

  return NextResponse.json({ message: "Lead submitted" });
}
