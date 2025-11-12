import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { redirect } from "next/navigation";

import { components } from "@/slices";

export default async function SliceSimulatorPage({
  searchParams,
}: {
  searchParams: Promise<{ state?: string; secret?: string }>;
}) {
  const params = await searchParams;

  if (
    process.env.SLICE_SIMULATOR_SECRET &&
    params.secret !== process.env.SLICE_SIMULATOR_SECRET
  ) {
    redirect("/");
  }

  const slices = getSlices(params.state);

  return (
    <SliceSimulator background="" zIndex={10}>
      <div className="max-h-[900px]"></div>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
