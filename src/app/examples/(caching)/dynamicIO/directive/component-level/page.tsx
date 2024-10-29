// [!code word:use cache]

export default async function Page() {
  return (
    <div className="space-y-4">
      <NoCached />
      <Cached />
    </div>
  );
}

async function NoCached() {
  return <p>no cached: {performance.now()}</p>;
}

async function Cached() {
  "use cache";

  return <p>cached: {performance.now()}</p>;
}
