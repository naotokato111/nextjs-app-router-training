import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

export default async function Page() {
  return (
    <Boundary label="Root Page" filePath="page.tsx">
      <div className="space-y-3">
        <h2>"use cache" directive</h2>
        <div className="flex flex-col gap-3 ml-4">
          <Link href="/examples/dynamicIO/directive/file-level?file-path=dynamicIO/directive/file-level/page.tsx">
            File Level Directive
          </Link>
          <Link href="/examples/dynamicIO/directive/component-level?file-path=dynamicIO/directive/component-level/page.tsx">
            Component Level Directive
          </Link>
          <Link href="/examples/dynamicIO/directive/function-level?file-path=dynamicIO/directive/function-level/page.tsx">
            Function Level Directive
          </Link>
        </div>
        <h2>Revalidating</h2>
        <div className="flex flex-col gap-3 ml-4">
          <Link href="/examples/dynamicIO/revalidating/cacheLife?file-path=dynamicIO/revalidating/cacheLife/page.tsx">
            cacheLife
          </Link>
          <Link href="/examples/dynamicIO/revalidating/cacheTag?file-path=dynamicIO/revalidating/cacheTag/page.tsx">
            cacheTag
          </Link>
        </div>
      </div>
    </Boundary>
  );
}
