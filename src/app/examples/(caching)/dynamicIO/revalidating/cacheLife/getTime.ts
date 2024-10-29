// [!code word:cacheLife]
import { unstable_cacheLife as cacheLife } from "next/cache";

export function getTime() {
  cacheLife("days");

  return performance.now();
}
