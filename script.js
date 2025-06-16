// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Données des projets
const projectsData = {
    project1: {
        title: "Site Web Responsive",
        description: "Un site web moderne et responsive développé avec HTML, CSS et JavaScript. Ce projet démontre mes compétences en développement front-end et en design responsive.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        features: [
            "Design responsive adaptatif",
            "Navigation fluide",
            "Animations CSS",
            "Optimisation des performances"
        ],
        detailsLink: "projet1.html"
    },
    project2: {
        title: "Application Python",
        description: "Une application desktop développée en Python avec une interface graphique.",
        technologies: ["Python", "Tkinter", "SQLite", "OOP"],
        features: [
            "Interface graphique intuitive",
            "Base de données SQLite",
            "Gestion des données utilisateur",
            "Système de sauvegarde automatique"
        ],
        detailsLink: "projet2.html"
    },
    project3: {
        title: "Base de Données Java",
        description: "Un système de gestion de base de données développé en Java avec une interface console.",
        technologies: ["Java", "SQL", "JDBC", "MySQL"],
        features: [
            "Opérations CRUD complètes",
            "Interface en ligne de commande",
            "Gestion des connexions",
            "Validation des données"
        ],
        detailsLink: "projet3.html"
    },
    project4: {
        title: "Script Système C",
        description: "Un ensemble de scripts système développés en C pour l'administration Linux.",
        technologies: ["C", "Linux", "Shell", "System Calls"],
        features: [
            "Monitoring système",
            "Gestion des processus",
            "Manipulation de fichiers",
            "Scripts d'automatisation"
        ],
        detailsLink: "projet4.html"
    }
};
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');

    if (projectId === 'project1') {
        modalContent.innerHTML = `
            <h2>Projet 1 : Jeu d'Échecs Java</h2>
            <p>Développement d’un jeu d’échecs textuel en Java avec gestion des règles, détection des échecs et échec et mat.</p>
            <ul>
                <li>Langage : Java</li>
                <li>Fonctionnalités : Tour par tour, détection des menaces sur le roi, retour arrière</li>
            </ul>
            <a href="projet1.html" target="_blank" class="btn btn-primary">Voir le projet complet</a>
        `;
    } else if (projectId === 'project2') {
        modalContent.innerHTML = `
            <h2>Projet 2 : Base de données Python</h2>
            <p>Création d’une base de données relationnelle et développement d’une application Python pour la gestion des données via des requêtes SQL.</p>
            <ul>
                <li>Langages : Python, SQL</li>
                <li>Fonctionnalités : Création et gestion des tables, exécution de requêtes SQL complexes, insertion, mise à jour et extraction de données</li>
                <li>Technologies : SQLite / MySQL, bibliothèques Python (sqlite3, pymysql)</li>
            </ul>
            <a href="projet2.html" target="_blank" class="btn btn-primary">Voir le projet complet</a>
        `;

    } else if (projectId === 'project3') {
        modalContent.innerHTML = `
            <h2>Projet 3 : Analyse de Données avec Python</h2>
            <p>Analyse exploratoire et visualisation de données à l’aide de Pandas, Matplotlib et Seaborn.</p>
            <ul>
                <li>Langage : Python</li>
                <li>Outils : Jupyter Notebook, Matplotlib, Seaborn</li>
                <li>Fonctionnalités : Nettoyage, visualisations, corrélations</li>
            </ul>
            <a href="projet3.html" target="_blank" class="btn btn-primary">Voir le projet complet</a>
        `;
    } else if (projectId === 'project4') {
        modalContent.innerHTML = `
            <h2>Projet 4 : Application Web avec Flask</h2>
            <p>Création d’une petite application web dynamique utilisant Flask, HTML/CSS et un système de templates.</p>
            <ul>
                <li>Langage : Python</li>
                <li>Outils : Flask, Jinja2, HTML/CSS</li>
                <li>Fonctionnalités : Formulaires, routes, affichage dynamique</li>
            </ul>
            <a href="projet4.html" target="_blank" class="btn btn-primary">Voir le projet complet</a>
        `;
    } else if (projectId === 'project5') {
        modalContent.innerHTML = `
            <h2>Projet 5 : Site Web Responsive</h2>
            <p>Conception d’un site web moderne et responsive en HTML, CSS et JavaScript.</p>
            <ul>
                <li>Technologies : HTML5, CSS3, JavaScript</li>
                <li>Fonctionnalités : Responsive Design, animations, navigation fluide</li>
            </ul>
            <img src="images/responsive-logo.png" alt="Logo Web Design" style="width:150px;">
            <a href="projet5.html" target="_blank" class="btn btn-primary">Voir le projet complet</a>
        `;
    } else if (projectId === 'project6') {
        modalContent.innerHTML = `
            <h2>Projet 6 : Modèle de Machine Learning</h2>
            <p>Développement d’un modèle supervisé de classification avec Scikit-learn sur un jeu de données réel.</p>
            <ul>
                <li>Langage : Python</li>
                <li>Bibliothèques : Scikit-learn, Pandas, NumPy</li>
                <li>Fonctionnalités : Prétraitement, apprentissage, évaluation</li>
            </ul>
            <img src="images/ml-logo.png" alt="Logo Machine Learning" style="width:150px;">
            <a href="projet6.html" target="_blank" class="btn btn-primary">Voir le projet complet</a>
        `;
    }

    modal.style.display = 'block';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});


// Effet de typing pour le titre principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Démarrer l'effet de typing au chargement de la page
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Compteur animé pour les statistiques (si vous voulez ajouter des stats)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Fonction pour mettre en surbrillance la section active dans la navigation
function highlightActiveSection() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Écouter le scroll pour mettre à jour la navigation active
window.addEventListener('scroll', highlightActiveSection);

// Ajouter les styles pour la navigation active
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #3498db !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Agrandissement des images
document.querySelectorAll('.modal-project-image img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        lightbox.innerHTML = `<img src="${img.src}" alt=""><span class="close-lightbox" style="position:absolute;top:20px;right:30px;font-size:40px;color:#fff;cursor:pointer;">✖</span>`;
        lightbox.classList.add('active');
        lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    });
});

