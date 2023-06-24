"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaceBookIcon, GoogleLogo } from "~/icons/BrandIcons";

export default function LoginPage() {
  const [loginButtonLoading, setLoginButtonLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfRef = useRef<HTMLInputElement>(null);
  const usePasswordCheckRef = useRef<HTMLInputElement>(null);
  const [currentState, setCurrentState] = useState<string>("Login");
  const [usePassword, setUsePassword] = useState<boolean>(false);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  async function emailLogin() {
    setLoginButtonLoading(true);

    if (emailRef.current) {
      const email = emailRef.current.value;
      await signIn("email", { email });
      setLoginButtonLoading(false);
    }
  }
  async function googleLogin() {
    await signIn("google").catch(console.log);
  }
  async function facebookLogin() {
    await signIn("facebook").catch(console.log);
  }

  // function loginButtonLoadingToggle() {
  //   setLoginButtonLoading(!loginButtonLoading);
  // }
  function loginSubmitButton() {
    if (loginButtonLoading) {
      return <button disabled>Loading</button>;
    } else if (currentState == "Register") {
      return (
        <button className="flex w-36 justify-center rounded bg-orange-400 py-4">
          Sign Up!
        </button>
      );
    } else if (!usePassword) {
      return (
        <button className="flex w-36 justify-center rounded bg-orange-400 py-4">
          Get Link
        </button>
      );
    } else {
      return (
        <button className="flex w-36 justify-center rounded bg-orange-400 py-4">
          Sign In
        </button>
      );
    }
  }

  return (
    <div className="flex h-screen flex-row justify-evenly">
      <div className="hidden md:flex">
        <div className="vertical-rule-around z-0 my-36 -ml-16 flex justify-center">
          <div className="-mr-10 flex flex-row">
            <div className="my-auto hidden pr-4 text-3xl font-light italic tracking-widest text-orange-500 lg:flex">
              Upper East Clinicians
            </div>
            <Image
              src={"/Logos/Transparent - logo no bar.png"}
              alt="logo"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
      <div className="my-auto flex h-3/4 flex-col justify-evenly">
        <div className="-mb-12 pl-2 text-2xl">{currentState}</div>
        {currentState == "Login" ? (
          <div className="-mb-4 pt-4">
            Don&apos;t have an account yet?
            <button
              className="pl-1 text-orange-400 underline"
              onClick={() => setCurrentState("Register")}
            >
              Click here to Register
            </button>
          </div>
        ) : (
          <div className="pt-10">
            Already have an account?
            <button
              className="pl-1 text-orange-400 underline"
              onClick={() => setCurrentState("Login")}
            >
              Click here to Login
            </button>
          </div>
        )}
        {/*  eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={formHandler} className="-mt-8 flex flex-col px-2">
          <div className="flex justify-center">
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
          {usePassword || currentState == "Register" ? (
            <div className="-mt-4 flex justify-center">
              <div className="input-group mx-1">
                <input
                  ref={passwordRef}
                  type="password"
                  required
                  className="bg-transparent"
                />
                <span className="bar"></span>
                <label>Password</label>
              </div>
            </div>
          ) : null}
          {currentState == "Register" ? (
            <div className="-mt-4 flex justify-center">
              <div className="input-group mx-1">
                <input
                  ref={passwordConfRef}
                  type="password"
                  required
                  className="bg-transparent"
                />
                <span className="bar"></span>
                <label>Password Confirmation</label>
              </div>
            </div>
          ) : null}
          <div className="flex justify-center py-4">{loginSubmitButton()}</div>
          {currentState == "Login" ? (
            <div className="-mb-8 flex justify-center py-2">
              <input
                type="checkbox"
                required
                className="my-auto"
                ref={usePasswordCheckRef}
                checked={usePassword}
                onClick={() => setUsePassword(!usePassword)}
                readOnly
              />
              <div className="pl-2 text-sm">Use Password</div>
            </div>
          ) : null}
          {/* <div className="absolute ml-[100px] mt-[70px]">
            <Tooltip
                css={{ width: "180px", textAlign: "center" }}
                content={
                  <div>
                    Weave uses a password-less login system, to login/register
                    you will receive a link in your email
                  </div>
                }
              >
                <InfoIcon height={16} width={16} fill={"#9333ea"} />
              </Tooltip>
          </div> */}
        </form>
        <div className="rule-around -mx-8 -mb-8 text-center">Or</div>
        <div className="my-2 flex justify-center">
          <div className="mx-auto mb-4 flex flex-col">
            <button
              className="my-4 flex w-80 flex-row justify-between rounded bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700 active:bg-zinc-600"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={googleLogin}
            >
              {currentState == "Login" ? "Sign in " : "Register "}with Google
              <span className="my-auto">
                <GoogleLogo height={24} width={24} />
              </span>
            </button>
            <div className="px-4"></div>
            <button
              className="my-4 flex w-80 flex-row justify-between rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 active:bg-blue-800"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={facebookLogin}
            >
              {currentState == "Login" ? "Sign in " : "Register "}with Facebook
              <span className="my-auto">
                <FaceBookIcon height={24} width={24} color="white" />
              </span>
            </button>
          </div>
        </div>
        <div className="text-center text-xs">
          By Creating or Using an account, you agree with our{" "}
          <Link href={"/legal/terms-of-service"} className="underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
