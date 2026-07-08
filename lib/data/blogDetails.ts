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
      { id: 'what-is-glp1', title: 'What Are GLP-1 Medications?' },
      { id: 'eligibility', title: 'Who May Be Eligible?' },
      {
        id: 'consultation',
        title: 'What Happens During an Online Consultation?',
      },
      { id: 'side-effects', title: 'Are There Side Effects?' },
      { id: 'oversight', title: 'Why Physician Oversight Matters' },
    ],

    content: [
      // ---------- Introduction ----------
      {
        id: 'intro-heading',
        type: 'heading',
        content: 'Introduction',
      },
      {
        id: 'intro-1',
        type: 'paragraph',
        content:
          'Weight management is rarely as simple as eating less and exercising more.',
      },
      {
        id: 'intro-2',
        type: 'paragraph',
        content:
          'For many people, factors such as hormones, metabolism, appetite regulation, genetics, stress, and underlying health conditions can make losing weight significantly more challenging.',
      },
      {
        id: 'intro-3',
        type: 'paragraph',
        content:
          'In recent years, GLP-1 medications have emerged as one of the most discussed treatment options for weight management. While these medications are not suitable for everyone, they may help certain individuals achieve and maintain meaningful weight loss when combined with healthy lifestyle changes.',
      },
      {
        id: 'intro-4',
        type: 'paragraph',
        // emphasis: true,
        content:
          "If you're considering medical weight management, here's what you should know.",
      },

      // ---------- What Are GLP-1 Medications ----------
      {
        id: 'what-is-glp1',
        type: 'heading',
        content: 'What Are GLP-1 Medications?',
      },
      {
        id: 'glp1-feature',
        type: 'imageText',
        layout: 'right',
        imageRatio: 'wide',
        image: '/images/blogDetails/img02.png',
        alt: 'Diagram showing how GLP-1 medications work',
        description:
          'GLP-1 stands for "Glucagon-Like Peptide-1," a hormone that is naturally produced in the body after eating. This hormone plays several important roles:',
        bullets: [
          'Helps regulate appetite.',
          'Slows stomach emptying.',
          'Supports healthy blood sugar control.',
          'Promotes feelings of fullness after meals.',
        ],
      },
      {
        id: 'glp1-summary',
        type: 'paragraph',
        emphasis: true,
        content:
          'GLP-1 medications are designed to mimic these natural effects, helping some patients manage hunger and reduce calorie intake more effectively.',
      },

      // ---------- Who May Be Eligible ----------
      {
        id: 'eligibility',
        type: 'heading',
        layout: 'right',
        content: 'Who May Be Eligible?',
      },
      {
        id: 'eligibility-feature',
        type: 'imageText',

        layout: 'left',
        image: '/images/blogDetails/img01.png',
        alt: 'Woman exercising outdoors',
        description:
          "Eligibility varies depending on an individual's medical history, current health status, and treatment goals. A physician may evaluate factors such as:",
        bullets: [
          'Current weight and BMI',
          'Existing medical conditions',
          'Previous weight loss attempts',
          'Current medications',
          'Lifestyle habits',
        ],
      },
      {
        id: 'eligibility-note',
        type: 'paragraph',
        emphasis: true,
        content:
          'Not everyone is a candidate for GLP-1 treatment. A healthcare professional can help determine whether this approach is clinically appropriate.',
      },

      // ---------- Online Consultation ----------
      {
        id: 'consultation',
        type: 'heading',
        content: 'What Happens During an Online Consultation?',
      },
      {
        id: 'consultation-intro',
        type: 'paragraph',
        content:
          'Online weight management consultations are designed to be convenient and accessible. The process typically includes:',
      },
      {
        id: 'consultation-steps',
        type: 'steps',
        steps: [
          {
            title: 'Completing a Health Assessment',
            description:
              'Patients provide information about their health history, medications, and weight management goals.',
          },
          {
            title: 'Physician Review',
            description:
              'A U.S.-licensed physician carefully reviews the submitted information.',
          },
          {
            title: 'Follow-Up Questions',
            description:
              'If additional details are needed, the physician may request clarification before making treatment decisions.',
          },
          {
            title: 'Personalized Recommendation',
            description:
              'When appropriate, a personalized treatment plan may be recommended.',
          },
          {
            title: 'Ongoing Support',
            description:
              'Many patients benefit from continued monitoring and guidance throughout their weight management journey.',
          },
        ],
      },

      // ---------- Side Effects ----------
      {
        id: 'side-effects',
        type: 'heading',
        content: 'Are There Side Effects?',
      },
      {
        id: 'side-effects-intro',
        type: 'paragraph',
        content:
          'Like all medications, GLP-1 treatments may cause side effects in some individuals. Common side effects can include:',
      },
      {
        id: 'side-effects-grid',
        type: 'imageText',
        bullets: [
          'Nausea',
          'Stomach discomfort',
          'Constipation',
          'Diarrhea',
          'Fatigue',
          'Reduced appetite',
        ],
      },
      {
        id: 'side-effects-note',
        type: 'paragraph',
        content:
          'Side effects vary from person to person and should always be discussed with a healthcare provider before beginning treatment.',
      },

      // ---------- Physician Oversight ----------
      {
        id: 'oversight',
        type: 'heading',
        content: 'Why Physician Oversight Matters',
      },
      {
        id: 'oversight-1',
        type: 'paragraph',
        content: 'Weight management is highly personal.',
      },
      {
        id: 'oversight-2',
        type: 'paragraph',
        content:
          'What works for one person may not be appropriate for another.',
      },
      {
        id: 'oversight-3',
        type: 'paragraph',
        content:
          'This is why physician-guided care is important. Licensed healthcare providers can review your medical history, evaluate potential risks, and recommend treatment options based on your individual needs.',
      },
      {
        id: 'oversight-4',
        type: 'paragraph',
        content:
          'Medical decisions should always be made by qualified healthcare professionals — not by algorithms alone.',
      },
    ],
  },
];
