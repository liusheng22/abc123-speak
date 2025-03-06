import { useI18n } from 'vue-i18n'
export default function useSiteMetadata() {
  const { t, locale } = useI18n()
  const title = t('title')
  const description = t('description')
  const keywords = t('keywords')
  const previewImage = '/images/abc123-speak-preview.png'
  const url = 'https://abc123speak.vercel.app'

  const setupSEO = () => {
    useHead({
      title: title,
      meta: [
        { name: 'keywords', content: keywords },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: previewImage },
        { property: 'og:url', content: `${url}/${locale.value}` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: previewImage },
        { name: 'twitter:url', content: `${url}/${locale.value}` }
      ],
      link: [{ rel: 'canonical', href: `${url}/${locale.value}` }]
    })

    useSeoMeta({
      title: title,
      description: description,
      ogTitle: title,
      ogDescription: description,
      ogImage: previewImage,
      twitterCard: 'summary_large_image',
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: previewImage
    })
  }

  // add structured data for search engines
  const addStructuredData = () => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: title,
            url: url,
            description: description,
            image: previewImage,
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            audience: {
              '@type': 'Audience',
              audienceType: 'Children'
            }
          })
        }
      ]
    })
  }

  return {
    setupSEO,
    addStructuredData
  }
}
