import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t shadow-md bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 w-auto flex items-center justify-between">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;