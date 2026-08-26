# Rudra Naik Portfolio

A modern static portfolio for Rudra Naik, focused on AI engineering, machine learning, computer vision, LLM/NLP systems, and production tooling.

## Structure

```text
Profile/
├── index.html      # Semantic page structure and SEO metadata
├── styles.css      # Responsive visual system and interaction styling
├── script.js       # Content rendering, project details, nav, and reveal effects
├── profile.jpeg    # Profile image
├── opencv.png      # Existing OpenCV asset
└── README.md
```

## Highlights

- Recruiter-focused hero section with clear AI/ML positioning.
- Featured AI systems for RIA, QAC, and the Trouble-shooting Tool.
- Expandable project detail modal with problem, solution, architecture, delivery, and impact.
- Categorized technical skills instead of a flat icon list.
- Responsive layout for desktop, tablet, and mobile.
- Accessible keyboard focus states, semantic sections, skip link, and reduced-motion support.
- No build step or runtime dependencies.

## Run Locally

Open `index.html` directly in a modern browser.

Optional local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating Content

Most repeatable content lives in `script.js`:

- `experience`
- `featuredProjects`
- `skillGroups`
- `selectedProjects`

Update those arrays to add new roles, projects, skills, links, or detailed case-study content.
