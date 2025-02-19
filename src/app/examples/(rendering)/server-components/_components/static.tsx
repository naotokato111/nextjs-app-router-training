import { performance } from "node:perf_hooks";
import { Boundary } from "@/app/_components/boundary";

export async function Static() {
  "use cache";

  return (
    <Boundary label="Static" filePath="_components/static.tsx">
      {performance.now()}
    </Boundary>
  );
}
