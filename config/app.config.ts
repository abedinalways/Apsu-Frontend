// server base url
export const URL =
  process.env.NEXT_PUBLIC_API_ENDPOINT || "http://127.0.0.1:4000";
// app config
export const AppConfig = () => ({
  app: {
    // server endpoint
    url: URL,
    name: "Apsu",
    slogan: "Apsu",
    meta: {
      title: "Apsu — Healthcare in Your Language | Weight Loss, Birth Control & Sleep",
      description:
        "US-licensed physicians provide weight loss, birth control, and sleep care online. 40+ languages, AI translation, cash-pay pricing. Get started today.",
      keywords:
        "online healthcare, weight loss, birth control, sleep medicine, telehealth, GLP-1, semaglutide, tirzepatide, US-licensed physicians, multilingual healthcare, cash-pay",
      author: "Apsu Health",
      siteName: "Apsu",
      url: "https://apsu.com",
      image: "/images/og-default.jpg",
      twitterHandle: "@apsuhealth",
    },
    social: {
      facebook: "https://facebook.com/apsuhealth",
      twitter: "https://twitter.com/apsuhealth",
      linkedin: "https://linkedin.com/company/apsuhealth",
    },
    // api endpoint
    apiUrl: `${URL}/api`,
  },
});
