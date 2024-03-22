import Hero from "@/components/nav/Hero";
import Subscribe from "@/components/nav/Subscribe";

export default function CategoryLayout({ children }) {
  return (
    <>
      <Hero />
      <section>{children}</section>
      <Subscribe />
    </>
  );
}
