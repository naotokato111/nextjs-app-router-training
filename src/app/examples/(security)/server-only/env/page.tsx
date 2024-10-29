'use cache';

import { Client } from "../_components/client";
import { Server } from "../_components/server";

export default async function Page() {
  return (
    <div>
      <Server />
      <Client />
    </div>
  );
}
