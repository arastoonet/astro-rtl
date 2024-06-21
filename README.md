## پوسته‌ای آماده برای ساخت مستندات راست به چپ با استفاده از Astro و Starlight
[![ساخته شده با Astro Startlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
git clone https://github.com/arastoonet/astro-rtl
```

## 🚀 ساختار پروژه

ساختار پروژه Starlight به صورت زیر است: 

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

این پوسته براساس فایل‌هایی با فرمت‌های  `.md` or `.mdx` در دایرکتوری `src/content/docs/` محتوای مستندات شما را نمایش خواهد داد. 

تصاویر را می‌توانید به دایرکتوری `src/assets/` اضافه کنید و در فایل مارک‌داون‌تان به آن ارجاع دهید. 

محتوای فاو‌آیکون و مواردی از این دست را می‌توانید در دایرکتوری `public/` قرار دهید.

## 🧞 اجرا

برای اجرا کردن پروژه دستورات زیر را در مسیر روت پروژه وارد کنید.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 برای یادگیری بیشتر در کار با Astro سراغ منابع زیر بروید

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
