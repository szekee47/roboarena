import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Format from "@/components/Format";
import Rules from "@/components/Rules";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import RegistrationCta from "@/components/RegistrationCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <EventDetails />
        <Format />
        <Rules />
        <Schedule />
        <Prizes />
        <RegistrationCta />
      </main>
      <Footer />
    </>
  );
}
