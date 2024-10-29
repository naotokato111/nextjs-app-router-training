import { Logs } from "./_components/logs";
import { Server } from "./_components/server";

export default function Page() {
  return (
    <div>
      <Server />
      <Logs />
    </div>
  );
}
