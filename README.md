# okrikah-web


Next.js site for the public home page, privacy policy, terms, and account deletion instructions. Uses real screenshots from the iOS simulator and Okrikah brand assets.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Landing — features, screenshots, App Store & Google Play badges |
| `/privacy` | Privacy Policy |
| `/account-deletion` | Email + code form to permanently delete an account |
| `/terms` | Terms & Conditions |

## Run locally

```bash
cd website
npm install
npm run dev
```

Then open `http://localhost:3000` in a browser (this is separate from the Expo app).

## Production

```bash
cd website
npm run build
npm start
```

## Environment (optional)

Create `website/.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/idXXXXXXXX
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.okrikah.app
```

Account deletion uses the `web-delete-account` Edge Function (email confirmation code via Resend).

Point the Expo app at the hosted legal pages with:

```
EXPO_PUBLIC_PRIVACY_URL=https://your-domain.com/privacy
EXPO_PUBLIC_TERMS_URL=https://your-domain.com/terms
```

## Design notes

- Flat navy / parchment / crimson palette — no CSS gradients
- App screenshots live in `public/screenshots/`
- Brand marks in `public/brand/`
