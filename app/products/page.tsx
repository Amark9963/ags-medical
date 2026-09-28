import type { Metadata } from "next";
import { CategoryCard } from "../components/CategoryCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { productGroups } from "../data";

export const metadata: Metadata = { title: "Our Medical Product Groups", description: "Medical products and equipment from AGS Medical." };

export default function ProductsPage() {
  return (
    <><SiteHeader /><main>
      <section className="page-hero"><div className="shell page-hero-inner"><div><p className="eyebrow">Medical Products &amp; Equipment</p><h1>Our Medical Product Groups</h1></div><p>Browse the product groups below to find medical products, devices, equipment and consumables.</p></div></section>
      <section className="section shell"><div className="category-grid">{productGroups.map((group, index) => <CategoryCard key={group.slug} group={group} index={index + 1} />)}</div></section>
    </main><SiteFooter /></>
  );
}
