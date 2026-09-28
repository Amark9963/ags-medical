import type { Metadata } from "next";
import { SafeLink as Link } from "../components/SafeLink";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Custom Medical Products", description: "Custom engineering and manufacturing capabilities for medical products." };
const capabilities = [
  ["Medical lasers and optics", "Laser components, optics and fiber optics for diagnostic and surgical applications."],
  ["Drug delivery systems", "Transfer systems and drug-delivery products."],
  ["Radiology and ultrasound", "Components, systems, instruments and radiation-shielding products."],
  ["Precision medical devices", "Products incorporating sensors, actuators, motion stages and motors."],
  ["Surgical tools", "Surgical and operational tools for specialized requirements."],
  ["Sterilization equipment", "Medical ovens and ultraviolet or ozone treatment systems."],
  ["Custom medical furniture", "Custom-made furniture for hospitals and clinics."],
  ["Medical-grade components", "Components made from polymers, metals, specialty alloys and composites."],
];

export default function CustomMedicalProductsPage() {
  return (
    <><SiteHeader /><main>
      <section className="section shell custom-hero-grid"><div><p className="eyebrow">Medical Products &amp; Equipment</p><h1>Custom Medical Products</h1><p className="hero-lede">Custom engineering and manufacturing capabilities for medical products developed according to customer needs and specifications.</p><Link className="button button-primary" href="/contact?interest=custom-medical-product">Contact Us</Link></div><div className="hero-image-wrap"><img className="hero-image" src="https://images.unsplash.com/photo-1748000970909-845f4aa144d2?auto=format&fit=crop&fm=jpg&q=82&w=1800" alt="Operators working inside a controlled manufacturing environment" /></div></section>
      <section className="section custom-capabilities"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">Custom capabilities</p><h2>Medical product development and manufacturing.</h2></div><p>Specialized capabilities cover components, instruments, systems, furniture and medical-grade materials.</p></div><div className="capability-list">{capabilities.map(([title, description]) => <article className="capability-row" key={title}><h3>{title}</h3><p>{description}</p><span aria-hidden="true">↗</span></article>)}</div></div></section>
      <section className="section shell"><div className="engineering-links"><div><p className="eyebrow">Related capabilities</p><h2>Engineering and manufacturing.</h2></div><p>Learn more about engineering and product-development capabilities at <a href="https://ags-engineering.com/">AGS Engineering</a>, or visit <a href="https://www.agstech.net/">AGS-TECH</a> for custom manufacturing capabilities.</p></div></section>
    </main><SiteFooter /></>
  );
}
