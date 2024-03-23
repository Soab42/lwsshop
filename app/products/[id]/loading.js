export default function Loading() {
  return (
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between animate-pulse ">
        <div className="h-[50vh] bg-slate-200 w-full "></div>
        <div className="w-full space-y-5">
          <div className="h-10 rounded-md w-full bg-slate-300 mb-10"></div>
          <div className="h-3 w-full bg-slate-300"></div>
          <div className="h-3 w-full bg-slate-300"></div>
          <div className="h-3 w-full bg-slate-300"></div>
          <div className="h-3 w-full bg-slate-300"></div>
          <div className="h-3 w-full bg-slate-300"></div>
          <div className="h-3 w-full bg-slate-300"></div>
          <div className="flex gap-3 justify-start w-1/2 items-end">
            <div className="h-5 rounded-full w-full bg-slate-300"></div>
            <div className="rounded-full h-6 w-full bg-slate-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
