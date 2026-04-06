# HANDOFF — Cypress & Stone (Nature Retreat Luxury)

## Aktueller Stand
- Luxury-Retreat-Website komplett überarbeitet mit scharfen AI-generierten Bildern (Gemini via Nanobanana)
- Design-Upgrade: Parallax, Grain-Overlay, Staggered Reveals, Navbar-Shrink, InteractiveSelector
- 6 Seiten: Index, The Stay, Dining, Wellness, Experiences, Book Now — deployed auf Vercel

## Letzte Änderungen
- **Bilder**: 12 neue AI-generierte Bilder via Nanobanana (Gemini Web UI), gespeichert in `public/images/`
- **Bild-Ersetzung**: 22 Google AIDA-URLs durch lokale `/images/*.png` Pfade ersetzt (alle 6 Seiten)
- **Design**: Hero-Parallax, Grain-Overlay (SVG Noise), Navbar-Scroll-Shrink, erweiterte Scroll-Reveals (left/right/scale + staggered delays), verbesserte Card-Hovers + CTA-Button-Effekte
- **InteractiveSelector**: Vanilla JS horizontaler Expandable-Card-Selector auf index.html (5 Optionen, keyboard-accessible, responsive)
- **Performance**: Lazy Loading auf alle Below-fold-Bilder, `loading="eager"` auf Heros
- **Vite Config**: Multi-Page-Build für alle 6 HTML-Seiten (Fix für 404-Fehler bei Unterseiten)
- **Nanobanana**: Neue Dateien in Depotfokus-Projekt — `retreat-prompts.ts` + `generate-retreat-images.ts`

## Tech Stack
- Vite 8 + Tailwind CSS (CDN) + Material Design 3
- 6 HTML-Seiten: Index, The Stay, Dining, Wellness, Experiences, Book Now
- Forest Green (#173021), Noto Serif + Manrope, Glassmorphism Navbar
- IntersectionObserver Scroll-Animationen, Mobile Hamburger Menu

## Offene Probleme / Blocker
- Tailwind Config wird per-Seite dupliziert (kein Build-System) — akzeptabel für Demo
- Bilder sind PNGs (1.2-2.3 MB) — WebP-Konvertierung wäre Performance-Upgrade
- Ordner noch physisch `Demo_cypress&stone_clean_modern_luxury/` benannt

## Nächste Prioritäten
1. Optional: Bilder zu WebP konvertieren für bessere Performance
2. Optional: Lighthouse-Audit und Performance-Optimierung
3. Optional: Custom Domain auf Vercel konfigurieren

## Letzte Session
- Datum: 2026-04-06
- Zusammenfassung: 12 AI-Bilder via Nanobanana generiert, alle 22 Bild-Referenzen ersetzt, Design-Upgrade auf allen 6 Seiten (Parallax, Grain, Staggered Reveals, Micro-Interactions), InteractiveSelector als Vanilla JS auf index.html, Vite Multi-Page Fix, Vercel Deployment.
