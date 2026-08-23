import { BlogMeta } from '@/types/blogDetails';

export const blogDetails: BlogMeta[] = [
  {
    id: 1,
    slug: 'understanding-glp1',
    title: "Compounded GLP-1 vs. Brand-Name GLP-1: What's the Difference?",
    category: 'Weight Loss',
    author: 'Apsu Health',
    date: '20 Jan 2026',
    readTime: '5 mins read',
    heroImage: '/images/blogDetails/hero.png',

    summary: [
      { id: 'brand-name', title: 'The Brand-Name Products' },
      { id: 'compounded', title: 'What "Compounded" Actually Means' },
      { id: 'comparison', title: 'Side by Side' },
      { id: 'shortages', title: 'Why Compounded GLP-1s Are Still Around' },
      { id: 'safety', title: 'Is Compounded Safe?' },
      { id: 'dosing', title: 'Dosing Is Where People Actually Get Hurt' },
      { id: 'questions', title: 'Two Questions Worth Asking' },
      { id: 'cost', title: "Cost, and Why It Shouldn't Be the Whole Decision" },
      { id: 'checklist', title: 'Before You Start: What to Check' },
      { id: 'right-choice', title: 'Which One Is Right for You' },
    ],

    content: [
      // ---------- Introduction ----------
      {
        id: 'intro-1',
        type: 'paragraph',
        content:
          "If you're looking into GLP-1 treatment, you'll run into two kinds of products: FDA-approved brand-name medications, and compounded GLP-1s. They're often discussed as if they're the same thing at different prices. They aren't.",
      },
      {
        id: 'intro-2',
        type: 'paragraph',
        content:
          "The differences come down to FDA approval, how the medication is prepared, how it's dosed, what it costs, and how much evidence sits behind the specific product you'd be taking. Here's what to understand before you start.",
      },

      // ---------- The Brand-Name Products ----------
      {
        id: 'brand-name',
        type: 'heading',
        content: 'The Brand-Name Products',
      },
      {
        id: 'brand-name-1',
        type: 'paragraph',
        content:
          "These are the ones you've heard of: semaglutide, sold as Wegovy, Ozempic, and now in oral forms; and tirzepatide, sold as Zepbound and Mounjaro.",
      },
      {
        id: 'brand-name-2',
        type: 'paragraph',
        content:
          "Same active drug doesn't mean same approved use. One brand may be approved for type 2 diabetes while another with the same molecule is approved for **weight management**.",
      },
      {
        id: 'brand-name-3',
        type: 'paragraph',
        content:
          "Before any of these reached the market, the FDA reviewed evidence on safety, effectiveness, manufacturing quality, dosing, and labeling. That doesn't make them risk-free — every medication has side effects. It means that **specific product went through a formal review for that specific use**.",
      },

      // ---------- What "Compounded" Actually Means ----------
      {
        id: 'compounded',
        type: 'heading',
        content: 'What "Compounded" Actually Means',
      },
      {
        id: 'compounded-1',
        type: 'paragraph',
        content:
          "Compounding is a legitimate, long-standing part of U.S. healthcare. A compounded medication is prepared by a pharmacy or outsourcing facility, often to meet a particular patient's needs.",
      },
      {
        id: 'compounded-2',
        type: 'paragraph',
        content:
          "But compounded medications are not FDA-approved products. The FDA doesn't review each one for safety, effectiveness, or quality before it's dispensed.",
      },
      {
        id: 'compounded-3',
        type: 'paragraph',
        content:
          'That\'s why compounded semaglutide isn\'t "generic Ozempic," and compounded tirzepatide isn\'t "generic Zepbound." There are no generic versions of these drugs. The FDA has been actively warning companies against marketing compounded GLP-1s as identical or equivalent to approved products.',
      },
      {
        id: 'compounded-4',
        type: 'paragraph',
        content:
          "None of this means compounded medications are unsafe. It means they're prepared and regulated differently, and the difference matters when you're deciding what to take.",
      },

      // ---------- Side by Side ----------
      {
        id: 'comparison',
        type: 'heading',
        content: 'Side by Side',
      },
      {
        id: 'comparison-table',
        type: 'table',
        tableData: {
          headers: ['', 'FDA-approved brand-name', 'Compounded'],
          rows: [
            ['FDA-approved', 'Yes', 'No'],
            ['Pre-market FDA review', 'Yes', 'No'],
            [
              'Formulation',
              'Standardized',
              'Varies by pharmacy and prescription',
            ],
            [
              'Dosing',
              'Standard strengths and instructions',
              'Concentration and method may vary',
            ],
            [
              'Delivery',
              'Usually pens or standardized tablets',
              'Vials, syringes, capsules, tablets, others',
            ],
            ['Insurance', 'Depends on your plan', 'Usually out of pocket'],
            [
              'Cost',
              'Can be expensive without coverage',
              'Sometimes a lower cash price',
            ],
            [
              'Customization',
              'Limited to approved products',
              'Can address specific patient needs',
            ],
          ],
        },
      },

      // ---------- Why Compounded GLP-1s Are Still Around ----------
      {
        id: 'shortages',
        type: 'heading',
        content: "Why Compounded GLP-1s Are Still Around — and What's Changing",
      },
      {
        id: 'shortages-1',
        type: 'paragraph',
        content:
          "During the GLP-1 shortages of the past few years, compounding filled a real gap: the approved products simply weren't available.",
      },
      {
        id: 'shortages-2',
        type: 'paragraph',
        content:
          'That situation has changed. The FDA declared the tirzepatide injection shortage resolved in December 2024 and the semaglutide injection shortage resolved in February 2025, and the temporary enforcement-discretion periods tied to those shortages have ended.',
      },
      {
        id: 'shortages-3',
        type: 'paragraph',
        content:
          "This doesn't mean all GLP-1 compounding is prohibited. It means pharmacies generally can't mass-produce copies of commercially available approved products just because they're cheaper. For an individual patient, compounding may still be appropriate — for instance, when a provider determines that a commercially available product can't meet that patient's specific medical needs.",
      },
      {
        id: 'shortages-4',
        type: 'paragraph',
        content:
          "There's also a rule change in progress worth knowing about. On April 30, 2026, the FDA proposed excluding semaglutide, tirzepatide, and liraglutide from the 503B bulks list — the mechanism that lets large outsourcing facilities compound from bulk ingredients. The agency said it found no clinical need for these three. The public comment period closed on July 30, 2026, and the FDA hasn't announced when it will issue a final determination.",
      },
      {
        id: 'shortages-5',
        type: 'paragraph',
        content:
          "Two things to keep straight if you see headlines about this. The proposal targets 503B outsourcing facilities, which is where large-scale compounding happens; patient-specific compounding under 503A operates under different rules. And a proposal isn't a final rule — as of this writing, nothing has been finalized.",
      },
      {
        id: 'shortages-6',
        type: 'paragraph',
        // emphasis: true,
        content:
          "The practical takeaway: the shortage-era landscape is gone. A compounded GLP-1 should be prescribed because there's a medical reason for it, not because it's the cheaper version.",
      },

      // ---------- Is Compounded Safe? ----------
      {
        id: 'safety',
        type: 'heading',
        content: 'Is Compounded Safe?',
      },
      {
        id: 'safety-1',
        type: 'paragraph',
        content: "There's no clean yes or no.",
      },
      {
        id: 'safety-2',
        type: 'paragraph',
        content:
          "Compounding is an established practice. But because compounded products don't go through FDA approval, everything downstream carries more weight — the pharmacy, the ingredients, the formulation, how it's prepared and stored, how it ships, and how clearly the dosing is explained.",
      },
      {
        id: 'safety-3',
        type: 'paragraph',
        content:
          'The FDA has reported problems with compounded GLP-1 products specifically: dosing errors, incorrect or misleading labels, improper refrigeration in transit, and questions about where some ingredients came from.',
      },
      {
        id: 'safety-4',
        type: 'paragraph',
        content:
          'Which is why the pharmacy and the prescriber matter as much as the molecule.',
      },

      // ---------- Dosing Is Where People Actually Get Hurt ----------
      {
        id: 'dosing',
        type: 'heading',
        content: 'Dosing Is Where People Actually Get Hurt',
      },
      {
        id: 'dosing-1',
        type: 'paragraph',
        content: 'This is the part worth slowing down for.',
      },
      {
        id: 'dosing-2',
        type: 'paragraph',
        content:
          'Approved injectables usually come in pens with defined doses. Some compounded products come in a vial, and you draw the dose into a syringe yourself. Different pharmacies use different concentrations.',
      },
      {
        id: 'dosing-3',
        type: 'paragraph',
        content:
          "So your prescription might be written in milligrams, while your syringe is marked in units. Those aren't the same thing, and the conversion depends entirely on the concentration of your specific vial.",
      },
      {
        id: 'dosing-4',
        type: 'paragraph',
        // emphasis: true,
        content:
          'Never assume that 10 units from one vial equals 10 units from another. The FDA has received reports of patients accidentally taking too much compounded semaglutide because of exactly this kind of **measurement error**.',
      },
      {
        id: 'dosing-5',
        type: 'paragraph',
        content:
          'Before you inject anything compounded, make sure you know your dose in mg, the concentration of your vial, exactly how much to draw up, how often to take it, and when your dose is supposed to increase. If any of that is unclear, call your provider or pharmacy first — not after.',
      },
      {
        id: 'dosing-6',
        type: 'highlight',
        content:
          'Apsu connects patients with licensed U.S. providers who can walk through your dose, your concentration, and how to draw it — in Chinese or English, before your first injection.',
      },

      // ---------- Two Questions Worth Asking ----------
      {
        id: 'questions',
        type: 'heading',
        content: 'Two Questions Worth Asking About the Product Itself',
      },
      {
        id: 'questions-1',
        type: 'paragraph',
        content:
          "Which form of semaglutide is it? FDA-approved products use the base form. The FDA has warned that some compounded products use semaglutide sodium or semaglutide acetate instead. Those are different active ingredients, and the FDA has said it isn't aware of a lawful basis for using them in compounding. Just ask: what form of semaglutide is in this?",
      },
      {
        id: 'questions-2',
        type: 'paragraph',
        content:
          "If it's oral or sublingual, what's the formulation? Approved oral semaglutide exists now — Rybelsus for type 2 diabetes, and Wegovy tablets for weight management in certain adults. But these are purpose-built formulations, not injectable semaglutide put into a pill. Wegovy tablets, for example, include an absorption-enhancing ingredient that helps semaglutide get through the digestive system. A compounded oral or sublingual product may work differently, and shouldn't be assumed to deliver the same absorption or results. Ask what formulation it is and what evidence supports it.",
      },

      // ---------- Cost ----------
      {
        id: 'cost',
        type: 'heading',
        content: "Cost, and Why It Shouldn't Be the Whole Decision",
      },
      {
        id: 'cost-1',
        type: 'paragraph',
        content:
          'Cost is usually what starts this comparison. Brand-name GLP-1s can be expensive without insurance, and coverage depends on your plan, your diagnosis, and the specific drug. Some plans require prior authorization; some patients qualify for manufacturer savings programs.',
      },
      {
        id: 'cost-2',
        type: 'paragraph',
        content:
          "Compounded medications are typically out of pocket, and prices vary a lot by pharmacy and formulation. Sometimes they're cheaper. That's a real consideration — it just shouldn't be the only one.",
      },

      // ---------- Before You Start ----------
      {
        id: 'checklist',
        type: 'heading',
        content: 'Before You Start: What to Check',
      },
      {
        id: 'checklist-1',
        type: 'paragraph',
        content: 'Whichever direction you go, these are the things to confirm.',
      },
      {
        id: 'checklist-care',
        type: 'paragraph',
        content:
          '**About your care:**   Is a licensed provider reviewing your medical history? Will you get ongoing follow-up? Who do you contact about side effects or dosing questions?',
      },

      {
        id: 'checklist-care-1',
        type: 'bullet',
        content: 'Is a licensed provider reviewing your medical history?',
      },
      {
        id: 'checklist-care-2',
        type: 'bullet',
        content: 'Will you get ongoing follow-up?',
      },
      {
        id: 'checklist-care-3',
        type: 'bullet',
        content: 'Who do you contact about side effects or dosing questions?',
      },
      {
        id: 'checklist-medication',
        type: 'paragraph',
        content:
          "**About the medication:** Which pharmacy is preparing it, and is it licensed in your state? What's the exact active ingredient and concentration? What's your dose in mg, how do you take it, and how should it be stored? ",
      },
      {
        id: 'checklist-med-1',
        type: 'bullet',
        content:
          'Which pharmacy is preparing it, and is it licensed in your state?',
      },
      {
        id: 'checklist-med-2',
        type: 'bullet',
        content: "What's the exact active ingredient and concentration?",
      },
      {
        id: 'checklist-med-3',
        type: 'bullet',
        content:
          "What's your dose in mg, how do you take it, and how should it be stored?",
      },
      {
        id: 'checklist-warning',
        type: 'paragraph',
        // emphasis: true,
        content:
          'And be cautious of any company that skips the medical evaluation entirely, advertises "generic Ozempic" or "generic Wegovy," claims its compounded product is exactly the same as an approved medication, won\'t tell you which pharmacy is filling it, gives vague dosing instructions, ships an injectable warm when it needs refrigeration, or sells anything labeled "research use only" or "not for human consumption."',
      },
      {
        id: 'checklist-fda',
        type: 'paragraph',
        content:
          'The FDA has taken enforcement action against misleading marketing of compounded GLP-1s, including claims implying they carry the same approval or clinical evidence as brand-name products.',
      },

      // ---------- Which One Is Right for You ----------
      {
        id: 'right-choice',
        type: 'heading',
        content: 'Which One Is Right for You',
      },
      {
        id: 'right-choice-1',
        type: 'paragraph',
        content:
          "There's no universal answer. It depends on your medical history, your goals, your coverage, what you can afford, which approved treatments are available to you, and what your provider recommends.",
      },
      {
        id: 'right-choice-2',
        type: 'paragraph',
        content:
          "Brand-name products offer the strongest FDA-reviewed evidence and the most standardized manufacturing. Compounded medications can still have an appropriate role for certain patients — but they're different products, and they should be prescribed for a genuine medical reason, prepared by a properly licensed pharmacy, and used under real medical supervision.",
      },
      {
        id: 'right-choice-3',
        type: 'highlight',
        content:
          'Apsu connects patients with licensed U.S. providers who can walk through your dose, your concentration, and how to draw it — in Chinese or English, before your first injection.',
      },
      {
        id: 'right-choice-4',
        type: 'richText',
        // emphasis: true,
        content: 'Four things to carry with you: ',
      },
      {
        id: 'right-choice-4',
        type: 'paragraph',

        content:
          'Compounded GLP-1s are not FDA-approved brand-name medications. "Compounded" does not mean "generic." The provider, the pharmacy, the formulation, and the dosing instructions all matter. And before you start anything, know exactly what you\'re taking and how to take it safely.',
      },
      
      
      {
        id: 'right-choice-5',
        type: 'disclaimer',
        content:
          'This article is for educational purposes only and does not replace medical advice. Talk with a licensed healthcare professional about whether a GLP-1 medication is appropriate for you.',
      },
    ],
  },
];
