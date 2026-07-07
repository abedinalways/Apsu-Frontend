import type { FAQCategory } from '@/types/faq';

export const faqData: FAQCategory[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        id: 'membership-fee',
        question: 'Is there a membership or subscription fee?',
        answer:
          "No. Apsu has no membership and no subscription fee. You pay only for your medication, and that single price covers your consultation and shipping too. You're never charged just to keep an account open.",
      },
      {
        id: 'insurance-required',
        question: 'Do I need insurance to use Apsu?',
        answer:
          'No insurance is needed. Apsu is a direct-pay service, so there are no insurance forms, prior authorizations, or surprise bills to navigate.',
      },
      {
        id: 'guaranteed-prescription',
        question: 'Am I guaranteed to get a prescription?',
        answer:
          "No. A licensed provider decides whether a medication is safe and appropriate for you based on the information you share. If a provider determines that treatment isn't right for you, you won't be charged for medication.",
      },
      {
        id: 'states-available',
        question: 'Which states is Apsu available in?',
        answer: 'Apsu is currently available in all 50 states.',
      },
      {
        id: 'ongoing-care',
        question: 'What does ongoing care look like after I start?',
        answer:
          "Your care continues through periodic consultations with a licensed provider. As you keep going, you'll complete follow-up consultations — for example, when it's time to renew your prescription — where a provider reviews how your treatment is working and makes any adjustments. If something comes up in between, such as a side effect that concerns you, you can request a consultation to have it reviewed.",
      },
      {
        id: 'provider-language',
        question: 'Can I talk to my provider in a language other than English?',
        answer:
          "Yes. During your consultation — the secure back-and-forth messaging with your provider — Apsu offers built-in AI translation in 40+ languages. You can describe your symptoms, ask questions, and understand your provider's responses in your preferred language, so language doesn't get in the way of your care.",
      },
    ],
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    items: [
      {
        id: 'what-is-glp1',
        question: 'What is a GLP-1, and how does it work?',
        answer:
          'GLP-1 (glucagon-like peptide-1) is a hormone your body makes naturally that helps regulate appetite and blood sugar. GLP-1 medications mimic this hormone — they help you feel full sooner, stay full longer, and reduce food cravings. For many people, that makes it easier to eat less without constant hunger, which supports weight loss over time.',
      },
      {
        id: 'medications-offered',
        question: 'Which weight-loss medications does Apsu offer?',
        answer:
          'Apsu offers a compounded GLP-1 medication given as a once-weekly injection you administer yourself at home. Your provider will determine the right option and dose based on your health history, goals, and how your body responds.',
      },
      {
        id: 'dose-adjustment',
        question: 'Can my dose be adjusted over time?',
        answer:
          "Yes. GLP-1 treatment usually starts low and increases gradually. Your provider can adjust your dose based on how you're responding and tolerating the medication.",
      },
      {
        id: 'who-should-not-take',
        question: 'Who should not take a GLP-1?',
        answer:
          "GLP-1 medications aren't right for everyone. They're generally not recommended for people with a personal or family history of medullary thyroid carcinoma or multiple endocrine neoplasia syndrome type 2 (MEN2), a history of pancreatitis, or who are pregnant or breastfeeding. This is exactly what your provider screens for during your intake — so it's important to answer questions honestly and completely.",
      },
      {
        id: 'already-on-glp1',
        question: "I'm already on a GLP-1, can I continue or switch to Apsu?",
        answer:
          'In many cases, yes. Share your current medication and dose during your intake, and your provider will review whether you can continue without starting over. The goal is a smooth transition, not a reset.',
      },
      {
        id: 'compounded-glp1',
        question: 'What is a compounded GLP-1, and is it safe?',
        answer:
          "Compounded medications are prepared by licensed U.S. compounding pharmacies. A compounded GLP-1 contains the same active ingredient as brand-name versions, but compounded drugs are not reviewed and approved by the FDA as finished products the way brand-name medications are. Your provider will discuss whether a compounded GLP-1 is appropriate for you and answer questions about how it's made and handled.",
      },
    ],
  },
  {
    id: 'birth-control',
    title: 'Birth Control',
    items: [
      {
        id: 'price-includes',
        question: 'Does the price include the consultation and shipping?',
        answer:
          'Yes. Your birth control price covers the provider consultation and shipping.',
      },
      {
        id: 'age-requirement',
        question: 'Is there an age requirement?',
        answer: 'You must be 18 or older to use Apsu.',
      },
      {
        id: 'switch-birth-control',
        question: 'Can I switch from my current birth control?',
        answer:
          "Yes. Tell us what you're currently using during intake, and your provider can help you switch and explain how to transition safely so you stay protected.",
      },
      {
        id: 'common-side-effects-bc',
        question: 'What are the common side effects?',
        answer:
          'Side effects vary by method and person. With hormonal birth control, some people notice spotting between periods, nausea, breast tenderness, or mood changes, especially in the first few months as the body adjusts. Many of these ease over time. If side effects are bothering you, a follow-up consultation can help, there are usually other options to try.',
      },
    ],
  },
  {
    id: 'sleep',
    title: 'Sleep',
    items: [
      {
        id: 'sleep-treatment',
        question: 'What kind of sleep treatment does Apsu offer?',
        answer:
          'Apsu helps with trouble falling or staying asleep. A licensed provider reviews your sleep history and, when appropriate, may prescribe a non-controlled prescription sleep medication, and will also suggest practical changes to your sleep routine. The aim is the smallest amount of medication that helps, paired with better sleep habits, rather than long-term reliance on sleeping pills.',
      },
      {
        id: 'habit-forming',
        question: 'Are the medications habit-forming?',
        answer:
          "No. The sleep medications Apsu prescribes are non-controlled and non-habit-forming. Many of the best-known sleeping pills, such as zolpidem (Ambien), eszopiclone (Lunesta), and benzodiazepines, are controlled substances that can lead to dependence, so Apsu doesn't prescribe them through the platform.",
      },
      {
        id: 'common-side-effects-sleep',
        question: 'What are the common side effects?',
        answer:
          "Side effects depend on the specific medication, but can include next-day drowsiness, grogginess, or dry mouth. Your provider will review what to watch for with whatever they prescribe, and you can reach out if something doesn't feel right.",
      },
      {
        id: 'see-doctor-in-person',
        question: 'When should I see a doctor in person instead?',
        answer:
          "If you have signs that point to a sleep disorder needing hands-on evaluation, such as loud snoring with pauses in breathing, gasping awake, severe daytime sleepiness, or sleep problems that don't improve, your provider may recommend an in-person visit or a sleep study.",
      },
      {
        id: 'medication-interaction',
        question: 'Will it interact with my other medications?',
        answer:
          'Possibly. List all the medications and supplements you take during your intake. Your provider checks for interactions before prescribing anything for sleep.',
      },
      {
        id: 'refills-support',
        question: 'Can I get refills and ongoing support?',
        answer:
          'Yes. Through follow-up consultations, a provider can review how your treatment is working, renew your prescription when appropriate, and adjust it as needed.',
      },
    ],
  },
];
