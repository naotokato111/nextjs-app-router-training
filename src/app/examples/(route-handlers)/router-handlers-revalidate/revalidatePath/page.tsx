export default async function Page() {
  "use cache";

  const { msg } = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_URL}/examples/router-handlers-revalidate/api/revalidatepath`,
    )
  ).json();

  return <div>{msg}</div>;
}
