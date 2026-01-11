import { SamsContactStrip } from '@/components/sams-auto/contact'
import ContactHub from '@/components/sams-auto/contact-hub'
import SamsFooter from '@/components/sams-auto/footer'
import SamsHeader from '@/components/sams-auto/header'
import SamsHero from '@/components/sams-auto/hero'
import ValueGrid from '@/components/sams-auto/value-grid'
import React from 'react'

const SamsAuto = () => {
  return (
    <div>
      <SamsHeader />
      <SamsHero />
      <SamsContactStrip />
      <ValueGrid />
      <ContactHub />
      <SamsFooter />
    </div>
  )
}

export default SamsAuto
