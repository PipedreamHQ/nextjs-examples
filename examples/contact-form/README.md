This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It's a sample Next.js repository showing an example contact form integrated with Pipedream as the backend.

## Getting Started

First, create a reCaptcha site.

Then you'll be given a site and a secret code. We'll only use the site code for this frontend only application.

```bash
touch .env.local
```

Then modify this file to include your reCaptcha site key:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=YOUR_SITE_KEY_HERE
```

Next, copy the Pipedream workflow template to your account by following this link:

Then update the `.env.local` file to include the workflow's HTTP endpoint.

```
NEXT_PUBLIC_PIPEDREAM_WORKFLOW_URL=YOUR_PIPEDREAM_WORKFLOW_URL_HERE
```

Don't forget to connect your reCaptcha secret key to Pipedream!

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Pipedream, take a look at the following resources:

🔨  Start building at https://pipedream.com
📣  Read our blog https://pipedream.com/blog
💬  Join our community https://pipedream.com/community

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
