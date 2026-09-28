"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { productGroups } from "../data";

export function ContactForm() {
  const interestRef = useRef<HTMLSelectElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("interest");
    if (
      interestRef.current &&
      value &&
      (productGroups.some((group) => group.slug === value) ||
        value === "custom-medical-product")
    ) {
      interestRef.current.value = value;
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" /></div>
        <div className="field"><label htmlFor="email">Business email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
        <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
        <div className="field field-full">
          <label htmlFor="interest">Product group</label>
          <select id="interest" name="interest" ref={interestRef} defaultValue="" required>
            <option value="">Select an enquiry type</option>
            {productGroups.map((group) => <option key={group.slug} value={group.slug}>{group.name}</option>)}
            <option value="custom-medical-product">Custom medical product</option>
            <option value="general">General enquiry</option>
          </select>
        </div>
        <div className="field field-full"><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div>
      </div>
      <div className="form-footer"><p className="prototype-note">Preview only. This form does not transmit or store information.</p><button className="button button-primary" type="submit">Send</button></div>
      {submitted ? <p className="form-status" role="status">Preview complete—no message was sent.</p> : null}
    </form>
  );
}
