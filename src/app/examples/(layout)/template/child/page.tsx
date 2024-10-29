"use cache";

import { Boundary } from "@/app/_components/boundary";

export default async function Page() {
  return <Boundary label="Child Page" filePath="child/page.tsx" />;
}
