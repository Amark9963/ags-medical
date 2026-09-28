import { SafeLink as Link } from "./SafeLink";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="AGS Medical home">
      <span className="brand-monogram" aria-hidden="true">AGS</span>
      <span className="brand-copy"><strong>AGS Medical</strong><small>Medical Products &amp; Equipment</small></span>
    </Link>
  );
}
