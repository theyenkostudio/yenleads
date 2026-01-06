import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Header({ isMainPage }: { isMainPage?: boolean }) {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/sisters-in-birth" className="flex items-center gap-2">
            <Image
              src="/images/sisters-in-birth/logo.png"
              alt="Sisters in Birth Logo"
              width={45}
              height={45}
            />
            {/* <Heart className="w-6 h-6 text-primary-foreground" /> */}
         
          <span className="font-bold text-lg text-secondary hidden sm:inline">
            Sisters in Birth
          </span>
        </Link>
        <div className="flex items-center gap-4">
          {isMainPage ? (
            <Link
              href="/sisters-in-birth/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
          ) : (
            <Link
              href="/sisters-in-birth"
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Link>
          )}

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
}
