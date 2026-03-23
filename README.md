# Kochi Kochu — v2

## Font Setup
1. Copy `1774258681387_Futura_Std_Book.otf` into `/public/fonts/`
2. The `@font-face` in `src/index.css` already references this path.

## Logo
Replace the text placeholder in `Hero.jsx` with:
```jsx
<img
  src="/logo.png"
  alt="Kochi Kochu"
  style={{ position:'absolute', top:55, left:'50%', transform:'translateX(-50%)', width:211 }}
/>
```

## Run
```bash
npm install
npm run dev
```

## Colors
- Background:  #FFFDF3 (warm off-white)
- Hero:        #171717 (near-black)
- Text/accent: #8D2222 (deep terracotta red)
- CTA text:    #FFFDF3

## Placeholder Images (replace with real images)
- Hero BG:          1440 × 1024
- Grid image 1 & 2: 545 × 745 (portrait)
- CTA BG:           1440 × 764
