import Footer from '@/components/electrical-solutions/footer'
import Header from '@/components/electrical-solutions/header'
import ElectricalHero from '@/components/electrical-solutions/hero'
import ServicesGrid from '@/components/electrical-solutions/services-grid'
import SpecialtySection from '@/components/electrical-solutions/specialty-section'
import VeteranTrust from '@/components/electrical-solutions/veteran-owned'


const ElectricalSolutions = () => {
  return (
    <div>
      <Header />
      <ElectricalHero />
      <ServicesGrid />
      <SpecialtySection />
      <VeteranTrust/>
      <Footer />
    </div>
  )
}

export default ElectricalSolutions
