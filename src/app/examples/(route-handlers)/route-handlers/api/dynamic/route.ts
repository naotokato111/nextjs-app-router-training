import { cookies, headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "example-route-handlers";

// when use headers or cookies or searchParams, this response will be dynamic
export async function GET(req: NextRequest) {
  // const referer = (await headers()).get("referer");
  // const cookie = (await cookies()).get(COOKIE_NAME);
  // req.nextUrl.searchParams;

  return NextResponse.json({ msg: performance.now() });
}
