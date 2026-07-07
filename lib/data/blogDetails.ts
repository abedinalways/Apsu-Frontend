import { BlogMeta } from '@/types/blogDetails';

export const blogDetails: BlogMeta[] = [
  {
    id: 1,

    slug: 'understanding-glp1',

    title: 'Understanding GLP-1 Medications: What Patients Should Know',

    category: 'Weight Loss',

    author: 'Absu Health',

    date: '20 Jan 2026',

    readTime: '5 mins read',

    heroImage: '/images/blogDetails/hero.png',

    summary: [
      {
        id: 'what-is-glp1',
        title: 'What Are GLP-1 Medications?',
      },
      {
        id: 'benefits',
        title: 'Benefits',
      },
      {
        id: 'exercise',
        title: 'Why Exercise Matters',
      },
    ],

    content: [
      {
        id: 'intro',
        type: 'paragraph',
        content:
          'GLP-1 medications are helping people lose weight while improving blood sugar control.',
      },

      {
        id: 'what-is-glp1',
        type: 'heading',
        content: 'What Are GLP-1 Medications?',
      },

      {
        id: 'glp1-description',
        type: 'paragraph',
        content:
          'GLP-1 receptor agonists are medications that mimic a naturally occurring hormone.',
      },

      {
        id: 'glp1-benefits-list',
        type: 'bullet',
        items: [
          'Reduce appetite',
          'Improve insulin response',
          'Support weight management',
        ],
      },

      {
        id: 'glp1-chart',
        type: 'image',
        image: '/images/blog/details/glp1-chart.png',
        alt: 'GLP-1 Chart',
      },

      {
        id: 'benefits',
        type: 'heading',
        content: 'Benefits',
      },

      {
        id: 'benefits-steps',
        type: 'number',
        items: [
          'Initial Consultation',
          'Prescription',
          'Lifestyle Guidance',
          'Follow Up',
        ],
      },

      {
        id: 'exercise',
        type: 'imageText',
        image: '/images/blog/details/exercise.png',
        alt: 'Exercise',
        title: 'Why Exercise Matters',
        description:
          'Regular movement supports long-term weight management and improves cardiovascular health.',
        layout: 'left',
      },

      {
        id: 'healthy-quote',
        type: 'quote',
        content: 'Healthy habits are built one small step at a time.',
      },

      {
        id: 'section-divider',
        type: 'divider',
      },
    ],
  },
];
