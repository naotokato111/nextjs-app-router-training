import { Boundary } from "@/app/_components/boundary";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Boundary label="Page">hi!</Boundary>;
}
