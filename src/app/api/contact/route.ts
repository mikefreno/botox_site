import { NextResponse, type NextRequest } from "next/server";
import { env } from "~/env.mjs";

interface InputData {
  name: string;
  email: string;
  message: string;
}

export async function POST(input: NextRequest) {
  const inputData = (await input.json()) as InputData;
  const { name, email, message } = inputData;

  const apiKey = env.BREVO_KEY;

  const apiUrl = "https://api.sendinblue.com/v3/smtp/email";

  const sendinblueData = {
    sender: {
      name: "[botox-site]",
      email: "michaelt.freno@gmail.com",
    },
    to: [
      {
        email: "michael@freno.me",
      },
    ],
    htmlContent: `<html><head></head><body><div>Request Name: ${name}</div><div>Request Email: ${email}</div><div>Request Message: ${message}</div></body></html>`,
    subject: `[botox-site] Contact Request`,
  };
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(sendinblueData),
  });
  return NextResponse.json(res.status);
}
