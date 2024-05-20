import Image from "next/image";
import Hero from "./hero";
import Leagues from "./leagues";
import Sponsors from "./sponsors";
import Footer from "../footer";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Leagues />
      <Sponsors />
      <Footer />
    </main>
  );
}