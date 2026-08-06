export type InfoSection = {
  id: string;
  title: string;
  sidebarTitle?: string;
  content: string;
  serial?: number;
};

export const infoData: InfoSection[] = [
  {
    id: 'about-information',
    serial: 1,
    title: 'About this information',
    sidebarTitle: 'About this information',
    content: `
      <p class="mb-4 text-[#3b3b3c] text-[18px]">Apsu is a technology platform that connects you with independent, licensed providers and pharmacies. Whether any medication is appropriate for you is decided by a licensed provider based on your health information; Apsu does not practice medicine or pharmacy. Do not start, stop, or change a medication without talking to your provider.</p>
      <p class="mb-4 text-[#3b3b3c] text-[18px]"> <span class="text-[#00774d]">Compounded GLP-1 medication is not FDA-approved.</span> Apsu's compounded GLP-1 medication is prepared by licensed U.S. compounding pharmacies. Compounded medications are permitted to be prescribed under federal law, but they are not reviewed or approved by the U.S. Food and Drug Administration (FDA) for safety, effectiveness, or quality the way commercially manufactured, brand-name drugs are.</p>
      <p class="text-[18px] mb-4"><span class="text-[#00774d] text-[18px]">Apsu's birth control and sleep medications are FDA-approved generic medications.</span> They contain the same active ingredients, in the same strengths, as their brand-name equivalents, and have been reviewed by the FDA for safety, effectiveness, and quality. The "not FDA-approved" statements on this page apply only to the compounded GLP-1 medication. (Some sleep medications are FDA-approved for conditions other than insomnia and are prescribed "off-label" to help with sleep — see that section.)</p>
      <p class="mb-4 text-[#3b3b3c] text-[18px]">Tell your provider about your full medical history and all medications and supplements you take, and ask any questions before starting treatment. Providing inaccurate or incomplete information in order to obtain treatment can lead to serious harm.</p>
    `,
  },
  {
    id: 'eligibility',
    serial: 2,
    title: 'Compounded GLP-1 medication (Semaglutide & Tirzepatide)',
    sidebarTitle: 'Compounded GLP-1 medication (Semaglutide & Tirzepatide)',
    content: `
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Apsu offers compounded GLP-1 medication — compounded semaglutide and compounded Tirzepatide — for chronic weight management, used together with a reduced-calorie diet and increased physical activity. Both are taken once a week as a self-injection under the skin. Your provider decides whether either is appropriate for you and sets your dose. As noted above, compounded medications are not FDA-approved.</p>
    
    <p class="my-2 font-semibold text-[24px]">Boxed warning — risk of thyroid C-cell tumors</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">In studies with rodents, Semaglutide and Tirzepatide caused thyroid tumors, including a type of thyroid cancer called medullary thyroid carcinoma (MTC). It is not known whether these medications cause thyroid tumors in people. Do not use it if you or any family member has ever had MTC, or if you have an endocrine condition called Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Tell your provider right away if you notice a lump or swelling in your neck, hoarseness, trouble swallowing, or shortness of breath — these may be symptoms of thyroid cancer.</p>
    
    <!-- Limitations of use -->
    <p class="mt-6 mb-4 font-semibold text-[24px] text-[#111]">Limitations of use</p>
    <div class="flex flex-col gap-3 text-[#3b3b3c] text-[18px] mb-6">
      <div class="flex items-start gap-3">
        <span class="mt-1 shrink-0 text-[#facc15]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </span>
        <p>Should not be used with other GLP-1 or GIP medicines, or with other semaglutide- or tirzepatide-containing products.</p>
      </div>
      <div class="flex items-start gap-3">
        <span class="mt-1 shrink-0 text-[#facc15]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </span>
        <p>Safety and effectiveness when combined with other weight-loss products (including supplements) have not been established.</p>
      </div>
      <div class="flex items-start gap-3">
        <span class="mt-1 shrink-0 text-[#facc15]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </span>
        <p>Has not been studied in people with a history of pancreatitis, and is not for use in children under 18.</p>
      </div>
      <div class="flex items-start gap-3">
        <span class="mt-1 shrink-0 text-[#facc15]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </span>
        <p>Because these are compounded, they do not carry FDA-approved indications the way a brand-name drug does.</p>
      </div>
    </div>

    <!-- Who should not use it -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Who should not use it</p>
    <div class="flex flex-col gap-3 text-[#3b3b3c] text-[18px] mb-6">
      <div class="flex items-start gap-3">
        <span class="mt-1 shrink-0 text-[#ef4444]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </span>
        <p>You or a family member has had medullary thyroid carcinoma (MTC), or you have MEN 2.</p>
      </div>
      <div class="flex items-start gap-3">
        <span class="mt-1 shrink-0 text-[#ef4444]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </span>
        <p>You have had a serious allergic reaction to the active ingredient or any component.</p>
      </div>
      <div class="flex items-start gap-3">
        <span class="mt-1 shrink-0 text-[#ef4444]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </span>
        <p>You are pregnant, planning to become pregnant, or breastfeeding (see below).</p>
      </div>
    </div>

    <!-- How to use it -->
<p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">How to use it</p>
<div class="flex flex-col gap-3 text-[#3b3b3c] text-[18px]">
  <!-- Item 1 -->
  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_1)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Self-inject under the skin (subcutaneously) in the stomach, thigh, or upper arm, once a week on the same day each week, with or without food.</p>
  </div>

  <!-- Item 2 -->
  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_2)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Rotate (change) your injection site each week; do not inject into the same spot every time. Do not change your dose or stop without talking to your provider first.</p>
  </div>

  <!-- Item 3 -->
  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_3)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Missed dose: follow the instructions your provider or pharmacy gives you. Do not take two doses close together to "catch up."</p>
  </div>

  <!-- Item 4 -->
  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_4)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Storage: store exactly as your pharmacy directs (your medication may need refrigeration), keep it away from light, and do not use it if it is expired, discolored, or contains particles.</p>
  </div>

  <!-- Item 5 -->
  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_5" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_5)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Never share a vial, needle, syringe, or pen with anyone — this can spread infection.</p>
  </div>

  <!-- Item 6 -->
  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_6" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_6)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>If you think you used too much, contact your provider, seek medical advice promptly, or call Poison Control at 1-800-222-1222.</p>
  </div>
  <!-- Tell your provider before and during treatment -->
<p class="mt-8 mb-2 font-semibold text-[24px] text-[#111]">Tell your provider before and during treatment</p>
<p class="mb-4 text-[#3b3b3c] text-[18px]">
  Share your full medical history, especially a history of: type 1 or type 2 diabetes, thyroid cancer, pancreatitis, gallbladder disease, kidney disease, diabetic retinopathy, stomach or digestion problems (such as gastroparesis), depression, or suicidal thoughts or behavior. Also tell your provider all medicines, vitamins, and supplements you take. In particular:
</p>

<div class="flex flex-col gap-3 text-[#3b3b3c] text-[18px] mb-6">
  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_tell_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_tell_1)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Diabetes medicines such as insulin or sulfonylureas — combining them can cause low blood sugar.</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_tell_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_tell_2)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Oral medicines — GLP-1 medication slows stomach emptying and can affect how oral medicines (and food) are absorbed.</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_tell_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_tell_3)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Other GLP-1 / GIP medicines or other weight-loss products, including supplements — do not combine.</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_tell_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_tell_4)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Birth control pills — may work less well, especially after starting Tirzepatide or increasing the dose; your provider may recommend a non-oral or backup method for a period of time.</p>
  </div>
</div>

<!-- Pregnancy & breastfeeding -->
<p class="mt-8 mb-2 font-semibold text-[24px] text-[#111]">Pregnancy & breastfeeding</p>
<p class="mb-6 text-[#3b3b3c] text-[18px]">
  Do not use it during pregnancy; there is no benefit to weight loss during pregnancy and it may harm an unborn baby. If you can become pregnant, discuss stopping the medication well before a planned pregnancy, as it can stay in your body for some time. Tell your provider if you are breastfeeding before starting.
</p>

<!-- Serious side effects to watch for -->
<p class="mt-8 mb-2 font-semibold text-[24px] text-[#111]">Serious side effects to watch for</p>
<p class="mb-4 text-[#3b3b3c] text-[18px]">
  These can occur, especially when starting or increasing your dose. Get medical help right away for severe symptoms.
</p>

<div class="flex flex-col gap-3 text-[#3b3b3c] text-[18px] mb-6">
  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_side_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_side_1)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Inflammation of the pancreas (pancreatitis) — severe stomach pain that will not go away, sometimes spreading to the back, with or without vomiting.</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_side_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_side_2)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Gallbladder problems — upper-stomach pain, fever, yellowing of skin or eyes, clay-colored stools.</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_side_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_side_3)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Low blood sugar (hypoglycemia) — dizziness, shakiness, sweating, fast heartbeat, blurred vision, mood changes (higher risk with diabetes medicines).</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_side_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_side_4)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Kidney problems — vomiting and diarrhea can cause dehydration; drink fluids and tell your provider.</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_side_5" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_side_5)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Serious allergic reaction — swelling of the face, lips, tongue, or throat; trouble breathing or swallowing; severe rash; fainting. Stop and get help right away.</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_side_6" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_side_6)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Vision changes (diabetic retinopathy) — tell your provider promptly if your vision changes.</p>
  </div>

  <div class="flex items-start gap-3">
    <span class="mt-1.5 shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_side_7" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_side_7)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
        </g>
      </svg>
    </span>
    <p>Fast heartbeat at rest and mental-health changes, including new or worsening depression or thoughts of self-harm.</p>
  </div>
</div>

<!-- Common side effects -->
<p class="mt-8 mb-2 font-semibold text-[24px] text-[#111]">Common side effects</p>
<p class="mb-4 text-[#3b3b3c] text-[18px]">
  Often mild and tend to ease over the first few weeks: nausea, vomiting, diarrhea, constipation, stomach pain, indigestion or reflux, bloating, headache, fatigue, dizziness, and injection-site reactions. Tell your provider if they last or get worse, and watch for signs of dehydration if vomiting or diarrhea will not stop.
</p>
</div>
  `,
  },

  // birth control
  {
    id: 'birth-control',
    serial: 3,
    title: 'Birth control',
    sidebarTitle: 'Birth control',
    content: `
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Apsu offers FDA-approved generic birth control: five combined estrogen-plus-progestin pills and one progestin-only injection. Your provider decides which is appropriate based on your health history.</p>
    
    <!-- Bullet points -->
    <div class="flex flex-col gap-3 text-[#3b3b3c] text-[18px] mb-4">
      <div class="flex items-start gap-3">
        <span class="mt-1.5 shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask_bc_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <path d="M16 0H0V16H16V0Z" fill="white" />
            </mask>
            <g mask="url(#mask_bc_1)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
            </g>
          </svg>
        </span>
        <p><strong class="font-semibold text-[#111]">Pills (combined estrogen + progestin):</strong> desogestrel / ethinyl estradiol (Isibloom); drospirenone / ethinyl estradiol (Jasmiel and a Yasmin generic); levonorgestrel / ethinyl estradiol, extended-cycle (LoJaimless); and norethindrone acetate / ethinyl estradiol with iron (Tarina 24 Fe).</p>
      </div>

      <div class="flex items-start gap-3">
        <span class="mt-1.5 shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask_bc_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <path d="M16 0H0V16H16V0Z" fill="white" />
            </mask>
            <g mask="url(#mask_bc_2)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
            </g>
          </svg>
        </span>
        <p><strong class="font-semibold text-[#111]">The shot (progestin-only):</strong> medroxyprogesterone acetate (generic for Depo-Provera).</p>
      </div>
    </div>

    <p class="mb-6 text-[#3b3b3c] text-[18px]">Birth control does not protect against HIV or other sexually transmitted infections (STIs). Use condoms to reduce STI risk.</p>

    <!-- The pill (combined) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">The pill (combined)</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">All of Apsu's birth control pills are combined pills, containing an estrogen and a progestin. They prevent pregnancy mainly by stopping ovulation. Take one pill daily, as close to the same time each day as you can. If you miss a pill, follow the missed-pill instructions in your packaging or ask your provider — you may need a backup method (such as condoms) for several days.</p>

    <!-- Important — smoking & cardiovascular risk -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Important — smoking & cardiovascular risk</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Cigarette smoking increases the risk of serious heart and blood-vessel problems from combined hormonal birth control. This risk increases with age and with heavy smoking. People over 35 who smoke should not use combined hormonal contraceptives.</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Combined pills can increase the risk of blood clots, stroke, and heart attack. They may not be suitable if you have or have had: blood clots or a clotting disorder, certain migraines (especially with aura), uncontrolled high blood pressure, heart or blood-vessel disease, breast or other hormone-sensitive cancer, liver disease or liver tumors, unexplained vaginal bleeding, or if you are within a few weeks of giving birth. Tell your provider your full history.</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Drospirenone-containing pills (Jasmiel, Yasmin generic) can raise blood potassium. Tell your provider if you have kidney, liver, or adrenal problems, or take medicines that can raise potassium (such as certain blood-pressure medicines, potassium-sparing diuretics, or potassium supplements).</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">The extended-cycle pill (LoJaimless) is designed so you have fewer scheduled periods per year; unscheduled spotting or bleeding is common, especially in the first few months.</p>

    <!-- The shot (medroxyprogesterone) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">The shot (medroxyprogesterone)</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">The contraceptive shot is a progestin-only injection given by your provider about every three months. Because it contains no estrogen, it can be an option for some people who cannot use combined pills.</p>

    <!-- Boxed warning — bone mineral density -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Boxed warning — bone mineral density</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Prolonged use of the contraceptive injection may cause loss of bone mineral density. The loss increases the longer the medication is used and may not be fully reversible. It should generally be used long-term only if other methods are not suitable. Discuss bone health, calcium, and vitamin D with your provider.</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Return to fertility may be delayed after stopping the shot (often several months to about a year). Irregular bleeding or spotting is common, especially at first, and many people have lighter or no periods over time.</p>

    <!-- Common side effects -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Common side effects</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Irregular or changed bleeding or spotting, nausea, breast tenderness, headache, mood changes, and changes in weight (more often reported with the shot). Many side effects ease with time.</p>

    <!-- Drug interactions -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Drug interactions</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Some medicines can make hormonal birth control less effective, including certain seizure medicines (for example, carbamazepine or phenytoin), the antibiotic rifampin, some HIV medicines, and the herbal supplement St. John's wort. Tell your provider about everything you take, and ask whether you need a backup method.</p>

    <!-- When to get medical help -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">When to get medical help</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Seek care right away for possible signs of a serious problem: severe leg pain or swelling; chest pain, shortness of breath, or coughing up blood; a sudden severe headache, weakness or numbness, or trouble speaking; sudden vision changes or loss; severe abdominal pain; yellowing of the skin or eyes; or signs of a serious allergic reaction.</p>
    `,
  },

  {
    id: 'sleep-medications',
    serial: 4,
    title: 'Sleep medications',
    sidebarTitle: 'Sleep medications',
    content: `
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Apsu offers only non-controlled, non-habit-forming sleep medications. Apsu does not prescribe controlled sleep medicines (such as zolpidem, eszopiclone, or benzodiazepines) through the platform. All five are FDA-approved medications: ramelteon and low-dose doxepin are FDA-approved specifically for insomnia, while trazodone, mirtazapine, and hydroxyzine are FDA-approved for other conditions and prescribed off-label to help with sleep. Your provider decides whether a sleep medication is appropriate and which one.</p>

    <!-- Ramelteon (approved for insomnia) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Ramelteon (approved for insomnia)</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">A melatonin-receptor agonist that helps you fall asleep. Take about 30 minutes before bed; avoid taking it with or right after a high-fat meal. Do not take it with the medicine fluvoxamine. Possible effects include next-day drowsiness and dizziness; rarely, abnormal thinking or behavior or hormone changes.</p>

    <!-- Doxepin (low dose, 3–6 mg) (approved for insomnia) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Doxepin (low dose, 3–6 mg) (approved for insomnia)</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">A low dose of an older antidepressant used to help you stay asleep. Take within 30 minutes of bedtime and only when you can devote a full night (7–8 hours) to sleep. Do not use it with an MAOI (or within 14 days of one). Use caution if you have untreated narrow-angle glaucoma or trouble emptying your bladder. Next-morning drowsiness can occur.</p>

    <!-- Trazodone (off-label for sleep) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Trazodone (off-label for sleep)</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">An antidepressant commonly used at low doses for sleep. Can cause next-day grogginess, dizziness, and a drop in blood pressure when standing (rise slowly). Rarely, it can cause a prolonged, painful erection (priapism) — get emergency care for an erection lasting more than 4 hours. Risk of serotonin syndrome if combined with other serotonergic medicines. See the antidepressant note below.</p>

    <!-- Mirtazapine (off-label for sleep) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Mirtazapine (off-label for sleep)</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">An antidepressant that is sedating, especially at lower doses, and often increases appetite and causes weight gain. Tell your provider about any fever, sore throat, or signs of infection (rarely, it can lower white blood cells). See the antidepressant note below.</p>

    <!-- Hydroxyzine (off-label for sleep) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Hydroxyzine (off-label for sleep)</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">A sedating antihistamine. Common effects include drowsiness, dry mouth, blurred vision, and constipation (anticholinergic effects). Use caution in older adults and in people with heart-rhythm problems (it can affect the heart's QT interval). Avoid alcohol and other sedatives.</p>

    <!-- Important precautions (all sleep medications) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Important precautions (all sleep medications)</p>
    <div class="flex flex-col gap-3 text-[#3b3b3c] text-[18px] mb-6">
      <div class="flex items-start gap-3">
        <span class="mt-1.5 shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask_sleep_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <path d="M16 0H0V16H16V0Z" fill="white" />
            </mask>
            <g mask="url(#mask_sleep_1)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
            </g>
          </svg>
        </span>
        <p>These medicines can cause next-day drowsiness. Do not drive or operate machinery until you know how the medication affects you.</p>
      </div>

      <div class="flex items-start gap-3">
        <span class="mt-1.5 shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask_sleep_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <path d="M16 0H0V16H16V0Z" fill="white" />
            </mask>
            <g mask="url(#mask_sleep_2)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
            </g>
          </svg>
        </span>
        <p>Avoid alcohol and other sedating substances, which increase drowsiness and side effects.</p>
      </div>

      <div class="flex items-start gap-3">
        <span class="mt-1.5 shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask_sleep_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <path d="M16 0H0V16H16V0Z" fill="white" />
            </mask>
            <g mask="url(#mask_sleep_3)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
            </g>
          </svg>
        </span>
        <p>Take it only when you can devote a full night to sleep, exactly as your provider directs, and do not increase your dose on your own.</p>
      </div>

      <div class="flex items-start gap-3">
        <span class="mt-1.5 shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask_sleep_4" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <path d="M16 0H0V16H16V0Z" fill="white" />
            </mask>
            <g mask="url(#mask_sleep_4)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
            </g>
          </svg>
        </span>
        <p>Sleep medication supports — but does not replace — healthy sleep habits, and is generally not intended for long-term use without provider guidance. If your sleep problems persist, tell your provider, since ongoing insomnia can have an underlying cause that should be evaluated.</p>
      </div>

      <div class="flex items-start gap-3">
        <span class="mt-1.5 shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask_sleep_5" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <path d="M16 0H0V16H16V0Z" fill="white" />
            </mask>
            <g mask="url(#mask_sleep_5)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55784 7.00802C8.3132 7.44308 7.68682 7.44308 7.44216 7.00802L4.03749 0.953704C3.79757 0.527081 4.10587 6.38082e-07 4.59533 4.53853e-07L11.4046 0C11.8942 -4.27898e-08 12.2024 0.527079 11.9625 0.953704L8.55784 7.00802ZM7.00803 8.55784C7.44308 8.3132 7.44308 7.68681 7.00803 7.44215L0.953705 4.03748C0.52708 3.79757 3.1904e-07 4.10586 2.97648e-07 4.59532L0 11.4046C-2.1392e-08 11.8942 0.52708 12.2024 0.953705 11.9625L7.00803 8.55784ZM8.55784 8.992C8.3132 8.55688 7.68682 8.55696 7.44216 8.992L4.03749 15.0463C3.79758 15.473 4.10587 16 4.59533 16H11.4046C11.8942 16 12.2024 15.4729 11.9625 15.0463L8.55784 8.992ZM8.992 7.44216C8.55688 7.68682 8.55688 8.3132 8.992 8.55784L15.0463 11.9625C15.473 12.2024 16 11.8942 16 11.4046V4.59534C16 4.10588 15.4729 3.79758 15.0463 4.0375L8.992 7.44216Z" fill="#3B3B3C" />
            </g>
          </svg>
        </span>
        <p>Before starting, tell your provider about depression or other mental-health conditions, breathing problems, liver or kidney problems, other sedating medicines, and whether you are pregnant or breastfeeding.</p>
      </div>
    </div>

    <!-- Antidepressant note (trazodone & mirtazapine) -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Antidepressant note (trazodone & mirtazapine)</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Trazodone and mirtazapine are antidepressants. In a small number of people — especially those under 25 — antidepressants can be linked to new or worsening depression or thoughts of suicide, particularly early in treatment or after a dose change. Pay attention to changes in mood, behavior, thoughts, or feelings, and contact your provider right away (or call or text 988) if anything is new, worse, or worrying.</p>

    <!-- Common side effects -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">Common side effects</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Vary by medication, but may include daytime drowsiness or grogginess, dizziness, dry mouth, and headache; mirtazapine may increase appetite and weight. Review the specific information your provider and pharmacy give you.</p>

    <!-- When to get medical help -->
    <p class="mt-8 mb-4 font-semibold text-[24px] text-[#111]">When to get medical help</p>
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Get help right away for a serious allergic reaction; for an erection lasting more than 4 hours (with trazodone); or for unusual changes in mood, thinking, or behavior. Call 911 for emergencies.</p>
    `,
  },
  {
    id: 'reporting-side-effects',
    serial: 5,
    title: 'Reporting side effects',
    sidebarTitle: 'Reporting side effects',
    content: `
    <p class="mb-4 text-[#3b3b3c] text-[18px]">You are encouraged to report side effects. Contact your provider for medical advice about side effects, and report side effects to the FDA at <strong class="font-semibold text-[#111]">1-800-FDA-1088</strong> or at <a href="http://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" class="underline text-[#0056b3]">www.fda.gov/medwatch</a>. You can also contact Apsu at <strong class="font-semibold text-[#111]">support@apsuhealth.com</strong>.</p>
    
    <p class="mb-4 text-[#3b3b3c] text-[18px]">This page is not a complete list of indications, doses, warnings, interactions, or side effects. Ask your provider or pharmacist for the full prescribing information for your specific medication.</p>
    `,
  },

  {
    id: 'trademarks-and-disclaimers',
    serial: 6,
    title: 'Trademarks & disclaimers',
    sidebarTitle: 'Trademarks & disclaimers',
    content: `
    <p class="mb-4 text-[#3b3b3c] text-[18px]">Compounded medications offered through Apsu are not approved or evaluated by the FDA for safety, effectiveness, or quality. Apsu does not manufacture medications, and the appearance and labeling of the product you receive may differ from any images shown.</p>
    
    <p class="mb-4 text-[#3b3b3c] text-[18px]">All brand names referenced on this page are the property of their respective owners and are used only to identify the active ingredient or the generic equivalent. Ozempic®, Wegovy®, Saxenda®, and Victoza® are registered trademarks of Novo Nordisk A/S. Mounjaro® and Zepbound® are registered trademarks of Eli Lilly and Company. Apsu is not affiliated with, endorsed by, or sponsored by these companies, and the compounded medications offered through Apsu are not made by them or by any company affiliated with them.</p>
    `,
  },
];