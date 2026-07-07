/* ===================================================================
   ROSTI POULET — Script partagé
   =================================================================== */

/* ==== CONFIG À PERSONNALISER ==== */
const WHATSAPP_PHONE = "33XXXXXXXXX"; // format international sans "+"
const WA_MESSAGE = "Bonjour, je souhaite passer une commande chez ROSTI POULET.";

/* WhatsApp : lien du bouton "Démarrer la discussion" */
const waSend = document.getElementById('waSend');
if (waSend) {
    waSend.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;
}
function toggleWaChat() {
    const c = document.getElementById('waChat');
    if (c) c.classList.toggle('open');
}
function openWhatsApp() {
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`, '_blank');
}
function toggleMobileNav() {
    const m = document.getElementById('mobileNav');
    if (m) m.classList.toggle('open');
}

/* Header transparent (accueil) : devient solide au scroll */
const header = document.getElementById('header');
const progress = document.getElementById('progress');
if (header && header.classList.contains('js-transparent')) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
}
/* Barre de progression de lecture */
if (progress) {
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (window.scrollY / h * 100) + '%';
    }, { passive: true });
}

/* Apparition au défilement */
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Carrousel d'avis */
function scrollReviews(dir) {
    const t = document.getElementById('revTrack');
    if (t) t.scrollBy({ left: dir * 364, behavior: 'smooth' });
}
