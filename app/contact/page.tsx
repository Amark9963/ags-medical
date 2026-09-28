import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Contact Us", description: "Contact AGS Medical in Albuquerque, New Mexico." };

export default function ContactPage() {
  return (
    <><SiteHeader /><main>
      <section className="page-hero"><div className="shell page-hero-inner"><div><p className="eyebrow">AGS Medical</p><h1>Contact Us</h1></div><p>Medical Products &amp; Equipment</p></div></section>
      <section className="contact-directory"><div className="shell contact-directory-grid"><div><span>Our Location</span><strong>Albuquerque, New Mexico, USA</strong></div><div><span>General Mailbox</span><a href="mailto:info@agsmedical.com">info@agsmedical.com</a></div><div><span>Sales Department</span><a href="mailto:sales@agsmedical.com">sales@agsmedical.com</a></div></div></section>
      <section className="section shell"><div className="contact-layout"><div className="contact-details"><p className="eyebrow">Our Location</p><h2>AGS Medical</h2><p>6565 Americas Parkway NE, Suite 200<br />Albuquerque, NM 87110 USA</p><ul className="contact-list"><li><span>Sales Department</span><a href="mailto:sales@agsmedical.com">sales@agsmedical.com</a></li><li><span>General Mailbox</span><a href="mailto:info@agsmedical.com">info@agsmedical.com</a></li><li><span>Telephone</span><a href="tel:+15055506501">(505) 550-6501</a><br /><a href="tel:+15055655102">(505) 565-5102</a></li><li><span>International calls</span>Please dial country code +1 first.</li></ul></div><div className="contact-card"><div className="contact-form-heading"><span>Sales &amp; general enquiries</span><h2>Send a message to AGS Medical.</h2></div><ContactForm /></div></div></section>
      <section className="supplier-note"><div className="shell"><strong>How to Become Our Supplier?</strong><p>Companies interested in becoming a global supplier can visit the <a href="https://www.agsoutsourcing.com/online-supplier-application-platfor">supplier application platform</a>.</p></div></section>
    </main><SiteFooter /></>
  );
}
