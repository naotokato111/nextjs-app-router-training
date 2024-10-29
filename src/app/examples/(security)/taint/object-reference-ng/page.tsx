import { Boundary } from "@/app/_components/boundary";
import { Client } from "../_components/client";
import { getMyProfileWithTaintObjectReference } from "../api";

export default async function Page() {
  const data = await getMyProfileWithTaintObjectReference();

  return (
    <Boundary label="NG">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p>👎 spread operator doesn't allow</p>
          <Client {...data} />
        </div>
        <div className="flex flex-col gap-4">
          <p>👎 don't separate each prop when using taintObjectReference</p>
          <Client id={data.id} name={data.name} password={data.password} />
        </div>
      </div>
    </Boundary>
  );
}
