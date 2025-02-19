import { Client } from "../_components/client";
import { getMyProfileWithTaintObjectReference } from "../api";

export default async function Page() {
  const data = await getMyProfileWithTaintObjectReference();

  return (
    <div>
      <p>you have to pass props as an object when using taintObjectReference</p>
      {/* @ts-expect-error not found the data props but it doesn't matter */}
      <Client data={data} />
    </div>
  );
}
