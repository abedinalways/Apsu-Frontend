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

  // ---------- 2nd Blog: Birth Control Pills vs. the Shot ----------
  {
    id: 2,
    slug: 'healthy-evening-habits',
    title: 'Birth Control Pills vs. the Shot: What\'s the Difference?',
    category: 'Birth Control',
    author: 'Apsu Health',
    date: '20 Jan 2026',
    readTime: '6 mins read',
    heroImage: '/images/blogDetails/hero.png',

    summary: [
      { id: 'what-they-are', title: 'What They Are' },
      { id: 'effectiveness', title: 'Effectiveness: The Gap Is About Memory, Not Medicine' },
      { id: 'period-changes', title: 'How Your Period Might Change' },
      { id: 'weight-acne-mood', title: 'Weight, Acne, and Mood' },
      { id: 'bone-health', title: 'Bone Health and the Shot' },
      { id: 'getting-pregnant', title: 'Getting Pregnant Later' },
      { id: 'provider', title: 'What to Tell Your Provider' },
      { id: 'cost-privacy', title: 'Cost, Privacy, and Travel' },
      { id: 'choosing', title: 'Choosing' },
    ],

    content: [
      // ---------- Introduction ----------
      {
        id: 'intro-1',
        type: 'paragraph',
        content:
          'Both prevent pregnancy well. The real difference is how much control you keep.',
      },
      {
        id: 'intro-2',
        type: 'paragraph',
        content:
          'A pill is a decision you make every day, and you can stop any time. A shot is a decision you make four times a year — and once it\'s in, you can\'t take it back. Everything that follows, from bleeding patterns to how fast fertility returns, largely comes down to that.',
      },

      // ---------- What They Are ----------
      {
        id: 'what-they-are',
        type: 'heading',
        content: 'What They Are',
      },
      {
        id: 'what-they-are-1',
        type: 'paragraph',
        content:
          'The pill isn\'t one medication. **Combined pills** contain estrogen and progestin; **progestin-only pills** contain no estrogen. Dosing schedules, side effects, and medical restrictions differ between them. Most need a prescription, though Opill, a progestin-only pill, is available over the counter in the U.S. — which can matter if cost or privacy is a concern for you.',
      },
      {
        id: 'what-they-are-2',
        type: 'paragraph',
        content:
          'The shot usually means **DMPA**, a progestin-only injection that protects against pregnancy for about 13 weeks. It\'s typically given by a healthcare professional, though a self-administered version is sometimes an option with a provider\'s support.',
      },
      {
        id: 'what-they-are-3',
        type: 'paragraph',
        content:
          'Both work mainly by preventing ovulation. Neither protects against HIV or other STIs — that\'s true regardless of your relationship status, so condoms are worth using alongside either method. Most U.S. campus health centers offer STI testing at low or no cost.',
      },

      // ---------- Effectiveness ----------
      {
        id: 'effectiveness',
        type: 'heading',
        content: 'Effectiveness: The Gap Is About Memory, Not Medicine',
      },
      {
        id: 'effectiveness-1',
        type: 'paragraph',
        content:
          'Used perfectly, both are over 99% effective. In real life, pills come in around **93%** and the shot around **96%**. That gap isn\'t because the pill is medically weaker. It\'s because there\'s more to forget — a missed dose, a late pack, or taking a progestin-only pill outside its time window can all reduce protection. The shot asks less of you day to day.',
      },
      {
        id: 'effectiveness-2',
        type: 'paragraph',
        content:
          'So the honest question is: would you rather manage this yourself every day, or arrange it a few times a year?',
      },
      {
        id: 'effectiveness-3',
        type: 'paragraph',
        content:
          'Pills tend to suit people who already take a daily medication or keep a predictable routine. The shot tends to suit people who don\'t. But the shot isn\'t effort-free — you still have to book the next injection on time, which takes planning if you travel, study abroad, or go home over breaks.',
      },
      {
        id: 'effectiveness-4',
        type: 'highlight',
        content:
          'Apsu connects patients with licensed U.S. providers who can help you match a method to your history and your schedule — including if you\'ve been on one and want to switch.',
      },

      // ---------- How Your Period Might Change ----------
      {
        id: 'period-changes',
        type: 'heading',
        content: 'How Your Period Might Change',
      },
      {
        id: 'period-changes-1',
        type: 'paragraph',
        content:
          'Combined pills usually make periods lighter, more predictable, and less painful. Some schedules let you reduce or skip periods entirely. Progestin-only pills often cause spotting or irregular bleeding, especially in the first few months.',
      },
      {
        id: 'period-changes-2',
        type: 'paragraph',
        content:
          'The shot causes irregular bleeding most often of all. Many users spot frequently at first; over time, periods may become very light or stop. If your period stops on hormonal birth control, blood isn\'t accumulating inside you. The uterine lining simply stays thin, so there\'s little to shed.',
      },
      {
        id: 'period-changes-3',
        type: 'paragraph',
        content:
          'You can stop the pill whenever you want — it\'s safe at any point. But most providers suggest finishing the pack you\'re on rather than stopping partway. Stopping mid-pack usually triggers bleeding within a couple of days and can make it take longer for your cycle to settle back into a rhythm. Progestin-only pills tend to cause less of this than combined pills.',
      },
      {
        id: 'period-changes-4',
        type: 'paragraph',
        content:
          'Contact a provider if bleeding is very heavy, lasts more than a week, starts suddenly after a stable pattern, shows up unexpectedly in the middle of a pack, or comes with severe pain.',
      },

      // ---------- Weight, Acne, and Mood ----------
      {
        id: 'weight-acne-mood',
        type: 'heading',
        content: 'Weight, Acne, and Mood',
      },
      {
        id: 'weight-acne-mood-1',
        type: 'paragraph',
        content:
          'Most pills aren\'t clearly linked to significant weight gain, though bloating, appetite changes, or fluid retention happen for some people. The shot has a stronger association with weight gain — but experiences vary widely, and plenty of users notice little change.',
      },
      {
        id: 'weight-acne-mood-2',
        type: 'paragraph',
        content:
          'Certain combined pills can improve acne. Progestin-only methods may improve it, worsen it, or do nothing.',
      },
      {
        id: 'weight-acne-mood-3',
        type: 'paragraph',
        content:
          'Mood changes are one of the most commonly discussed effects and one of the least settled — studies disagree, and individual experience varies a lot. If your mood shifts noticeably after starting or switching, that\'s worth raising with a provider rather than waiting it out.',
      },
      {
        id: 'weight-acne-mood-4',
        type: 'paragraph',
        content:
          'Other possible effects: headaches, nausea, breast tenderness, shifts in sexual desire, and spotting. Many settle after a few months.',
      },
      {
        id: 'weight-acne-mood-5',
        type: 'paragraph',
        // emphasis: true,
        content:
          'Get medical attention promptly for chest pain, difficulty breathing, one-sided leg swelling, severe new headaches, vision changes, very heavy bleeding, or a serious worsening of mood.',
      },

      // ---------- Bone Health and the Shot ----------
      {
        id: 'bone-health',
        type: 'heading',
        content: 'Bone Health and the Shot',
      },
      {
        id: 'bone-health-1',
        type: 'paragraph',
        content:
          'The shot can temporarily lower bone mineral density while you\'re using it, and carries an **FDA boxed warning** about long-term use. That warning doesn\'t mean everyone must stop after two years. The decision weighs your pregnancy risk, available alternatives, health history, and bone-health risk factors. Healthy young users don\'t normally need routine bone-density testing.',
      },
      {
        id: 'bone-health-2',
        type: 'paragraph',
        content:
          'Tell your provider about osteoporosis, an eating disorder, frequent fractures, any condition affecting bone health, or medications that can weaken bone.',
      },

      // ---------- Getting Pregnant Later ----------
      {
        id: 'getting-pregnant',
        type: 'heading',
        content: 'Getting Pregnant Later',
      },
      {
        id: 'getting-pregnant-1',
        type: 'paragraph',
        content:
          'After stopping pills, fertility usually returns fairly quickly — ovulation can restart before your first natural period, so pregnancy is possible soon after.',
      },
      {
        id: 'getting-pregnant-2',
        type: 'paragraph',
        content:
          'The shot works differently. It keeps acting after the injection and can\'t be removed. Ovulation may not return for several months, and for some people it takes a year or more to conceive after the last shot. That\'s a delay, not infertility. Neither method causes permanent infertility. But if you might want to be pregnant within the next year, the pill gives you more flexibility.',
      },

      // ---------- What to Tell Your Provider ----------
      {
        id: 'provider',
        type: 'heading',
        content: 'What to Tell Your Provider',
      },
      {
        id: 'provider-1',
        type: 'paragraph',
        content:
          'Estrogen-containing pills may not be appropriate if you have **migraine with aura**, a history of blood clots or stroke, certain heart or liver conditions, uncontrolled high blood pressure, some forms of breast cancer, or if you smoke and are 35 or older.',
      },
      {
        id: 'provider-2',
        type: 'paragraph',
        content:
          'Migraines don\'t automatically rule out the pill — the type of migraine matters, as does whether the pill contains estrogen. Progestin-only pills and the shot are often options when estrogen isn\'t, though they carry their own considerations.',
      },
      {
        id: 'provider-3',
        type: 'paragraph',
        content:
          'Also mention seizure medications, tuberculosis drugs like rifampin, certain HIV medications, and St. John\'s wort. Some interfere with birth control pills. You don\'t normally need a pelvic exam just to start either method. Blood pressure is usually checked before an estrogen-containing pill.',
      },

      // ---------- Cost, Privacy, and Travel ----------
      {
        id: 'cost-privacy',
        type: 'heading',
        content: 'Cost, Privacy, and Travel',
      },
      {
        id: 'cost-privacy-1',
        type: 'paragraph',
        content:
          'Pill consultations often work over telehealth; the shot usually requires an in-person visit. Insurance coverage varies — some plans cover contraception at no cost, others charge for the consultation, medication, or administration.',
      },
      {
        id: 'cost-privacy-2',
        type: 'paragraph',
        content:
          'One thing worth knowing if you\'re on a parent\'s or partner\'s plan: an **explanation of benefits (EOB)** may be sent to the policyholder, and it can list the provider, date, and a general description of the service. Privacy rules vary by plan and state, so call the insurer beforehand if confidentiality matters to you.',
      },
      {
        id: 'cost-privacy-3',
        type: 'paragraph',
        content:
          'For travel, ask whether your plan allows a multi-month or vacation refill, and keep pills in your carry-on in the original packaging. Across time zones, keep the gap between doses close to normal — timing is stricter for some progestin-only pills. If you\'re on the shot, check your next injection date before booking. And if you move states, a telehealth provider may not be able to keep prescribing unless licensed where you now live.',
      },
      {
        id: 'cost-privacy-4',
        type: 'paragraph',
        content:
          'International students without a regular provider can ask their school health center about contraceptive services, coverage, language support, and confidential care.',
      },

      // ---------- Choosing ----------
      {
        id: 'choosing',
        type: 'heading',
        content: 'Choosing',
      },
      {
        id: 'choosing-1',
        type: 'paragraph',
        content:
          'The pill may fit if you can take something daily, want more predictable periods, might want to get pregnant soon, prefer to stop on your own terms, or want help with acne, cramps, or heavy bleeding.',
      },
      {
        id: 'choosing-2',
        type: 'paragraph',
        content:
          'The shot may fit if daily medication isn\'t realistic for you, you\'d rather deal with birth control a few times a year, you\'re comfortable with unpredictable bleeding, you\'re not planning a pregnancy soon, you can\'t use estrogen, or you\'d rather not keep pills where others might see them.',
      },
      {
        id: 'choosing-3',
        type: 'paragraph',
        // emphasis: true,
        content:
          'Neither is better in the abstract. The right one is whichever you\'ll actually use.',
      },
      {
        id: 'choosing-4',
        type: 'highlight',
        content:
          'Apsu connects patients with licensed U.S. providers who can help you match a method to your history and your schedule — including if you\'ve been on one and want to switch.',
      },
      {
        id: 'choosing-disclaimer',
        type: 'disclaimer',
        content:
          'This article is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Talk with a qualified healthcare professional before starting, stopping, or changing any contraceptive method.',
      },
    ],
  },

  // ---------- 3rd Blog: Understanding Prescription Sleep Medications ----------
  {
    id: 3,
    slug: 'language-barriers-healthcare',
    title: 'Understanding Prescription Sleep Medications: Types and How They Work',
    category: 'Sleep',
    author: 'Apsu Health',
    date: '20 Jan 2026',
    readTime: '7 mins read',
    heroImage: '/images/blogDetails/hero.png',

    summary: [
      { id: 'i-cant-sleep', title: '"I Can\'t Sleep" Can Mean Different Things' },
      { id: 'main-groups', title: 'The Main Groups of Prescription Sleep Medications' },
      { id: 'z-drugs', title: '1. Z-Drugs' },
      { id: 'benzodiazepines', title: '2. Benzodiazepines' },
      { id: 'orexin', title: '3. Orexin Receptor Antagonists' },
      { id: 'melatonin', title: '4. Melatonin Receptor Agonist' },
      { id: 'antidepressants', title: '5. Low-Dose Doxepin and Other Sedating Antidepressants' },
      { id: 'other-options', title: '6. Other Off-Label Options' },
      { id: 'off-label', title: 'A Note on Off-Label Use and OTC Products' },
      { id: 'appointment', title: 'Before Your Appointment: What to Have Ready' },
      { id: 'next-day', title: 'Next-Day Effects, Duration, and What Medication Can\'t Do' },
      { id: 'when-to-talk', title: 'When Should You Talk to a Healthcare Provider?' },
      { id: 'key-takeaways', title: 'Key Takeaways' },
    ],

    content: [
      // ---------- Introduction ----------
      {
        id: 'intro-1',
        type: 'paragraph',
        content:
          'In this guide, we\'ll explain the main groups of prescription sleep medications, how they differ, and what to discuss with a healthcare provider before deciding whether medication is appropriate. One thing to know upfront: **prescription sleep medications are not all the same**. Some mainly help you fall asleep; others help you stay asleep. Some quiet the brain\'s wakefulness signals, while others produce a broader sedating effect.',
      },
      {
        id: 'intro-2',
        type: 'paragraph',
        content:
          'The right choice depends on your **sleep pattern**, **health history**, **other medications**, and **daily schedule** — and on what\'s actually causing the problem.',
      },

      // ---------- "I Can't Sleep" Can Mean Different Things ----------
      {
        id: 'i-cant-sleep',
        type: 'heading',
        content: '"I Can\'t Sleep" Can Mean Different Things',
      },
      {
        id: 'i-cant-sleep-1',
        type: 'paragraph',
        content:
          'Before talking about medication, it helps to pin down what\'s happening at night. **Trouble falling asleep**, **waking repeatedly**, **waking too early**, **irregular hours**, or enough hours that still don\'t feel like enough. It may last a week or months.',
      },
      {
        id: 'i-cant-sleep-2',
        type: 'paragraph',
        content:
          'These differences matter. A medication that acts quickly and wears off quickly is a different tool from one that stays active longer. Insomnia can also be a symptom of something else. **Anxiety**, **depression**, **sleep apnea**, **restless legs**, **chronic pain**, **substance use**, and an **out-of-sync body clock** can all interfere with sleep. This last issue can be especially common when your schedule regularly spans North America and Asia. Simply making you drowsy doesn\'t treat the underlying cause.',
      },

      // ---------- The Main Groups ----------
      {
        id: 'main-groups',
        type: 'heading',
        content: 'The Main Groups of Prescription Sleep Medications',
      },
      {
        id: 'gaba-intro',
        type: 'paragraph',
        content:
          'First, a word about **GABA**: GABA is your brain\'s main "slow down" signal — when it binds a nerve cell, that cell becomes harder to activate. The medications below that involve GABA don\'t add any; they make the GABA you already have work harder, less like pressing the brake for you than pressing harder on a brake your foot is already on.',
      },
      {
        id: 'gaba-consequences',
        type: 'paragraph',
        content:
          'That explains three things: alcohol hits the same system, so combining them is dangerous rather than just extra sedating; the brain adapts to repeated pressure, which is **tolerance**; and removing that pressure suddenly tips the balance the other way, which is **rebound insomnia** and **withdrawal**.',
      },

      // ---------- 1. Z-Drugs ----------
      {
        id: 'z-drugs',
        type: 'heading',
        content: '1. Z-Drugs',
      },
      {
        id: 'z-drugs-1',
        type: 'paragraph',
        content:
          'Zolpidem, eszopiclone, and zaleplon strengthen GABA signaling, fairly selectively on the receptors tied to sedation. Depending on the drug, they help with **falling asleep**, **staying asleep**, or both. Expect possible morning drowsiness, slower reaction time, memory problems, and tolerance — worth taking seriously if you drive or have early classes.',
      },
      {
        id: 'z-drugs-warning',
        type: 'paragraph',
        // emphasis: true,
        content:
          'The most important warning: all three carry an **FDA boxed warning** for rare but serious complex sleep behaviors — sleepwalking, eating, or driving while not fully awake. Serious injuries and deaths have occurred, and alcohol raises the risk.',
      },

      // ---------- 2. Benzodiazepines ----------
      {
        id: 'benzodiazepines',
        type: 'heading',
        content: '2. Benzodiazepines',
      },
      {
        id: 'benzodiazepines-1',
        type: 'paragraph',
        content:
          'Some, like **temazepam**, are prescribed for short-term insomnia, often when anxiety is also present. They boost GABA more broadly than Z-drugs, which is why they also ease anxiety and relax muscles. Next-day sleepiness, falls, memory problems, tolerance, and physical dependence can develop even when taken exactly as prescribed.',
      },
      {
        id: 'benzodiazepines-warning',
        type: 'paragraph',
        // emphasis: true,
        content:
          'The most important warning: **never stop suddenly** without your provider\'s guidance — abrupt discontinuation can trigger serious withdrawal, including seizures. Combining with alcohol or other sedatives can cause dangerous breathing problems.',
      },

      // ---------- 3. Orexin Receptor Antagonists ----------
      {
        id: 'orexin',
        type: 'heading',
        content: '3. Orexin Receptor Antagonists',
      },
      {
        id: 'orexin-1',
        type: 'paragraph',
        content:
          'Suvorexant, lemborexant, and daridorexant block **orexin**, one of the brain\'s "stay awake" signals, rather than sedating you — a different mechanism entirely. They can help with falling or staying asleep. Common complaints are daytime sleepiness, vivid dreams, and sleep paralysis. Not for people with narcolepsy. Newer, but still controlled substances, with risks of dependence and next-day impairment.',
      },

      // ---------- 4. Melatonin Receptor Agonist ----------
      {
        id: 'melatonin',
        type: 'heading',
        content: '4. Melatonin Receptor Agonist',
      },
      {
        id: 'melatonin-1',
        type: 'paragraph',
        content:
          'Ramelteon acts on the same receptors involved in your response to melatonin, mainly helping with **falling asleep**. It\'s not a controlled substance and isn\'t associated with dependence — unusual among the options here. Possible dizziness, tiredness, and some drug interactions. Because it works with your sleep-wake system, timing matters: no pill cancels out an irregular schedule or overnight calls home.',
      },

      // ---------- 5. Low-Dose Doxepin ----------
      {
        id: 'antidepressants',
        type: 'heading',
        content: '5. Low-Dose Doxepin and Other Sedating Antidepressants',
      },
      {
        id: 'antidepressants-1',
        type: 'paragraph',
        content:
          'Doxepin is **FDA-approved for insomnia** at doses far lower than for depression, specifically for trouble staying asleep. Trazodone and mirtazapine are prescribed off-label; mirtazapine is approved for depression. Doxepin and mirtazapine both block **histamine**, a wakefulness signal.',
      },
      {
        id: 'antidepressants-2',
        type: 'paragraph',
        content:
          'Providers are more likely to consider this group when you also have a condition it treats. Expect sleepiness, dizziness when standing, and dry mouth; with mirtazapine, increased appetite and weight gain are common enough that some people stop for that reason alone. And drowsiness alone doesn\'t make a good insomnia treatment — evidence for trazodone and mirtazapine in chronic insomnia is limited.',
      },
      {
        id: 'antidepressants-warning',
        type: 'paragraph',
        // emphasis: true,
        content:
          'The most important warning: antidepressants carry an **FDA boxed warning** for increased risk of suicidal thoughts and behaviors in patients under 25 — relevant to trazodone and mirtazapine, and to you if you\'re a student or young adult. Low-dose doxepin (Silenor) is an exception; higher-dose doxepin isn\'t. Contact your provider right away if your mood or behavior changes after starting.',
      },

      // ---------- 6. Other Off-Label Options ----------
      {
        id: 'other-options',
        type: 'heading',
        content: '6. Other Off-Label Options',
      },
      {
        id: 'other-options-1',
        type: 'paragraph',
        content:
          'Hydroxyzine (Atarax, Vistaril) is a prescription antihistamine, related to over-the-counter diphenhydramine. It\'s FDA-approved for anxiety, itching, and sedation around anesthesia — not insomnia, though it\'s used off-label when sleeplessness comes with anxiety. It isn\'t a controlled substance. Beyond next-day drowsiness and dry mouth, it can affect heart rhythm: **QT prolongation** has been reported, and it\'s contraindicated if you have a prolonged QT interval, so tell your provider about any antibiotics or antidepressants you take. Evidence for insomnia specifically is thin — a 2023 review found only five eligible studies.',
      },
      {
        id: 'other-options-2',
        type: 'paragraph',
        content:
          'Nerve-pain drugs and antipsychotics show up occasionally when sleep problems accompany another condition. They aren\'t standard treatments for uncomplicated insomnia. Antipsychotics in particular should never be treated as casual sleep aids just because they cause drowsiness.',
      },

      // ---------- A Note on Off-Label Use ----------
      {
        id: 'off-label',
        type: 'heading',
        content: 'A Note on Off-Label Use and OTC Products',
      },
      {
        id: 'off-label-1',
        type: 'paragraph',
        content:
          'Some of these drugs are FDA-approved for insomnia; others are approved for something else and prescribed off-label — legal and common, but it doesn\'t mean the FDA has confirmed they work for sleep. And "over the counter" or "natural" doesn\'t automatically mean safer: antihistamines cause next-day grogginess and confusion, the long-term safety of regular melatonin use isn\'t established, and supplement contents can vary from the label.',
      },

      // ---------- Before Your Appointment ----------
      {
        id: 'appointment',
        type: 'heading',
        content: 'Before Your Appointment: What to Have Ready',
      },
      {
        id: 'appointment-1',
        type: 'paragraph',
        content:
          'There\'s no single best sleep medication for everyone. Come prepared to answer:',
      },
      {
        id: 'appointment-questions',
        type: 'bullet',
        content: 'Do you struggle to fall asleep, stay asleep, or both? For how long?',
      },
      {
        id: 'appointment-questions-2',
        type: 'bullet',
        content: 'What time do you need to wake up — and do you drive, commute, or take morning exams?',
      },
      {
        id: 'appointment-questions-3',
        type: 'bullet',
        content: 'What\'s your work, school, and travel schedule, including trips home?',
      },
      {
        id: 'appointment-questions-4',
        type: 'bullet',
        content: 'What else do you take — medications, supplements, melatonin, Chinese herbal products, cannabis, alcohol, caffeine, and anything bought outside the U.S.?',
      },
      {
        id: 'appointment-questions-5',
        type: 'bullet',
        content: 'Are you pregnant or breastfeeding? Any liver, kidney, breathing, or mental health conditions? Any history of substance use problems?',
      },
      {
        id: 'appointment-note',
        type: 'paragraph',
        content:
          'Include the things you might not think "count" — herbal products, medications from home. They affect interactions and which options are safe for you.',
      },
      {
        id: 'appointment-tradeoff',
        type: 'paragraph',
        // emphasis: true,
        content:
          'Why it matters: a longer-acting medication may help with nighttime awakenings but cause more morning grogginess; a shorter-acting one wears off sooner but may not keep you asleep. That trade-off is why the choice should come from an individual evaluation, not a symptom list found online.',
      },

      // ---------- Next-Day Effects ----------
      {
        id: 'next-day',
        type: 'heading',
        content: 'Next-Day Effects, Duration, and What Medication Can\'t Do',
      },
      {
        id: 'next-day-1',
        type: 'paragraph',
        content:
          'Some sleep medications affect concentration, judgment, and reaction time the next morning — even when you feel fine. You may be less ready to drive, sit an exam, or make a big decision than you realize. Take medication only as prescribed, never someone else\'s, never with alcohol, and only when you have a full night ahead.',
      },
      {
        id: 'next-day-2',
        type: 'paragraph',
        content:
          'There\'s also no universal treatment length. Your provider should periodically review whether the medication is still working and still needed, whether side effects or dose creep have appeared, and whether the original cause has been addressed. Some drugs lose effect over time; others cause **rebound insomnia** — temporarily worse sleep after stopping. Anything associated with dependence needs gradual tapering under medical guidance.',
      },
      {
        id: 'next-day-3',
        type: 'paragraph',
        content:
          'For chronic insomnia, major clinical guidelines recommend **cognitive behavioral therapy for insomnia (CBT-I)** as first-line treatment — a structured program that rebuilds the link between bed and sleep. It\'s more than "sleep hygiene," and it\'s sometimes combined with medication. A pill can make you drowsy, but it can\'t reset a body clock stuck between time zones or resolve ongoing stress on its own.',
      },

      // ---------- When Should You Talk ----------
      {
        id: 'when-to-talk',
        type: 'heading',
        content: 'When Should You Talk to a Healthcare Provider?',
      },
      {
        id: 'when-to-talk-1',
        type: 'paragraph',
        content: 'Consider a medical evaluation when:',
      },
      {
        id: 'when-to-talk-list',
        type: 'bullet',
        content: 'Sleep problems happen regularly or last for weeks or months',
      },
      {
        id: 'when-to-talk-list-2',
        type: 'bullet',
        content: 'Poor sleep affects school, work, mood, or memory',
      },
      {
        id: 'when-to-talk-list-3',
        type: 'bullet',
        content: 'You rely on medication, alcohol, cannabis, or antihistamines to sleep — or need more and more',
      },
      {
        id: 'when-to-talk-list-4',
        type: 'bullet',
        content: 'You snore loudly, gasp, or seem to stop breathing during sleep',
      },
      {
        id: 'when-to-talk-list-5',
        type: 'bullet',
        content: 'You fall asleep while driving, working, or in class',
      },
      {
        id: 'when-to-talk-urgent',
        type: 'paragraph',
        // emphasis: true,
        content:
          'Seek urgent help for severe breathing difficulty, fainting, suspected overdose, extreme confusion, suicidal thoughts, or injuries related to sleepwalking. If you\'re having thoughts of suicide, call or text **988 (Suicide & Crisis Lifeline)** in the U.S.',
      },

      // ---------- Key Takeaways ----------
      {
        id: 'key-takeaways',
        type: 'heading',
        content: 'Key Takeaways',
      },
      {
        id: 'key-takeaways-1',
        type: 'paragraph',
        content:
          'Prescription sleep medications work in different ways — some strengthen calming signals, some block wakefulness signals, and some work with your sleep-wake cycle. But a drug that makes you drowsy doesn\'t necessarily treat the cause of your insomnia.',
      },
      {
        id: 'key-takeaways-2',
        type: 'paragraph',
        content:
          'For chronic insomnia, **CBT-I** is the guideline-recommended first-line treatment, and medication is one tool rather than the whole plan. That said, used appropriately and reviewed regularly, medication can genuinely help the right patient — the key is having a licensed provider tailor the choice to your history, your schedule, and everything else you take.',
      },
      {
        id: 'key-takeaways-3',
        type: 'highlight',
        content:
          'Not sure whether medication is the right next step? Apsu can connect you with a licensed provider who\'ll look at your sleep pattern, your schedule, and everything else you\'re taking. Some of those conversations end in a prescription. Many end in a better plan that doesn\'t involve one.',
      },
      {
        id: 'key-takeaways-disclaimer',
        type: 'disclaimer',
        content:
          'This article is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Prescription sleep medications may cause serious side effects and may interact with alcohol, cannabis, supplements, and other medications. Do not start, stop, or change a prescription medication without speaking with a qualified healthcare professional.',
      },
    ],
  },

  // ---------- 4th Blog: How Do GLP-1 Medications Help You Lose Weight? ----------
  {
    id: 4,
    slug: 'online-healthcare',
    title: 'How Do GLP-1 Medications Help You Lose Weight?',
    category: 'Weight Loss',
    author: 'Apsu Health',
    date: '20 Jan 2026',
    readTime: '8 mins read',
    heroImage: '/images/blog/img30.jpg',

    summary: [
      { id: 'start-hormone', title: 'Start with the hormone you already have' },
      { id: 'where-weight-loss-comes', title: 'Where the weight loss actually comes from' },
      { id: 'stomach-nausea', title: 'The stomach part and the nausea myth' },
      { id: 'blood-sugar', title: 'The blood sugar piece' },
      { id: 'what-numbers-look', title: 'What the numbers look like' },
      { id: 'what-happens-when-stop', title: 'What happens when you stop' },
      { id: 'changed-2026', title: 'Two things that changed in 2026' },
      { id: 'compounded-meaning', title: 'What "compounded" means' },
      { id: 'safety', title: 'Safety, briefly but seriously' },
      { id: 'asian-in-north-america', title: 'If you\'re Asian in North America' },
    ],

    content: [
      // ---------- Introduction ----------
      {
        id: 'intro-1',
        type: 'paragraph',
        content:
          'You\'ve probably heard the theories: they melt fat, they shut off hunger completely, they simply make you too nauseous to eat. The reality is more specific and more interesting. Understanding what these medications actually do will change what you expect from treatment, and what you ask your doctor.',
      },

      // ---------- Start with the hormone you already have ----------
      {
        id: 'start-hormone',
        type: 'heading',
        content: 'Start with the hormone you already have',
      },
      {
        id: 'start-hormone-1',
        type: 'paragraph',
        content:
          'GLP-1 stands for glucagon-like peptide-1. Your gut releases it every time you eat. It nudges your pancreas to release insulin when blood sugar climbs, slows how fast food leaves your stomach, and reaches the parts of your brain that decide you\'ve had enough.',
      },
      {
        id: 'start-hormone-2',
        type: 'paragraph',
        content:
          'You already run this system. The problem is that natural GLP-1 breaks down within minutes. **Semaglutide** and **tirzepatide** are built to solve exactly that. They activate the same receptors but resist the enzyme that would normally clear them, so one weekly injection keeps the signal running for days. That\'s the whole trick. Not a new mechanism — an old one, held open.',
      },
      {
        id: 'start-hormone-3',
        type: 'paragraph',
        content:
          'Tirzepatide adds a second target, **GIP**, another gut hormone involved in appetite and insulin signaling. **Two pathways** instead of one. That difference shows up in the trial averages, which we covered in the first article.',
      },

      // ---------- Where the weight loss actually comes from ----------
      {
        id: 'where-weight-loss-comes',
        type: 'heading',
        content: 'Where the weight loss actually comes from',
      },
      {
        id: 'where-weight-loss-comes-1',
        type: 'paragraph',
        content:
          'FDA labeling describes these drugs as acting in brain regions that regulate appetite and food intake, and that\'s the honest center of gravity here. People eat less because eating less stops feeling like a fight. Portions that used to leave you unsatisfied now finish the job. The pull toward the calorie-dense stuff softens.',
      },
      {
        id: 'where-weight-loss-comes-2',
        type: 'paragraph',
        content:
          'A lot of patients describe the "food noise" quieting down — the running mental commentary about what\'s in the fridge, what you\'ll order, whether you should. It isn\'t a clinical term and it isn\'t in any label, but it\'s reported often enough, and consistently enough, that it\'s worth naming.',
      },
      {
        id: 'where-weight-loss-comes-3',
        type: 'paragraph',
        content:
          'What it isn\'t: **total hunger deletion**. Most people still get hungry. And the size of the effect varies enormously. Some patients describe the change as dramatic; others notice something subtle. Neither reaction means the medication is or isn\'t working.',
      },

      // ---------- The stomach part and the nausea myth ----------
      {
        id: 'stomach-nausea',
        type: 'heading',
        content: 'The stomach part and the nausea myth',
      },
      {
        id: 'stomach-nausea-1',
        type: 'paragraph',
        content:
          'These medications slow gastric emptying. Food sits in your stomach longer, so a smaller meal registers as enough. Both the Wegovy and Zepbound labels note this effect. It\'s also why the side effects cluster where they do: nausea, constipation, diarrhea, bloating, reflux, abdominal pain. These show up in the labels as the most common adverse reactions, and they\'re the main reason doses start low and climb slowly. Two corrections worth making:',
      },
      {
        id: 'stomach-nausea-2',
        type: 'paragraph',
        content:
          'First, this effect **fades**. Your stomach adapts over months, which is why gastric emptying can\'t be the main engine of long-term weight loss — the appetite changes in the brain are doing more of that work. Anyone who says the drug "paralyzes your stomach" has skipped the part where your stomach adjusts.',
      },
      {
        id: 'stomach-nausea-3',
        type: 'paragraph',
        // emphasis: true,
        content:
          'Second, and more important: nausea is **not** how the medication works. It\'s a side effect, not a mechanism. Feeling sick is not evidence of progress, and it\'s not a price you\'re supposed to pay. Persistent nausea is a reason to call your prescriber.',
      },

      // ---------- The blood sugar piece ----------
      {
        id: 'blood-sugar',
        type: 'heading',
        content: 'The blood sugar piece',
      },
      {
        id: 'blood-sugar-1',
        type: 'paragraph',
        content:
          'These drugs help your body release insulin when blood sugar is high, and dial down a hormone that pushes it up. The insulin effect is **glucose-dependent**. It activates when your blood sugar is elevated, not around the clock. That\'s why hypoglycemia risk is generally low when these medications are used alone, and why it rises meaningfully if you also take insulin or a sulfonylurea.',
      },
      {
        id: 'blood-sugar-2',
        type: 'paragraph',
        content:
          'Better glucose control is real and valuable, especially with type 2 diabetes, prediabetes, or insulin resistance. But it improves the metabolic environment you\'re working in. It doesn\'t do the work for you.',
      },

      // ---------- What the numbers look like ----------
      {
        id: 'what-numbers-look',
        type: 'heading',
        content: 'What the numbers look like',
      },
      {
        id: 'what-numbers-look-1',
        type: 'paragraph',
        content:
          'In the trials FDA reviewed for approval:',
      },
      {
        id: 'numbers-semaglutide',
        type: 'bullet',
        content:
          'Semaglutide 2.4 mg (Wegovy) produced average weight loss of about **15%** over 68 weeks in adults without diabetes, and about **16%** in a trial that added intensive lifestyle therapy.',
      },
      {
        id: 'numbers-tirzepatide',
        type: 'bullet',
        content:
          'Tirzepatide (Zepbound) produced averages of roughly **15% to 21%** over 72 weeks, depending on dose.',
      },
      {
        id: 'numbers-diabetes',
        type: 'bullet',
        content:
          'In both drugs\' trials that included people with type 2 diabetes, average loss was smaller — closer to **10–15%**.',
      },
      {
        id: 'numbers-context',
        type: 'paragraph',
        // emphasis: true,
        content:
          'Three things to hold onto. An average is a midpoint, not a forecast; individual results in these trials ranged widely in both directions. Participants also received lifestyle support, so the numbers reflect medication plus counseling. And that last bullet matters: if you have type 2 diabetes, the honest expectation is somewhat less weight loss than the headline figures.',
      },

      // ---------- What happens when you stop ----------
      {
        id: 'what-happens-when-stop',
        type: 'heading',
        content: 'What happens when you stop',
      },
      {
        id: 'what-happens-when-stop-1',
        type: 'paragraph',
        content:
          'A systematic review published in The BMJ in January 2026 pooled 37 studies covering 9,341 adults. After people stopped weight-management medication, weight came back at an average of about **0.4 kg per month**. For the newer drugs specifically — semaglutide and tirzepatide — regain ran faster, closer to **0.8 kg per month**. Improvements in blood pressure, cholesterol, and HbA1c faded too.',
      },
      {
        id: 'what-happens-when-stop-2',
        type: 'paragraph',
        content:
          'You\'ll see headlines saying people return to their starting weight in about 1.7 years. For semaglutide and tirzepatide, the post-stopping evidence only extends about a year. The direction of the finding is solid. The precise timeline is a model.',
      },
      {
        id: 'what-happens-when-stop-3',
        type: 'paragraph',
        content:
          'What it means practically: appetite returns when the medication is no longer there to suppress it. That\'s not dependency, and it\'s not a character failure. It\'s the same reason blood pressure climbs back when someone stops taking a blood-pressure medication. Obesity is increasingly treated as a chronic condition, and the 2026 ADA Standards of Care reflect that — patients who respond well are generally expected to continue treatment rather than stop at a goal weight. Not everyone regains everything. But planning for "I\'ll take this for six months and be done" is planning against the evidence.',
      },

      // ---------- Two things that changed in 2026 ----------
      {
        id: 'changed-2026',
        type: 'heading',
        content: 'Two things that changed in 2026',
      },
      {
        id: 'changed-2026-1',
        type: 'paragraph',
        content:
          'The suicidal-ideation warning is gone. In January 2026, after reviewing 91 placebo-controlled trials covering more than 107,000 patients, the FDA concluded there was no increased risk of suicidal ideation or behavior with GLP-1 medications, and asked manufacturers to remove that warning from the Wegovy, Zepbound, and Saxenda labels. If you read something scary about this in 2024, it has been superseded. (Any concerning mood change is still worth telling your doctor about — that\'s true of any medication.)',
      },
      {
        id: 'changed-2026-2',
        type: 'paragraph',
        content:
          'Injections are no longer the only route. Oral versions have been approved through late 2025 and 2026 — which one fits you is a conversation to have with your doctor. It also means "which GLP-1?" is a more individual question than it was a year ago.',
      },

      // ---------- What "compounded" means ----------
      {
        id: 'compounded-meaning',
        type: 'heading',
        content: 'What "compounded" means',
      },
      {
        id: 'compounded-meaning-1',
        type: 'paragraph',
        content:
          'Compounding is an established part of American pharmacy practice. A **503A compounding pharmacy** prepares a medication for one specific patient, on the prescription of a licensed clinician, under state pharmacy board oversight. It exists because mass-produced products don\'t fit every patient.',
      },
      {
        id: 'compounded-meaning-2',
        type: 'paragraph',
        content:
          'One thing any honest provider will tell you directly: compounded medications are **not FDA-approved**. The FDA reviews brand-name and generic drugs before they reach the market; it does not review compounded preparations the same way. "Compounded" also isn\'t a synonym for "generic" — a generic is FDA-approved. That\'s not a reason to panic. It\'s a reason to know what you\'re taking and who stands behind it.',
      },
      {
        id: 'compounded-meaning-3',
        type: 'paragraph',
        content:
          'Note too that every trial figure in this article comes from FDA-approved products at studied doses, so nobody can promise a compounded preparation reproduces those exact numbers. What you can insist on is **transparency**. Ask any provider — including us — three questions:',
      },
      {
        id: 'compounded-questions',
        type: 'bullet',
        content: 'Is this an FDA-approved product or a compounded preparation?',
      },
      {
        id: 'compounded-questions-2',
        type: 'bullet',
        content: 'Which licensed pharmacy prepares it?',
      },
      {
        id: 'compounded-questions-3',
        type: 'bullet',
        content: 'What\'s the clinical reasoning behind that choice?',
      },
      {
        id: 'compounded-meaning-4',
        type: 'paragraph',
        content:
          'A real provider answers all three without flinching. A WeChat seller, an overseas shipper, or a website with no named prescriber will not — and that tells you what you need to know.',
      },

      // ---------- Safety, briefly but seriously ----------
      {
        id: 'safety',
        type: 'heading',
        content: 'Safety, briefly but seriously',
      },
      {
        id: 'safety-1',
        type: 'paragraph',
        content:
          'Most side effects are digestive and manageable. Some symptoms are not, and warrant prompt medical attention:',
      },
      {
        id: 'safety-list',
        type: 'bullet',
        content: 'Severe or persistent abdominal pain (possible pancreatitis or gallbladder disease)',
      },
      {
        id: 'safety-list-2',
        type: 'bullet',
        content: 'Vomiting that won\'t stop, or signs of dehydration',
      },
      {
        id: 'safety-list-3',
        type: 'bullet',
        content: 'Serious allergic reaction — swelling, trouble breathing',
      },
      {
        id: 'safety-list-4',
        type: 'bullet',
        content: 'Significant low blood sugar, especially if you also take insulin or a sulfonylurea',
      },
      {
        id: 'safety-2',
        type: 'paragraph',
        content:
          'Semaglutide and tirzepatide carry a **boxed warning** for thyroid C-cell tumors and should not be used by anyone with a personal or family history of medullary thyroid carcinoma or MEN2. They aren\'t recommended in pregnancy or while trying to conceive.',
      },

      // ---------- If you're Asian in North America ----------
      {
        id: 'asian-in-north-america',
        type: 'heading',
        content: 'If you\'re Asian in North America',
      },
      {
        id: 'asian-in-north-america-1',
        type: 'paragraph',
        content:
          'One fact that too many clinics skip: people of Asian descent often develop type 2 diabetes and metabolic problems at a lower BMI than other groups, in part because of a tendency toward **visceral fat** — the kind that accumulates around organs while the scale still looks unremarkable. The American Diabetes Association has recommended since 2015 that Asian Americans be screened for diabetes starting at a BMI of **23**, rather than 25. That\'s a reason to have an earlier metabolic conversation with a clinician.',
      },
      {
        id: 'asian-in-north-america-2',
        type: 'paragraph',
        content:
          'It is not, by itself, a qualification for weight-management medication — those are different decisions. "Asian" also flattens enormous variation across East, South, and Southeast Asian populations. Treat it as a prompt to ask questions, not as a category you\'ve been sorted into.',
      },
      {
        id: 'asian-in-north-america-3',
        type: 'paragraph',
        content:
          'A few practical realities for our readers:',
      },
      {
        id: 'asian-practical-1',
        type: 'bullet',
        content:
          'Eating less makes nutrition harder, not easier. When your meals are built on rice, noodles, takeout, and whatever\'s open at midnight during finals, a suppressed appetite makes it very easy to fall short on protein, fiber, and fluids. Smaller portions raise the stakes on what\'s in them.',
      },
      {
        id: 'asian-practical-2',
        type: 'bullet',
        content:
          'Insurance is a wall. Coverage for weight-management medication is limited for many students, people on OPT, and plenty of employer plans. Find out before you start, not after.',
      },
      {
        id: 'asian-practical-3',
        type: 'bullet',
        content:
          'Be honest with yourself about why. There\'s real cultural pressure toward thinness in our communities, and it\'s worth separating from medical need. These are prescription drugs with boxed warnings, not a cosmetic shortcut for a few pounds you don\'t medically need to lose.',
      },
      {
        id: 'asian-in-north-america-4',
        type: 'paragraph',
        content:
          'If you\'re considering GLP-1 treatment, the first step is understanding whether these medications are appropriate for your health goals. A licensed healthcare provider can review your medical history, weight goals, and treatment options.',
      },
      {
        id: 'asian-in-north-america-5',
        type: 'paragraph',
        content: 'Start your consultation',
      },
      {
        id: 'sources-4',
        type: 'paragraph',
        content:
          'Sources: FDA prescribing information for Wegovy (semaglutide) and Zepbound (tirzepatide); FDA, "FDA Requests Removal of Suicidal Behavior and Ideation Warning from GLP-1 Receptor Agonist Medications," January 13, 2026; West S, Scragg J, Aveyard P, et al. "Weight regain after cessation of medication for weight management: systematic review and meta-analysis." BMJ 2026;392:e085304; Hsu WC, et al. "BMI Cut Points to Identify At-Risk Asian Americans for Type 2 Diabetes Screening." Diabetes Care 2015;38(1):150–158; American Diabetes Association, Standards of Care in Diabetes — 2026.',
      },
      {
        id: 'final-disclaimer',
        type: 'disclaimer',
        content:
          'This article is for general education only. It is not medical advice, diagnosis, or treatment. GLP-1 medications are prescription drugs and should be used under the care of a licensed healthcare professional who can evaluate your individual situation. Compounded medications are not FDA-approved and are not reviewed by the FDA for safety, effectiveness, or manufacturing quality.',
      },
    ],
  },

  // ---------- 5th Blog: Semaglutide vs. Tirzepatide ----------
  {
    id: 5,
    slug: 'semaglutide-vs-tirzepatide',
    title: 'Semaglutide vs. Tirzepatide: What\'s the Difference?',
    category: 'Weight Loss',
    author: 'Apsu Health',
    date: '20 Jan 2026',
    readTime: '9 mins read',
    heroImage: '/images/blog/img37.jpg',

    summary: [
      { id: 'intro', title: 'Introduction' },
      { id: 'what-is-semaglutide', title: 'What is semaglutide?' },
      { id: 'what-is-tirzepatide', title: 'What is tirzepatide?' },
      { id: 'study-results', title: 'How do the study results compare?' },
      { id: 'similarities', title: 'Main similarities' },
      { id: 'differences', title: 'Main differences' },
      { id: 'candidate', title: 'Who might be a candidate?' },
      { id: 'compounded', title: 'Where compounded GLP-1 medications may fit' },
      { id: 'safety', title: 'Safety overview' },
      { id: 'faq', title: 'FAQ' },
    ],

    content: [
      // ---------- Introduction ----------
      {
        id: 'intro-1',
        type: 'paragraph',
        content:
          'GLP-1 medications have become one of the most talked-about topics in weight management. You may have seen different medication or brand names online, and it can be hard to tell what is actually different and what is just branding. The two medication names people usually compare are **semaglutide** and **tirzepatide**. They are related, but they are not the same drug.',
      },
      {
        id: 'intro-2',
        type: 'paragraph',
        content:
          'Both may affect appetite, fullness, digestion, and blood sugar. Both require a medical evaluation. Neither should be treated like a supplement, a quick fix, or a cosmetic product.',
      },
      {
        id: 'intro-3',
        type: 'paragraph',
        content:
          'Semaglutide works mainly through the **GLP-1 pathway**, while tirzepatide works through both the **GIP and GLP-1 pathways**. GLP-1 (glucagon-like peptide-1) is a hormone your body releases after eating. It signals fullness, slows stomach emptying, and helps regulate blood sugar. GIP is another post-meal hormone that also supports blood sugar control. Tirzepatide acts on both pathways, which may be one reason it has shown larger average weight-loss results in some studies.',
      },
      {
        id: 'intro-4',
        type: 'paragraph',
        content:
          'In clinical trials, both medications were associated with meaningful average weight loss when used with diet and physical activity. Tirzepatide has shown larger average weight-loss numbers in some trials, but that does not automatically mean it is the better choice for every person.',
      },

      // ---------- What is semaglutide? ----------
      {
        id: 'what-is-semaglutide',
        type: 'heading',
        content: 'What is semaglutide?',
      },
      {
        id: 'semaglutide-1',
        type: 'paragraph',
        content:
          'Semaglutide is a **GLP-1 receptor agonist**. GLP-1 is a hormone involved in blood sugar regulation and appetite signaling. In weight-management use, the goal is not simply to make someone eat less for a few days; the medication is part of a longer treatment plan that usually includes nutrition changes, physical activity, and follow-up monitoring.',
      },
      {
        id: 'semaglutide-2',
        type: 'paragraph',
        content:
          'The FDA-approved semaglutide injection for chronic weight management is indicated as an addition to a reduced-calorie diet and increased physical activity for adults with obesity, or adults with overweight and at least one weight-related condition. The original FDA label describes a weekly injection dose-escalation schedule starting at 0.25 mg and increasing gradually to a 2.4 mg maintenance dose [1].',
      },
      {
        id: 'semaglutide-3',
        type: 'paragraph',
        content:
          'A practical point: not all semaglutide products are used in the same way. Even when products contain semaglutide, their approved uses, dosage forms, and dosing schedules may differ. A patient should not assume that one semaglutide product can be swapped for another without a clinician\'s direction.',
      },

      // ---------- What is tirzepatide? ----------
      {
        id: 'what-is-tirzepatide',
        type: 'heading',
        content: 'What is tirzepatide?',
      },
      {
        id: 'tirzepatide-1',
        type: 'paragraph',
        content:
          'Tirzepatide works on **two incretin pathways**: GIP and GLP-1. The FDA-approved tirzepatide injection for chronic weight management is indicated for adults with obesity, or adults with overweight and at least one weight-related condition. Tirzepatide is also used in other FDA-approved products for type 2 diabetes treatment [2,3].',
      },
      {
        id: 'tirzepatide-2',
        type: 'paragraph',
        content:
          'For weight-management use, tirzepatide is used together with a reduced-calorie diet and increased physical activity. The FDA label describes a starting injection dose of 2.5 mg once weekly for 4 weeks, followed by 5 mg once weekly. The dose may be increased gradually, usually in 2.5 mg increments after at least 4 weeks on the current dose, with 5 mg, 10 mg, or 15 mg used as maintenance doses for weight management [2].',
      },
      {
        id: 'tirzepatide-3',
        type: 'paragraph',
        content:
          'One extra safety point is especially relevant for many young women: tirzepatide can delay gastric emptying and may affect the absorption of oral medications. The FDA label advises females using oral contraceptives to switch to a non-oral contraceptive method or add a barrier method for 4 weeks after starting tirzepatide and for 4 weeks after each dose increase [2].',
      },

      // ---------- How do the study results compare? ----------
      {
        id: 'study-results',
        type: 'heading',
        content: 'How do the study results compare?',
      },
      {
        id: 'study-results-1',
        type: 'paragraph',
        content:
          'In FDA-reviewed studies, semaglutide injection was associated with average weight loss in the low-to-mid teens as a percentage of body weight, depending on the study population and treatment setting. Tirzepatide injection showed larger average weight-loss numbers in some FDA-reviewed studies, especially at higher maintenance doses [1,2].',
      },
      {
        id: 'study-results-2',
        type: 'paragraph',
        content:
          'However, these studies were not identical. They had different designs, durations, patient populations, diabetes status, dose schedules, and lifestyle programs. It is fair to say tirzepatide has shown larger average weight-loss numbers in some studies. It is not fair to say it is automatically safer, better tolerated, or the right option for every person.',
      },
      {
        id: 'study-results-3',
        type: 'paragraph',
        content:
          'Important context for compounded GLP-1 medications: The study results above come from FDA-reviewed clinical studies of FDA-approved products. Compounded semaglutide or tirzepatide has not been separately reviewed by the FDA for safety, effectiveness, or quality before marketing. That does not mean compounded treatment is never appropriate, but it does mean patients should not assume the exact same study results will apply to every compounded formulation, dose, or individual treatment plan. The safest approach is to use these medications only with proper medical screening, clear dosing instructions, pharmacy oversight, and follow-up monitoring.',
      },

      // ---------- Main similarities ----------
      {
        id: 'similarities',
        type: 'heading',
        content: 'Main similarities',
      },
      {
        id: 'similarities-1',
        type: 'paragraph',
        content:
          'Both medications are prescription-only treatments, not supplements. They work partly by slowing gastric emptying, so food leaves the stomach more slowly, and they share a similar side-effect profile: gastrointestinal symptoms such as nausea, vomiting, diarrhea, constipation, abdominal pain, indigestion, reflux, and burping are common. This is part of why the labels call for gradual dose escalation rather than starting at a higher dose [1,2].',
      },
      {
        id: 'similarities-2',
        type: 'paragraph',
        content:
          'Their labels also carry a boxed warning about thyroid C-cell tumors observed in rodents, and neither is recommended for people with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2 [1,2].',
      },
      {
        id: 'similarities-3',
        type: 'paragraph',
        content:
          'Beyond that, both prescribing informations note warnings or precautions for pancreatitis, gallbladder problems, kidney injury related to dehydration or volume depletion, low blood sugar when used with insulin or insulin secretagogues, diabetic retinopathy in people with type 2 diabetes, hypersensitivity reactions, and mood changes, depression, or suicidal thoughts or behavior [1,2,4].',
      },

      // ---------- Main differences ----------
      {
        id: 'differences',
        type: 'heading',
        content: 'Main differences',
      },
      {
        id: 'differences-table',
        type: 'table',
        tableData: {
          headers: ['Feature', 'Semaglutide', 'Tirzepatide'],
          rows: [
            ['Mechanism', 'GLP-1 receptor agonist (single pathway)', 'Activates both GIP and GLP-1 receptors (dual pathway)'],
            ['Weight-loss results', 'Clinically meaningful average weight loss.', 'Dual-pathway design may produce larger average weight-loss results in some studies; clinical decision still depends on the patient.'],
            ['Starting dose', '0.25 mg once weekly', '2.5 mg once weekly'],
            ['Dose escalation', 'Gradually increased to a 2.4 mg once-weekly maintenance dose.', 'Increased to 5 mg once weekly, with possible escalation to higher maintenance doses if clinically appropriate and tolerated.'],
            ['Oral-contraceptive warning', 'Also delays gastric emptying and may affect oral medications, but no specific contraception instruction in the FDA label.', 'FDA label includes a specific contraception instruction after initiation and each dose escalation.'],
          ],
        },
      },

      // ---------- Who might be a candidate? ----------
      {
        id: 'candidate',
        type: 'heading',
        content: 'Who might be a candidate?',
      },
      {
        id: 'candidate-1',
        type: 'paragraph',
        content:
          'For FDA-approved chronic weight-management use, the labels focus on adults with obesity, or adults with overweight and at least one weight-related condition. In practical terms, many clinicians evaluate body mass index, metabolic risk factors, current medications, past medical history, eating patterns, pregnancy plans, and whether the patient can commit to follow-up care [1,2,3].',
      },
      {
        id: 'candidate-2',
        type: 'paragraph',
        content:
          'It is important not to oversimplify this into \'only very visibly overweight people should care\' or \'anyone who wants to lose a few pounds can use it.\' Many Asian patients can develop metabolic risk at lower BMI levels than non-Asian populations. For example, CDC-recognized Diabetes Prevention Program eligibility uses BMI 23 or higher for Asian American adults, compared with 25 or higher for others. That is a prevention-program threshold, not a GLP-1 prescribing rule. It is best used as a reason to discuss metabolic health earlier, not as a promise of medication eligibility [6].',
      },

      // ---------- Where compounded GLP-1 medications may fit ----------
      {
        id: 'compounded',
        type: 'heading',
        content: 'Where compounded GLP-1 medications may fit',
      },
      {
        id: 'compounded-1',
        type: 'paragraph',
        content:
          'Compounded GLP-1 medications may be considered when a licensed clinician determines that a patient\'s needs cannot be met by an FDA-approved option or when an FDA-approved medication is not commercially available. For some patients, a compounded prescription may offer a more accessible or flexible treatment pathway, especially when care is coordinated through a clinician and a state-licensed pharmacy.',
      },
      {
        id: 'compounded-2',
        type: 'paragraph',
        content:
          'If you\'d like to explore whether this is appropriate for you, Apsu can connect you with a licensed clinician for an online intake and eligibility review.',
      },

      // ---------- Safety overview ----------
      {
        id: 'safety',
        type: 'heading',
        content: 'Safety overview',
      },
      {
        id: 'safety-1',
        type: 'paragraph',
        content:
          'Like all prescription medications, semaglutide and tirzepatide carry risks. This is a general overview only. The full safety information belongs with your clinician and in the FDA prescribing information.',
      },
      {
        id: 'safety-2',
        type: 'paragraph',
        content:
          '**Most common:** gastrointestinal effects like nausea, vomiting, diarrhea, and constipation, which is why doses are increased gradually.',
      },
      {
        id: 'safety-3',
        type: 'paragraph',
        content:
          '**Boxed warning:** both carry the FDA\'s most serious warning, about thyroid C-cell tumors in animal studies; not for people with a personal or family history of medullary thyroid carcinoma or MEN 2.',
      },
      {
        id: 'safety-4',
        type: 'paragraph',
        content:
          '**Other warnings:** pancreatitis, gallbladder, kidney, low blood sugar (with certain diabetes medications), and mood changes — all things your clinician will screen for.',
      },
      {
        id: 'safety-5',
        type: 'paragraph',
        content:
          '**Pregnancy and birth control:** both may cause fetal harm and should be stopped around pregnancy; tirzepatide can also reduce the effectiveness of oral contraceptives (see above).',
      },
      {
        id: 'safety-6',
        type: 'paragraph',
        content:
          'Contact your clinician promptly for severe abdominal pain, repeated vomiting, allergic-reaction symptoms, mood changes, pregnancy, or upcoming surgery.',
      },

      // ---------- FAQ ----------
      {
        id: 'faq',
        type: 'heading',
        content: 'FAQ',
      },
      {
        id: 'faq-1',
        type: 'paragraph',
        content: '**Are these medications stimulants or fat burners?**',
      },
      {
        id: 'faq-1-answer',
        type: 'paragraph',
        content:
          'No. They are incretin-based prescription medications. They are not the same as stimulant weight-loss drugs and should not be described as simple appetite suppressants.',
      },
      {
        id: 'faq-2',
        type: 'paragraph',
        content: '**Why do some patients consider compounded GLP-1 medications?**',
      },
      {
        id: 'faq-2-answer',
        type: 'paragraph',
        content:
          'Some patients may consider compounded GLP-1 medications because of access, availability, cost, or individualized treatment needs. The decision should be made with a licensed clinician, not based only on online ads or social media. Patients should also confirm that the prescription comes from a real medical evaluation and is filled by a state-licensed pharmacy.',
      },
      {
        id: 'faq-3',
        type: 'paragraph',
        content: '**Can I switch from one to the other?**',
      },
      {
        id: 'faq-3-answer',
        type: 'paragraph',
        content:
          'Possibly, but only with clinician guidance. Dose conversion is not one-to-one, and side effects, timing, medication history, and insurance coverage all matter.',
      },
      {
        id: 'faq-4',
        type: 'paragraph',
        content: '**What if I take birth control pills?**',
      },
      {
        id: 'faq-4-answer',
        type: 'paragraph',
        content:
          'This is especially important with tirzepatide. The FDA-approved tirzepatide label advises adding barrier contraception or switching to a non-oral contraceptive method for 4 weeks after starting tirzepatide and for 4 weeks after each dose increase [2].',
      },

      // ---------- CTA ----------
      {
        id: 'cta',
        type: 'highlight',
        content:
          'If you are considering GLP-1 treatment, Apsu can help you take the next step with a clinician-reviewed intake, eligibility review, and care coordination. The goal is not just to start a medication, but to understand your options, use treatment safely, and have support throughout the process.',
      },

      // ---------- Sources ----------
      {
        id: 'sources',
        type: 'heading',
        content: 'Sources',
      },
      {
        id: 'source-1',
        type: 'bullet',
        content:
          '[1] FDA prescribing information for semaglutide 2.4 mg injection for chronic weight management — https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf',
      },
      {
        id: 'source-2',
        type: 'bullet',
        content:
          '[2] FDA prescribing information for tirzepatide injection for chronic weight management — https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf',
      },
      {
        id: 'source-3',
        type: 'bullet',
        content:
          '[3] FDA approval announcement for tirzepatide injection for chronic weight management — https://www.fda.gov/news-events/press-announcements/fda-approves-new-medication-chronic-weight-management',
      },
      {
        id: 'source-4',
        type: 'bullet',
        content:
          '[4] FDA approval announcement for semaglutide cardiovascular-risk indication — https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-reduce-risk-serious-heart-problems-specifically-adults-obesity-or',
      },
      {
        id: 'source-5',
        type: 'bullet',
        content:
          '[5] FDA: Concerns with unapproved GLP-1 drugs used for weight loss — https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss',
      },
      {
        id: 'source-6',
        type: 'bullet',
        content:
          '[6] CDC National Diabetes Prevention Program eligibility — https://www.cdc.gov/diabetes/prevention/program-eligibility.html',
      },

      // ---------- Disclaimer ----------
      {
        id: 'final-disclaimer',
        type: 'disclaimer',
        content:
          'This article is for general education only. It is not medical advice, diagnosis, or treatment. GLP-1 medications are prescription drugs and should be used under the care of a licensed healthcare professional who can evaluate your individual situation. Compounded medications are not FDA-approved and are not reviewed by the FDA for safety, effectiveness, or manufacturing quality.',
      },
    ],
  },
];
