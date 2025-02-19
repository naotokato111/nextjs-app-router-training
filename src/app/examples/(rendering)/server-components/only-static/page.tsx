import { Boundary } from "@/app/_components/boundary";
import { Static } from "../_components/static";

export default async function Page() {
  "use cache";

  return (
    <Boundary label="Only Static" filePath="only-static/page.tsx">
      <Static />
    </Boundary>
  );
}
