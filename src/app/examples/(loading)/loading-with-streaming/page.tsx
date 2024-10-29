import { Boundary } from "@/app/_components/boundary";
import { Loading } from "@/app/_components/loading";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Suspense fallback={<Loading />}>
        <Left />
      </Suspense>
      <Boundary label="Right">hi!</Boundary>
    </div>
  );
}

async function Left() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Boundary label="Left">loaded!</Boundary>;
}
