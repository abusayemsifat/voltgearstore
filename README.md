# ⚡ Voltgear — Next-Gen Gadget Commerce

Voltgear is a modern e-commerce storefront built with the **Next.js 14 App Router**. It focuses on server-side efficiency, SEO optimization, and a minimalist aesthetic for tech enthusiasts.

### 🛠️ Featured Capabilities
- **Next.js 14 Architecture:** Utilizes Server Components for faster initial page loads and Client Components for interactive UI elements like the GSAP hero section.
- **NextAuth.js Integration:** Robust authentication supporting both Google OAuth 2.0 and manual Credential providers with JWT-based sessions.
- **Admin Command Center:** A protected management suite allowing admins to perform real-time inventory updates (Add/Delete products) with instant toast notifications.
- **Smooth Interaction:** Integration of **Lenis** smooth scrolling and **Framer Motion** card-hover effects to provide a premium "Apple-style" browsing experience.
- **Database Logic:** Built with **Mongoose** for structured data modeling, ensuring type-safe interactions with MongoDB Atlas.

### 🚀 Technical Challenges Overcome
- **Dependency Resolution:** Solved versioning conflicts between `eslint-config-next` and React 18 using `--legacy-peer-deps`.
- **Hybrid Scrolling:** Resolved conflicts between Lenis smooth scrolling and native CSS scroll-behavior to ensure consistent performance across all browsers.
- **API Connectivity:** Debugged MongoDB connection string issues specifically related to Vercel's environment variable injection.

### ⚙️ Tech Stack
- **Framework:** Next.js 14.2 (App Router).
- **Auth:** NextAuth.js.
- **Database:** MongoDB & Mongoose.
- **Animation:** GSAP & Framer Motion.
