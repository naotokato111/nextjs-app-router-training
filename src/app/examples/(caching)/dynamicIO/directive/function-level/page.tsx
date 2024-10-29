// [!code word:use cache]

export default async function Page() {
  return (
    <div>
      <p>no cached: {performance.now()}</p>
      <p>cached: {getNow()}</p>
    </div>
  );
}

async function getNow() {
  "use cache";

  return performance.now();
}
