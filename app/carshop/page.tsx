import BrandGrid from '@/components/carshop/brand-list'
import ContactHub from '@/components/carshop/contact'
import CarshopFooter from '@/components/carshop/footer'
import CarshopHeader from '@/components/carshop/header'
import CarshopHero from '@/components/carshop/hero'
import MapAndQR from '@/components/carshop/map-and-qr'
import MasterTech from '@/components/carshop/master-tech'


const Carshop = () => {
  return (
    <div>
      <CarshopHeader />
      <CarshopHero />
      <BrandGrid />
      <MasterTech />
      <MapAndQR />
      <ContactHub />
      <CarshopFooter />
    </div>
  )
}

export default Carshop
