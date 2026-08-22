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
          'Semaglutide is a GLP-1 receptor agonist. GLP-1 is a hormone involved in blood sugar regulation and appetite signaling. In weight-management use, the goal is not simply to make someone eat less for a few days; the medication is part of a longer treatment plan that usually includes nutrition changes, physical activity, and follow-up monitoring.',
      },
      {
        id: 'intro-2',
        type: 'paragraph',
        content:
          'Semaglutide works mainly through the GLP-1 pathway, while tirzepatide works through both the GIP and GLP-1 pathways. GLP-1 (glucagon-like peptide-1) is a hormone your body releases after eating. It signals fullness, slows stomach emptying, and helps regulate blood sugar. GIP is another post-meal hormone that also supports blood sugar control. Tirzepatide acts on both pathways, which may be one reason it has shown larger average weight-loss results in some studies.',
      },
      {
        id: 'intro-3',
        type: 'paragraph',
        content:
          'In clinical trials, both medications were associated with meaningful average weight loss when used with diet and physical activity. Tirzepatide has shown larger average weight-loss numbers in some trials, but that does not automatically mean it is the better choice for every person.',
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
        content: 'What is Semaglutide?',
      },
      {
        id: 'glp1-feature',
        type: 'imageText',
        layout: 'right',
        imageRatio: 'wide',
        image: '/images/blogDetails/1233.png',
        alt: 'Diagram showing how GLP-1 medications work',
        description:
          'Semaglutide is a GLP-1 receptor agonist. GLP-1 is a hormone involved in blood sugar regulation and appetite signaling. In weight-management use, the goal is not simply to make someone eat less for a few days; the medication is part of a longer treatment plan that usually includes nutrition changes, physical activity, and follow-up monitoring.',
      },
      {
        id: 'glp1-summary',
        type: 'paragraph',
        emphasis: true,
        content:
          'The FDA-approved semaglutide injection for chronic weight management is indicated as an addition to a reduced-calorie diet and increased physical activity for adults with obesity or adults with overweight and at least one weight-related condition. The original FDA label describes a weekly injection dose-escalation schedule starting at 0.25 mg and increasing gradually to a 2.4 mg maintenance dose [1].',
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
