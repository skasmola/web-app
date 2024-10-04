import Careers from "@/components/Careers";
import Customers from "@/components/Customers";
import Hero from "@/components/Hero";
import Industry from "@/components/Industry";
import Insights from "@/components/Insights";
import Kudos from "@/components/Kudos";
import Partner from "@/components/Partner";
import Services from "@/components/Services";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Customers />
      <Kudos />
      <Insights />
      <Industry />
      <Partner />
      <Careers />
    </>
  );
}
