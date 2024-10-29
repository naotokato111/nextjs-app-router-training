import { Client } from "../_components/client";
import { getMyProfileWithTaintUniqueValue } from "../api";

export default async function Page() {
  const data = await getMyProfileWithTaintUniqueValue();

  return (
    <>
      <Client password={data.password} />
      {/* below code works because password isn't passed as a prop */}
      {/* <Client id={data.id} name={data.name} /> */}
    </>
  );
}
