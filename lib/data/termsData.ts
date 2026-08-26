export type TermsSection = {
  id: string;
  title: string;
  sidebarTitle?: string;
  content: string;
  serial?: number;
};

export const termsData: TermsSection[] = [
  {
    id: 'introduction-and-scope',
    serial: 1,
    title: 'Introduction & scope',
    sidebarTitle: 'Introduction & scope',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">These Terms of Use (the “Terms”) are a binding agreement between you and Apsu. (“Apsu,” “we,” “us,” or “our”). They govern your access to and use of the Apsu website, applications, and related services (together, the “Services”).</p>
      <p class="text-grayColor1 text-[18px]">Apsu operates a technology platform that connects you with independent, licensed healthcare providers and licensed pharmacies. By accessing or using the Services, you agree to these Terms and to our Privacy Policy.</p>
    `,
  },
  {
    id: 'acceptance-of-these-terms',
    serial: 2,
    title: 'Acceptance of these Terms',
    sidebarTitle: 'Acceptance of these Terms',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">By creating an account, completing an intake, clicking “I agree” (or a similar control), or otherwise using any part of the Services, you confirm that you have read, understood, and accepted these Terms, including the arbitration provision in Section 22. Your use of the Services is also subject to all applicable laws and regulations.</p>
      <p class="text-grayColor1 text-[18px]">If you are using the Services on behalf of another person where permitted by law, you represent that you are authorized to accept these Terms on their behalf.</p>
    `,
  },
  {
    id: 'eligibility-and-availability',
    serial: 3,
    title: 'Eligibility & availability',
    sidebarTitle: 'Eligibility & availability',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">To use the Services, you must be at least 18 years old (or the age of majority in your state, if higher), be a resident of the United States, and be physically located in a U.S. state where the Services are offered. Apsu is currently available in all 50 U.S. states, though specific treatments may not be available everywhere and availability may change.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">You agree to provide accurate information about your identity and your physical location, and to use the Services only for yourself unless the law and an independent provider permit otherwise. Providers rely on this information to confirm they are licensed to treat you. Misrepresenting your age, identity, or location may result in suspension or termination of your access and may have legal consequences. Certain conditions may require in-person care; if a provider determines that telehealth is not appropriate for you, the Services may be unavailable for that need.</p>
      <p class="text-grayColor1 text-[18px]">The Services are intended for people located in the United States. If you access them from outside the United States, you do so on your own initiative and are responsible for complying with local laws.</p>
    `,
  },
  {
    id: 'what-apsu-is-and-is-not',
    serial: 4,
    title: 'What Apsu is and is not',
    sidebarTitle: 'What Apsu is and is not',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">Apsu is a technology and administrative platform. Apsu is not a medical provider, a medical group, or a pharmacy, and does not practice medicine or pharmacy. We do not employ the providers who treat you, we do not make clinical decisions, and we do not dispense medication.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">All clinical services are provided by independent, licensed healthcare providers, and all medications are dispensed by independent, licensed pharmacies. These providers and pharmacies are solely responsible for the medical and pharmacy services they deliver to you. Using the Services or paying Apsu does not by itself create a provider-patient relationship with Apsu; your provider-patient relationship is with the treating provider.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">Content on the Services is for general informational purposes and is not medical advice. It is not a substitute for evaluation, diagnosis, or treatment by a qualified provider.</p>
      <p class="text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Additional terms with providers and pharmacies.</strong> Because your care and medications come from independent providers and pharmacies, you may be asked to review and agree to their own terms, consents, and privacy notices (for example, a telehealth consent or a pharmacy's terms). Those agreements govern your relationship with that provider or pharmacy, even where the Apsu name or logo appears, and apply in addition to these Terms.</p>
    `,
  },
  {
    id: 'telehealth-consent',
    serial: 5,
    title: 'Telehealth consent',
    sidebarTitle: 'Telehealth consent',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">The Services are delivered through telehealth, which means you and a provider interact using electronic communications rather than in person. Depending on your needs, your state's requirements, and the provider's judgment, your consultation may be asynchronous, where you submit information and questions through the platform and a licensed provider reviews and responds, or synchronous, such as a video or phone visit. Some visits may involve both.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">Telehealth can improve access and convenience, but it has limitations. Because a provider may not physically examine you, assessments may be incomplete, and there is a possibility of delayed or inaccurate decisions or missed conditions. Technology may also fail or be interrupted. A provider may decide that an in-person visit is more appropriate and may decline to treat you or refer you elsewhere. Telehealth is not appropriate for emergencies.</p>
      <p class="text-grayColor1 text-[18px]">By using the Services, you acknowledge that you understand the nature, benefits, and limitations of telehealth and consent to receive care this way. You agree to provide accurate information, to participate from a private and secure setting, and not to record any consultation without consent except as allowed by law. Telehealth is subject to state and federal laws, which vary and may change.</p>
    `,
  },
  {
    id: 'no-guarantee-of-treatment',
    serial: 6,
    title: 'No guarantee of treatment',
    sidebarTitle: 'No guarantee of treatment',
    content: `
      <p class="text-grayColor1 text-[18px]">Completing an intake, creating an account, or submitting payment does not guarantee that you will be prescribed any medication or treatment. Whether to prescribe is solely the decision of an independent licensed provider, based on clinical judgment, the information you provide, and applicable law. If a provider determines that treatment is not appropriate for you, <span class="text-redColor">you will be refunded for your medication and shipping, minus the consultation fee.</span></p>
    `,
  },
  {
    id: 'prescriptions-and-compounded-medications',
    serial: 7,
    title: 'Prescriptions & compounded medications',
    sidebarTitle: 'Prescriptions & compounded medications',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">Products available through the Services require a valid prescription from a licensed provider. You cannot obtain a prescription product unless a provider reviews your information, determines the product is clinically appropriate, and issues a prescription.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Compounded medications.</strong> Some products offered through Apsu are compounded preparations made by licensed U.S. compounding pharmacies. Compounded medications are customized formulations and are not reviewed or approved by the U.S. Food and Drug Administration (FDA) for safety, effectiveness, or quality the way commercially manufactured, brand-name drugs are. No statement on the Services should be understood to claim that compounded medications have been evaluated or endorsed by the FDA. Your provider decides whether a compounded medication is appropriate for you.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">No controlled substances.</strong> Apsu does not facilitate the prescribing of controlled substances through the platform.</p>
      <p class="text-grayColor1 text-[18px]">Important risk and usage information for the medications offered through Apsu is provided separately. Please review our Medications Safety Information page and the information your provider and pharmacy give you.</p>
    `,
  },
  {
    id: 'pharmacy-fulfillment-and-shipping',
    serial: 8,
    title: 'Pharmacy, fulfillment & shipping',
    sidebarTitle: 'Pharmacy, fulfillment & shipping',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">Prescriptions are filled and dispensed by independent licensed pharmacies, which are solely responsible for dispensing, labeling, counseling, drug interactions, and compliance with pharmacy laws. Apsu helps coordinate fulfillment but does not control or direct a pharmacy's professional judgment.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">Shipping is included in the price of your medication. Delivery dates shown are estimates, not guarantees. Once a carrier delivers a package to the address you provide, risk of loss passes to you, so please provide an accurate, secure address. If a shipment is delayed, returned, or misdelivered because the address you provided was incorrect or incomplete, you may be responsible for the cost of reshipment. Some products require special handling (for example, cold-chain packaging or an adult signature on delivery). Apsu and its pharmacy partners are not responsible for delays caused by carriers, weather, or other events beyond their control.</p>
      <p class="text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Prescription products are final sale</strong> and cannot be returned once shipped, consistent with pharmacy law and patient-safety standards. If your order is mis-filled, damaged in transit, or affected by a recall, please contact us promptly so we can arrange an appropriate remedy, such as a replacement.</p>
    `,
  },
  {
    id: 'ai-translation',
    serial: 9,
    title: 'AI translation',
    sidebarTitle: 'AI translation',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">To help reduce language barriers, Apsu offers AI-assisted translation during the asynchronous consultation between you and your provider. This feature is provided as a convenience.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">You understand and agree that:</p>
      <div class="mb-4 space-y-3 text-grayColor1 text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_9_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_9_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>Automated translation may not be perfectly accurate, complete, or current, and may not capture nuance, idiom, or medical context.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_9_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_9_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>The English-language version of the Services and of these Terms is the official and controlling version. Translations are provided for convenience only, and in the event of any conflict, the English version governs.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_9_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_9_3)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>If anything is unclear, you should ask your provider for clarification before acting on it. Apsu and the providers do not warrant the accuracy of any translation and are not liable for losses arising from reliance on a translation, to the fullest extent permitted by law.</p>
        </div>
      </div>
    `,
  },
  {
    id: 'your-account-and-responsibilities',
    serial: 10,
    title: 'Your account & responsibilities',
    sidebarTitle: 'Your account & responsibilities',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">To use the Services, you must register and provide accurate, complete, and current information, and keep it up to date. You are responsible for keeping your login credentials confidential and for all activity under your account. Notify us promptly at support@apsuhealth.com if you believe your account has been compromised.</p>
      <p class="text-grayColor1 text-[18px]">You are responsible for the devices and internet access needed to use the Services. You acknowledge that Apsu may not be able to independently verify all information you provide, and that inaccurate or incomplete information can lead to delays or adverse outcomes. If we reasonably believe your information is false, incomplete, or compromised, we may suspend or terminate your account.</p>
    `,
  },
  {
    id: 'refunds',
    serial: 12,
    title: 'Refunds',
    sidebarTitle: 'Refunds',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">This section explains when you are eligible for a refund of amounts you pay Apsu. It does not change the independent providers' or pharmacies' own obligations.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">You are charged at checkout, before a provider reviews your information. If a provider determines that treatment is not appropriate for you, you will be refunded for your medication and shipping, minus the consultation fee.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Prescription products are final sale.</strong> Once a medication has been shipped it cannot be returned or refunded, consistent with pharmacy law and patient-safety standards (see Section 8). If your order is mis-filled, damaged in transit, or affected by a recall, contact us promptly and we will arrange an appropriate remedy, such as a replacement.</p>
      <p class="text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">How to request a refund.</strong> Contact us at support@apsuhealth.com with your order details. Approved refunds are issued to your original payment method within 14 business days.</p>
    `,
  },
  {
    id: 'acceptable-use',
    serial: 13,
    title: 'Acceptable use',
    sidebarTitle: 'Acceptable use',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">You agree to use the Services lawfully and only for their intended purpose. You will not:</p>
      <div class="mb-4 space-y-3 text-grayColor1 text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_13_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_13_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>provide false, misleading, or incomplete information, or misrepresent your identity, age, or location;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_13_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_13_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>use another person's account or share your credentials, or obtain medication for anyone other than the intended patient;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_13_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_13_3)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>upload or transmit content that is unlawful, harmful, infringing, or that contains malware;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_13_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_13_4)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>use bots, scrapers, or other automated means to access the Services, or attempt to reverse engineer, disrupt, overburden, or bypass the security of the Services;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_13_5" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_13_5)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>resell, sublicense, or commercially exploit the Services without our written permission, or use the Services to build a competing product; or</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_13_6" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_13_6)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>violate any applicable law or the rights of others.</p>
        </div>
      </div>
    `,
  },
  {
    id: 'intellectual-property',
    serial: 14,
    title: 'Intellectual property',
    sidebarTitle: 'Intellectual property',
    content: `
      <p class="text-grayColor1 text-[18px]">The Services and all of their content, features, software, design, text, graphics, logos, and trademarks (the “Apsu Content”) are owned by Apsu or its licensors and are protected by intellectual property laws. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal, non-commercial use. You may not copy, modify, distribute, reverse engineer, or create derivative works from the Apsu Content except as expressly permitted. All rights not expressly granted are reserved.</p>
    `,
  },
  {
    id: 'your-submissions',
    serial: 15,
    title: 'Your submissions',
    sidebarTitle: 'Your submissions',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">If you send us feedback, suggestions, or other non-medical materials (“Submissions”), you grant Apsu a non-exclusive, worldwide, royalty-free, perpetual, transferable, sublicensable license to use them to operate and improve the Services, without obligation to you.</p>
      <p class="text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Health information is excluded.</strong> This license does not apply to your protected health information (PHI) or other personal health information, which is collected, used, and disclosed only as permitted by law and as described in our Privacy Policy and any applicable privacy notices of the independent providers and pharmacies involved in your care. Where there is any conflict, those notices control over this Section.</p>
    `,
  },
  {
    id: 'third-party-links-and-services',
    serial: 16,
    title: 'Third-party links & services',
    sidebarTitle: 'Third-party links & services',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">The Services may link to or reference third-party websites, products, or services. We do not control and are not responsible for them, and a link is not an endorsement. Your use of any third-party site or service is at your own risk and subject to that third party's own terms and privacy policies.</p>
      <p class="text-grayColor1 text-[18px]">If a dispute arises between you and an independent provider, pharmacy, or other third party (rather than Apsu), you agree that Apsu has no obligation to resolve it, and you release Apsu from claims arising out of that dispute. If you are a California resident, you waive the protections of California Civil Code § 1542, which would otherwise preserve claims you do not know or suspect to exist at the time of the release; if you reside elsewhere, you waive any similar law in your state.</p>
    `,
  },
  {
    id: 'privacy-and-related-notices',
    serial: 17,
    title: 'Privacy & related notices',
    sidebarTitle: 'Privacy & related notices',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">Your use of the Services is also governed by separate documents, which are incorporated by reference:</p>
      <div class="mb-4 space-y-3 text-grayColor1 text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_17_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_17_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>Our Privacy Policy, describing how we collect and use your information; and</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_17_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_17_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="#3B3B3C" />
              </g>
            </svg>
          </span>
          <p>Our Medications Safety Information for the medications offered through Apsu.</p>
        </div>
      </div>
      <p class="text-grayColor1 text-[18px]">Please review these documents. By using the Services, you acknowledge that you have read and understood them.</p>
    `,
  },
  {
    id: 'electronic-communications-and-text-messages',
    serial: 18,
    title: 'Electronic communications & text messages',
    sidebarTitle: 'Electronic communications & text messages',
    content: `
      <p class="text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Electronic communications.</strong> By using the Services, you consent to receive communications from Apsu and the independent providers and pharmacies electronically — by email, text message, or through the platform — and you agree that these have the same legal effect as written communications. You are responsible for keeping your contact information current and for reading and responding to communications about your care. To the extent permitted by law, we are not responsible for losses arising from your failure to receive, read, or act on a communication.</p>
    `,
  },
  {
    id: 'disclaimer-of-warranties',
    serial: 19,
    title: 'Disclaimer of warranties',
    sidebarTitle: 'Disclaimer of warranties',
    content: `
      <p class="text-grayColor1 text-[18px]">TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICES AND ALL CONTENT, PRODUCTS, AND THIRD-PARTY GOODS AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. APSU DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR THAT ANY INFORMATION WILL BE ACCURATE, COMPLETE, OR RELIABLE. WHERE LAW REQUIRES CERTAIN MINIMUM WARRANTIES OR PROHIBITS THESE DISCLAIMERS, THOSE PROTECTIONS APPLY.</p>
    `,
  },
  {
    id: 'limitation-of-liability',
    serial: 20,
    title: 'Limitation of liability',
    sidebarTitle: 'Limitation of liability',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">TO THE FULLEST EXTENT PERMITTED BY LAW, APSU AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS OR DATA, ARISING OUT OF OR RELATING TO THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">APSU'S TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SERVICES WILL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNTS YOU PAID APSU IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).</p>
      <p class="text-grayColor1 text-[18px]">Apsu is not responsible for the acts, omissions, or clinical or professional judgment of the independent providers and pharmacies, or for outcomes arising from the inherent limitations of telehealth. These limitations do not apply where prohibited by law. Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.</p>
    `,
  },
  {
    id: 'indemnification',
    serial: 21,
    title: 'Indemnification',
    sidebarTitle: 'Indemnification',
    content: `
      <p class="text-grayColor1 text-[18px]">You agree to indemnify, defend, and hold harmless Apsu and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Services, your breach of these Terms, your violation of any law or the rights of a third party, or content you submit.</p>
    `,
  },
  {
    id: 'disputes-binding-arbitration-and-class-action-waiver',
    serial: 22,
    title: 'Disputes, binding arbitration & class action waiver',
    sidebarTitle: 'Disputes, binding arbitration & class action waiver',
    content: `
      <p class="mb-4 italic text-grayColor1 text-[18px]">Please read this section carefully — it affects your legal rights.</p>
      <p class="mb-4 text-grayColor1 text-[18px]">Most disputes between you and Apsu will be resolved by binding individual arbitration, not in court, and you and Apsu waive the right to a jury trial and to participate in any class action. You may still bring a qualifying claim in small-claims court. You can opt out of arbitration within 30 days of first accepting these Terms using the instructions below.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Informal resolution first.</strong> Before starting arbitration, you agree to send us a written notice of dispute describing the claim and the relief sought, and to try to resolve it informally for at least 45 days. Many disputes can be resolved this way.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Arbitration.</strong> If the dispute is not resolved, it will be settled by binding arbitration under its consumer arbitration rules, governed by the Federal Arbitration Act. Arbitration will take place in the county where you reside or another mutually agreed or remote location. The arbitrator decides the dispute, and the award may be entered in any court of competent jurisdiction.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Class action waiver.</strong> Claims may be brought only on an individual basis, not as a plaintiff or member of any class or representative proceeding. If you reside in California, nothing here prevents you from seeking public injunctive relief to the extent the law provides.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Exceptions.</strong> Either party may bring a qualifying individual claim in small-claims court, and either party may seek injunctive relief for intellectual-property misuse. Some claims may not be subject to arbitration under applicable law.</p>
      <p class="text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">How to opt out.</strong> To opt out of arbitration, send written notice within 30 days of first accepting these Terms to support@apsuhealth.com, including your name, account email, mailing address, and a clear statement that you opt out of arbitration. If you opt out on time, the arbitration and class-action-waiver provisions will not apply to you.</p>
    `,
  },
  {
    id: 'governing-law',
    serial: 23,
    title: 'Governing law',
    sidebarTitle: 'Governing law',
    content: `
      <p class="text-grayColor1 text-[18px]">These Terms are governed by the laws of the State of New York, without regard to its conflict-of-laws rules, except that the Federal Arbitration Act governs Section 22. Subject to that Section, any claims not subject to arbitration will be brought in the state or federal courts, and you consent to their jurisdiction.</p>
    `,
  },
  {
    id: 'changes-to-these-terms',
    serial: 24,
    title: 'Changes to these Terms',
    sidebarTitle: 'Changes to these Terms',
    content: `
      <p class="text-grayColor1 text-[18px]">We may update these Terms from time to time. When we make material changes, we will provide notice (for example, by email or an on-site notice) before they take effect, as required by law. Changes become effective when posted, and your continued use of the Services after that constitutes acceptance. For certain material changes, we may ask for your affirmative consent. The version in effect at a given time applies to your use during that period, and we will keep prior versions available on request.</p>
    `,
  },
  {
    id: 'termination',
    serial: 25,
    title: 'Termination',
    sidebarTitle: 'Termination',
    content: `
      <p class="text-grayColor1 text-[18px]">We may suspend or terminate your access to the Services at any time, with or without notice, including if you violate these Terms or misuse the Services. You may stop using the Services at any time. Upon termination, you will retain access to your medical records as required by law, and reasonable efforts will be made to support continuity of care where legally required. Sections that by their nature should survive termination — including Sections 14, 19, 20, 21, 22, and 23 — will survive.</p>
    `,
  },
  {
    id: 'miscellaneous',
    serial: 26,
    title: 'Miscellaneous',
    sidebarTitle: 'Miscellaneous',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Entire agreement.</strong> These Terms, together with the documents referenced in Section 17, are the entire agreement between you and Apsu regarding the Services.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Severability.</strong> If any provision is found unenforceable, it will be modified or severed to the minimum extent necessary, and the rest will remain in effect.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">No waiver.</strong> Our failure to enforce any provision is not a waiver of it.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Assignment.</strong> You may not assign these Terms without our consent. We may assign them, for example in connection with a merger or sale of assets.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">No agency.</strong> Nothing here creates a partnership, agency, or employment relationship between you and Apsu, or between you and the independent providers or pharmacies.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Third parties.</strong> Except where these Terms expressly name a beneficiary (such as the independent providers and pharmacies with respect to the protections that apply to them), there are no third-party beneficiaries.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Notices.</strong> We may provide notices to you by email, by posting on the Services, or by mail to the contact information in your account. You are responsible for keeping that information current.</p>
      <p class="mb-4 text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">Time to bring claims.</strong> Any claim arising out of or relating to the Services or these Terms must be filed within one (1) year after it arises, except where a longer period is required by law. This limitation does not apply to residents of New Jersey.</p>
      <p class="text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">California residents.</strong> Under California Civil Code § 1789.3, California residents may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N-112, Sacramento, CA 95834, or by phone at (800) 952-5210.</p>
    `,
  },
  {
    id: 'contact',
    serial: 27,
    title: 'Contact',
    sidebarTitle: 'Contact',
    content: `
      <p class="mb-4 text-grayColor1 text-[18px]">Questions or legal notices regarding these Terms may be sent to:</p>
      <p class="text-grayColor1 text-[18px]"><strong class="font-semibold text-blackColor">support@apsuhealth.com</strong>.</p>
    `,
  },
];
