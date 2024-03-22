import Category from "@/components/categorylist/Category";

export default function CategoryLayout({ children }) {
  return (
    <section className="w-11/12 lg:w-full max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start gap-10">
      <Category />
      <div className="w-full">{children}</div>
    </section>
  );
}
