import AdsService from "@/components/Ads";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main>
      <Hero />
      <AdsService />
      <Posts />
      <Footer />
    </main>
  );
}
