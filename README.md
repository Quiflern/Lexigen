# Lexigen: The AI-Powered Social Media Content Generator

## Introduction

Creating engaging and effective content for social media platforms is time-consuming and challenging. Manually crafting captions, hashtags, and even video ideas requires significant effort and expertise, often leading to frustration and inconsistent results. Additionally, staying ahead of platform trends and effectively leveraging AI tools for content creation is a constant struggle for marketers and content creators.

Lexigen addresses this challenge by providing an intuitive and powerful tool for generating high-quality social media content using the capabilities of Gemini AI. It simplifies the content creation process, allowing you to effortlessly:

- **Generate captivating captions for Instagram and other platforms**

- **Craft relevant hashtags to increase post visibility**

- **Brainstorm compelling tweet ideas optimized for Twitter**

- **Develop creative and engaging YouTube Shorts video concepts**

- **Create compelling Facebook post ideas to engage your audience**

- **Produce engaging Threads posts to connect with your community**

- **Discover creative Pinterest pin ideas to drive traffic**

- **Generate informative and optimized LinkedIn posts**

- **Craft descriptive YouTube video descriptions to attract viewers**

## Demo

- **Vercel:** [https://lexigen.vercel.app/](https://lexigen.vercel.app/)

- **Netlify:** [https://lexigen.netlify.app/](https://lexigen.netlify.app/)

## Getting Started

1.  **Clone the repository:**

```bash
git clone https://github.com/quiflern/lexigen.git
```

2.  **Set up environment variables:**

- **Gemini API Key:** Get your API key by creating an account and setting up your project on [Gemini AI](https://developers.google.com/gemini).

- **Clerk Secret Key and Publishable Key:** Create an account and project on [Clerk](https://clerk.com/) to integrate user authentication into your application. You can find these keys within your Clerk project dashboard.

- **Database URL:** To get your database URL, you'll need a hosted database solution such as [Neon](https://www.neon.tech/). After creating a Neon database, you can access the connection string from the Neon dashboard.

- **Stripe Secret Key and Webhook Secret Key:** Sign up and create a Stripe account for payment integration. Your secret key can be found in your Stripe account dashboard, while the webhook secret key can be generated within the Stripe webhook settings.

**Important:** After you have gathered all the required values, rename `example.env` to `.env` and add your API keys and credentials in this newly renamed file:

```env

# Use this as sample
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
CLERK_SECRET_KEY=your-clerk-secret-api-key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerck-publishable-api-key
DATABASE_URL="your-db-url"
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET_KEY=your--webhook-stripe-secret-key

```

**Never commit your `.env` file to version control.** Ensure you add `.env` to your `.gitignore` file to prevent sensitive information from being exposed.

3.  **Install project dependencies:**

```bash
npm install
```

4.  **Generate Prisma client:**

```bash
npx prisma generate
```

5.  **Create Prisma migrations:**

```bash
npx prisma migrate dev
```

6.  **Start the development server:**

```bash
npx next dev
```

Lexigen will be accessible at `http://localhost:3000` in your web browser.
