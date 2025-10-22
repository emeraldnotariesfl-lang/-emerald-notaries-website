'use client';
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, MessageSquare } from "lucide-react";

export default function EmeraldNotariesSite() {
  const handleEmailSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      details: { value: string };
    };

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const details = form.details.value.trim();

    const subject = `New Signing Request from ${name || "Website Visitor"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Details:",
      details || "(No details provided)",
    ];
    const mailto = `mailto:emeraldnotariesfl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 grid place-items-center text-white font-bold">EN</div>
            <div className="leading-tight">
              <div className="font-bold text-lg">Emerald Notaries</div>
              <div className="text-xs text-muted-foreground">Mobile Notary & Loan Signing</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#coverage" className="hover:underline">Coverage</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+13609329777" className="hidden sm:inline-flex items-center rounded-2xl border px-3 py-2 text-sm">
              <Phone className="mr-2 h-4 w-4"/> Call
            </a>
            <a href="sms:+13609329777" className="hidden sm:inline-flex items-center rounded-2xl border px-3 py-2 text-sm">
              <MessageSquare className="mr-2 h-4 w-4"/> Text
            </a>
            <a href="#contact" className="inline-flex items-center rounded-2xl bg-emerald-600 px-4 py-2 text-white text-sm shadow">
              Book a Notary <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="py-16 mx-auto max-w-7xl px-6 md:px-10">
        <section className="text-center mb-12">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Professional <span className="text-emerald-700">Mobile Notary</span> Services
          </motion.h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Serving Pasco, Hillsborough, and Pinellas Counties — reliable mobile notarization and loan signings at your convenience.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="tel:+13609329777" className="inline-flex items-center rounded-2xl border px-4 py-2">
              <Phone className="mr-2 h-4 w-4"/> Call Now
            </a>
            <a href="sms:+13609329777" className="inline-flex items-center rounded-2xl border px-4 py-2">
              <MessageSquare className="mr-2 h-4 w-4"/> Text Us
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-8">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Real Estate & Loan Signings</li>
            <li>• Legal Document Notarization</li>
            <li>• Business & Corporate Services</li>
            <li>• Healthcare & Personal Documents</li>
            <li>• Travel & Immigration Forms</li>
          </ul>
        </section>

        {/* Coverage */}
        <section id="coverage" className="py-8">
          <h2 className="text-3xl font-bold mb-4">Coverage Area</h2>
          <p className="text-slate-600">Proudly serving Pasco, Hillsborough, and Pinellas Counties. Travel fees may apply based on distance.</p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8">
          <h2 className="text-3xl font-bold mb-6">Contact & Booking</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Direct contact cards */}
            <div className="space-y-3 text-slate-700">
              <div><strong>Phone:</strong> <a href="tel:+13609329777">(360) 932-9777</a></div>
              <div><strong>Text:</strong> <a href="sms:+13609329777">Send a text</a></div>
              <div><strong>Email:</strong> <a href="mailto:emeraldnotariesfl@gmail.com">emeraldnotariesfl@gmail.com</a></div>
              <div><strong>Coverage:</strong> Pasco, Hillsborough & Pinellas Counties</div>
            </div>

            {/* Emailing contact form */}
            <form onSubmit={handleEmailSubmit} className="grid gap-3">
              <input name="name" className="rounded-xl border px-3 py-2" placeholder="Your name" required />
              <input name="email" type="email" className="rounded-xl border px-3 py-2" placeholder="Email" required />
              <input name="phone" type="tel" className="rounded-xl border px-3 py-2" placeholder="Phone" required />
              <textarea name="details" className="rounded-xl border px-3 py-2 h-32" placeholder="What do you need notarized? (document type, date/time, location)" required />
              <div className="flex flex-wrap gap-3">
                <button type="submit" className="inline-flex items-center rounded-2xl bg-emerald-600 px-4 py-2 text-white shadow">
                  <Mail className="h-4 w-4 mr-2"/> Email This Request
                </button>
                <a href="mailto:emeraldnotariesfl@gmail.com" className="inline-flex items-center rounded-2xl border px-4 py-2">
                  <Mail className="h-4 w-4 mr-2"/> Open Blank Email
                </a>
              </div>
              <p className="text-xs text-slate-500">Submitting opens your email app with all details pre-filled. No data is stored on this site.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Emerald Notaries. All rights reserved.
      </footer>
    </div>
  );
}
