"use client";
import Image from "next/image";
import Link from "next/link";
const ProductsLinks = [
  { href: "/weight-loss", label: "Weight Loss" },
  { href: "/birth-control", label: "Birth Control" },
  { href: "/sleep", label: "Sleep" },
];
const CompanyLinks = [
  { href: "/about", label: "About Apsu" },
  { href: "/blogs", label: "Blogs" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];
const LegalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/info", label: "Medication Safety Information" },
];
export default function Footer() {
  return (
    <footer className="bg-primary text-[#FAF9F4]">
      <div className="container2 pt-30">
        {/* section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 gap-5 xl:gap-0">
          {/* logo and description */}
          <div className=" lg:col-span-2 xl:col-span-3">
            <Image src="/footer-logo.png" alt="apsu" width={228} height={83} />
            <p className="text-lg max-w-100">
              American medicine, in the language you think in.{" "}
            </p>
          </div>
          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg">Products</h4>
            <ul className="flex flex-col gap-3">
              {ProductsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block w-full hover:text-[#BED5C9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg">Company</h4>
            <ul className="flex flex-col gap-3">
              {CompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block w-full hover:text-[#BED5C9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg">Legal</h4>
            <ul className="flex flex-col gap-3">
              {LegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block w-full hover:text-[#BED5C9] transition-colors xl:whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
