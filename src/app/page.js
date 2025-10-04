import Header from "@/sections/Header";
import Nav from "@/components/Nav";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import FooterText from "@/components/FooterText";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <div className="w-full h-full sm:px-[46px] px-[23px]">
          <Nav />
          <div className="w-full xl:h-[calc(100svh-168px)] h-auto relative">
            <Header />
          </div>
          <About />
          <Footer />
        </div>
        <FooterText />
      </SmoothScroll>
    </>
  );
}
