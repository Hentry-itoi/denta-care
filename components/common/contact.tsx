"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/atom/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitted(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "New Inquiry from Agoo Clinic",
          inquiryType: "General Inquiry",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      setSubmitError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 text-foreground">
      <div className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div
            className="mb-16 animate-fade-in text-center"
            data-wow-delay="0.2s"
          >
            <h1 className="mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Get in Touch
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              Have questions about Agoo Clinic? We&apos;re here to help.
              Reach out to our clinic team and we&apos;ll get back to you
              as soon as possible.
            </p>
          </div>

          <section className="pb-24">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">

              {/* =========================
                  CONTACT FORM
              ========================== */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-10">

                <div className="mb-8">
                  <span className="text-sm font-semibold text-primary">
                    CONTACT US
                  </span>

                  <h2 className="mt-2 text-3xl font-bold tracking-tight">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-muted-foreground">
                    Fill out the form and our clinic team will get back to
                    you shortly.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success-state"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center"
                    >
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                        <CheckCircle2 className="h-9 w-9" />
                      </div>
                      <h3 className="mb-2 text-2xl font-black text-foreground">
                        Message Sent Successfully!
                      </h3>
                      <p className="mx-auto mb-6 max-w-md text-sm text-muted-foreground">
                        Thank you for reaching out to Agoo Clinic. We have
                        received your message and will contact you within 24
                        business hours.
                      </p>
                      <Button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Full Name
                        <span
                          style={{ color: "var(--color-red)" }}
                        >
                          *
                        </span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Email Address
                        <span
                          style={{ color: "var(--color-red)" }}
                        >
                          *
                        </span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Phone Number
                      <span className="ml-1 font-normal text-muted-foreground">
                        (Optional)
                      </span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold"
                    >
                      How can we help?
                      <span
                        style={{ color: "var(--color-red)" }}
                      >
                        *
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                      {submitError}
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    loadingText="Sending..."
                    disabled={isSubmitting}
                    className="h-13 w-full rounded-xl bg-primary text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* =========================
                  CONTACT INFORMATION
              ========================== */}
              <div className="flex flex-col gap-5">

                {/* Main Contact Card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary via-primary to-primary/80 p-7 text-primary-foreground shadow-2xl shadow-primary/20 sm:p-8">

                  {/* Decorative circles */}
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                  <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-white/5 blur-3xl" />

                  <div className="relative">

                    {/* Header */}
                    <div className="mb-8">

                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
                        Get in touch
                      </div>

                      <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                        We&apos;re here to help you.
                      </h2>

                      <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/75">
                        Have questions about Agoo Clinic? Our clinic team is
                        ready to help you with your needs.
                      </p>
                    </div>

                    {/* Contact Items */}
                    <div className="space-y-3">

                      {/* Email */}
                      <a
                        href="mailto:info@agooclinic.com"
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:bg-white/15"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                          <Mail size={19} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-medium text-primary-foreground/60">
                            Email us
                          </p>

                          <p className="mt-1 truncate text-sm font-semibold">
                            info@agooclinic.com
                          </p>
                        </div>

                        <ArrowUpRight
                          className="ml-auto shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70"
                          size={18}
                        />
                      </a>

                      {/* Phone */}
                      <a
                        href="tel:+91861 023 4644"
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:bg-white/15"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                          <Phone size={19} />
                        </div>

                        <div>
                          <p className="text-xs font-medium text-primary-foreground/60">
                            Call us
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            +91 861 023 4644
                          </p>
                        </div>

                        <ArrowUpRight
                          className="ml-auto shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70"
                          size={18}
                        />
                      </a>

                      {/* Location */}
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                          <MapPin size={19} />
                        </div>

                        <div>
                          <p className="text-xs font-medium text-primary-foreground/60">
                            Visit us
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            Floor no 103,104, Subash street, Vadasery, Nagercoil - 629001, Kanyakumari district, Tamil Nadu, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="group rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="flex items-center gap-4">

                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                      <span className="absolute inset-0 animate-ping rounded-2xl bg-emerald-500/10" />

                      <Mail
                        className="relative"
                        size={20}
                      />
                    </div>

                    <div className="min-w-0">

                      <div className="flex items-center gap-2">
                        <p className="font-semibold">
                          Quick response
                        </p>
                      </div>

                      <p className="mt-1 text-sm text-muted-foreground">
                        We usually respond within 24 business hours.
                      </p>
                    </div>

                    <div className="ml-auto hidden text-right sm:block">
                      <p className="text-xs text-muted-foreground">
                        Response time
                      </p>

                      <p className="font-bold text-primary">
                        24h
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}