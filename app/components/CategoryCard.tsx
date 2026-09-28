import { SafeLink as Link } from "./SafeLink";
import type { ProductGroup } from "../data";

export function CategoryCard({ group, index }: { group: ProductGroup; index: number }) {
  return (
    <Link className={`category-card category-card-${group.imageFit}`} href={`/products/${group.slug}`}>
      <div className="category-media">
        <img src={group.image} alt={group.imageAlt} />
        <span className="category-index">{String(index).padStart(2, "0")}</span>
      </div>
      <div className="category-content"><div><h3>{group.name}</h3><p>{group.summary}</p></div><span className="category-arrow" aria-hidden="true">↗</span></div>
    </Link>
  );
}
