import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Format from "@/components/Format";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <EventDetails />
        <Format />
        <Schedule />
        <Prizes />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
