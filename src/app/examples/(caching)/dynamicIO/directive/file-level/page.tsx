// [!code word:use cache]

"use cache";

export default async function Page() {
  return (
    <div>
      <p>{performance.now()}</p>
      <Child />
    </div>
  );
}

function Child() {
  return <p>{performance.now()}</p>;
}
