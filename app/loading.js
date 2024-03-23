import React from "react";

export default function Loading() {
  return (
    <div className=" w-full lg:w-full grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
    </div>
  );
}

function LoaderCard() {
  return (
    <div className="ring-1 p-2  rounded grid shadow-md ring-black/10  w-full animate-pulse">
      <div className="relative delay-150 lg:w-full rounded-md h-[205px] lg:h-[310px] bg-[#ded8f8]/40  bg-cover bg-center transition-all duration-300 ease-in-out transform"></div>
      <div className="h-4 rounded bg-slate-200/50 mt-2"></div>
      <div className="h-1 rounded bg-slate-200/50 mt-2"></div>
      <div className="h-1 rounded bg-slate-200/50 mt-1"></div>
      <div className="h-1 rounded bg-slate-200/50 mt-1"></div>
      <div className="h-1 rounded bg-slate-200/50 mt-1"></div>
      <div className="flex gap-2">
        <div className="w-1/2 h-2 rounded bg-slate-400/30"></div>
        <div className="w-1/2 h-2 bg-slate-400/30 rounded"></div>
      </div>
    </div>
  );
}
