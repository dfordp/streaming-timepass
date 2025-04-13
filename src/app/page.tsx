import About from "@/components/shared/About";
import Footer from "@/components/shared/Footer";
import Goals from "@/components/shared/Goals";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";


export default function Home() {
  return (
   <div className="main w-screen min-h-screen px-10 py-6">
      <div>
        <Header/>
      </div>
      <div>
        <HeroSection/>
      </div>
      <section>
        <About/>
      </section>
      <section>
        <Goals/>
      </section>
      <div>
        <Footer/>
      </div>
   </div>
  );
}
