# Chatbot Configuration Guide - Step by Step

## 📋 Prerequisites
- n8n account (cloud or self-hosted)
- Access to your n8n workflow editor

---

## 🔧 Step 1: n8n-এ Workflow তৈরি করুন

### 1.1 n8n-এ লগইন করুন
- URL: `https://your-n8n-instance.com`
- অথবা self-hosted: `http://localhost:5678`

### 1.2 নতুন Workflow তৈরি করুন
1. **"Add first step"** বা **"+"** বাটন ক্লিক করুন
2. **"Chat Trigger"** নোড সিলেক্ট করুন
3. **"Add Step"** ক্লিক করে **"AI Agent"** বা **"OpenAI"** নোড যোগ করুন

### 1.3 Chat Trigger কনফিগার করুন
```
Chat Trigger:
- Method: POST
- Authentication: None (বা API Key)
- Path: (leave default)
```

### 1.4 AI Model নোড কনফিগার করুন
```
AI Agent:
- Model: GPT-4o / Claude / Gemini
- System Message:
  "You are a helpful medical assistant. Answer patient questions 
   professionally and empathetically. Keep responses concise."
  
- Temperature: 0.7
- Max Tokens: 500
```

### 1.5 নোডগুলো কানেক্ট করুন
```
Chat Trigger → AI Agent
```

---

## 🔗 Step 2: Webhook URL পাবার জন্য

### 2.1 Workflow একটিভেট করুন
1. **右上角**-**ত]["Activate"]** টগল অন করুন
2. Workhook URL কপি করুন

### 2.2 Webhook URL ফরম্যাট
```
Production URL:
https://your-n8n-instance.com/webhook/CHATBOT-WEBHOOK-ID

Test URL (workflow active থাকলে):
https://your-n8n-instance.com/webhook-test/CHATBOT-WEBHOOK-ID
```

> **নোট:** `webhook-test` ব্যবহার করলে নিশ্চিত করুন workflow active আছে।

---

## ⚙️ Step 3: Environment Variable সেটআপ

### 3.1 `.env.local` ফাইল খুলুন
প্রজেক্ট রুট ডিরেক্টরিতে `.env.local` ফাইল exists কিনা চেক করুন:
```bash
ls -la .env.local
```

### 3.2 ফাইল না থাকলে তৈরি করুন
```bash
touch .env.local
```

### 3.3 নিম্নলিখিত লাইন যোগ করুন
```env
# n8n Chatbot Configuration
N8N_CHATBOT_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

### 3.4 বাস্তব URL দিয়ে রিপ্লেস করুন
```env
# উদাহরণ:
N8N_CHATBOT_URL=https://n8n.example.com/webhook/3bb6672c-99d8-45c9-bfab-16fbce10bf8c
```

---

## 🚀 Step 4: Dev Server রিস্টার্ট করুন

```bash
# প্রসেস স্টপ করুন (Ctrl+C)
# তারপর:
npm run dev
```

---

## ✅ Step 5: টেস্ট করুন

1. ব্রাউজারে গিয়ে `/profile` পেজ ওপেন করুন
2. নিচের ডান কোণে সবুজ বাটন (Chat icon) দেখুন
3. ক্লিক করে চ্যাট উইন্ডো ওপেন করুন
4. মেসেজ পাঠান: "Hello"
5. ✅ AI-এর রেসপন্স আসলে সফল!

---

## 🐛 Troubleshooting

### সমস্যা 1: "Chatbot is not configured"
**সমাধান:**
```bash
# .env.local ফাইল চেক করুন
cat .env.local

# নিশ্চিত করুন N8N_CHATBOT_URL সেট আছে
# Dev server রিস্টার্ট করুন
npm run dev
```

### সমস্যা 2: "Chatbot service is not reachable"
**সমাধান:**
- n8n instance চালু আছে কিনা চেক করুন
- Correct URL ব্যবহার করছেন কিনা নিশ্চিত করুন
- Internet connection চেক করুন

### সমস্যা 3: "Chatbot workflow is not active"
**সমাধান:**
1. n8n dashboard-এ যান
2. আপনার workflow খুলুন
3. **右上角**-এ **Activate** টগল অন করুন
4. **"Execute workflow"** ক্লিক করুন (test mode-এর জন্য)

### সমস্যা 4: Timeout error (30s)
**সমাধান:**
- AI model response time বেশি নিচ্ছে
- n8n-এ timeoutIncreased করুন:
```javascript
// app/api/chatbot/route.ts
const N8N_TIMEOUT_MS = 60000; // 60 seconds
```

---

## 📊 n8n Workflow Example

### Basic Flow:
```
┌─────────────┐
│ Chat Trigger │ (Webhook)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  AI Agent   │ (GPT-4o)
│  (Medical)  │
└──────┬──────┘
       │
       ▼
   Response to User
```

### Advanced Flow (with Translation):
```
┌─────────────┐
│ Chat Trigger │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Detect    │ (Language Detection)
│   Language  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Translate  │ (if needed)
│   to English │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  AI Agent   │ (Process in English)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Translate  │ (back to user language)
│   Response  │
└──────┬──────┘
       │
       ▼
   Response to User
```

---

## 🔐 Environment Variables Reference

### Required:
```env
N8N_CHATBOT_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

### Optional (for advanced features):
```env
# API Key for n8n authentication
N8N_API_KEY=your-api-key

# Custom timeout (default: 30000ms)
N8N_TIMEOUT_MS=30000
```

---

## 📝 Quick Checklist

- [ ] n8n account created
- [ ] Workflow created with Chat Trigger
- [ ] AI Agent configured with medical assistant prompt
- [ ] Workflow activated
- [ ] Webhook URL copied
- [ ] `.env.local` file created with `N8N_CHATBOT_URL`
- [ ] Dev server restarted (`npm run dev`)
- [ ] Chatbot tested on `/profile` page

---

## 🎯 System Prompt Example for Medical Assistant

নিচের prompt ব্যবহার করতে পারেন n8n-এ:

```
You are a professional medical AI assistant for Apsu Health Platform.

Your responsibilities:
1. Answer patient questions about treatments, medications, and health concerns
2. Provide general health information and guidance
3. Be empathetic, supportive, and professional
4. Keep responses concise (under 200 words)
5. Always remind users to consult their doctor for serious concerns

Important guidelines:
- Do NOT provide specific medical diagnoses
- Do NOT prescribe medications
- Do NOT replace professional medical advice
- If unsure, recommend consulting a healthcare provider

Response style:
- Friendly and professional tone
- Use simple language
- Be encouraging and supportive
```

---

## 🆘 Support

ইফাক্ট সমস্যা হলে:
1. Browser console এrror চেক করুন (F12 → Console)
2. n8n execution logs চেক করুন
3. Network tab-এ request/response দেখুন

**Success!** 🎉 আপনার চ্যাটবট প্রস্তুত।