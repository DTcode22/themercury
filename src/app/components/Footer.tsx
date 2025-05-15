import type React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-emerald-900/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              theMERCURY<span className="text-emerald-500">.ai</span>
            </h3>
            <p className="text-white/70 mb-6">
              Advanced AI-powered video analytics for enhanced security and
              operational efficiency.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin size={18} />}
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={18} />}
              />
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={18} />}
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <FooterLink href="/solutions/video-management">
                Video Management
              </FooterLink>
              <FooterLink href="/solutions/analytics">
                Analytics & Insights
              </FooterLink>
              <FooterLink href="/solutions/security">
                Security Solutions
              </FooterLink>
              <FooterLink href="/solutions/integration">
                Integration Services
              </FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              <FooterLink href="/industries/education">Education</FooterLink>
              <FooterLink href="/industries/healthcare">Healthcare</FooterLink>
              <FooterLink href="/industries/retail">Retail</FooterLink>
              <FooterLink href="/industries/government">Government</FooterLink>
              <FooterLink href="/industries/hospitality">
                Hospitality
              </FooterLink>
              <FooterLink href="/industries/transportation">
                Transportation
              </FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-emerald-500 mr-3 mt-1" />
                <span className="text-white/70">info@themercury.ai</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-emerald-500 mr-3 mt-1" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-emerald-500 mr-3 mt-1" />
                <span className="text-white/70">
                  123 Tech Plaza, Suite 400
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} theMERCURY.ai. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-white/70 hover:text-white transition-colors"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-emerald-900/30 flex items-center justify-center text-white/70 hover:bg-emerald-800/50 hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
