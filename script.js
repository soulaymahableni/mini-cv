// ---------- Projects : générés dynamiquement à partir d'un tableau d'objets ----------
const projects = [
  { title: "Portfolio DevSecOps",   description: "Site statique servi par Nginx dans un conteneur Docker.", tags: ["Docker", "Git"],            link: "https://github.com/soulaymahableni/mini-cv" },
  { title: "Pipeline Jenkins",      description: "Build et test automatiques à chaque push GitHub.",         tags: ["Jenkins", "Git"],           link: "#" },
  { title: "VM automatisée",        description: "Création d'une VM Ubuntu avec un Vagrantfile.",            tags: ["Vagrant", "Ansible"],       link: "#" },
  { title: "Infrastructure as Code",description: "Description d'une infrastructure avec Terraform.",         tags: ["Terraform"],                link: "#" },
  { title: "Déploiement GitOps",    description: "Déploiement Kubernetes piloté par Argo CD.",               tags: ["Kubernetes", "Argo CD"],    link: "#" }
];

const list = document.getElementById("projects-list");
const filters = document.getElementById("filters");
let active = "Tous";

function renderProjects() {
  list.innerHTML = "";
  projects
    .filter(p => active === "Tous" || p.tags.includes(active))
    .forEach(p => {
      const card = document.createElement("article");
      card.className = "project";
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <a href="${p.link}" target="_blank" rel="noopener">Voir le projet</a>`;
      list.appendChild(card);
    });
}

function renderFilters() {
  const tags = ["Tous", ...new Set(projects.flatMap(p => p.tags))];
  filters.innerHTML = "";
  tags.forEach(tag => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = tag;
    b.setAttribute("aria-pressed", tag === active);
    b.addEventListener("click", () => { active = tag; renderFilters(); renderProjects(); });
    filters.appendChild(b);
  });
}

// ---------- Pipeline du hero : s'allume une seule fois au chargement ----------
function runPipeline() {
  const stages = document.querySelectorAll("#pipeline li");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  stages.forEach((li, i) => {
    if (reduce) li.classList.add("done");
    else setTimeout(() => li.classList.add("done"), 500 + i * 600);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderFilters();
renderProjects();
runPipeline();
