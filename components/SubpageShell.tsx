import { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav, type SiteNavProps } from "@/components/SiteNav";
import { Sky } from "@/components/Sky";
import { adminNavItems } from "@/components/site-data";

export type SubpageShellProps = {
  title: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel: string;
  ctaClass?: string;
  variant?: "student" | "admin";
  navItems?: SiteNavProps["items"];
  homeHref?: string;
  children: ReactNode;
};

export function SubpageShell({
  title,
  subtitle,
  ctaHref,
  ctaLabel,
  ctaClass,
  variant = "student",
  navItems,
  homeHref,
  children,
}: SubpageShellProps) {
  const items = navItems ?? (variant === "admin" ? adminNavItems : undefined);
  return (
    <>
      <Sky />
      <SiteNav
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        ctaClass={ctaClass}
        items={items}
        variant={variant}
        homeHref={homeHref}
        showLogout
      />
      <div className={`page-wrap${variant === "admin" ? " admin-wrap" : ""}`}>
        <div className="page-header">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
      <SiteFooter />
    </>
  );
}
