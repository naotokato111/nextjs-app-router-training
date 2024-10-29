// [!code word:cacheLife]

import { unstable_cacheLife as cacheLife } from "next/cache";
import { Child } from "./Child";
import { getTime } from "./getTime";

export default async function Page() {
  "use cache";
  // https://nextjs.org/docs/canary/app/api-reference/directives/use-cache#default-cache-profiles
  cacheLife("days");

  return (
    <div>
      <p>{`cached: {performance.now()}`}</p>
      <Child />
      <p>{`cached function: ${getTime()}`}</p>
    </div>
  );
}
