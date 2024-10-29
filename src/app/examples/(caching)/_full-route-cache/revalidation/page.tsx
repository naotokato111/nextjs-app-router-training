// [!code word:revalidate]
import { Boundary } from "@/app/_components/boundary";

export default async function Page() {
  "use cache";

  return <Boundary label="Page">{performance.now()}</Boundary>;
}
