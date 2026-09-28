import { SafeLink as Link } from "./SafeLink";
import { Brand } from "./Brand";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="company">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand"><Brand /><p className="footer-summary">Medical Products &amp; Equipment</p><span>6565 Americas Parkway NE, Suite 200<br />Albuquerque, NM 87110 USA</span></div>
          <nav className="footer-nav" aria-label="Footer navigation"><p className="footer-label">Explore</p><Link href="/products">Our Medical Product Groups</Link><Link href="/custom-medical-products">Custom Medical Products</Link><Link href="/contact">Contact Us</Link></nav>
          <div className="footer-contact"><p className="footer-label">Contact</p><a href="mailto:sales@agsmedical.com">sales@agsmedical.com</a><a href="mailto:info@agsmedical.com">info@agsmedical.com</a><a href="tel:+15055506501">(505) 550-6501</a><a href="tel:+15055655102">(505) 565-5102</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 by AGS-Medical.</span><span>Unofficial redesign preview. No affiliation or endorsement implied.</span></div>
      </div>
    </footer>
  );
}
