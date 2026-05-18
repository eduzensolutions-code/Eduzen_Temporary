export const seo = {
  siteUrl: 'https://eduzensolutions.in',
  title: 'Eduzen Solutions Private Limited | Workforce Development | Official',
  description:
    'Eduzen Solutions empowers communities through skilling, workforce development, CSR integration, and livelihood creation initiatives across India.',
  siteName: 'Eduzen Solutions',
  locale: 'en_IN',
  imagePath: '/preview.png',
  imageAlt: 'Eduzen Solutions workforce development and student career programs',
  twitterHandle: '@eduzensolutionsofficial',
}

export const canonicalUrl = seo.siteUrl
export const previewImageUrl = `${seo.siteUrl}${seo.imagePath}`

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Eduzen Solutions Private Limited',
  url: seo.siteUrl,
  logo: `${seo.siteUrl}/logo.webp`,
  sameAs: [
    'https://www.instagram.com/eduzensolutionsofficial',
    'https://in.linkedin.com/company/eduzen-solutions',
  ],
}
