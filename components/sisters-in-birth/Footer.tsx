import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
   <footer className="bg-foreground text-background py-8 sm:py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                 <Image
                    src="/images/sisters-in-birth/logo.png"
                    alt="Sisters in Birth Logo"
                    width={50}
                    height={50}
                  />
                <span className="font-bold">Sisters in Birth</span>
              </div>
              <p className="text-sm text-background/80">
                Our Body, Our Births
              </p>
            </div>
            <div>
              <p className="font-semibold mb-3">Quick Links</p>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-background transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-background transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Contact</p>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-background transition-colors"
                  >
                    +1 (XXX) XXX-XXXX
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@sibirth.org"
                    className="hover:text-background transition-colors"
                  >
                    hello@sibirth.org
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Follow Us</p>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/80">
            <p>&copy; 2025 Sisters in Birth, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>  )
}
