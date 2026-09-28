import { SafeLink as Link } from "./components/SafeLink";
import { CategoryCard } from "./components/CategoryCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { productGroups } from "./data";

const qualityPillars = [
  ["Certified Products", "Medical products for the US, EU and international markets."],
  ["Manufacturing Plants with Certified Quality Management Systems", "Specialized medical-product plants operating under ISO 13485 quality management systems."],
  ["Professional Staff at All Levels", "Experienced staff from the medical industry serving customer needs."],
];

export default function Home() {
  return (
    <><SiteHeader /><main>
      <section className="hero-stage"><div className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">Medical Products &amp; Equipment</p><h1 id="hero-title">A reliable and professional source for your medical product needs</h1><p className="hero-lede">Medical products, devices, equipment and consumables for customers in the USA, EU and international markets.</p><div className="button-row"><Link className="button button-primary" href="/products">Our Medical Product Groups <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" href="/custom-medical-products">Custom Medical Products</Link></div><div className="hero-meta"><span>AGS-Medical</span><span>Albuquerque, New Mexico, USA</span></div></div>
        <div className="hero-visual"><div className="hero-image-wrap"><img className="hero-image" src="https://images.unsplash.com/photo-1648224395277-052c8108efa3?auto=format&fit=crop&fm=jpg&q=86&w=1800" alt="Medical equipment in a modern hospital room" /></div><div className="hero-visual-caption"><span>Medical Products &amp; Equipment</span><strong>USA · EU · International</strong></div></div>
      </div></section>

      <section className="trust-strip" aria-label="Market and quality information"><div className="shell trust-grid"><p>Medical products for the USA, EU and international markets</p><div className="trust-items"><span>FDA Listed</span><span>CE Mark</span><span>ISO 13485</span></div></div></section>

      <section className="section shell corporate-intro" id="company" aria-labelledby="company-title"><div className="section-heading split-heading"><div><p className="eyebrow">AGS Medical</p><h2 id="company-title">Medical products backed by global manufacturing capability.</h2></div><p>AGS-Medical serves as the medical products arm of AGS-TECH, Inc., based in Albuquerque, USA.</p></div><div className="quality-grid">{qualityPillars.map(([title, description]) => <article className="quality-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>

      <section className="section product-section" aria-labelledby="groups-title"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">Medical products</p><h2 id="groups-title">Our Medical Product Groups</h2></div><p>Select a product group to review the equipment and product families available through AGS Medical.</p></div><div className="category-grid">{productGroups.map((group, index) => <CategoryCard key={group.slug} group={group} index={index + 1} />)}</div><div className="section-action"><Link className="text-link" href="/products">View all product groups <span aria-hidden="true">→</span></Link></div></div></section>

      <section className="section capability-section"><div className="shell pathway-grid"><div className="pathway-intro"><p className="eyebrow">Medical Products &amp; Equipment</p><h2>Standard products and custom manufacturing capability.</h2><p>Browse the medical product groups or continue to Custom Medical Products.</p></div><article className="pathway-card pathway-dark"><div><p className="pathway-label">Product catalogue</p><h3>Our Medical Product Groups</h3><p>Diagnostic, therapeutic, veterinary, life support, everyday-use and dental implant products.</p></div><Link href="/products">View product groups →</Link></article><article className="pathway-card pathway-light"><div><p className="pathway-label">Engineering &amp; manufacturing</p><h3>Custom Medical Products</h3><p>Products developed and manufactured according to customer needs and specifications.</p></div><Link href="/custom-medical-products">Explore custom capabilities →</Link></article></div></section>

      <section className="section shell custom-feature"><div className="custom-image-wrap"><img src="https://images.unsplash.com/photo-1748000970909-845f4aa144d2?auto=format&fit=crop&fm=jpg&q=84&w=1800" alt="Operators working inside a clean manufacturing environment" /><span className="image-caption">Custom engineering &amp; manufacturing</span></div><div className="custom-copy"><p className="eyebrow">Custom Medical Products</p><h2>Custom engineering and manufacturing capability.</h2><p>Medical products can be developed and manufactured according to customer needs and specifications.</p><ul className="check-list"><li>Medical lasers and optics</li><li>Drug delivery and radiology systems</li><li>Surgical tools and custom medical furniture</li></ul><Link className="button button-primary" href="/custom-medical-products">Custom Medical Products</Link></div></section>

      <section className="shell contact-band"><div><p className="eyebrow eyebrow-light">AGS Medical</p><h2>Contact Us</h2></div><p>Sales Department: sales@agsmedical.com<br />Tel: (505) 550-6501</p><Link className="button button-inverse" href="/contact">Contact Us <span aria-hidden="true">↗</span></Link></section>
    </main><SiteFooter /></>
  );
}
