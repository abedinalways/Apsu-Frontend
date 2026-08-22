export type PrivacySection = {
  id: string;
  title: string;
  sidebarTitle?: string;
  content: string;
  serial?: number;
};

export const privacyData: PrivacySection[] = [
  {
    id: 'overview',
    serial: 1,
    title: 'Overview',
    sidebarTitle: 'Overview',
    content: `
      <p class="mb-4 text-text-primary text-[18px]">This Privacy Policy explains how Apsu, ("Apsu," "we," "us," or "our") collects, uses, shares, and protects information about you when you visit our website, use our applications, or otherwise use our services (the "Services"). It also describes the privacy choices and rights available to you.</p>
      <p class="text-text-primary text-[18px]">By using the Services, you agree to this Privacy Policy. If you do not agree, please do not use the Services. This policy is part of, and should be read together with, our Terms of Use.</p>
    `,
  },
  {
    id: 'what-this-policy-covers',
    serial: 2,
    title: 'What this policy covers',
    sidebarTitle: 'What this policy covers',
    content: `
      <p class="mb-4 text-text-primary text-[18px]">Apsu is a technology platform that connects you with independent, licensed healthcare providers and licensed pharmacies. This policy covers the information Apsu handles as the operator of the platform.</p>
      <p class="text-text-primary text-[18px]">It does not govern how the independent providers and pharmacies handle your protected health information (PHI) in the course of treating you or filling your prescriptions. Those independent professionals maintain their own privacy practices and notices, which apply to the medical care and pharmacy services they provide. Where this policy and a provider's or pharmacy's notice both apply to the same information, the provider's or pharmacy's notice governs the PHI they hold.</p>
    `,
  },
  {
    id: 'information-we-collect',
    serial: 3,
    title: 'Information we collect',
    sidebarTitle: 'Information we collect',
    content: `
      <p class="mb-3 font-semibold text-ink text-[18px]">Information you provide:</p>
      <div class="mb-6 space-y-3 text-text-primary text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_1_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_1_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Account and contact details</strong> — such as your name, email address, phone number, shipping address, and date of birth.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_1_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_1_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Health information</strong> — the responses you submit during intake and consultation, such as your medical history, conditions, medications, and goals. You provide this so that a licensed provider can evaluate whether treatment is appropriate; once shared with a provider, it also becomes part of the medical record they maintain.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_1_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_1_3)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Payment information</strong> — your payment card or similar details, which are collected and processed by our third-party payment processor; Apsu does not store full card numbers.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_1_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_1_4)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Communications</strong> — messages you send us or your provider through the platform, and support requests.</p>
        </div>
      </div>

      <p class="mb-3 font-semibold text-ink text-[18px]">Information we collect automatically:</p>
      <div class="mb-6 space-y-3 text-text-primary text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_2_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_2_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Device and usage data</strong> — such as IP address, browser and device type, pages viewed, links clicked, and the dates and times of your visits.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_2_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_2_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Approximate location</strong> — derived from your IP address, used in part to confirm you are in a state where the Services are offered.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_2_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_2_3)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Cookies and similar technologies</strong> — see "Cookies & tracking" below.</p>
        </div>
      </div>

      <p class="mb-3 font-semibold text-ink text-[18px]">Information from other sources:</p>
      <div class="space-y-3 text-text-primary text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_3_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_3_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Providers and pharmacies</strong> — status updates about your consultation, prescription, and order fulfillment.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_3_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_3_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Service providers</strong> — such as our payment processor, analytics providers, and shipping carriers.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_3_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_3_3)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Referrals and marketing partners</strong> — for example, if you reach us through a referral link or promotion.</p>
        </div>
      </div>
    `,
  },
  {
    id: 'how-we-use-information',
    serial: 4,
    title: 'How we use information',
    sidebarTitle: 'How we use information',
    content: `
      <p class="mb-4 text-text-primary text-[18px]">We use the information we collect to:</p>
      <div class="space-y-3 text-text-primary text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>provide, operate, and maintain the Services, and connect you with licensed providers and pharmacies;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>facilitate consultations, prescriptions (where a provider determines they are appropriate), and order fulfillment and shipping;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_3)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>process payments and issue any refunds;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_4)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>communicate with you about your account, orders, and care, and respond to your requests;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_5" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_5)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>provide the AI translation feature during the asynchronous portion of your consultation (see "AI translation");</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_6" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_6)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>improve, personalize, and develop the Services, including through analytics;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_7" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_7)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>protect the security and integrity of the Services and prevent fraud or misuse;</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_8" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_8)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>comply with legal obligations and enforce our Terms of Use; and</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_4_9" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_4_9)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p>with your consent where required, send you marketing communications.</p>
        </div>
      </div>
    `,
  },
  {
    id: 'how-we-share-information',
    serial: 5,
    title: 'How we share information',
    sidebarTitle: 'How we share information',
    content: `
      <p class="mb-4 text-text-primary text-[18px]">We share information only as described here:</p>
      <div class="mb-6 space-y-3 text-text-primary text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_5_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_5_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Independent providers and pharmacies</strong> — to evaluate your eligibility, provide care, and fill and ship your prescriptions.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_5_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_5_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Service providers and vendors</strong> — companies that perform services for us under contract, such as hosting, payment processing, customer support, analytics, shipping, and the provider of our AI translation feature. They may use your information only to perform services for Apsu.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_5_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_5_3)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Legal and safety</strong> — when we believe disclosure is required by law or legal process, or is necessary to protect the rights, safety, or property of you, Apsu, or others, including in an emergency.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_5_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_5_4)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">With your consent</strong> — for any other purpose disclosed to you at the time.</p>
        </div>
      </div>
      <p class="text-text-primary text-[18px]"><strong class="font-semibold text-ink">We do not sell your personal information.</strong> We also do not disclose your health information for third-party marketing without your consent. See "Analytics & advertising" for how we handle advertising and how that maps to certain state-law definitions of "sale" and "sharing."</p>
    `,
  },
  {
    id: 'cookies-tracking-technologies',
    serial: 6,
    title: 'Cookies & tracking technologies',
    sidebarTitle: 'Cookies & tracking technologies',
    content: `
      <p class="text-text-primary text-[18px]">We and our service providers use cookies and similar technologies to operate the Services, remember your preferences, understand how the Services are used, and measure performance. Some cookies are necessary for the Services to function; others are optional. You can control cookies through your browser settings and, where available, through our cookie preferences tool. Blocking some cookies may affect how the Services work.</p>
    `,
  },
  {
    id: 'analytics-advertising',
    serial: 7,
    title: 'Analytics & advertising',
    sidebarTitle: 'Analytics & advertising',
    content: `
      <p class="text-text-primary text-[18px]">We use analytics providers to understand how visitors use the Services so we can improve them. These providers process usage data on our behalf. We do not share your personal information with third parties for their own cross-context behavioral advertising, and we do not use your health information to target advertising. If this changes, we will update this policy and provide the choices required by law before doing so.</p>
    `,
  },
  {
    id: 'ai-translation',
    serial: 8,
    title: 'AI translation',
    sidebarTitle: 'AI translation',
    content: `
      <p class="text-text-primary text-[18px]">Apsu offers AI-assisted translation during the asynchronous (messaging-based) portion of your consultation, so you can communicate with your provider in your preferred language. To provide this feature, the relevant messages are processed by our translation service provider under contract, solely to deliver the translation. Automated translation may not be perfectly accurate; the English-language version is the official version, and you can ask your provider for clarification if anything is unclear. The Apsu website and intake form are currently provided in English only.</p>
    `,
  },
  {
    id: 'your-privacy-rights',
    serial: 9,
    title: 'Your privacy rights',
    sidebarTitle: 'Your privacy rights',
    content: `
      <p class="mb-4 text-text-primary text-[18px]">Depending on where you live, you may have some or all of the following rights regarding the personal information Apsu holds about you:</p>
      <div class="mb-6 space-y-3 text-text-primary text-[18px]">
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_9_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_9_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Access</strong> — to know what personal information we have collected and how we use and share it.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_9_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_9_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Correction</strong> — to correct inaccurate personal information.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_9_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_9_3)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Deletion</strong> — to request deletion of your personal information, subject to legal exceptions (for example, records we must keep by law).</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_9_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_9_4)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Portability</strong> — to receive a copy of certain information in a portable format.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_9_5" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_9_5)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Opt out</strong> — of any "sale" or "sharing" of personal information and of targeted advertising, to the extent these apply.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_9_6" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_9_6)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Limit use of sensitive information</strong> — where provided by law.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="mt-1 shrink-0">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask_9_7" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="16" height="16">
                <path d="M16 7H0V23H16V7Z" fill="white" />
              </mask>
              <g mask="url(#mask_9_7)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 14.008C8.3132 14.4431 7.68682 14.4431 7.44216 14.008L4.03749 7.9537C3.79757 7.52708 4.10587 7 4.59533 7L11.4046 7C11.8942 7 12.2024 7.52708 11.9625 7.9537L8.55784 14.008ZM7.00803 15.5578C7.44308 15.3132 7.44308 14.6868 7.00803 14.4422L0.953705 11.0375C0.52708 10.7976 3.1904e-07 11.1059 2.97648e-07 11.5953L0 18.4046C-2.1392e-08 18.8942 0.52708 19.2024 0.953705 18.9625L7.00803 15.5578ZM8.55784 15.992C8.3132 15.5569 7.68682 15.557 7.44216 15.992L4.03749 22.0463C3.79758 22.473 4.10587 23 4.59533 23H11.4046C11.8942 23 12.2024 22.4729 11.9625 22.0463L8.55784 15.992ZM8.992 14.4422C8.55688 14.6868 8.55688 15.3132 8.992 15.5578L15.0463 18.9625C15.473 19.2024 16 18.8942 16 18.4046V11.5953C16 11.1059 15.4729 10.7976 15.0463 11.0375L8.992 14.4422Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <p><strong class="font-semibold text-ink">Non-discrimination</strong> — we will not discriminate against you for exercising your rights.</p>
        </div>
      </div>
      <p class="text-text-primary text-[18px]">Note that requests affecting your medical records held by the independent providers or pharmacies may need to be directed to them, and some health information is subject to separate laws and retention requirements.</p>
    `,
  },
  {
    id: 'how-to-exercise-your-rights',
    serial: 10,
    title: 'How to exercise your rights',
    sidebarTitle: 'How to exercise your rights',
    content: `
      <p class="mb-4 text-text-primary text-[18px]">To make a request, contact us at support@apsuhealth.com. We will verify your request, which may require confirming information we already have about you. You may use an authorized agent to submit a request where the law allows, and we may ask the agent to provide proof of authorization.</p>
      <p class="text-text-primary text-[18px]">We will respond within the time required by applicable law. If we decline your request, you may have the right to appeal; instructions will be provided in our response. There is no charge for a reasonable request.</p>
    `,
  },
  {
    id: 'data-retention',
    serial: 11,
    title: 'Data retention',
    sidebarTitle: 'Data retention',
    content: `
      <p class="text-text-primary text-[18px]">We keep personal information for as long as needed to provide the Services, comply with our legal, tax, and recordkeeping obligations, resolve disputes, and enforce our agreements. Medical records maintained by the independent providers are retained according to the periods that apply to those records under law. When information is no longer needed, we delete it or de-identify it.</p>
    `,
  },
  {
    id: 'data-security',
    serial: 12,
    title: 'Data security',
    sidebarTitle: 'Data security',
    content: `
      <p class="text-text-primary text-[18px]">We use reasonable administrative, technical, and physical safeguards designed to protect your information, such as encryption in transit, access controls, and vendor security requirements. No system is perfectly secure, however, and we cannot guarantee absolute security. You also play a role — keep your account credentials confidential and notify us promptly if you believe your account has been compromised.</p>
    `,
  },
  {
    id: 'childrens-privacy',
    serial: 13,
    title: "Children's privacy",
    sidebarTitle: "Children's privacy",
    content: `
      <p class="text-text-primary text-[18px]">The Services are intended for adults 18 and older and are not directed to children. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us and we will take appropriate steps to delete it.</p>
    `,
  },
  {
    id: 'state-privacy-disclosures',
    serial: 14,
    title: 'State privacy disclosures',
    sidebarTitle: 'State privacy disclosures',
    content: `
      <p class="mb-4 text-text-primary text-[18px]">Residents of California and certain other states (such as Virginia, Colorado, Connecticut, and others with comprehensive privacy laws) have the rights described in "Your privacy rights" and may exercise them as described in "How to exercise your rights."</p>
      <h4 class="mb-2 text-[18px] font-semibold text-ink">California</h4>
      <p class="text-text-primary text-[18px]">Under California Civil Code § 1789.3, California residents may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N-112, Sacramento, CA 95834, or by phone at (800) 952-5210.</p>
    `,
  },
  {
    id: 'us-only',
    serial: 15,
    title: 'U.S. only',
    sidebarTitle: 'U.S. only',
    content: `
      <p class="text-text-primary text-[18px]">The Services are intended for people located in the United States, and information we collect is processed in the United States. If you access the Services from outside the United States, you do so on your own initiative.</p>
    `,
  },
  {
    id: 'changes-to-this-policy',
    serial: 16,
    title: 'Changes to this policy',
    sidebarTitle: 'Changes to this policy',
    content: `
      <p class="text-text-primary text-[18px]">We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last updated" date and provide notice as required by law. Your continued use of the Services after an update takes effect means you accept the updated policy.</p>
    `,
  },
  {
    id: 'contact',
    serial: 17,
    title: 'Contact',
    sidebarTitle: 'Contact',
    content: `
      <p class="text-text-primary text-[18px]">If you have questions about this Privacy Policy or your information, contact us at: <strong class="font-semibold text-ink">support@apsuhealth.com</strong>.</p>
    `,
  },
];