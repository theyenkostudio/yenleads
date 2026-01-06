import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Footer from "@/components/sisters-in-birth/Footer";
import Header from "@/components/sisters-in-birth/Header";

export default function About() {
  const team = [
    {
      name: "Getty Israel",
      role: "MPH CEO/Executive Director",
      image: "/images/sisters-in-birth/getty.png",
    },
    {
      name: "Jill Alliman",
      role: "CNM, DNP Nurse Midwifery Director",
      image: "/images/sisters-in-birth/jill.png",
    },
    {
      name: "Beverly McMillan",
      role: "MD Medical Director",
      image: "/images/sisters-in-birth/beverly.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Header isMainPage={false} />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 to-secondary/10 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary text-balance mb-4">
            Meet Sisters in Birth
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collective of dedicated maternal health advocates committed to
            transforming birth and postpartum care in Mississippi.
          </p>
        </div>
      </section>

      {/* Mission Deep Dive */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Mission
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
              Why We Do This Work
            </h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Black women in Mississippi face disproportionate maternal health
              risks. Maternal mortality rates for Black women are 3-4 times
              higher than for white women, yet access to quality midwifery care
              and community-centered birth options remains limited.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Sisters in Birth exists to change this reality. We are building
              Mississippi&apos;s first birth center while providing
              comprehensive prenatal education, midwifery services, and
              postpartum support that centers Black women&apos;s voices,
              choices, and bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                What We Believe
              </p>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Our Values
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Empowerment:</strong> Women deserve agency in their
                    birth and health decisions
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Equity:</strong> Black maternal health must be a
                    priority
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Community:</strong> Healing and care happen together
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Excellence:</strong> We provide world-class,
                    evidence-based care
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 border border-accent/20">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Our Goal
              </p>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Building Change
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>
                    Open Mississippi&apos;s 1st freestanding birth center
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Provide access to quality midwifery care</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reduce maternal and infant mortality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Empower women through education and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-3">
              Meet Our Sisters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced maternal health advocates dedicated to transforming
              birth care in our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-shadow border-border pt-0"
              >
                <div className="h-64 bg-linear-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    priority
                    fill
                  />
                </div>
                <div className="px-6">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-bold text-secondary mt-2 mb-3">
                    {member.name}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-primary/5 rounded-lg p-8 border border-primary/10">
            <p className="text-lg font-semibold text-secondary mb-2">
              Growing Our Team
            </p>
            <p className="text-foreground mb-4">
              We&apos;re building a diverse collective of midwives, nurses,
              doulas, and community health workers. Interested in joining our
              mission?
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Career Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Join Our Movement for Black Maternal Health
          </h2>
          <p className="text-secondary-foreground/90">
            Whether you&apos;re seeking care, want to learn more, or want to
            support our mission, we&apos;d love to connect.
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
