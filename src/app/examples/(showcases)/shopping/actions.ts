"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "./constants";

const path = "/examples/shopping";

export async function signIn() {
  // e.g. simulate a request to the server
  await new Promise((resolve) => setTimeout(resolve, 1000));

  cookies().set(COOKIE_NAME, "true");
  redirect("/examples/shopping");
}

export async function signout() {
  cookies().delete(COOKIE_NAME);
}

export async function isSignIn() {
  return cookies().get(COOKIE_NAME)?.value === "true";
}
