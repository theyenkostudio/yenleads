import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, BookOpen } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/sisters-in-birth/Footer";
import Header from "@/components/sisters-in-birth/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
 <Header isMainPage={true} />

      {/* Hero Section */}
      <section className="flex-1 bg-linear-to-br from-background to-muted py-12 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Empowering Women
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-secondary leading-tight">
                  Maternal Health. Community Care. Black Excellence.
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                At Sisters in Birth, we&apos;re dedicated to empowering women
                through prenatal, birth, and postpartum care. We&apos;re
                building Mississippi&apos;s first birth center while increasing
                access to midwifery care and reducing maternal mortality.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Explore Our Services
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn Our Mission
                </Button>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 lg:h-96">
              <Image
                src="/images/sisters-in-birth/black-pregnant-woman-with-midwife-during-prenatal-.jpg"
                alt="Prenatal care moment"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 sm:py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold">1st</p>
              <p className="text-sm mt-2">Birth Center in Mississippi</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold">100%</p>
              <p className="text-sm mt-2">Black-Owned & Led</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold">3x</p>
              <p className="text-sm mt-2">
                Lower Maternal Mortality with Midwifery
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold">24/7</p>
              <p className="text-sm mt-2">Community Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-3">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care designed to support every phase of your
              maternal journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Childbirth Education",
                description:
                  "Empowering classes to prepare you for birth and parenthood with evidence-based information.",
              },
              {
                icon: Heart,
                title: "Prenatal Care",
                description:
                  "Compassionate care that honors your body and supports a healthy pregnancy journey.",
              },
              {
                icon: Users,
                title: "Community Support",
                description:
                  "Connect with other mothers and access ongoing postpartum support and wellness services.",
              },
              {
                icon: Globe,
                title: "Midwifery Services",
                description:
                  "Expert midwives providing personalized, woman-centered birth support and guidance.",
              },
              {
                icon: Heart,
                title: "Postpartum Care",
                description:
                  "Holistic recovery support for the fourth trimester and beyond with cultural competence.",
              },
              {
                icon: Users,
                title: "Wellness Services",
                description:
                  "Preventative health care and wellness programs for long-term maternal health.",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-shadow border-border"
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2 text-secondary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Commitment
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
            Reducing Maternal Mortality
          </h2>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            We are dedicated to reducing risks associated with unnecessary labor
            inductions, cesarean deliveries, preterm babies, and maternal and
            infant deaths. Black women deserve access to midwifery care,
            supportive community health services, and the right to birth on
            their own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to Take Control of Your Birth Journey?
          </h2>
          <p className="text-secondary-foreground/90">
            Join our community and experience maternal care that honors your
            culture, body, and choices.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 mt-6"
          >
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
