import type { ComponentPropsWithoutRef } from "react";

type SafeLinkProps = ComponentPropsWithoutRef<"a">;

/**
 * Uses native document navigation instead of Vinext's client router.
 * Direct routes are reliable on Workers, while client-side Link navigation
 * is currently failing after hydration in this deployment.
 */
export function SafeLink(props: SafeLinkProps) {
  return <a {...props} />;
}
