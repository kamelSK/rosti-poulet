# 🌿 ROSTI POULET - Site Web Premium de Bien-Être

## 📋 Vue d'ensemble

Site web moderne et haut de gamme pour praticien bien-être, avec intégration complète de Google My Business, avis clients, système de réservation Click & Collect, et contact WhatsApp.

## 🎯 Caractéristiques principales

### ✨ Design & UX
- **Design Premium** : Palette de couleurs luxe (marron/beige/or)
- **Navigation Sticky** : Menu toujours accessible
- **Responsive Mobile-First** : Optimisé pour tous appareils
- **Animations Fluides** : Transitions élégantes et naturelles
- **Accessibilité** : Conforme WCAG 2.1

### 📱 Pages créées
1. **index.html** - Homepage avec hero section, services, galerie, avis Google
2. **services.html** - Détail complet des services et tarification
3. **mentions-legales.html** - Conformité légale
4. **privacy.html** - Politique de confidentialité RGPD
5. **conditions.html** - Conditions d'utilisation

### 🔧 Optimisations SEO incluses
- ✅ Balises meta complètes (description, keywords, og:tags)
- ✅ Sitemap.xml pour indexation moteurs
- ✅ Robots.txt optimisé
- ✅ Structured Data (Schema.org JSON-LD)
- ✅ URLs amicales et hiérarchisées
- ✅ Images WebP optimisées
- ✅ Lazy loading des images

### 🎨 Galerie & Images
- 6 images WebP incluses dans le dossier
- Galerie avec overlay au survol
- Images responsives avec alt text
- Optimisation pour tous écrans

## 🚀 Installation & Configuration

### 1. Informations à personnaliser
Remplacez les placeholders suivants dans tous les fichiers :

```
[Votre adresse complète] → Votre adresse physique
[Votre ville] → Ville de votre activité
[Code postal] → Code postal
06 XX XX XX XX → Votre numéro de téléphone
contact@rostipoulet.fr → Votre email
[Votre juridiction] → Ville des tribunaux compétents
[Votre numéro WhatsApp] → Numéro WhatsApp avec code pays
[Votre hébergeur] → Nom de l'hébergeur web
```

### 2. Configuration du domaine

Mettez à jour dans **sitemap.xml** :
```xml
<loc>https://www.VOTRE-DOMAINE.fr/...</loc>
```

### 3. Intégration Google My Business

#### a) Widget Google My Business
- Allez sur https://google.com/maps
- Recherchez votre établissement
- Cliquez sur "Partager" → Récupérez l'iframe
- Remplacez l'iframe dans **index.html** (section #avis)

#### b) Intégration Google Reviews
```html
<!-- Remplacer dans index.html ligne ~500 -->
<iframe src="https://www.google.com/maps/embed?pb=VOTRE_CODE_EMBED" ...>
```

### 4. Intégration WhatsApp

Configurez le numéro WhatsApp dans **index.html** :
```javascript
// Ligne ~750
const whatsappPhone = "33XXXXXXXXX"; // Format international
```

### 5. Formulaire de contact

**Option 1 : Formspree** (Gratuit, recommandé)
```javascript
// Dans index.html, handleContactForm()
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
})
```

**Option 2 : EmailJS** (Alternative)
Installez EmailJS et configurez vos credentials.

**Option 3 : Backend** (Si vous avez un serveur)
Pointez le formulaire vers votre API.

## 📞 Intégrations essentielles

### 1. Google Analytics
Ajoutez dans le `<head>` de tous les fichiers HTML :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_XXXXXXXX');
</script>
```

### 2. Google Search Console
1. Allez sur https://search.google.com/search-console
2. Ajoutez votre domaine
3. Téléchargez le fichier de vérification (HTML)
4. Soumettez le sitemap.xml

### 3. Calendly (Réservation intégrée)
Optionnel : Remplacez le formulaire contact par :
```html
<div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_CALENDAR"></div>
```

### 4. Stripe / PayPal (Paiement)
Pour les paiements en ligne, intégrez :
```html
<script src="https://js.stripe.com/v3/"></script>
```

## 🎯 Optimisations SEO avancées

### 1. Mots-clés ciblés par page
```
Homepage: "bien-être", "massage", "relaxation", "coaching", "praticien bien-être"
Services: "massage thérapeutique", "coaching personnel", "séances relaxation"
```

### 2. Rédaction optimisée
- ✅ Titres H1 uniques par page
- ✅ Descriptions meta < 160 caractères
- ✅ Contenu structuré avec H2/H3
- ✅ Densité de mots-clés naturelle (~2%)

### 3. Vitesse de chargement
- Images WebP minifiées ✅
- CSS inline (critique) ✅
- JS déféré ✅
- Lazy loading images ✅
- Cache browser (via .htaccess)

### 4. Mobile-First
- Viewport meta tag ✅
- Texte minimum 16px ✅
- Touch targets 44x44px ✅
- Pas de scroll horizontal ✅

## 📊 Métriques de performance cibles

- **Lighthouse Score** : > 90
- **PageSpeed** : > 85 (Mobile & Desktop)
- **Core Web Vitals** : Tout vert
  - LCP (Largest Contentful Paint) : < 2.5s
  - FID (First Input Delay) : < 100ms
  - CLS (Cumulative Layout Shift) : < 0.1

## 🔒 Sécurité

### Headers HTTP essentiels (.htaccess)
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# X-Frame-Options
Header set X-Frame-Options "SAMEORIGIN"

# X-Content-Type-Options
Header set X-Content-Type-Options "nosniff"

# Content-Security-Policy
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' maps.google.com; style-src 'self' 'unsafe-inline';"
```

## 📱 Click & Collect - Détails de mise en œuvre

### Flux utilisateur
1. **Découverte** → Homepage showcase
2. **Sélection service** → Page services
3. **Réservation** → Formulaire/Calendly
4. **Confirmation** → Email + SMS
5. **Rappel** → 24h avant la séance

### Modèle tarifaire suggéré
```
Massage standard (60min)     : 69€
Pack 3 séances             : 189€ (-15%)
Coaching premium (3 mois)   : 299€
```

## 🎨 Personnalisation du design

### Couleurs (Variables CSS)
```css
--primary: #8B5A3C;           /* Marron principal */
--secondary: #D4A574;         /* Or/beige accent */
--accent: #E8D4C4;            /* Beige clair */
--neutral-dark: #2C2C2C;      /* Gris foncé */
--neutral-light: #F8F7F5;     /* Beige très clair */
```

### Typographie
```css
--font-serif: 'Georgia', serif;        /* Titres */
--font-sans: 'Segoe UI', sans-serif;  /* Corps texte */
```

## 📋 Checklist de lancement

- [ ] Remplacer tous les placeholders
- [ ] Configurer Google My Business widget
- [ ] Ajouter numéro WhatsApp
- [ ] Configurer formulaire de contact
- [ ] Ajouter Google Analytics
- [ ] Soumettre à Google Search Console
- [ ] Tester sur mobile & desktop
- [ ] Vérifier Lighthouse score
- [ ] Configurer SSL/HTTPS
- [ ] Tester tous les liens
- [ ] Vérifier les images WebP
- [ ] Tester le formulaire de contact
- [ ] Vérifier l'affichage sur tous navigateurs
- [ ] Tester la navigation mobile
- [ ] Configurer les redirects 301 si site existant

## 🆘 Dépannage

### Les images ne s'affichent pas
- Vérifier que les fichiers .webp sont dans le même dossier
- Remplacer les noms de fichiers si renommés

### Le formulaire de contact ne fonctionne pas
- Vérifier la configuration de Formspree/EmailJS
- Tester dans la console navigateur (F12)
- Vérifier les CORS headers

### Slow loading
- Compresser les images davantage
- Vérifier le cache navigateur
- Utiliser un CDN (Cloudflare)

## 📚 Ressources utiles

- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Accessibility](https://wave.webaim.org)
- [GTmetrix](https://gtmetrix.com)

## 🤝 Support & maintenance

### Mises à jour recommandées
- Mettre à jour les avis clients tous les mois
- Rafraîchir la galerie photos régulièrement
- Actualiser les prix si changements
- Vérifier les liens externes trimestriellement

### Sauvegarde
- Sauvegarder tous les fichiers HTML/CSS
- Backup base de données formspree
- Backup images WebP

## 📄 Licence et crédits

© 2024 ROSTI POULET - Tous droits réservés
Design & Développement : Claude Code - Anthropic

---

**Créé avec ❤️ pour les praticiens bien-être**

Pour questions ou support : contact@rostipoulet.fr