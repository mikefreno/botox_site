import { NextResponse, type NextRequest } from "next/server";
import { env } from "~/env.mjs";

interface InputData {
  name: string;
  email: string;
  message: string;
  token: string;
}
interface hcaptchaResponse {
  success: true | false; // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
  challenge_ts: Date; // timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string; // the hostname of the site where the challenge was solved
  "error-codes": number | undefined; // optional: any error codes
}

export async function POST(input: NextRequest) {
  const inputData = (await input.json()) as InputData;
  const { name, email, message, token } = inputData;

  const token_verify_url = "https://hcaptcha.com/siteverify";

  const token_res = await fetch(token_verify_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      response: token,
      secret: env.HCAPTCHA_SECRET,
    }),
  });
  const data = (await token_res.json()) as hcaptchaResponse;

  console.log(data);

  if (data["success"]) {
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
  return NextResponse.json(data["error-codes"]);
}
