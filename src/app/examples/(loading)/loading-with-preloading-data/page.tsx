import { Suspense } from "react";
import { Basic } from "./_components/basic";
import { Loading } from "./_components/loading";
import { Preload } from "./_components/preload";

export default async function Page() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-400">
        Preload component doesn't wait for serial communication
      </p>
      <div className="flex gap-4">
        <Suspense fallback={<Loading />}>
          <Preload />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Basic />
        </Suspense>
      </div>
    </div>
  );
}
