# Quick Start Guide

Get your landing page up and running in 5 minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

The `.env.local` file has been created for you! It contains:

- **NEXT_PUBLIC_ADMIN_PASSWORD** - Password for the admin dashboard (default: `admin123`)
- **NEXT_PUBLIC_GA_ID** - Google Analytics ID (optional)
- **NEXT_PUBLIC_FB_PIXEL_ID** - Facebook Pixel ID (optional)
- **NEXT_PUBLIC_SITE_URL** - Your site URL (optional)

**Important**: Change the admin password before deploying to production!

You can edit `.env.local` directly, or if you need to recreate it, copy from `.env.example`:
```bash
cp .env.example .env.local
```

## Step 3: Customize Content

1. **Company Name**: Search and replace `[Company Name]` in all files
2. **Founder Name**: Search and replace `[Founder Name]`
3. **Launch Date**: Search and replace `[Launch Date]`
4. **Domain**: Search and replace `[your-domain].com` and `[your-handle]`

Quick find/replace:
- `[Company Name]` → Your actual company name
- `[Founder Name]` → Your name
- `[Launch Date]` → Your launch date (e.g., "March 2024")
- `[your-domain].com` → Your actual domain
- `[your-handle]` → Your social media handles

## Step 4: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Step 5: Test the Signup Form

1. Fill out the signup form on the homepage
2. Check that data is saved in `data/signups.json`
3. Access admin dashboard at http://localhost:3000/admin
4. Use your admin password to view signups

## Step 6: Deploy to Vercel

1. Push your code to GitHub
2. Go to vercel.com and import your repository
3. Add environment variables in Vercel dashboard
4. Deploy!

## Next Steps

- Replace placeholder images with your own
- Set up email service (SendGrid/Resend) for confirmation emails
- Add Google Analytics tracking ID
- Customize colors in `tailwind.config.ts`
- Update FAQ with your specific questions

## Need Help?

Check the full README.md for detailed documentation.

