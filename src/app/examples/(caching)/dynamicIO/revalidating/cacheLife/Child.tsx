// [!code word:cacheLife]

"use cache";

import { unstable_cacheLife as cacheLife } from "next/cache";

export async function Child() {
  // This component's cache will respect the shorter 'seconds' profile
  cacheLife("seconds");

  return <p>{`cached component: ${performance.now()}`}</p>;
}
