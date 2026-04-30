// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.allfeat.org",
  integrations: [
    starlight({
      title: "Allfeat Platform Documentation",
      description:
        "Developer documentation for the Allfeat platform — integrate the ATS Widget or the Organization API to register and protect creative works on the Allfeat blockchain.",
      logo: {
        src: "./src/assets/allfeat-logo.svg",
        alt: "Allfeat",
        replacesTitle: false,
      },
      favicon: "/favicon.ico",
      customCss: ["./src/styles/global.css"],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
        Footer: "./src/components/Footer.astro",
      },
      sidebar: [
        { label: "ATS Overview", slug: "ats" },
        {
          label: "ATS Widget",
          collapsed: true,
          items: [
            {
              label: "Getting Started",
              collapsed: true,
              items: [
                { label: "Quick Start", slug: "ats/widget/guides/quick-start" },
                { label: "Authentication", slug: "ats/widget/guides/authentication" },
              ],
            },
            {
              label: "Guides",
              collapsed: true,
              items: [
                { label: "Events & Callbacks", slug: "ats/widget/guides/events" },
                { label: "Styling & Theming", slug: "ats/widget/guides/styling" },
                { label: "Update Mode", slug: "ats/widget/guides/update-mode" },
                { label: "Pricing & Credits", slug: "ats/widget/guides/pricing" },
                { label: "Error Handling", slug: "ats/widget/guides/error-handling" },
              ],
            },
            {
              label: "Reference",
              collapsed: true,
              items: [
                { label: "Attributes & Methods", slug: "ats/widget/reference/attributes" },
                { label: "Events", slug: "ats/widget/reference/events" },
                { label: "CSS Variables", slug: "ats/widget/reference/css-variables" },
                { label: "Error Codes", slug: "ats/widget/reference/error-codes" },
              ],
            },
          ],
        },
        {
          label: "ATS API",
          collapsed: true,
          items: [
            {
              label: "Getting Started",
              collapsed: true,
              items: [
                { label: "Overview & Quick Start", slug: "ats/api" },
                { label: "Authentication", slug: "ats/api/guides/authentication" },
                { label: "Scopes", slug: "ats/api/guides/scopes" },
              ],
            },
            {
              label: "Guides",
              collapsed: true,
              items: [
                { label: "Registering a Work", slug: "ats/api/guides/registering" },
                { label: "Updating a Work", slug: "ats/api/guides/updating" },
                { label: "Tracking Transactions", slug: "ats/api/guides/tracking" },
                { label: "Webhooks", slug: "ats/api/guides/webhooks" },
                { label: "Idempotency", slug: "ats/api/guides/idempotency" },
                { label: "External User References", slug: "ats/api/guides/external-user-ref" },
                { label: "Networks", slug: "ats/api/guides/networks" },
                { label: "Rate Limits & Quotas", slug: "ats/api/guides/rate-limits" },
                { label: "Key Lifecycle", slug: "ats/api/guides/key-lifecycle" },
                { label: "Security Checklist", slug: "ats/api/guides/security" },
              ],
            },
            {
              label: "Reference",
              collapsed: true,
              items: [
                { label: "Error Codes", slug: "ats/api/reference/errors" },
                { label: "Glossary", slug: "ats/api/reference/glossary" },
              ],
            },
            {
              label: "Examples",
              collapsed: true,
              items: [
                { label: "Node.js", slug: "ats/api/examples/node" },
                { label: "Express Webhook Receiver", slug: "ats/api/examples/express-webhook" },
                { label: "Python Polling", slug: "ats/api/examples/python-polling" },
              ],
            },
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Allfeat",
        },
      ],
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      disable404Route: true,
    }),
  ],
});
