// [!code word:cacheTag]

import { Button } from "@/app/_components/button";
import { unstable_cacheTag as cacheTag, revalidateTag } from "next/cache";

export default async function Page() {
  "use cache";

  cacheTag("data");

  return (
    <div className="space-y-5">
      <p>cached: {performance.now()}</p>
      <form action={purge}>
        <Button type="submit">Purge</Button>
      </form>
      <form action={noPurge}>
        <Button type="submit">No purge</Button>
      </form>
    </div>
  );
}

async function purge() {
  "use server";

  revalidateTag("data");
}

async function noPurge() {
  "use server";

  revalidateTag("data2");
}
