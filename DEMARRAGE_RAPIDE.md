# 🚀 Démarrage Rapide - ROSTI POULET (5 minutes)

## Avant de commencer
- Vous avez 6 images WebP dans votre dossier ✅
- Vous avez tous les fichiers HTML ✅
- Vous avez un hébergeur web ✅

---

## Étape 1 : Informations à changer (3 min)

### 🔍 Trouver et remplacer dans TOUS les fichiers :

| À chercher | À remplacer par |
|-----------|-----------------|
| `06 XX XX XX XX` | Votre numéro de téléphone |
| `contact@rostipoulet.fr` | Votre email |
| `[Votre adresse complète]` | Votre adresse |
| `[Votre ville]` | Votre ville |
| `[Code postal]` | Votre code postal |
| `[Votre juridiction]` | Votre région |
| `www.rostipoulet.fr` | Votre domaine |

### 💡 Conseil
Utilisez **Ctrl+H** (ou **Cmd+H** sur Mac) pour "Chercher & Remplacer" rapidement.

---

## Étape 2 : WhatsApp (1 min)

1. Ouvrez **index.html**
2. Cherchez : `const phone = "33XXXXXXXXX"`
3. Remplacez par : `const phone = "336XXXXXXXX"` (votre numéro)

**Format du numéro** :
```
Si votre numéro est : 06 12 34 56 78
Devenez : 33612345678
```

---

## Étape 3 : Google My Business (1 min)

1. Allez sur https://maps.google.com
2. Recherchez votre établissement
3. Cliquez **"Partager"** → **"Intégrer"**
4. Copiez l'iframe (`<iframe src=...`)
5. Dans **index.html**, cherchez `<iframe src="https://www.google.com/maps/embed"`
6. Remplacez par votre iframe

---

## Étape 4 : Upload sur votre hébergeur (en cours)

1. Ouvrez votre **cPanel** ou **FTP**
2. Allez dans **public_html**
3. Uploadez TOUS les fichiers :
   - Fichiers HTML
   - Images WebP
   - .htaccess
   - sitemap.xml
   - robots.txt
   - manifest.json
   - config.json

---

## ✅ C'est fait ! Votre site est en ligne ! 🎉

### Tester maintenant
```
Allez sur : https://www.VOTRE-DOMAINE.fr
```

---

## 🎯 Les 3 choses essentielles à faire maintenant

### 1. Google Search Console (5 min)
1. Allez sur https://search.google.com/search-console
2. Ajoutez votre domaine
3. Vérifiez (via HTML ou DNS)
4. Soumettez **sitemap.xml**

### 2. Google Analytics (2 min)
1. Allez sur https://analytics.google.com
2. Créez un compte
3. Copie votre **GA_ID**
4. Ajoutez dans le `<head>` de tous les fichiers :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_XXXXXXXX"></script>
```

### 3. Google My Business (optionnel)
Demandez une vérification de votre établissement.

---

## 🐛 Ça ne marche pas ?

### Images ne s'affichent pas
```
❌ Problème : Noms de fichiers changés
✅ Solution : Utiliser les noms exacts (unnamed.webp, etc.)
```

### Site très lent
```
❌ Problème : Pas de GZIP activé
✅ Solution : Vérifier que .htaccess est uploadé correctement
```

### Le formulaire ne marche pas
```
❌ Problème : Pas de backend configuré
✅ Solution : Installer Formspree (voir INSTALLATION.md)
```

---

## 📞 Numéros utiles

- **Google Search Console** : https://search.google.com/search-console
- **Google Analytics** : https://analytics.google.com
- **Google My Business** : https://maps.google.com
- **Test vitesse** : https://pagespeed.web.dev

---

## 📋 Checklist minimale

- [ ] Tous les placeholders remplacés
- [ ] WhatsApp numéro configuré
- [ ] Google My Business widget intégré
- [ ] Fichiers uploadés sur hébergeur
- [ ] Site accessible via domaine
- [ ] Sitemap.xml soumis à Google
- [ ] Formulaire de contact testé
- [ ] Mobile responsive testé

---

## 🎓 Prochaines étapes (optionnelles)

1. **Ajouter du contenu** - Rédigez vos services
2. **Blog** - Ajouter des articles pour SEO
3. **Email newsletter** - Intégrer Mailchimp
4. **Paiements** - Ajouter Stripe/PayPal
5. **Calendly** - Booking automatique

---

## 📞 Besoin d'aide ?

📧 **Email** : contact@rostipoulet.fr
💬 **WhatsApp** : Cliquez sur le bouton WhatsApp du site
📱 **Téléphone** : 06 XX XX XX XX

---

**Félicitations ! 🎉 Votre site web haut de gamme est maintenant en ligne !**

Temps d'installation : **~5 minutes**
Temps pour commencer à recevoir des réservations : **24-48 heures** (après indexation Google)

*Bonne chance avec votre activité de bien-être ! 🌿*