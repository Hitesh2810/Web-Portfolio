// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

if (themeBtn && themeIcon) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
}

function updateIcon(theme) {
    if (!themeIcon) return;
    themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    lucide.createIcons();
}

// Typed JS Animation
if (document.getElementById('typed')) {
    new Typed('#typed', {
        strings: [
            'Full Stack Developer',
            'AI Enthusiast',
            'ML Engineer',
            'Data Scientist'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// Project Data
const projects = [
    { title: "QRCryptX", desc: "QR-based encryption and advanced data security system.", tech: ["Python", "Cryptography"], img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400", github: "https://github.com/Hitesh2810/QRCryptX" },
    { title: "Voice-Vista", desc: "Multilingual voice-controlled intuitive web application.", tech: ["Node.js", "WebSpeech API"], img: "https://images.unsplash.com/photo-1589254065675-d2d144f84929?auto=format&fit=crop&q=80&w=400" },
    { title: "SaaS-Notes-App", desc: "High-performance cloud-based note taking application.", tech: ["React", "Firebase"], img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400", github: "https://github.com/Hitesh2810/SaaS-Notes-App" },
    { title: "LeadHub", desc: "Enterprise-grade lead management and CRM system.", tech: ["JavaScript", "Express"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400", github: "https://github.com/Hitesh2810/LeadHub" },
    { title: "RnD_AI_CurveFit", desc: "Parametric curve fitting using custom ML algorithms.", tech: ["Python", "NumPy", "Scikit"], img: "https://images.unsplash.com/photo-1509228468518-180dd48a5411?auto=format&fit=crop&q=80&w=400" },
    { title: "Capex-Tracker", desc: "Financial tracking for capital expenditures.", tech: ["React", "Charts.js"], img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400", github: "https://github.com/Hitesh2810/capex-tracker" },
    { title: "Code-Tree", desc: "Visualizing complex Data Structures and Algorithms.", tech: ["Canvas API", "Algorithms"], img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400" },
    { title: "WebSleuth", desc: "Web security and vulnerability assessment tool.", tech: ["Security", "Python"], img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400", github: "https://github.com/Hitesh2810/WebSleuth-Hitesh" }
];

const projectGrid = document.getElementById('projects-grid');
const projectsToShow = body.dataset.page === 'projects' ? projects : projects.slice(0, 3);

if (projectGrid) {
    projectsToShow.forEach(p => {
        projectGrid.innerHTML += `
        <div class="project-card reveal" data-tilt>
            <div class="project-img" style="background-image: url('${p.img}')"></div>
            <div class="project-content">
                <div class="project-tags">
                    ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <h3>${p.title}</h3>
                <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">${p.desc}</p>
                <div class="project-links">
                    <a href="${p.github || '#'}" target="_blank" rel="noopener noreferrer"><i data-lucide="github" size="18"></i> GitHub</a>
                    <a href="#"><i data-lucide="external-link" size="18"></i> Demo</a>
                </div>
            </div>
        </div>
    `;
    });
}

// Certifications
const certs = [
    { title: "Deep Learning Specialization", issuer: "Coursera / DeepLearning.AI" },
    { title: "Machine Learning Professional", issuer: "Google Cloud" },
    { title: "Advanced React & Redux", issuer: "Udemy" },
    { title: "Full Stack Web Development", issuer: "FreeCodeCamp" },
    { title: "Python for Data Science", issuer: "IBM" },
    { title: "AWS Solutions Architect", issuer: "Amazon Web Services" }
];

const certGrid = document.getElementById('certs-grid');
if (certGrid) {
certs.forEach(c => {
    certGrid.innerHTML += `
        <div class="skill-card reveal" data-tilt style="text-align: left; padding: 1.5rem">
            <i data-lucide="award" style="color: var(--accent)"></i>
            <h4 style="margin-top: 1rem">${c.title}</h4>
            <p style="font-size: 0.8rem; opacity: 0.7">${c.issuer} • 2024</p>
        </div>
    `;
});
}

// Blog Dummy Data
const blogs = [
    { title: "The Future of AI in Web Dev", date: "Oct 2023", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300" },
    { title: "Mastering Clean Code", date: "Sep 2023", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300" },
    { title: "Serverless Architecture 101", date: "Aug 2023", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300" }
];

const blogGrid = document.getElementById('blog-grid');
if (blogGrid) {
blogs.forEach(b => {
    blogGrid.innerHTML += `
        <div class="project-card reveal" data-tilt>
            <div class="project-img" style="background-image: url('${b.img}'); height: 150px;"></div>
            <div class="project-content">
                <span style="font-size: 0.8rem; color: var(--accent)">${b.date}</span>
                <h4 style="margin: 0.5rem 0">${b.title}</h4>
                <a href="#" class="btn btn-outline" style="padding: 0.4rem 1rem; font-size: 0.8rem; display: inline-block; margin-top: 0.5rem">Read More</a>
            </div>
        </div>
    `;
});
}

// Scroll Reveal
ScrollReveal().reveal('.reveal', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 100
});

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "Message Sent! ✓";
        btn.style.background = "#10b981";
        e.target.reset();
        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.background = "";
        }, 3000);
    }, 1500);
});
}

// Scroll active link highlight
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section, header");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-links a").forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.style.color = "var(--primary)";
        } else {
            a.style.color = "";
        }
    });
});

// Initialize Tilt
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

// Reload lucide for newly added items
lucide.createIcons();
