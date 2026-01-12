import KMContact from "@/components/km-auto/contact";
import KMCoupons from "@/components/km-auto/coupons";
import KMFooter from "@/components/km-auto/footer";
import KMHeader from "@/components/km-auto/header";
import KMHero from "@/components/km-auto/hero";
import KMServiceGrid from "@/components/km-auto/services-grid";
import KMTestimonials from "@/components/km-auto/testimonials";
import KMTrustHub from "@/components/km-auto/trust-hub";
import { kmAutoData } from "@/lib/businesses/km-auto";

export default function KMAuto(){
  return (
    <div>
      <KMHeader />
      <KMHero />
      <KMServiceGrid />
      <KMTrustHub />
      <KMCoupons />
      <KMContact />
      <KMTestimonials testimonials={kmAutoData.testimonials?? []} externalUrl={"https://www.surecritic.com/reviews/k--m-auto-repair?review_id=10875951"}/>
      <KMFooter />
    </div>
  )
}
