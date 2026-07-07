# ✅ CHECKLIST DE LANCEMENT - ROSTI POULET

## Phase 1️⃣ : Préparation (Avant l'upload)

### Configurer les informations de base
- [ ] Remplacer `06 XX XX XX XX` par votre téléphone
- [ ] Remplacer `contact@rostipoulet.fr` par votre email
- [ ] Remplacer `[Votre adresse complète]` par votre adresse
- [ ] Remplacer `[Votre ville]` par votre ville
- [ ] Remplacer `[Code postal]` par votre code postal
- [ ] Remplacer `www.rostipoulet.fr` par votre domaine
- [ ] Remplacer `[Votre juridiction]` par votre région

### Configurer Google My Business
- [ ] Aller sur https://maps.google.com
- [ ] Trouver votre établissement
- [ ] Cliquer "Partager" → "Intégrer"
- [ ] Copier le code iframe
- [ ] Remplacer l'iframe dans index.html (section avis)
- [ ] Vérifier que le widget s'affiche correctement

### Configurer WhatsApp
- [ ] Convertir votre numéro au format international (33...)
- [ ] Ouvrir index.html
- [ ] Chercher `const phone = "33XXXXXXXXX"`
- [ ] Remplacer par votre numéro
- [ ] Tester le bouton WhatsApp localement

### Vérifier les fichiers
- [ ] index.html (31.8 KB)
- [ ] services.html (21.4 KB)
- [ ] mentions-legales.html (5.9 KB)
- [ ] privacy.html (7.7 KB)
- [ ] conditions.html (7.5 KB)
- [ ] .htaccess (présent)
- [ ] sitemap.xml (présent)
- [ ] robots.txt (présent)
- [ ] manifest.json (présent)
- [ ] Toutes les 6 images WebP présentes

### Vérifier les images
- [ ] unnamed.webp (hero)
- [ ] unnamed (1).webp (click & collect)
- [ ] unnamed (2).webp (massage)
- [ ] unnamed (3).webp (coaching)
- [ ] unnamed (4).webp (relaxation)
- [ ] unnamed (5).webp (accueil)

---

## Phase 2️⃣ : Upload sur hébergeur

### Préparation FTP/cPanel
- [ ] Accéder à cPanel ou FTP
- [ ] Naviguer au dossier public_html (ou www)
- [ ] Créer un backup du site existant (si applicable)

### Upload des fichiers
- [ ] Uploader tous les fichiers HTML
- [ ] Uploader toutes les 6 images WebP
- [ ] Uploader .htaccess (important!)
- [ ] Uploader sitemap.xml
- [ ] Uploader robots.txt
- [ ] Uploader manifest.json
- [ ] Uploader config.json
- [ ] Vérifier les permissions (644 fichiers, 755 dossiers)

### Configuration du domaine
- [ ] Domaine pointe vers l'hébergeur (DNS)
- [ ] Propagation DNS complète (peut prendre 24h)
- [ ] HTTPS/SSL activé (Let's Encrypt)
- [ ] Redirection www → non-www configurée
- [ ] Site accessible via https://votre-domaine.fr

---

## Phase 3️⃣ : Tests de base

### Tester le site en ligne
- [ ] Accéder au site via le domaine
- [ ] Vérifier que la homepage s'affiche correctement
- [ ] Vérifier que toutes les images s'affichent
- [ ] Tester la navigation (tous les liens)
- [ ] Tester les liens internes (Accueil, Services, etc.)
- [ ] Tester les liens externes (si applicable)
- [ ] Vérifier le footer

### Tester la responsivité
- [ ] Tester sur mobile (iPhone, Android)
- [ ] Tester sur tablette (iPad, Samsung Tab)
- [ ] Tester en mode portrait et landscape
- [ ] Vérifier que le texte est lisible
- [ ] Vérifier que les images ne sont pas coupées
- [ ] Tester les clics/taps (pas de jank)

### Tester les fonctionnalités
- [ ] Cliquer sur le bouton WhatsApp
- [ ] Vérifier que la conversation WhatsApp s'ouvre
- [ ] Cliquer sur les boutons CTA
- [ ] Tester le formulaire de contact
- [ ] Vérifier Google My Business widget
- [ ] Cliquer sur "Réserver" dans tous les endroits

### Test de performance
- [ ] Aller sur https://pagespeed.web.dev
- [ ] Tester votre domaine
- [ ] Desktop score > 85 ?
- [ ] Mobile score > 80 ?
- [ ] Corriger les problèmes critiques

---

## Phase 4️⃣ : Configuration Google

### Google Search Console
- [ ] Aller sur https://search.google.com/search-console
- [ ] Cliquer "Ajouter une ressource"
- [ ] Entrer votre domaine (https://www.your-domain.fr)
- [ ] Vérifier la propriété (HTML tag ou DNS)
- [ ] Attendre la vérification (quelques heures)
- [ ] Aller dans "Sitemaps"
- [ ] Cliquer "Ajouter un sitemap"
- [ ] Soumettre `sitemap.xml`
- [ ] Vérifier que le sitemap a été lu (24h après)
- [ ] Vérifier les erreurs d'indexation
- [ ] Demander l'indexation manuelle

### Google Analytics
- [ ] Aller sur https://analytics.google.com
- [ ] Créer un nouveau compte
- [ ] Récupérer votre GA_ID (GA_XXXXXXXX)
- [ ] Ajouter le tracking code dans `<head>`
- [ ] Attendre quelques heures
- [ ] Vérifier que le trafic est enregistré
- [ ] Configurer les objectifs de conversion
- [ ] Configurer les annonces (si applicable)

### Google My Business
- [ ] Aller sur https://maps.google.com
- [ ] Vérifier que votre établissement apparaît
- [ ] Vérifier que les avis s'affichent
- [ ] Vérifier les heures d'ouverture
- [ ] Ajouter des photos
- [ ] Demander une vérification (SMS/courrier)
- [ ] Attendre la vérification

---

## Phase 5️⃣ : Configuration du formulaire de contact

### Option A : Formspree (Recommandé)
- [ ] Aller sur https://formspree.io
- [ ] Créer un compte gratuit
- [ ] Créer un nouveau formulaire
- [ ] Copier le Form ID
- [ ] Ajouter le Form ID dans index.html
- [ ] Tester le formulaire
- [ ] Vérifier que les emails arrivent

### Option B : Discord Webhook
- [ ] Créer un serveur Discord (si nécessaire)
- [ ] Ajouter un webhook
- [ ] Copier l'URL du webhook
- [ ] Ajouter l'URL dans index.html
- [ ] Tester en envoyant un message
- [ ] Vérifier que le message arrive sur Discord

### Option C : Service d'emailing
- [ ] Configurer Mailchimp ou équivalent
- [ ] Ajouter l'intégration
- [ ] Tester le formulaire
- [ ] Vérifier les confirmations

---

## Phase 6️⃣ : Optimisations SEO

### Contenu
- [ ] Vérifier que le contenu est pertinent
- [ ] Vérifier la densité de mots-clés (~2%)
- [ ] Vérifier les titres (H1, H2, H3)
- [ ] Ajouter plus de contenu si nécessaire
- [ ] Écrire un blog (optionnel)

### Liens
- [ ] Vérifier que tous les liens internes fonctionnent
- [ ] Ajouter des liens internes stratégiques
- [ ] Ajouter des liens externes pertinents
- [ ] Créer des liens depuis les réseaux sociaux

### Médias sociaux
- [ ] Partager le lien sur Facebook
- [ ] Partager le lien sur Instagram
- [ ] Partager le lien sur LinkedIn
- [ ] Ajouter les boutons de partage (optionnel)

### Stratégie locale
- [ ] S'enregistrer sur les annuaires locaux
- [ ] Ajouter l'établissement sur Pages Jaunes
- [ ] Ajouter l'établissement sur Yelp
- [ ] Demander des avis clients

---

## Phase 7️⃣ : Sécurité & Conformité

### HTTPS/SSL
- [ ] Vérifier que le site est en HTTPS
- [ ] Vérifier que le certificat est valide
- [ ] Vérifier qu'il n'y a pas d'avertissements de sécurité
- [ ] Activer HSTS (dans .htaccess)

### RGPD
- [ ] Vérifier que la page privacy.html est accessible
- [ ] Vérifier que les CGU sont accessibles
- [ ] Ajouter un bandeau de consentement aux cookies (optionnel)
- [ ] Vérifier que les données ne sont pas vendues
- [ ] Mettre en place une politique de rétention

### Mentions légales
- [ ] Vérifier que les mentions-legales.html existe
- [ ] Vérifier que les infos sont à jour
- [ ] Vérifier que le lien est dans le footer

---

## Phase 8️⃣ : Post-lancement

### Semaine 1
- [ ] Vérifier tous les liens
- [ ] Tester le formulaire
- [ ] Vérifier WhatsApp
- [ ] Vérifier la mobilité
- [ ] Vérifier les images
- [ ] Vérifier Google My Business

### Semaine 2-4
- [ ] Vérifier l'indexation Google Search Console
- [ ] Vérifier les impressions initiales
- [ ] Analyser le trafic Google Analytics
- [ ] Corriger les erreurs d'indexation
- [ ] Ajouter du contenu frais

### Mensuel
- [ ] Mettre à jour les avis Google
- [ ] Ajouter du nouveau contenu
- [ ] Vérifier les liens cassés
- [ ] Analyser les performances SEO
- [ ] Optimiser les pages faibles

### Trimestriel
- [ ] Audit de sécurité
- [ ] Vérifier les mises à jour de sécurité
- [ ] Optimiser les images
- [ ] Ajouter plus de contenu

---

## Phase 9️⃣ : Métriques à surveiller

### Traffic
- [ ] Visiteurs uniques par mois
- [ ] Pages vues
- [ ] Taux de rebond (< 50%)
- [ ] Durée moyenne de visite
- [ ] Conversion (réservations)

### SEO
- [ ] Mots-clés rankés (Google Search Console)
- [ ] Impressions (Google Search Console)
- [ ] Clics (Google Search Console)
- [ ] Backlinks (https://ahrefs.com)

### Performance
- [ ] Lighthouse score
- [ ] PageSpeed score
- [ ] Core Web Vitals
- [ ] Temps de chargement

---

## 🎯 Ordre de priorité

### CRITIQUE (faire d'abord)
1. [ ] Remplacer les placeholders
2. [ ] Uploader sur hébergeur
3. [ ] Tester le site en ligne
4. [ ] Google Search Console sitemap
5. [ ] HTTPS/SSL activé

### IMPORTANT (faire rapidement)
6. [ ] Google Analytics
7. [ ] Google My Business
8. [ ] Formulaire de contact
9. [ ] Test de performance
10. [ ] Test mobile

### UTILE (faire après)
11. [ ] Ajouter du contenu
12. [ ] Liens internes
13. [ ] Réseaux sociaux
14. [ ] Optimisations supplémentaires

---

## ⏱️ Timeline estimée

```
Jour 0   : Configuration (1-2h)
Jour 0-1 : Upload (30 min)
Jour 1   : Tests (1-2h)
Jour 1   : Google Search Console (30 min)
Jour 2-7 : Attendre indexation
Jour 7   : Analytics & analyse
Jour 8+  : Optimisations continues
```

**Total préparation : 5-8 heures**
**Délai avant résultats SEO : 4-8 semaines**

---

## 📊 Checklist finale

- [ ] Tous les 9 groupes ci-dessus complétés
- [ ] Site accessible via domaine
- [ ] HTTPS/SSL activé
- [ ] Google Search Console configuré
- [ ] Sitemap soumis
- [ ] Google Analytics installé
- [ ] Test Lighthouse > 90
- [ ] Test mobile OK
- [ ] Formulaire de contact fonctionnel
- [ ] Google My Business vérifié

---

## ✅ Félicitations !

Si vous avez coché tous les points, votre site est prêt pour générer des réservations ! 🎉

**Prochaines étapes** :
1. Attendez 4-8 semaines pour les résultats SEO
2. Mettez à jour les avis Google mensuellement
3. Ajoutez du contenu régulièrement
4. Analysez les statistiques

**Bonne chance ! 🌿**