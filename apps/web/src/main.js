import { content, defaultLocale } from "@dave/content";

const STORAGE_KEY = "dave-portfolio-lang";

/* ---------- helpers ---------- */

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function getLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && content[saved]) return saved;
  return defaultLocale;
}

function setLocale(locale) {
  localStorage.setItem(STORAGE_KEY, locale);
}

/* ---------- static text (data-i18n) ---------- */

function applyStaticText(c) {
  document.documentElement.lang = c.locale;
  document.title = c.meta.title;

  const metaDesc = document.getElementById("metaDescription");
  if (metaDesc) metaDesc.setAttribute("content", c.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = getByPath(c, key);
    if (typeof value === "string") node.textContent = value;
  });
}

/* ---------- about (paragraphs) ---------- */

function renderAbout(c) {
  const container = document.getElementById("aboutParagraphs");
  container.innerHTML = "";
  const col1 = el("div", "about-text");
  const col2 = el("div", "about-text");
  c.about.paragraphs.forEach((p, i) => {
    const target = i === 0 ? col1 : col2;
    target.appendChild(el("p", null, p));
  });
  container.appendChild(col1);
  container.appendChild(col2);
}

/* ---------- skills ---------- */

function renderSkills(c) {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";
  c.skills.categories.forEach((cat) => {
    const card = el("div", "skill-cat");
    card.appendChild(el("h3", null, cat.name));
    const ul = el("ul");
    cat.items.forEach((item) => ul.appendChild(el("li", null, item)));
    card.appendChild(ul);
    grid.appendChild(card);
  });
}

/* ---------- mindset ---------- */

function renderMindset(c) {
  const grid = document.getElementById("mindsetGrid");
  grid.innerHTML = "";
  c.mindset.cards.forEach((card) => {
    const el_ = el("div", "mindset-card");
    el_.appendChild(el("span", "num", card.num));
    el_.appendChild(el("h3", null, card.title));
    el_.appendChild(el("p", null, card.text));
    grid.appendChild(el_);
  });
}

/* ---------- projects ---------- */

function renderProjects(c) {
  const list = document.getElementById("projectList");
  list.innerHTML = "";
  c.projects.items.forEach((p) => {
    const card = el("article", "project-card");

    const head = el("div", "project-head");
    head.appendChild(el("h3", "project-name", p.name));
    head.appendChild(el("p", "project-summary", p.summary));

    const stack = el("div", "project-stack");
    p.stack.forEach((s) => stack.appendChild(el("span", "tag", s)));
    head.appendChild(stack);

    const links = el("div", "project-links");
    const a = el("a", "project-link", p.github);
    a.href = "#";
    links.appendChild(a);
    head.appendChild(links);

    const detail = el("div", "project-detail");
    const dl = el("dl");
    const rows = [
      [c.locale === "fr" ? "Problème" : "Problem", p.problem],
      [c.locale === "fr" ? "Solution" : "Solution", p.solution],
      [c.locale === "fr" ? "Architecture" : "Architecture", p.architecture],
      [c.locale === "fr" ? "Focus" : "Focus", p.focus]
    ];
    rows.forEach(([term, def]) => {
      dl.appendChild(el("dt", null, term));
      dl.appendChild(el("dd", null, def));
    });
    detail.appendChild(dl);

    card.appendChild(head);
    card.appendChild(detail);
    list.appendChild(card);
  });
}

/* ---------- elixir ---------- */

function renderElixir(c) {
  const flow = document.getElementById("elixirFlow");
  flow.innerHTML = "";
  c.elixir.flow.forEach((step, i) => {
    flow.appendChild(el("div", "flow-step", step));
    if (i < c.elixir.flow.length - 1) flow.appendChild(el("div", "flow-arrow", "↓"));
  });

  const tags = document.getElementById("elixirTags");
  tags.innerHTML = "";
  c.elixir.tags.forEach((t) => tags.appendChild(el("span", "tag", t)));
}

/* ---------- architecture (interactive) ---------- */

function renderArchitecture(c) {
  const diagram = document.getElementById("archDiagram");
  const detailBox = document.getElementById("archDetail");
  diagram.innerHTML = "";

  detailBox.textContent = c.architecture.placeholder;

  c.architecture.nodes.forEach((node, i) => {
    const nodeEl = el("div", "arch-node", node.label);
    nodeEl.addEventListener("click", () => {
      diagram.querySelectorAll(".arch-node").forEach((n) => n.classList.remove("is-active"));
      nodeEl.classList.add("is-active");
      detailBox.textContent = node.detail;
    });
    diagram.appendChild(nodeEl);
    if (i < c.architecture.nodes.length - 1) diagram.appendChild(el("div", "arch-connector"));
  });
}

/* ---------- experience (conditional: empty vs items) ---------- */

function renderExperience(c) {
  const container = document.getElementById("experienceContainer");
  container.innerHTML = "";

  if (c.experience.items && c.experience.items.length > 0) {
    const list = el("div", "experience-list");
    c.experience.items.forEach((job) => {
      const item = el("div", "experience-item");
      item.appendChild(el("div", "role", job.role));
      item.appendChild(el("div", "meta", `${job.company} — ${job.period}`));
      item.appendChild(el("p", null, job.description));
      list.appendChild(item);
    });
    container.appendChild(list);
    return;
  }

  // Empty state: something more useful than a blank section.
  const empty = el("div", "experience-empty");
  empty.appendChild(el("h3", null, c.experience.empty.title));
  empty.appendChild(el("p", null, c.experience.empty.text));

  const actions = el("div", "experience-empty-actions");
  const projectsLink = el("a", "btn btn-primary", c.experience.empty.ctaProjects);
  projectsLink.href = "#projects";
  const journeyLink = el("a", "btn btn-secondary", c.experience.empty.ctaJourney);
  journeyLink.href = "#timeline-anchor";
  actions.appendChild(projectsLink);
  actions.appendChild(journeyLink);
  empty.appendChild(actions);

  container.appendChild(empty);
}

/* ---------- timeline ---------- */

function renderTimeline(c) {
  const el_ = document.getElementById("timelineSteps");
  el_.innerHTML = "";
  const anchor = document.createElement("span");
  anchor.id = "timeline-anchor";
  el_.appendChild(anchor);
  c.timeline.steps.forEach((step, i) => {
    el_.appendChild(el("span", "timeline-step", step));
    if (i < c.timeline.steps.length - 1) el_.appendChild(el("span", "timeline-arrow", "→"));
  });
}

/* ---------- language toggle UI state ---------- */

function updateLangToggle(locale) {
  document.querySelectorAll(".lang-opt").forEach((opt) => {
    opt.classList.toggle("is-active", opt.dataset.lang === locale);
  });
}

/* ---------- reveal on scroll ---------- */

function initReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((elx) => io.observe(elx));
  } else {
    revealEls.forEach((elx) => elx.classList.add("is-visible"));
  }
}

/* ---------- signal rail ---------- */

function initSignalRail() {
  const rail = document.getElementById("signalRail");
  const fill = document.getElementById("signalFill");
  const sections = Array.from(document.querySelectorAll("[data-signal]"));
  if (!rail || !fill || !sections.length) return;

  rail.querySelectorAll(".signal-node").forEach((n) => n.remove());

  const nodes = sections.map((sec) => {
    const node = document.createElement("div");
    node.className = "signal-node";
    node.setAttribute("title", sec.dataset.signal);
    rail.appendChild(node);
    return { el: node, sec };
  });

  const positionNodes = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    nodes.forEach(({ el: nodeEl, sec }) => {
      const top = sec.offsetTop;
      const pct = docHeight > 0 ? (top / docHeight) * 100 : 0;
      nodeEl.style.top = `calc(${pct}% - 4px)`;
    });
  };

  const updateRail = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.height = `${pct}%`;

    let activeIndex = 0;
    sections.forEach((sec, i) => {
      if (scrollTop + window.innerHeight * 0.4 >= sec.offsetTop) activeIndex = i;
    });
    nodes.forEach((n, i) => n.el.classList.toggle("is-active", i <= activeIndex));
  };

  positionNodes();
  updateRail();
  window.addEventListener("scroll", updateRail, { passive: true });
  window.addEventListener("resize", () => {
    positionNodes();
    updateRail();
  });
}

/* ---------- nav scroll shadow ---------- */

function initNavShadow() {
  const nav = document.getElementById("siteNav");
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- contact form ---------- */

function initContactForm(c) {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = c.contact.form.sent;
  });
}

/* ---------- full render ---------- */

function render(locale) {
  const c = content[locale];
  applyStaticText(c);
  renderAbout(c);
  renderSkills(c);
  renderMindset(c);
  renderProjects(c);
  // renderElixir(c);
  renderArchitecture(c);
  renderExperience(c);
  // renderTimeline(c);
  updateLangToggle(locale);
  initContactForm(c);
  // signal rail depends on section positions, which don't change with text swap size much,
  // but re-measuring keeps nodes aligned after any layout shift.
  requestAnimationFrame(initSignalRail);
}

/* ---------- boot ---------- */

document.addEventListener("DOMContentLoaded", () => {
  let locale = getLocale();
  render(locale);
  initReveal();
  initNavShadow();

  const toggle = document.getElementById("langToggle");
  toggle.addEventListener("click", () => {
    locale = locale === "fr" ? "en" : "fr";
    setLocale(locale);
    render(locale);
    initReveal(); // re-run in case DOM nodes were rebuilt inside reveal containers
  });
});
