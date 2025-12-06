# [Company Name] - Pre-Launch Landing Page

A beautiful, high-converting pre-launch landing page for a Guatemalan specialty coffee subscription company. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Fully Responsive Design** - Mobile-first, works beautifully on all devices
- **High Conversion Optimized** - Two-step signup form, urgency elements, trust builders
- **Beautiful Animations** - Smooth scroll animations with Framer Motion
- **SEO Optimized** - Meta tags, structured data, semantic HTML
- **Admin Dashboard** - View signups, export to CSV, track metrics
- **Production Ready** - Fast loading, accessible, optimized

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your:
   - Google Analytics ID (optional)
   - Facebook Pixel ID (optional)
   - Admin password for dashboard access
   - Email service credentials (for production)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization Guide

### Update Company Information

1. **Company Name**: Search and replace `[Company Name]` throughout the codebase
2. **Founder Name**: Search and replace `[Founder Name]` 
3. **Launch Date**: Search and replace `[Launch Date]`
4. **Domain**: Search and replace `[your-domain].com` and `[your-handle]`

### Update Images

Replace placeholder images in components:
- Hero section: Update the Unsplash image URL or add your own
- Story section: Add founder and origin photos
- Coffee section: Add product photography
- All images should be optimized (WebP/AVIF format recommended)

### Customize Colors

Edit `tailwind.config.ts` to adjust the color palette:
- `coffee.*` - Coffee browns
- `earth.*` - Earth tones
- `accent.*` - CTA colors (orange, green, coral)

### Update Content

- **Hero Section** (`components/Hero.tsx`): Headline, subheadline, CTA text
- **Story Section** (`components/Story.tsx`): Founder story, mission
- **Impact Section** (`components/Impact.tsx`): Job breakdown, impact metrics
- **Coffee Section** (`components/Coffee.tsx`): Quality details, tasting notes
- **FAQ** (`components/FAQ.tsx`): Add/remove questions

## 📧 Email Integration

### Option 1: SendGrid

1. Sign up for SendGrid account
2. Get API key
3. Add to `.env.local`: `SENDGRID_API_KEY=your_key`
4. Update `app/api/signup/route.ts` to send emails

### Option 2: Mailchimp

1. Sign up for Mailchimp
2. Get API key and list ID
3. Add to `.env.local`
4. Integrate Mailchimp API in signup route

### Option 3: Resend (Recommended for Startups)

1. Sign up at resend.com
2. Get API key
3. Add to `.env.local`: `RESEND_API_KEY=your_key`
4. Update signup route to use Resend

## 📊 Analytics Setup

### Google Analytics 4

1. Create GA4 property
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

### Facebook Pixel

1. Create Facebook Pixel
2. Get Pixel ID
3. Add to `.env.local`: `NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id`

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will automatically deploy on every push to main branch.

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔐 Admin Dashboard

Access the admin dashboard at `/admin`

Default password is set in `.env.local` as `NEXT_PUBLIC_ADMIN_PASSWORD`

**Important**: Change this password in production!

The dashboard allows you to:
- View all signups
- See signup statistics
- Export signups to CSV
- Track conversion metrics

## 📁 Project Structure

```
/
├── app/
│   ├── api/
│   │   └── signup/          # Signup API endpoint
│   ├── admin/                # Admin dashboard
│   ├── privacy/              # Privacy policy page
│   ├── terms/                # Terms of service page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Main landing page
│   └── globals.css           # Global styles
├── components/
│   ├── Analytics.tsx          # Analytics setup
│   ├── Hero.tsx              # Hero section
│   ├── Story.tsx             # Founder story
│   ├── Impact.tsx            # Impact dashboard
│   ├── Coffee.tsx            # Coffee details
│   ├── HowItWorks.tsx        # Process explanation
│   ├── Benefits.tsx          # Founding member benefits
│   ├── SignupForm.tsx        # Two-step signup form
│   ├── SocialProof.tsx       # Testimonials
│   ├── FAQ.tsx               # FAQ section
│   └── Footer.tsx            # Footer
├── lib/
│   └── db.ts                 # Data storage utilities
└── data/
    └── signups.json        # Signup data (auto-created)
```

## 🎨 Design System

### Typography
- **Headings**: Inter (sans-serif)
- **Body**: Crimson Text (serif) for storytelling sections

### Colors
- **Primary**: Coffee browns (`coffee-*`)
- **Accent**: Orange (`accent-orange`) for CTAs
- **Earth**: Neutral tones (`earth-*`)

### Spacing
- Consistent spacing scale using Tailwind's spacing system
- Generous white space for premium feel

## 🔧 Troubleshooting

### Signups Not Saving

- Check that `data/` directory is writable
- Verify file permissions
- Check server logs for errors

### Images Not Loading

- Verify image URLs are correct
- Check Next.js image configuration
- Ensure images are optimized

### Build Errors

- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run lint`

## 📈 Conversion Optimization Tips

1. **A/B Test Headlines** - Try different value propositions
2. **Test CTA Colors** - Orange vs green vs coral
3. **Experiment with Urgency** - Try different countdown/counter styles
4. **Optimize Form Length** - Test single-step vs two-step
5. **Add Social Proof** - Real testimonials increase conversion
6. **Test Mobile Experience** - Most traffic will be mobile

## 🎯 Success Metrics

Track these metrics:
- Email signup conversion rate (target: 15-25%)
- Time on page (target: 2+ minutes)
- Scroll depth (target: 70%+ reach How It Works)
- Mobile vs desktop conversion rates

## 📄 License

This project is proprietary. All rights reserved.

## 🙏 Support

For questions or issues:
- Email: hello@[your-domain].com
- Check the FAQ section on the website

---

**Built with ❤️ for [Company Name]**

