"use client";

import { useState, useCallback, type ChangeEvent, type FormEvent } from "react";
import { bookingUrl, formspreeEndpoint } from "@/lib/stripe";
import styles from "./FinalCTA.module.css";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  readonly name: string;
  readonly email: string;
  readonly machines: string;
}

const initialForm: FormState = { name: "", email: "", machines: "" };

const FinalCTA = (): JSX.Element => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  // Closure-based factory: returns a change handler bound to a specific field name
  const createChangeHandler = useCallback(
    (field: keyof FormState): ((event: ChangeEvent<HTMLInputElement>) => void) => {
      return (event) => {
        // React handles textContent escaping automatically via {value}
        const nextValue = event.target.value;
        setForm((prev) => ({ ...prev, [field]: nextValue }));
      };
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (formspreeEndpoint === "#") {
        setStatus("error");
        return;
      }

      setStatus("submitting");

      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setStatus("success");
          setForm(initialForm);
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    },
    [form]
  );

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.h2}>
          Ready to stop driving
          <br />
          to empty ATMs?
        </h2>
        <p className={styles.sub}>
          Book a 15-minute call. We'll look at your route together and see if
          CashPilot actually fits — no pitch, just an honest conversation.
        </p>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryBtn}
        >
          Book your 15-min call
          <span aria-hidden="true">→</span>
        </a>

        <p className={styles.meta}>FREE · NO COMMITMENT · NO CREDIT CARD</p>

        <div className={styles.divider}>
          <span className={styles.dividerText}>
            or leave your details and we'll reach out
          </span>
        </div>

        <form
          id="contact-form"
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.fieldRow}>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={createChangeHandler("name")}
              className={styles.input}
              required
              aria-label="Your name"
            />
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email address"
              value={form.email}
              onChange={createChangeHandler("email")}
              className={styles.input}
              required
              aria-label="Email address"
            />
          </div>
          <input
            id="contact-machines"
            type="text"
            name="machines"
            autoComplete="off"
            placeholder="How many machines do you run?"
            value={form.machines}
            onChange={createChangeHandler("machines")}
            className={styles.input}
            aria-label="Number of machines"
          />
          <button
            type="submit"
            className={styles.formBtn}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p className={styles.success}>
              Got it — we'll be in touch within one business day.
            </p>
          )}
          {status === "error" && (
            <p className={styles.error}>
              Something went wrong. Please try again or book a call directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default FinalCTA;
