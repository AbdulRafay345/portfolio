import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from './Section';

const field =
  'mt-2 h-11 w-full rounded-lg border border-line bg-ink-card px-4 text-base text-fg transition-colors duration-150 hover:border-line-strong focus:border-accent focus:outline-none';

function Field({ label, name, type = 'text', autoComplete }) {
  return (
    <label className="block text-sm text-fg-2">
      {label}
      <input type={type} name={name} required autoComplete={autoComplete} className={field} />
    </label>
  );
}

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, success: true, message: '' });

  const notify = (success, message) => {
    setToast({ show: true, success, message });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          notify(true, 'Message sent');
        },
        () => {
          setLoading(false);
          notify(false, 'Message not sent, try again');
        }
      );
  };

  return (
    <Section id="contact" title="Got a project in mind?" intro="Tell me what you want to build" split>
      <form ref={form} onSubmit={sendEmail} className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="user_name" autoComplete="name" />
        <Field label="Email" name="user_email" type="email" autoComplete="email" />
        <Field label="Subject" name="subject" />
        <Field label="Phone" name="user_phone" type="tel" autoComplete="tel" />
        <label className="block text-sm text-fg-2 sm:col-span-2">
          Message
          <textarea
            name="message"
            rows={5}
            required
            className={`${field} h-auto resize-none py-3`}
          />
        </label>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="h-11 rounded-lg bg-accent px-5 text-base font-medium text-ink-deep transition-colors duration-150 hover:bg-accent-hover active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? 'Sending' : 'Send message'}
          </button>
        </div>
      </form>

      {toast.show && (
        <div
          role="status"
          className="fixed right-6 bottom-6 flex items-center gap-3 rounded-xl border border-line-strong bg-ink-raised px-4 py-3 text-sm"
        >
          <span className={`size-2 rounded-full ${toast.success ? 'bg-[#4cc38a]' : 'bg-[#e5484d]'}`} />
          {toast.message}
        </div>
      )}
    </Section>
  );
}
