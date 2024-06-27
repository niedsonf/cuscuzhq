import { AboutUs } from "@/components/about-us";
import { BannerSlider } from "@/components/banner-slider";
import { Events } from "@/components/events";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Partners } from "@/components/partners";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <Header />
      <BannerSlider />
      <AboutUs />
      <Events />
      <Partners />
      <Footer />
    </main>
  );
}
