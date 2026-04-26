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
    { title: "QRCryptX", desc: "QR-based encryption and advanced data security system.", tech: ["Python", "Cryptography"], img: "https://i.postimg.cc/0yXqVKng/q.png", imageClass: "project-img-contain", github: "https://github.com/Hitesh2810/QRCryptX" },
    { title: "Voice-Vista", desc: "Multilingual voice-controlled intuitive web application.", tech: ["Node.js", "WebSpeech API"], img: "https://i.postimg.cc/ZKfrsfzD/vv.png", imageClass: "project-img-contain" },
    { title: "SaaS-Notes-App", desc: "High-performance cloud-based note taking application.", tech: ["React", "Firebase"], img: "https://i.postimg.cc/mDm8BTFM/ss.png", imageClass: "project-img-contain", github: "https://github.com/Hitesh2810/SaaS-Notes-App" },
    { title: "LeadHub", desc: "Enterprise-grade lead management and CRM system.", tech: ["JavaScript", "Express"], img: "https://i.postimg.cc/2jbrMyWx/lh.png", imageClass: "project-img-contain", github: "https://github.com/Hitesh2810/LeadHub" },
    { title: "RnD_AI_CurveFit", desc: "Parametric curve fitting using custom ML algorithms.", tech: ["Python", "NumPy", "Scikit"], img: "https://i.postimg.cc/MptxkQpB/rnd.png", imageClass: "project-img-contain" },
    { title: "Capex-Tracker", desc: "Financial tracking for capital expenditures.", tech: ["React", "Charts.js"], img: "https://i.postimg.cc/BvtLLs8X/ct.png", imageClass: "project-img-contain", github: "https://github.com/Hitesh2810/capex-tracker" },
    { title: "Code-Tree", desc: "Visualizing complex Data Structures and Algorithms.", tech: ["Canvas API", "Algorithms"], img: "https://i.postimg.cc/Z5R9M38q/c.png", imageClass: "project-img-contain" },
    { title: "WebSleuth", desc: "Web security and vulnerability assessment tool.", tech: ["Security", "Python"], img: "https://i.postimg.cc/65vyNzkY/web.png", imageClass: "project-img-contain", github: "https://github.com/Hitesh2810/WebSleuth-Hitesh" },
    { title: "Impact of COVID-19 on Mental Health", desc: "Machine learning analysis of COVID-19's impact on mental health patterns.", tech: ["Python", "Machine Learning"], img: "https://i.postimg.cc/1X59L3cM/ml.png", imageClass: "project-img-contain", github: "https://github.com/Hitesh2810/Machine-Learning" },
    { title: "Galaxy Classification Using Deep Learning", desc: "Deep learning model for classifying galaxy images and astronomical patterns.", tech: ["Deep Learning", "Python"], img: "https://i.postimg.cc/66dnKjVt/gc.png", imageClass: "project-img-contain", github: "https://github.com/Hitesh2810/Neural-Networks-And-Deep-Learning" }
];

const projectGrid = document.getElementById('projects-grid');
const projectsToShow = body.dataset.page === 'projects' ? projects : projects.slice(0, 3);

if (projectGrid) {
    projectsToShow.forEach(p => {
        projectGrid.innerHTML += `
        <div class="project-card reveal" data-tilt>
            <div class="project-img ${p.imageClass || ''}" style="background-image: url('${p.img}')"></div>
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
    { title: "APCIT 2025 - Research Paper Presentation", desc: "Presented deep learning work on galaxy classification.", link: "https://drive.google.com/file/d/1uIHpCPL50AYpm8PzMpBRrMfJ6XIvXf4k/view?usp=drive_link" },
    { title: "APCIT 2025 - Secure QR System Research", desc: "Presented research on encrypted QR-based file transfer.", link: "https://drive.google.com/file/d/1zdcPu0fUOzohbX1tU9RgC9p78_TjUCFj/view?usp=drive_link" },
    { title: "Best Paper Presenter - SSITCON 2025", desc: "Awarded best paper for blockchain-based file sharing system.", link: "https://drive.google.com/file/d/1nTJNhU6Os-oHHl2AMS8G3R2ynPZjTIxe/view?usp=drive_link" },
    { title: "ICISS 2025 - IEEE Conference Presentation", desc: "Presented research on AI in digital mental health.", link: "https://drive.google.com/file/d/1SpMVvhLhoyIKNMLXXKuz2Q86WDBcX9Mm/view?usp=drive_link" },
    { title: "Web Development Internship - Raise Digital", desc: "Completed internship with real-world web development experience.", link: "https://drive.google.com/file/d/15PTdVWCgjcDqPoGc2q_1KtO1Q9FZuJtL/view?usp=drive_link" },
    { title: "Web Development Training - 1Stop", desc: "Successfully completed certified web development program.", link: "https://drive.google.com/file/d/1WYVckqdddvN8j8-bG60reu6pGFjzXBg7/view?usp=drive_link" }
];

const certGrid = document.getElementById('certs-grid');
if (certGrid) {
    certs.forEach(c => {
        certGrid.innerHTML += `
        <div class="skill-card cert-card reveal" data-tilt>
            <a href="${c.link}" class="cert-link-icon" target="_blank" rel="noopener noreferrer" aria-label="View ${c.title}">
                <i data-lucide="external-link" size="18"></i>
            </a>
            <i data-lucide="award" style="color: var(--accent)"></i>
            <h4 style="margin-top: 1rem">${c.title}</h4>
            <p style="font-size: 0.85rem; opacity: 0.75; margin-top: 0.5rem">${c.desc}</p>
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
