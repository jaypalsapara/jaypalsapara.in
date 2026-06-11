import { EMAIL } from './about-me';
import { APP_URL } from './app';
import { GITHUB_URL, LINKED_IN_URL, TWITTER_URL } from './links';

/**
 * Personal Schema
 *
 * @returns
 */
export const getPersonalJsonLd = () => {
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': APP_URL + '/#organization',
          name: 'Freelance',
          url: APP_URL,
        },
        {
          '@type': 'Person',
          '@id': APP_URL + '/#person',
          name: 'Jaypal Sapara',
          description:
            'Full-Stack Developer — I help clients, startups, and enterprises to transform their idea into a digital product, and take it forward, so that their customers can stay engaged.',
          email: EMAIL,
          url: APP_URL,
          image: APP_URL + `/images/me.png`,
          jobTitle: 'Full Stack Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Freelancer',
          },
          nationality: 'Indian',
          gender: 'Male',
          knowsAbout: [
            'Laravel',
            'PHP',
            'Inertia.js',
            'React.js',
            'Alpine.js',
            'AI',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'CSS 3',
            'MySQL',
            'REST APIs',
            'Firebase',
            'AWS',
            'Amazon S3',
            'DigitalOcean',
            'Linux',
            'Stripe',
            'PayPal',
            'GitHub Actions',
            'CI/CD',
            'Git',
            'Web Development',
            'Backend Development',
            'API Development',
            'Full Stack Development',
            'Database Design',
            'SQL',
          ],
          sameAs: [GITHUB_URL, LINKED_IN_URL, TWITTER_URL],
        },
        {
          '@type': 'WebSite',
          '@id': APP_URL + '/#website',
          url: APP_URL,
          name: 'Jaypal Sapara Portfolio',
          description:
            'Full-Stack Developer — I help clients, startups, and enterprises to transform their idea into a digital product, and take it forward, so that their customers can stay engaged.',
          publisher: {
            '@id': APP_URL + '/#person',
          },
          inLanguage: 'en',
        },
        {
          '@type': 'WebPage',
          '@id': APP_URL + '/#webpage',
          name: 'Jaypal Sapara - Full Stack Developer',
          description:
            'Full-Stack Developer — I help clients, startups, and enterprises to transform their idea into a digital product, and take it forward, so that their customers can stay engaged.',
          isPartOf: {
            '@id': APP_URL + '/#website',
          },
          about: {
            '@id': APP_URL + '/#person',
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: APP_URL + '/images/og-image.png',
          },
          datePublished: '2026-06-15',
          dateModified: '2026-06-15',
          inLanguage: 'en',
        },
      ],
    }),
  };
};
