'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

/* ─── Contact Info ─── */
interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const contactInfo: ContactInfo[] = [
  {
    label: 'Email',
    value: 'udit32329@gmail.com',
    href: 'mailto:udit32329@gmail.com',
    icon: (
      <svg
        className="w-6 h-6 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 9289094381',
    href: 'tel:+919289094381',
    icon: (
      <svg
        className="w-6 h-6 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Delhi, India',
    href: '#',
    icon: (
      <svg
        className="w-6 h-6 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Udit Sharma',
    href: 'https://www.linkedin.com/in/udit-sharma-2217693a9',
    icon: (
      <svg
        className="w-6 h-6 text-copper"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

/* ─── Floating Label Input ─── */
function FloatingInput({
  id,
  label,
  type = 'text',
  isTextarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  isTextarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const isActive = focused || hasValue;

  const sharedClasses =
    'bg-transparent border border-[#6E564440] rounded-xl p-4 text-dark-heading focus:border-copper outline-none w-full transition-colors duration-300 peer';

  return (
    <div className="relative mb-5">
      {isTextarea ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          id={id}
          name={id}
          rows={5}
          className={`${sharedClasses} resize-none`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          id={id}
          name={id}
          type={type}
          className={sharedClasses}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-4 text-muted transition-all duration-300 pointer-events-none ${
          isActive
            ? 'top-0 -translate-y-1/2 text-xs bg-ivory px-2 text-copper'
            : 'top-4 text-base'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Decorative glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        <h2 className="section-heading text-gradient">Get In Touch</h2>
        <div className="section-divider" />
        <p className="text-muted max-w-2xl mx-auto mt-4">
          Have a project in mind or want to discuss marketing strategy?
          Let&apos;s connect and explore the possibilities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            action="mailto:udit32329@gmail.com"
            method="POST"
            encType="text/plain"
            className="glass rounded-2xl p-8"
          >
            <FloatingInput id="name" label="Name" />
            <FloatingInput id="email" label="Email" type="email" />
            <FloatingInput id="subject" label="Subject" />
            <FloatingInput id="message" label="Message" isTextarea />
            <button type="submit" className="btn-copper w-full mt-4">
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                Send Message
              </span>
            </button>
          </form>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  info.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="glass rounded-xl p-4 flex items-center gap-4 mb-4 group hover:border-copper/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center shrink-0 group-hover:bg-copper/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-dark-heading font-medium text-sm group-hover:text-copper transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
