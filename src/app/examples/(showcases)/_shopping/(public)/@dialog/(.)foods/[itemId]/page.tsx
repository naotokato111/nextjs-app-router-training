import { getItem } from "@/app/examples/(showcases)/_shopping/_utils/items";
import type { Item } from "@/app/examples/(showcases)/_shopping/mock";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Dialog } from "../../_components/dialog";

type Props = {
  params: Promise<{
    itemId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { itemId } = await params;

  return (
    <Dialog>
      <Suspense fallback={<Loading />}>
        <Main id={itemId} />
      </Suspense>
    </Dialog>
  );
}

async function Main({ id }: { id: string }) {
  const item = await getItem(id);

  if (!item) {
    return notFound();
  }

  return <Container {...item} />;
}

function Loading() {
  return <Container id={0} name="loading..." thumbnail="🐕" description="" />;
}

function Container({ name, description, thumbnail }: Item) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 items-center">
        <span className="text-4xl">{thumbnail}</span>
        <h2>{name}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
