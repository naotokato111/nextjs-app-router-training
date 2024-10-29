import { Boundary } from "@/app/_components/boundary";

export function Server() {
  return <Boundary label="Server">{performance.now()}</Boundary>;
}
