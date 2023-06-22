"use client";

import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [sendButtonLoading, setSendButtonLoading] = useState<boolean>(false);
  const [sentAMessage, setSentAMessage] = useState<boolean>(false);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const captchaRef = useRef<HCaptcha>(null);

  const sendContactEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendButtonLoading(true);
    if (nameRef.current && emailRef.current && messageRef.current) {
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        token: token,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const status = (await res.json()) as number;
      if (status == 201) {
        setSentAMessage(true);
      } else {
        setErrorOccurred(true);
        console.log(status);
      }
    } else {
      setErrorOccurred(true);
      console.log;
    }
    setSendButtonLoading(false);
  };

  return (
    <>
      {/*  eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={sendContactEmail}>
        <HCaptcha
          sitekey="ecd10548-6649-4662-ac30-008d5a1ec14a"
          onVerify={setToken}
          ref={captchaRef}
          size="invisible"
        />
        <div className="flex flex-row justify-evenly">
          <div className="input-group mx-1">
            <input
              ref={nameRef}
              type="text"
              required
              className="bg-transparent"
            />
            <span className="bar"></span>
            <label>Name</label>
          </div>
          <div className="input-group mx-1">
            <input
              ref={emailRef}
              type="text"
              required
              className="bg-transparent"
            />
            <span className="bar"></span>
            <label>Email</label>
          </div>
        </div>
        <div className="textarea-group w-full">
          <textarea
            ref={messageRef}
            required
            className="w-full bg-transparent"
          ></textarea>
          <span className="bar"></span>
          <label>Message</label>
        </div>
        <div className="flex justify-end">
          {sentAMessage ? (
            <button
              disabled
              className="my-2 rounded-md bg-zinc-400 px-4 py-2 text-white drop-shadow transition-all duration-200 ease-in-out"
            >
              Message Sent!
            </button>
          ) : sendButtonLoading ? (
            <button
              disabled
              className="my-2 rounded-md bg-zinc-400 px-4 py-2 text-white drop-shadow transition-all duration-200 ease-in-out"
            >
              Loading
            </button>
          ) : (
            <button
              type="submit"
              className="my-2 rounded-md bg-orange-300 px-4 py-2 text-white drop-shadow transition-all duration-200 ease-in-out hover:bg-orange-400 hover:shadow-inner active:scale-90"
            >
              Send
            </button>
          )}
        </div>
        {sentAMessage ? (
          <div className="text-center text-lg italic text-green-400">
            We will get back to you as soon as we can!
          </div>
        ) : null}
        {errorOccurred ? (
          <div className="text-center text-lg italic text-red-400">
            An Error Occurred, please try again / reload the page
          </div>
        ) : null}
      </form>
    </>
  );
}
