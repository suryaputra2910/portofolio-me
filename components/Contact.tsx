"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { EASE, Reveal } from "./motion-primitives";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`;
    }, 900);
  };

  const reset = () => {
    setValues({ name: "", email: "", message: "" });
    setStatus("idle");
  };

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          subtitle="Have a project, idea, or opportunity? I'd love to hear from you."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* info */}
          <Reveal variant="slideLeft" className="h-full">
            <div className="relative h-full overflow-hidden rounded-3xl border border-[#27272a] bg-gradient-to-br from-[#111113] to-[#0a0a0c] p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-600/15 blur-3xl"
              />
              <div className="relative">
                <h3 className="text-lg font-semibold text-zinc-50">
                  Contact details
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Feel free to reach out through any of these channels.
                </p>

                <ul className="mt-7 space-y-3">
                  <InfoRow
                    icon={Mail}
                    label="Email"
                    value={siteConfig.email}
                  />
                  <InfoRow
                    icon={Phone}
                    label="Phone"
                    value={siteConfig.phone}
                  />
                  <InfoRow
                    icon={MapPin}
                    label="Location"
                    value={siteConfig.location}
                  />
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                  {siteConfig.github && (
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#27272a] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-violet-500/40"
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {siteConfig.linkedin && (
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#27272a] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-violet-500/40"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal variant="slideRight">
            <div className="relative overflow-hidden rounded-3xl border border-[#27272a] bg-[#111113]/80 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="flex min-h-[380px] flex-col items-center justify-center text-center"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                      <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-zinc-50">
                      Message ready to send!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-zinc-400">
                      Your email client should have opened. If not, you can email
                      me directly at{" "}
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                        className="text-violet-300 underline underline-offset-4"
                      >
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-6 rounded-full border border-[#27272a] px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-violet-500/40 hover:text-white"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <Field
                      id="name"
                      label="Name"
                      placeholder="Your full name"
                      value={values.name}
                      error={errors.name}
                      onChange={(val) => setValues((s) => ({ ...s, name: val }))}
                    />
                    <Field
                      id="email"
                      type="email"
                      label="Email"
                      placeholder="you@example.com"
                      value={values.email}
                      error={errors.email}
                      onChange={(val) => setValues((s) => ({ ...s, email: val }))}
                    />
                    <Field
                      id="message"
                      label="Message"
                      placeholder="Tell me about your project or idea..."
                      value={values.message}
                      error={errors.message}
                      textarea
                      onChange={(val) => setValues((s) => ({ ...s, message: val }))}
                    />

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <span className="flex items-center gap-3 rounded-2xl border border-[#27272a] bg-[#18181b]/60 p-4 transition-colors hover:border-violet-500/35">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#27272a] bg-[#111113] text-violet-300">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm text-zinc-200">{value}</span>
      </span>
    </span>
  );
  return <li>{href ? <a href={href}>{inner}</a> : inner}</li>;
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl border bg-[#0b0b0d] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:outline-none";
  const state = error
    ? "border-red-500/50 focus:border-red-400"
    : "border-[#27272a] focus:border-violet-500/60";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-zinc-400 uppercase"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${base} ${state} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${base} ${state}`}
        />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
