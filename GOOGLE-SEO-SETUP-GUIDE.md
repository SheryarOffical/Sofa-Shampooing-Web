# 🚀 Google SEO Setup Guide — Al Haya Sofa Care UAE
## Complete Step-by-Step Guide to Connect Your Website with Google

---

## ✅ STEP 1 — Google Search Console (MOST IMPORTANT)

**Kya hai:** Google ko apni website ke baare mein batata hai. Yahan se Google crawl karta hai, rank karta hai, errors report karta hai.

### Kaise Setup Karein:
1. Jao: https://search.google.com/search-console
2. "Add Property" click karo
3. "URL prefix" choose karo → enter: `https://sofashampooingdubai.com`
4. **Verification method: HTML tag** choose karo
5. Ek code milega is format mein: `<meta name="google-site-verification" content="XXXXXXXXXXX" />`
6. Us code ka sirf yeh part copy karo: `XXXXXXXXXXX`
7. Website file mein `app/layout.tsx` kholo
8. Is line ko dhundho:
   ```
   google: 'google-site-verification-code-here',
   ```
9. `google-site-verification-code-here` ki jagah apna actual code paste karo
10. Website deploy karo → Google Search Console mein "Verify" click karo

### Verify Hone Ke Baad:
- **Sitemap Submit Karo:** Search Console → Sitemaps → Add: `sitemap.xml` → Submit
- Ab Google sab pages index karega automatically

---

## ✅ STEP 2 — Google Business Profile (LOCAL SEO KE LIYE #1)

**Kya hai:** Yeh "sofa cleaning near me" searches mein Google Maps pe aapka business dikhata hai. UAE market ke liye YEH SABSE IMPORTANT HAI.

### Kaise Setup Karein:
1. Jao: https://business.google.com
2. "Manage now" → "Add your business"
3. Business name: **Al Haya Sofa Care UAE**
4. Category: **Upholstery cleaning service** (ya Cleaning service)
5. Location: Dubai (service area business choose karo kyun ke aap ghar pe jaate ho)
6. Service area add karo:
   - Dubai ✅
   - Sharjah ✅
   - Ajman ✅
   - Abu Dhabi ✅
   - Al Ain ✅
   - Ras Al Khaimah ✅
7. Phone: +971547199189
8. Website: https://sofashampooingdubai.com
9. Hours: Monday–Sunday, 7:00 AM – 10:00 PM

### Verification:
- Google phone ya postcard se verify karta hai
- Postcard Dubai address pe aata hai — 1-2 weeks lagti hain

### Profile Optimize Karo (Verify Hone Ke Baad):
- [ ] 10+ real customer photos add karo (before/after cleaning photos)
- [ ] Services list karo with prices (AED 79, AED 99, etc.)
- [ ] Description likhna: "Al Haya Sofa Care UAE provides professional sofa deep shampoo and steam cleaning services across Dubai, Sharjah, Ajman and Abu Dhabi. Same-day at-home service. Call +971547199189."
- [ ] Keywords description mein use karo
- [ ] Customers se 5-star reviews maango (WhatsApp pe link bhejo)

---

## ✅ STEP 3 — Google Analytics 4 (GA4)

**Kya hai:** Website pe kitne log aate hain, kahan se aate hain, kya karte hain — sab track karta hai.

### Kaise Setup Karein:
1. Jao: https://analytics.google.com
2. "Start measuring" → Create account: "Al Haya Sofa Care UAE"
3. Property name: "sofashampooingdubai.com"
4. Timezone: **United Arab Emirates (UTC+4)**
5. Currency: **AED**
6. Ek **Measurement ID** milega: format `G-XXXXXXXXXX`
7. Ab yeh code website mein add karna hai

### Website Mein Add Karna:
`app/layout.tsx` mein `<head>` section mein yeh add karo:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `
  }}
/>
```
*(G-XXXXXXXXXX ki jagah apna actual Measurement ID)*

---

## ✅ STEP 4 — UAE Business Directories (Local Citations)

**Kya hai:** Google ko confirm karta hai ke aapka business real hai aur Dubai mein hai. Jitni zyada directories, utna trust.

### Submit Karein — Free:

| Directory | URL | Priority |
|-----------|-----|----------|
| **Yallo UAE** | https://www.yallamotor.com / https://yallo.ae | 🔴 High |
| **Yellow Pages UAE** | https://www.yellowpages.ae | 🔴 High |
| **Dubai Chamber** | https://www.dubaichamber.com | 🔴 High |
| **Dubizzle** | https://www.dubizzle.com (services section) | 🟡 Medium |
| **ServiceMarket** | https://servicemarket.com | 🟡 Medium |
| **Yelp UAE** | https://www.yelp.ae | 🟡 Medium |
| **Foursquare** | https://foursquare.com/add-place | 🟢 Low |
| **Bing Places** | https://www.bingplaces.com | 🟡 Medium |

### Important Rule — NAP Consistency:
Har jagah ek jaisi information:
- **Name:** Al Haya Sofa Care UAE
- **Address:** Dubai, UAE
- **Phone:** +971547199189
- **Website:** https://sofashampooingdubai.com

---

## ✅ STEP 5 — Social Media Profiles (SEO ke liye link building)

Yeh profiles website pe link karein — Google trust badhta hai.

| Platform | Action |
|----------|--------|
| **WhatsApp Business** | https://business.whatsapp.com — Business profile setup karo, website link karo |
| **Instagram** | @alhayasofacare — Before/after photos daily post karo |
| **Facebook Page** | Al Haya Sofa Care UAE — Reviews enable karo |
| **TikTok** | Cleaning videos viral hoti hain UAE mein |

---

## ✅ STEP 6 — Google Ads (Optional — Paid)

Jab organic results kam hon toh Dubai mein fast results ke liye:
- Google Search Ads: "sofa cleaning Dubai" keywords target karo
- Budget: AED 50-100/day se shuru karo
- Jao: https://ads.google.com

---

## 📊 Monthly SEO Checklist

Har mahine yeh karo:

- [ ] Google Search Console mein errors check karo
- [ ] New reviews ka reply karo Google Business pe
- [ ] 2-3 new before/after photos Google Business pe add karo
- [ ] Search Console mein top queries dekho — kaunsi keywords rank ho rahi hain
- [ ] Website speed check karo: https://pagespeed.web.dev

---

## 🎯 Expected Timeline

| Month | Expected Progress |
|-------|------------------|
| Month 1 | Google index karna shuru karega, Search Console mein data aana shuru |
| Month 2-3 | Location pages "sofa cleaning Sharjah" type queries pe rank karna shuru |
| Month 3-6 | "sofa cleaning Dubai" pe first page results |
| Month 6+ | Abu Dhabi, UAE-wide keywords pe strong ranking |

---

*Guide prepared by: Al Haya Sofa Care UAE SEO Setup — May 2026*
