import BancroftFooter from "@/components/bancroft-garage/footer";
import Header from "@/components/bancroft-garage/Header";
import BancroftHero from "@/components/bancroft-garage/hero";
import MOTSpecialist from "@/components/bancroft-garage/mot-specialist";
import ServicesGrid from "@/components/bancroft-garage/services";
import TrustContactHub from "@/components/bancroft-garage/trust-contact-hub";

export default function BancroftGaragePage() {
  return (
    <div>
      <Header />
      <BancroftHero />
      <ServicesGrid />
      <MOTSpecialist />
      <TrustContactHub />
      <BancroftFooter />
    </div>
  );
}
