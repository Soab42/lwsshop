import Category from "@/components/categorylist/Category";

export default function CategoryLayout({ children }) {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <Category />
      {children}
    </section>
  );
}
