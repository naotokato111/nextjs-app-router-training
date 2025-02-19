'use cache';

import { Boundary } from "@/app/_components/boundary";
import { Suspense } from "react";
import { Loading } from "../_components/loading";

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Boundary label="Right" filePath="@right/page.tsx">
      hi 😁
    </Boundary>
  );
}

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  );
}
