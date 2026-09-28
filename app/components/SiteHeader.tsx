import { SafeLink as Link } from "./SafeLink";
import { productGroups } from "../data";
import { Brand } from "./Brand";

const links = [
  { href: "/custom-medical-products", label: "Custom Medical Products" },
  { href: "/#company", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar"><div className="shell utility-shell"><div className="utility-contact"><span>Albuquerque, NM, USA</span><a href="tel:+15055506501">Sales: (505) 550-6501</a><a href="mailto:sales@agsmedical.com">sales@agsmedical.com</a></div><span className="preview-label">Unofficial redesign preview</span></div></div>
      <header className="site-header">
        <div className="shell nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <details className="products-menu"><summary>Our Medical Product Groups</summary><div className="products-menu-panel"><div><p>Medical Products &amp; Equipment</p><strong>Browse by product group</strong></div><div className="products-menu-links">{productGroups.map((group) => <Link key={group.slug} href={`/products/${group.slug}`}>{group.name}<span aria-hidden="true">↗</span></Link>)}</div><Link className="products-menu-all" href="/products">View all product groups</Link></div></details>
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <div className="nav-actions">
            <Link className="button button-primary button-small" href="/contact">Contact Us</Link>
            <details className="mobile-menu">
              <summary aria-label="Open navigation"><span className="menu-lines" aria-hidden="true" /></summary>
              <nav className="mobile-menu-panel" aria-label="Mobile navigation"><Link href="/">Home</Link><Link href="/products">Our Medical Product Groups</Link>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link className="button button-primary" href="/contact">Contact Us</Link></nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
