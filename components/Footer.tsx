"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
const ProductsLinks = [
  { href: "/weight-loss", label: "Weight Loss" },
  { href: "/birth-control", label: "Birth Control" },
  { href: "/sleep", label: "Sleep" },
];
const CompanyLinks = [
  { href: "/about", label: "About Apsu" },
  { href: "/blog", label: "Blogs" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];
const LegalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/info", label: "Medication Safety Information" },
];

export const socialLinks = [
  {
    href: "https://x.com/your_username",
    Icon: FaXTwitter,
    label: "X (Twitter)",
  },
  {
    href: "https://www.facebook.com/your_page",
    Icon: FiFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/your_username",
    Icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/your-company",
    Icon: SlSocialLinkedin,
    label: "LinkedIn",
  },
];
export default function Footer() {
  return (
    <footer className="bg-primary text-[#FAF9F4] pt-30">
      <div className="container ">
        {/* section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 ">
          {/* logo and description */}
          <div className=" lg:col-span-2 xl:col-span-3">
            <Image src="/footer-logo.png" alt="apsu" width={228} height={83} />
            <p className="text-lg max-w-100">
              American medicine, in the language you think in.{' '}
            </p>
          </div>
          {/* Products */}
          <div className="space-y-4 pt-10 lg:pt-0">
            <h4 className="text-lg">Products</h4>
            <ul className="flex flex-col gap-3">
              {ProductsLinks.map(link => (
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
          <div className="space-y-4 pt-6 lg:pt-0">
            <h4 className="text-lg">Company</h4>
            <ul className="flex flex-col gap-3">
              {CompanyLinks.map(link => (
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
          <div className="space-y-4 pt-6 lg:pt-0">
            <h4 className="text-lg">Legal</h4>
            <ul className="flex flex-col gap-3">
              {LegalLinks.map(link => (
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
        {/* section 2 */}
        <div className="text-lg pt-8 lg:pt-13 pb-8 border-b">
          <p>
            The information on this site is for general educational purposes and
            is not medical advice. Apsu is a technology platform; medical care
            is provided by independent, licensed providers, and pharmacy
            services by licensed pharmacies, who decide whether treatment is
            appropriate. Payment does not guarantee a prescription. Apsu offers
            compounded GLP-1 medication, which is prepared by licensed U.S.
            compounding pharmacies and is not approved or evaluated by the FDA.
            Apsu does not manufacture medication, and product appearance may
            differ from images shown. Results vary and are not guaranteed. If
            this is an emergency, call 911.
          </p>
          <p className="pt-6 lg:pt-4">
            By using our services, you agree to our{' '}
            <Link href="/terms" className="hover:underline">
              {' '}
              Terms & Conditions.
            </Link>
          </p>
        </div>
        {/* section 3 */}
        <div className="pt-8 pb-14 lg:pb-30 flex flex-col gap-10 lg:flex-row justify-between items-start lg:items-center">
          <div className="flex gap-2">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-9 rounded-full bg-[#173A26] hover:bg-[#FAF9F4] hover:text-secondary transition-all duration-200 flex items-center justify-center"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
          <p>© 2026 APSU. All rights reserved.</p>
        </div>
        {/* section 4 */}
        <div className=" relative">
          <div className="h-1/2 w-full bg-linear-to-t from-primary/80 to-transparent absolute bottom-0 z-10"></div>
          <Image
            src="/footer-img.png"
            alt="footer image"
            width={1376}
            height={318}
          />
        </div>
      </div>
    </footer>
  );
}
