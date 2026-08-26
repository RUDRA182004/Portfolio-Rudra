const experience = [
    {
        role: "AI Engineer",
        company: "Zimplistic India Pvt Ltd",
        duration: "Aug 2025 - Present",
        featured: true,
        bullets: [
            "Built production AI and device-support systems for Rotimatic/itor3 workflows, including RIA, QAC, and a troubleshooting console. My work connected computer vision services, business-logic APIs, dashboards, desktop tooling, remote support workflows, authentication, storage, release packaging, and machine communication paths into usable engineering systems."
        ],
        tech: ["Python", "FastAPI", "YOLO", "OpenCV", "React", "PyQt6", "MQTT", "AWS IoT Core", "Firebase", "Cloud Run", "Docker"]
    },
    {
        role: "AI Intern",
        company: "NapChief",
        duration: "April 2025 - June 2025",
        bullets: [
            "Generated AI-powered images for marketing mockups, built an ATS system using NLP and LLMs to support resume screening, and managed data for demand forecasting and supply planning."
        ],
        tech: ["Generative AI", "NLP", "LLMs", "Data Management"]
    },
    {
        role: "Financial Analyst Intern",
        company: "Awesome Advertising LLP",
        duration: "May 2024 - Jun 2024",
        bullets: [
            "Analyzed stock charts using AngelOne, prepared reports, studied finance markets and investment strategies, and delivered timely financial analysis to support decision-making."
        ],
        tech: ["Financial Analysis", "Excel", "Reporting", "Market Research"]
    }
];

const featuredProjects = [
    {
        id: "ria",
        title: "RIA - Recipe Intelligence Assistant",
        kicker: "Vision AI",
        summary: "Turns roti cooking images into automated recipe adjustments through vision models, lookup logic, and an authenticated operator dashboard.",
        tags: ["FastAPI", "YOLO", "Segmentation", "Firebase", "React", "Docker", "Cloud Run"],
        details: {
            Problem: "The team needed a way to close the loop between visual inspection of a cooking roti and recipe adjustment, instead of relying only on manual review.",
            Solution: "I built a three-part system: a FastAPI computer-vision service, a FastAPI business-logic service, and a React dashboard secured with Google authentication.",
            Architecture: "The vision service validates the cooking container, detects the container and roti with YOLO models, segments uncooked regions, and returns uncooked percentage, confidence, and timing metadata. The logic service converts roti size and uncooked percentage into water-to-flour ratio and size adjustments using a matrix-based lookup engine.",
            Impact: "Images and process records are stored in Firebase Storage and Firestore, giving operators a searchable, filterable, paginated, and auditable view of every model-driven roti-cooking decision.",
            Delivery: "The service is containerized with Docker, deployed to Cloud Run through GitHub Actions, and uses Git LFS for trained model files."
        }
    },
    {
        id: "qac",
        title: "QAC - Quality Assurance Control",
        kicker: "Manufacturing / QA",
        summary: "A PyQt6 desktop application for manufacturing, testing, rework, support, camera validation, and machine communication.",
        tags: ["PyQt6", "OpenCV", "MQTT", "TLS", "AWS IoT Core", "WebSocket", "Serial", "MES"],
        details: {
            Problem: "Manufacturing and support teams needed one console to manufacture, test, rework, and support Rotimatic/itor3 devices without juggling separate tools.",
            Solution: "I built a PyQt6 desktop application organized into UI, controllers, command loop, and transport layers.",
            Architecture: "The transport layer abstracts local Wi-Fi over WebSocket, wired serial, and remote MQTT over TLS through AWS IoT Core. A multi-threaded command loop serializes execution, tracks timeouts, and routes JSON responses back to the originating command.",
            Workflows: "Mode-specific controllers support manufacturing, FFT and QARM quality testing, rework, sub-assembly, and camera validation. The camera path uses OpenCV to score images for pass/fail quality decisions and integrates with MES for QARM uploads.",
            Delivery: "Authentication supports simple, Odoo-based, and Microsoft device-flow login with role-based tab access. I also worked on versioned auto-update, PyInstaller packaging, and GitHub Releases."
        }
    },
    {
        id: "troubleshooting",
        title: "Trouble-shooting Tool",
        kicker: "Customer Support",
        summary: "A React/Vite and Socket.IO console for remote device diagnosis, command control, logs, OTA assignment, and support-case workflows.",
        tags: ["React", "Vite", "Express", "Socket.IO", "MQTT", "AWS IoT Core", "MySQL RDS", "S3"],
        details: {
            Problem: "Field engineers and support teams needed a single tool to diagnose and control Rotimatic devices remotely.",
            Solution: "I built a React/Vite web console backed by an Express and Socket.IO server that keeps live browser-to-backend communication while the backend bridges to devices over MQTT through AWS IoT Core.",
            Architecture: "The tool streams logs and command responses in real time, parses logs to infer device state, and separately tracks browser connection health versus the machine's own Wi-Fi signal strength.",
            Workflows: "Dedicated panels cover kicker, press, heater, and dispense operations with round-trip timing checks; recipe and quality tuning for RIA and non-RIA firmware; firmware OTA group assignment; and structured support-case export.",
            Impact: "Support cases can be auto-filled from the connected machine, exported to Excel, and stored in a MySQL RDS backend for analytics. The backend also handles Microsoft company-domain authentication and S3-based device log archiving."
        }
    }
];

const skillGroups = [
    {
        title: "AI / Machine Learning",
        skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "CNNs", "Model Evaluation", "Feature Engineering"]
    },
    {
        title: "Generative AI",
        skills: ["LLMs", "RAG", "Agents", "Prompt Engineering", "Embeddings", "ATS Automation"]
    },
    {
        title: "Programming & APIs",
        skills: ["Python", "JavaScript", "TypeScript", "FastAPI", "Express", "Socket.IO", "PyQt6"]
    },
    {
        title: "Computer Vision",
        skills: ["YOLO", "Segmentation", "OpenCV", "Image Processing", "Camera Validation"]
    },
    {
        title: "Cloud & Infrastructure",
        skills: ["Docker", "Cloud Run", "GitHub Actions", "Firebase", "Firestore", "AWS IoT Core", "S3", "Git LFS"]
    },
    {
        title: "Data & Analytics",
        skills: ["SQL", "MySQL RDS", "Pandas", "NumPy", "Power BI", "Excel", "Data Visualization"]
    }
];

const selectedProjects = [
    {
        title: "Plant Disease Prediction",
        summary: "CNN-based plant disease detection system with 96% accuracy, data augmentation, fine-tuning, and a Streamlit app for real-time prediction and treatment recommendations.",
        tags: ["Python", "Deep Learning", "CNN", "Streamlit"],
        href: "https://github.com/RUDRA182004/Plant-Disease-Detection"
    },
    {
        title: "Stellar Classification Model",
        summary: "Machine learning classifier on SDSS17 data to identify stars, galaxies, and quasars across 100k+ observations using feature engineering, visualization, Random Forest, SVM, and tuning.",
        tags: ["Python", "Machine Learning", "Data Science", "Random Forest"],
        href: "https://github.com/RUDRA182004/Stellar-Classification-Model"
    },
    {
        title: "Application Scorecard Model",
        summary: "Credit application scorecard using Decision Trees, Variable Clustering, Information Value, Random Forest feature importance, and ROC-AUC evaluation for credit risk assessment.",
        tags: ["Python", "Machine Learning", "Data Science", "Credit Risk"]
    }
];

const makeTag = (label) => `<span class="tag">${label}</span>`;

function renderExperience() {
    const container = document.querySelector("#experience-list");
    container.innerHTML = experience.map((item) => `
        <article class="experience-card ${item.featured ? "is-featured" : ""}">
            <div class="experience-top">
                <div>
                    <h3>${item.role}</h3>
                    <p>${item.company}</p>
                </div>
                <p class="meta">${item.duration}</p>
            </div>
            <div class="experience-copy">
                ${item.bullets.map((bullet) => `<p>${bullet}</p>`).join("")}
            </div>
            <div class="tag-row">${item.tech.map(makeTag).join("")}</div>
        </article>
    `).join("");
}

function renderFeaturedProjects() {
    const container = document.querySelector("#featured-project-list");
    container.innerHTML = featuredProjects.map((project) => `
        <article class="project-card">
            <div class="project-card-body">
                <p class="project-kicker">${project.kicker}</p>
                <h3>${project.title}</h3>
                <p class="card-copy">${project.summary}</p>
                <div class="tag-row">${project.tags.map(makeTag).join("")}</div>
                <button class="details-button" type="button" data-project-id="${project.id}">View Details</button>
            </div>
        </article>
    `).join("");
}

function renderSkills() {
    const container = document.querySelector("#skills-grid");
    container.innerHTML = skillGroups.map((group) => `
        <article class="skill-group">
            <h3>${group.title}</h3>
            <div class="skill-list">${group.skills.map(makeTag).join("")}</div>
        </article>
    `).join("");
}

function renderSelectedProjects() {
    const container = document.querySelector("#project-list");
    container.innerHTML = selectedProjects.map((project) => {
        const card = `
            <article class="project-card">
                <div class="project-card-body">
                    <h3>${project.title}</h3>
                    <p class="card-copy">${project.summary}</p>
                    <div class="tag-row">${project.tags.map(makeTag).join("")}</div>
                </div>
            </article>
        `;

        return project.href
            ? `<a class="project-link" href="${project.href}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} on GitHub">${card}</a>`
            : card;
    }).join("");
}

function setupProjectDialog() {
    const dialog = document.querySelector("#project-dialog");
    const title = document.querySelector("#dialog-title");
    const kicker = document.querySelector("#dialog-kicker");
    const summary = document.querySelector("#dialog-summary");
    const body = document.querySelector("#dialog-body");
    const close = document.querySelector(".dialog-close");

    document.addEventListener("click", (event) => {
        const button = event.target.closest("[data-project-id]");
        if (!button) return;

        const project = featuredProjects.find((item) => item.id === button.dataset.projectId);
        if (!project) return;

        title.textContent = project.title;
        kicker.textContent = project.kicker;
        summary.textContent = project.summary;
        body.innerHTML = `
            <div class="dialog-tags">${project.tags.map(makeTag).join("")}</div>
            ${Object.entries(project.details).map(([label, text]) => `
                <section class="detail-block">
                    <h3>${label}</h3>
                    <p>${text}</p>
                </section>
            `).join("")}
        `;

        if (typeof dialog.showModal === "function") {
            dialog.showModal();
        } else {
            dialog.setAttribute("open", "");
        }
    });

    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });
}

function setupNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("#site-nav");
    const links = [...document.querySelectorAll(".site-nav a")];
    const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.textContent = isOpen ? "Close" : "Menu";
    });

    links.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.textContent = "Menu";
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: "-42% 0px -52% 0px", threshold: 0.01 });

    sections.forEach((section) => observer.observe(section));
}

function setupReveal() {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach((item) => observer.observe(item));
}

renderExperience();
renderFeaturedProjects();
renderSkills();
renderSelectedProjects();
setupProjectDialog();
setupNavigation();
setupReveal();
