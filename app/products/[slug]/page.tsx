import type { Metadata } from "next";
import { SafeLink as Link } from "../../components/SafeLink";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { findProductGroup, productGroups } from "../../data";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return productGroups.map((group) => ({ slug: group.slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const group = findProductGroup(slug); return group ? { title: group.name, description: group.summary } : { title: "Product group" }; }

export default async function ProductGroupPage({ params }: PageProps) {
  const { slug } = await params;
  const group = findProductGroup(slug);
  if (!group) notFound();
  const related = productGroups.filter((item) => item.slug !== group.slug).slice(0, 3);
  return (
    <><SiteHeader /><main>
      <section className="detail-hero shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Our Medical Product Groups</Link><span aria-hidden="true">/</span><span>{group.name}</span></nav><div className="detail-grid"><div className="detail-title"><p className="eyebrow">Medical Products &amp; Equipment</p><h1>{group.name}</h1><p>{group.description}</p><div className="detail-actions"><Link className="button button-primary" href={`/contact?interest=${group.slug}`}>Contact Sales</Link><a className="text-link" href="mailto:sales@agsmedical.com">sales@agsmedical.com</a></div></div><div className={`detail-product-media detail-product-media-${group.imageFit}`}><img src={group.image} alt={group.imageAlt} /><div><span>AGS Medical product group</span><strong>{group.name}</strong></div></div></div></section>
      <section className="subgroup-section"><div className="shell"><div className="section-heading product-list-heading"><div><p className="eyebrow">Product directory</p><h2>Products include:</h2></div><p>Contact the sales department for product information, catalogues and enquiries.</p></div><div className="subgroup-grid">{group.subgroups.map((subgroup) => <div className="subgroup-item" key={subgroup}><span className="subgroup-dot" aria-hidden="true" /><strong>{subgroup}</strong></div>)}</div></div></section>
      <section className="section shell"><div className="section-heading split-heading"><div><p className="eyebrow">Continue exploring</p><h2>Related product groups.</h2></div></div><div className="related-grid">{related.map((item) => <Link className="related-card" href={`/products/${item.slug}`} key={item.slug}><span>{item.name}</span><span aria-hidden="true">↗</span></Link>)}</div></section>
    </main><SiteFooter /></>
  );
}
