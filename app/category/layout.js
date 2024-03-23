import Category from "@/components/categorylist/Category";
import Hero from "@/components/nav/Hero";
import Subscribe from "@/components/nav/Subscribe";

export default function CategoryLayout({ children }) {
  return (
    <>
      <Hero />
      <section className="w-full">
        {" "}
        <section className="w-11/12 lg:w-full max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start gap-10">
          <Category />
          <div className="w-full">{children}</div>
        </section>
      </section>
      <Subscribe />
    </>
  );
}
