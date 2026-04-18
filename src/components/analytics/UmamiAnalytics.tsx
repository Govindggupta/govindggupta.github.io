import Script from "next/script"

const DEFAULT_UMAMI_SRC = "https://cloud.umami.is/script.js"
const DEFAULT_UMAMI_WEBSITE_ID = "061a5172-42b4-4fff-8de6-6460fb0ccb2a"

export function UmamiAnalytics() {
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC ?? DEFAULT_UMAMI_SRC
  const umamiWebsiteId =
    process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ??
    process.env.NEXT_PUBLIC_UMAMI_ID ??
    DEFAULT_UMAMI_WEBSITE_ID

  if (!umamiSrc || !umamiWebsiteId) {
    return null
  }

  return (
    <Script
      id="umami-analytics"
      src={umamiSrc}
      data-website-id={umamiWebsiteId}
      strategy="afterInteractive"
      async
    />
  )
}