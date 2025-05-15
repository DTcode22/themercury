'use client';
import { Mail, Phone, MapPin } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | theMERCURY.ai',
  description: 'Get in touch with theMERCURY.ai team.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Contact Us
        </h1>
        <p className="text-xl text-white/70 mb-12">
          We&apos;d love to hear from you! Whether you have a question about
          features, trials, pricing, or anything else, our team is ready to
          answer all your questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl w-full bg-black/50 backdrop-blur-md border border-gray-700/30 p-8 md:p-12 rounded-xl shadow-2xl">
        {/* Contact Information Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">
              Get in Touch
            </h2>
            <p className="text-white/70 mb-6">
              Reach out to us directly through the following channels. We strive
              to respond to all inquiries within 24 business hours.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-700/50 rounded-full">
                <Mail size={24} className="text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Email</h3>
                <a
                  href="mailto:info@themercury.ai"
                  className="text-lg text-gray-400 hover:text-gray-200 transition-colors"
                >
                  info@themercury.ai
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-700/50 rounded-full">
                <Phone size={24} className="text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Phone</h3>
                <a
                  href="tel:+15551234567"
                  className="text-lg text-gray-400 hover:text-gray-200 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-700/50 rounded-full">
                <MapPin size={24} className="text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Office</h3>
                <p className="text-lg text-gray-400">
                  123 Tech Plaza, Suite 400
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for Contact Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">
              Send Us a Message
            </h2>
            <p className="text-white/70 mb-6">
              Alternatively, fill out the form below and we&apos;ll get back to
              you.
            </p>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-2xl text-center font-semibold text-gray-400 mb-2">
              🚧 Contact Form Coming Soon 🚧
            </h3>
            <p className="text-center text-white/60">
              We are currently working on implementing an interactive contact
              form. In the meantime, please use the contact details provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
