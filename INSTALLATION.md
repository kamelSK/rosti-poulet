# 🚀 Guide d'Installation ROSTI POULET

## ⚡ Installation Rapide (5-10 minutes)

### Étape 1 : Télécharger et placer les fichiers
```
1. Créer un dossier pour votre site (ex: "rostipoulet")
2. Copier TOUS les fichiers HTML, CSS, images dans ce dossier
3. Créer un sous-dossier pour les images (optionnel)
```

### Étape 2 : Configurer les informations de base
Ouvrez chaque fichier et remplacez :

#### Dans **TOUS les fichiers** :
- `[Votre adresse complète]` → votre adresse physique
- `[Votre ville]` → votre ville
- `[Code postal]` → votre code postal
- `06 XX XX XX XX` → votre téléphone
- `contact@rostipoulet.fr` → votre email

#### Dans **index.html** (ligne 750) :
```javascript
// Trouvez cette ligne et remplacez par votre numéro
const whatsappPhone = "33XXXXXXXXX"; // Ex: 33612345678
```

#### Dans **sitemap.xml** (partout) :
```xml
https://www.rostipoulet.fr → https://www.VOTRE-DOMAINE.fr
```

### Étape 3 : Ajouter le manifest.json
Ajoutez cette ligne dans le `<head>` de **index.html**, **services.html**, etc. :
```html
<link rel="manifest" href="manifest.json">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<meta name="theme-color" content="#8B5A3C">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

### Étape 4 : Téléverser chez votre hébergeur
1. Accédez à votre **cPanel** ou **FTP**
2. Navigez au dossier **public_html** (ou **www**)
3. Uploader TOUS les fichiers

### Étape 5 : Configurer le domaine
1. Allez dans votre registrar (OVH, Godaddy, etc.)
2. Pointez les **DNS** vers votre hébergeur
3. Attendez la propagation DNS (15min-24h)

---

## 🔧 Configuration Avancée

### Google My Business - Intégration Widget

#### Étape 1 : Créer/Récupérer votre établissement
1. Allez sur https://maps.google.com
2. Recherchez votre établissement
3. Cliquez sur votre fiche
4. Cliquez sur **"Partager"** 
5. Cliquez sur **"Intégrer"**

#### Étape 2 : Récupérer l'iframe
Google vous donne un code comme :
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="400" height="300"></iframe>
```

#### Étape 3 : Intégrer dans le site
Remplacez le code iframe dans **index.html** (cherchez `<iframe src="https://www.google.com/maps/embed"`) par votre iframe personnalisé.

---

### WhatsApp - Configuration numéro

#### Format du numéro
```
Format international : 33 + 9 chiffres sans le 0
Exemple: 06 12 34 56 78 → 33612345678
```

#### Mettre à jour dans index.html
```javascript
// Ligne ~750
function sendWhatsAppMessage() {
    const phone = "33612345678"; // ← Remplacer ici
    const message = "Bonjour, comment puis-je vous aider ?";
    // ...
}
```

---

### Formulaire de Contact - Configuration

#### Option A : Formspree (Recommandé - Gratuit)

1. Allez sur https://formspree.io
2. Connectez-vous ou créez un compte
3. Créez un nouveau formulaire
4. Copie votre **Form ID** (ex: `f/YOUR_ID`)

Modifiez **index.html** (fonction `handleContactForm`) :
```javascript
function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Remplacer YOUR_FORM_ID par votre ID
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        alert('Merci ! Votre message a été envoyé.');
        event.target.reset();
    })
    .catch(error => console.error('Erreur:', error));
}
```

#### Option B : Webhooks Discord
Recevez les messages directement dans Discord :

1. Créez un webhook Discord (Paramètres → Webhooks → Nouveau)
2. Copie l'URL du webhook
3. Modifiez la fonction `handleContactForm` :
```javascript
function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Remplacer par votre webhook Discord
    const webhookUrl = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL';
    
    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `**Nouveau message de ${name} (${email})**\n${message}`
        })
    });
}
```

---

### Google Analytics - Suivi du trafic

1. Allez sur https://analytics.google.com
2. Créez un nouveau compte
3. Récupérez votre **Tracking ID** (GA_XXXXXXXX)

Ajoutez dans le `<head>` de TOUS les fichiers :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_XXXXXXXX');
</script>
```

---

### Google Search Console - Indexation

1. Allez sur https://search.google.com/search-console
2. Cliquez sur **"Ajouter une ressource"**
3. Entrez votre domaine
4. Vérifiez via :
   - **Balise HTML** (Ajouter dans `<head>`)
   - **Fichier HTML** (Uploader un fichier)
   - **DNS** (Recommandé)

Après vérification :
1. Allez dans **Sitemaps**
2. Cliquez **"Ajouter un sitemap"**
3. Entrez : `sitemap.xml`

---

## 🔒 Sécurité - HTTPS/SSL

### Configurer le certificat SSL (Gratuit)

#### Avec Let's Encrypt (via cPanel)
1. Allez dans **cPanel → AutoSSL**
2. Cliquez **"Installer"** sur votre domaine
3. Attendez 15 min que le certificat soit installé

#### Forcer HTTPS dans .htaccess
Dans `.htaccess`, décommentez ces lignes :
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 📱 Test & Validation

### Tester la performance
1. https://pagespeed.web.dev
2. https://gtmetrix.com
3. https://www.webpagetest.org

**Objectifs** :
- Lighthouse Score > 90
- PageSpeed > 85
- LCP < 2.5s

### Tester l'accessibilité
1. https://wave.webaim.org
2. https://www.axe-devtools.com
3. Tester au clavier (Tab, Enter)

### Tester sur tous appareils
- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablette (orientation portrait & paysage)

---

## 📊 Post-lancement

### Semaine 1
- [ ] Vérifier que tous les liens fonctionnent
- [ ] Tester le formulaire de contact
- [ ] Vérifier que WhatsApp s'ouvre correctement
- [ ] Tester sur mobile
- [ ] Vérifier la galerie

### Semaine 2-4
- [ ] Google Search Console doit indexer le site
- [ ] Vérifier que sitemap.xml a été lu
- [ ] Analyser le trafic initial (Google Analytics)
- [ ] Vérifier les mots-clés rankés
- [ ] Corriger les erreurs d'indexation

### Mensuel
- [ ] Mettre à jour les avis Google
- [ ] Publier nouveau contenu si possible
- [ ] Analyser les performances
- [ ] Vérifier les links cassés
- [ ] Mettre à jour la galerie

---

## 🆘 Dépannage

### Les images ne s'affichent pas
```
✅ Vérifier que les fichiers .webp sont uploadés
✅ Vérifier les permissions (644 pour les images)
✅ Vérifier le chemin (./unnamed.webp vs /unnamed.webp)
```

### Le site est très lent
```
✅ Compresser davantage les images WebP
✅ Activer GZIP dans .htaccess
✅ Activer le cache navigateur
✅ Utiliser un CDN (Cloudflare gratuit)
✅ Optimiser la base de données
```

### Les mots-clés n'apparaissent pas
```
✅ Vérifier dans Google Search Console
✅ S'assurer que le sitemap.xml a été indexé
✅ Attendre 4-8 semaines (délai normal)
✅ Vérifier la densité de mots-clés
✅ Ajouter du contenu frais régulièrement
```

### Le formulaire ne fonctionne pas
```
✅ Vérifier la console (F12 → Console)
✅ Tester Formspree directement
✅ Vérifier les CORS headers
✅ Tester sur un autre navigateur
✅ Vérifier que le Form ID est correct
```

---

## 📞 Support

Pour toute question ou problème :
- **Email** : contact@rostipoulet.fr
- **Téléphone** : 06 XX XX XX XX
- **WhatsApp** : Cliquez sur le bouton WhatsApp du site

---

## ✅ Checklist de lancement final

- [ ] Tous les placeholders remplacés
- [ ] Google My Business widget configuré
- [ ] WhatsApp activé
- [ ] Formulaire de contact fonctionnel
- [ ] Google Analytics installé
- [ ] Google Search Console configuré
- [ ] Sitemap.xml soumis
- [ ] SSL/HTTPS activé
- [ ] .htaccess uploadé
- [ ] manifest.json référencé
- [ ] Tests responsifs OK
- [ ] Lighthouse score > 90
- [ ] Tous les liens testés
- [ ] Images optimisées
- [ ] Métadonnées complètes

---

**🎉 Félicitations ! Votre site ROSTI POULET est maintenant en ligne !**

Dernière mise à jour : Janvier 2024