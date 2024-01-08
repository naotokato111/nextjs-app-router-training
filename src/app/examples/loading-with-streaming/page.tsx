import { Suspense } from "react";
import { Box } from "./_components/box";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Suspense fallback={<Box>loading...</Box>}>
        <Left />
      </Suspense>
      <Box>hi!</Box>
    </div>
  );
}

async function Left() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Box>loaded!</Box>;
}
