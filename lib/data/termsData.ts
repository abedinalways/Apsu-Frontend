export type TermsSection = {
  id: string;
  title: string;
  sidebarTitle?: string;
  content: string;
  serial?: number;
};

export const termsData: TermsSection[] = [
  {
    id: 'acceptance-of-terms',
    serial: 1,
    title: 'Acceptance of Terms',
    sidebarTitle: 'Acceptance of Terms',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">By accessing or using Apsu's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
      <p class="mb-4 text-[#3b3b3c] text-[18px]">These terms constitute a legally binding agreement between you and Apsu regarding your use of our platform and services.</p>
      <p class="text-[#3b3b3c] text-[18px]">We may update these terms from time to time. Your continued use of our services after changes are posted constitutes your acceptance of the updated terms.</p>
    `,
  },
  {
    id: 'eligibility',
    serial: 2,
    title: 'Eligibility',
    sidebarTitle: 'Eligibility',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">You must be at least 18 years old to use Apsu's services. By using our platform, you represent and warrant that you meet this age requirement.</p>
      <p class="mb-4 text-[#3b3b3c] text-[18px]">You must also be a resident of a state where Apsu operates. Our services are currently available in all 50 states.</p>
      <p class="text-[#3b3b3c] text-[18px]">You agree to provide accurate, current, and complete information during the registration process and to update such information to maintain its accuracy.</p>
    `,
  },
  {
    id: 'services-description',
    serial: 3,
    title: 'Services Description',
    sidebarTitle: 'Services Description',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">Apsu is a technology platform that connects patients with independent, licensed healthcare providers. We facilitate online consultations and prescribe medications when appropriate.</p>
      <p class="mb-4 text-[#3b3b3c] text-[18px]">Our services include:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-[#3b3b3c] text-[18px]">
        <li>Online health consultations with licensed providers</li>
        <li>Prescription medications when clinically appropriate</li>
        <li>Medication delivery to your door</li>
        <li>Ongoing care and follow-up consultations</li>
      </ul>
      <p class="text-[#3b3b3c] text-[18px]">Apsu does not practice medicine or pharmacy. All medical decisions are made by licensed healthcare providers.</p>
    `,
  },
  {
    id: 'user-responsibilities',
    serial: 4,
    title: 'User Responsibilities',
    sidebarTitle: 'User Responsibilities',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">You are responsible for:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-[#3b3b3c] text-[18px]">
        <li>Providing accurate and complete health information during consultations</li>
        <li>Following your provider's recommendations and instructions</li>
        <li>Taking medications as prescribed</li>
        <li>Reporting any side effects or concerns to your provider promptly</li>
        <li>Maintaining the confidentiality of your account credentials</li>
      </ul>
      <p class="mb-4 text-[#3b3b3c] text-[18px]">Failure to provide accurate health information may result in inappropriate treatment and could be harmful to your health.</p>
    `,
  },
  {
    id: 'intellectual-property',
    serial: 5,
    title: 'Intellectual Property',
    sidebarTitle: 'Intellectual Property',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">All content on the Apsu platform, including text, graphics, logos, images, and software, is the property of Apsu or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
      <p class="mb-4 text-[#3b3b3c] text-[18px]">You may not reproduce, distribute, modify, or create derivative works from any content on our platform without our express written permission.</p>
      <p class="text-[#3b3b3c] text-[18px]">Apsu, the Apsu logo, and all related trademarks are the property of Apsu, Inc.</p>
    `,
  },
  {
    id: 'limitation-of-liability',
    serial: 6,
    title: 'Limitation of Liability',
    sidebarTitle: 'Limitation of Liability',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">To the maximum extent permitted by law, Apsu shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill.</p>
      <p class="mb-4 text-[#3b3b3c] text-[18px]">Our total liability to you for any claims arising from or related to these terms or your use of our services shall not exceed the amount you paid us in the twelve months preceding the claim.</p>
      <p class="text-[#3b3b3c] text-[18px]">Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other matter that cannot be excluded by law.</p>
    `,
  },
  {
    id: 'termination',
    serial: 7,
    title: 'Termination',
    sidebarTitle: 'Termination',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">We may terminate or suspend your account and access to our services at our sole discretion, without prior notice, for any reason, including but not limited to breach of these terms.</p>
      <p class="mb-4 text-[#3b3b3c] text-[18px]">Upon termination, your right to use our services will immediately cease. All provisions of these terms which by their nature should survive termination shall survive, including but not limited to warranty disclaimers, indemnification, and limitations of liability.</p>
      <p class="text-[#3b3b3c] text-[18px]">You may also terminate your account at any time by contacting our customer support team.</p>
    `,
  },
  {
    id: 'contact-information',
    serial: 8,
    title: 'Contact Information',
    sidebarTitle: 'Contact Information',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">If you have any questions about these Terms of Service, please contact us:</p>
      <ul class="list-none pl-0 mb-4 space-y-2 text-[#3b3b3c] text-[18px]">
        <li><strong class="font-semibold text-[#111]">Email:</strong> support@apsu.com</li>
        <li><strong class="font-semibold text-[#111]">Phone:</strong> 1-800-APSU-CARE</li>
        <li><strong class="font-semibold text-[#111]">Address:</strong> 123 Healthcare Way, Suite 100, San Francisco, CA 94102</li>
      </ul>
      <p class="text-[#3b3b3c] text-[18px]">We will make every effort to respond to your inquiry within 2 business days.</p>
    `,
  },
];