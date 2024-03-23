import Hero from "@/components/nav/Hero";
import ProductsSection from "@/components/nav/ProductsSection";
import Subscribe from "@/components/nav/Subscribe";

function Home() {
  return (
    <>
      <Hero />
      <div>
        {/* <!-- Product section start --> */}
        <ProductsSection />
        {/* <!-- Product section start --> */}
        <Subscribe />
      </div>
    </>
  );
}

export default Home;
