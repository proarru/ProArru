from pathlib import Path
import zipfile

root = Path("/mnt/data/proarru-portfolio")
root.mkdir(exist_ok=True)

index_html = r'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="PROARRU — Arru's developer portfolio." />
  <title>PROARRU — Developer Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="cursor-glow"></div>
  <div class="noise"></div>
  <div class="grid-bg"></div>

  <nav class="nav">
    <a class="brand" href="#home"><span>PRO</span>ARRU<span class="dot">.</span></a>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#github">GitHub</a>
    </div>
    <a class="nav-btn" href="#contact">Let's Talk <span>↗</span></a>
  </nav>

  <main>
    <section id="home" class="hero section">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span class="pulse"></span> AVAILABLE TO BUILD</div>
        <h1>Building things<br><span class="gradient-text">worth clicking.</span></h1>
        <p class="hero-text">
          Hey, I'm <strong>Arru</strong> — a developer who likes turning ideas
          into bots, web experiences and useful digital projects.
        </p>
        <div class="hero-actions">
          <a class="primary-btn" href="#projects">Explore Projects <span>↓</span></a>
          <a class="ghost-btn" href="https://github.com/proarru" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
        <div class="mini-meta">
          <span>🇮🇳 India</span>
          <span class="line"></span>
          <span>Developer / Creator</span>
        </div>
      </div>

      <div class="hero-orb reveal">
        <div class="orb-ring ring-1"></div>
        <div class="orb-ring ring-2"></div>
        <div class="orb-core">
          <div class="terminal-top"><span></span><span></span><span></span></div>
          <div class="terminal-body">
            <p><b>const</b> creator = <i>"proarru"</i>;</p>
            <p>creator.<span>build</span>(<i>"ideas"</i>);</p>
            <p class="terminal-cursor">_</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section split">
      <div class="section-label reveal">01 / ABOUT</div>
      <div class="content reveal">
        <p class="kicker">A little about me</p>
        <h2>Curious mind.<br><span>Builder energy.</span></h2>
        <p class="muted">
          I enjoy experimenting with Python, Telegram bots, web interfaces,
          databases and automation. This portfolio is designed to grow with
          the projects I publish.
        </p>
        <div class="facts">
          <div><strong>01</strong><span>Build</span></div>
          <div><strong>02</strong><span>Learn</span></div>
          <div><strong>03</strong><span>Ship</span></div>
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="section-label reveal">02 / SKILLS</div>
      <div class="content wide reveal">
        <p class="kicker">Tools I like to work with</p>
        <h2>My <span>toolbox.</span></h2>
        <div class="skills-grid">
          <div class="skill-card"><span class="skill-icon">🐍</span><h3>Python</h3><p>Bots, automation & backend experiments</p></div>
          <div class="skill-card"><span class="skill-icon">⚡</span><h3>JavaScript</h3><p>Interactive web experiences</p></div>
          <div class="skill-card"><span class="skill-icon">🎨</span><h3>HTML / CSS</h3><p>Responsive & animated interfaces</p></div>
          <div class="skill-card"><span class="skill-icon">🤖</span><h3>Telegram</h3><p>Bot workflows & automation</p></div>
          <div class="skill-card"><span class="skill-icon">🍃</span><h3>MongoDB</h3><p>Data storage & app backends</p></div>
          <div class="skill-card"><span class="skill-icon">🚀</span><h3>Deployment</h3><p>VPS, cloud & production experiments</p></div>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-label reveal">03 / PROJECTS</div>
      <div class="content wide reveal">
        <div class="project-head">
          <div>
            <p class="kicker">Selected work</p>
            <h2>Things I've <span>built.</span></h2>
          </div>
          <a class="text-link" href="https://github.com/proarru?tab=repositories" target="_blank" rel="noopener">All repositories ↗</a>
        </div>
        <div id="project-grid" class="project-grid">
          <div class="loading-card">Loading repositories<span class="loader"></span></div>
        </div>
      </div>
    </section>

    <section id="github" class="section github-section">
      <div class="section-label reveal">04 / GITHUB</div>
      <div class="content wide reveal">
        <div class="github-card">
          <div>
            <p class="kicker">Open source activity</p>
            <h2>@<span>proarru</span></h2>
            <p class="muted">Explore the code, experiments and repositories.</p>
          </div>
          <a class="primary-btn" href="https://github.com/proarru" target="_blank" rel="noopener">Open GitHub ↗</a>
        </div>
        <div class="stats-row">
          <div class="stat"><strong id="repo-count">—</strong><span>Public repos</span></div>
          <div class="stat"><strong id="followers">—</strong><span>Followers</span></div>
          <div class="stat"><strong id="following">—</strong><span>Following</span></div>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div class="section-label reveal">05 / CONTACT</div>
      <div class="content reveal">
        <p class="kicker">Have an idea?</p>
        <h2>Let's build<br><span>something cool.</span></h2>
        <a class="big-link" href="https://github.com/proarru" target="_blank" rel="noopener">github.com/proarru <span>↗</span></a>
      </div>
    </section>
  </main>

  <footer>
    <span>© <span id="year"></span> PROARRU</span>
    <span>Built with curiosity & code.</span>
  </footer>

  <script src="script.js"></script>
</body>
</html>
'''

style_css = r'''*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#07070b;--panel:#101016;--text:#f5f5f7;--muted:#9b9ba8;--line:rgba(255,255,255,.09);--accent:#a78bfa;--accent2:#5ee7ff}
html{scroll-behavior:smooth}
body{font-family:Inter,Arial,sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
a{color:inherit;text-decoration:none}
.grid-bg{position:fixed;inset:0;z-index:-4;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:60px 60px;mask-image:linear-gradient(to bottom,black,transparent 85%)}
.noise{position:fixed;inset:0;z-index:20;pointer-events:none;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E")}
.cursor-glow{position:fixed;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(167,139,250,.10),transparent 65%);pointer-events:none;transform:translate(-50%,-50%);z-index:-1}
.nav{height:82px;display:flex;align-items:center;justify-content:space-between;max-width:1200px;margin:auto;padding:0 28px;position:sticky;top:0;z-index:10;background:rgba(7,7,11,.62);backdrop-filter:blur(18px);border-bottom:1px solid transparent}
.brand{font:700 22px "Space Grotesk";letter-spacing:-1px}.brand span:first-child{color:var(--accent)}.dot{color:var(--accent2)}
.nav-links{display:flex;gap:30px;color:#a8a8b3;font-size:13px}.nav-links a{transition:.25s}.nav-links a:hover{color:white}
.nav-btn{border:1px solid var(--line);padding:11px 16px;border-radius:999px;font-size:12px;background:rgba(255,255,255,.03)}
.section{max-width:1200px;margin:auto;padding:125px 28px}
.hero{min-height:calc(100vh - 82px);display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:50px;padding-top:70px}
.eyebrow,.kicker{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--muted)}
.eyebrow{display:flex;align-items:center;gap:9px;margin-bottom:24px}.pulse{width:7px;height:7px;border-radius:50%;background:#72f1a7;box-shadow:0 0 15px #72f1a7;animation:pulse 1.7s infinite}
@keyframes pulse{50%{opacity:.35;transform:scale(.7)}}
h1,h2{font-family:"Space Grotesk";letter-spacing:-2.5px;line-height:.98}h1{font-size:clamp(58px,8vw,105px);max-width:800px}h2{font-size:clamp(46px,6vw,76px);margin:16px 0 28px}h2 span{color:var(--accent)}
.gradient-text{background:linear-gradient(100deg,#fff 15%,#bca9ff 50%,#5ee7ff);-webkit-background-clip:text;color:transparent}
.hero-text{max-width:580px;color:var(--muted);font-size:17px;line-height:1.8;margin:28px 0}.hero-text strong{color:#fff}
.hero-actions{display:flex;gap:12px}.primary-btn,.ghost-btn{display:inline-flex;align-items:center;gap:16px;padding:14px 19px;border-radius:12px;font-size:13px;font-weight:600;transition:.25s}.primary-btn{background:#f5f5f7;color:#09090d}.primary-btn:hover{transform:translateY(-3px);box-shadow:0 15px 40px rgba(167,139,250,.2)}.ghost-btn{border:1px solid var(--line);background:rgba(255,255,255,.03)}.ghost-btn:hover{background:rgba(255,255,255,.07)}
.mini-meta{display:flex;align-items:center;gap:14px;margin-top:28px;color:#777783;font-size:11px}.line{height:1px;width:35px;background:var(--line)}
.hero-orb{height:520px;display:grid;place-items:center;position:relative}.orb-ring{position:absolute;border:1px solid rgba(167,139,250,.2);border-radius:50%;animation:spin 18s linear infinite}.ring-1{width:390px;height:390px}.ring-2{width:470px;height:470px;border-color:rgba(94,231,255,.12);animation-direction:reverse;animation-duration:24s}@keyframes spin{to{transform:rotate(360deg)}}
.orb-core{width:min(430px,90%);border:1px solid var(--line);border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.025));box-shadow:0 35px 100px rgba(0,0,0,.5),0 0 100px rgba(126,87,194,.14);backdrop-filter:blur(15px);transform:rotate(2deg);animation:float 5s ease-in-out infinite}
@keyframes float{50%{transform:translateY(-13px) rotate(-1deg)}}
.terminal-top{height:42px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:7px;padding:0 15px}.terminal-top span{width:8px;height:8px;border-radius:50%;background:#666}.terminal-body{padding:35px 28px 42px;font:14px/2 monospace;color:#c8c8d0}.terminal-body b{color:#c6a8ff}.terminal-body i{color:#75e8ff;font-style:normal}.terminal-body span{color:#fff}.terminal-cursor{animation:blink 1s infinite}@keyframes blink{50%{opacity:0}}
.split{display:grid;grid-template-columns:220px 1fr;gap:50px;border-top:1px solid var(--line)}.section-label{font:600 11px/1.5 monospace;color:#666674;letter-spacing:1px}.content{max-width:820px}.wide{max-width:none}.muted{color:var(--muted);line-height:1.8;font-size:16px;max-width:680px}
.facts{display:flex;gap:12px;margin-top:40px}.facts div{border:1px solid var(--line);padding:18px 28px;border-radius:14px;background:rgba(255,255,255,.025);display:flex;flex-direction:column;gap:7px}.facts strong{font:700 22px "Space Grotesk"}.facts span{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px}
.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.skill-card{border:1px solid var(--line);border-radius:18px;padding:25px;background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.015));transition:.3s}.skill-card:hover{transform:translateY(-6px);border-color:rgba(167,139,250,.35)}.skill-icon{font-size:25px}.skill-card h3{font:600 18px "Space Grotesk";margin:20px 0 8px}.skill-card p{font-size:12px;color:var(--muted);line-height:1.6}
.project-head{display:flex;justify-content:space-between;align-items:end;margin-bottom:40px}.text-link{font-size:12px;color:#aaa;transition:.2s}.text-link:hover{color:white}
.project-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.project-card,.loading-card{min-height:245px;border:1px solid var(--line);border-radius:18px;padding:24px;background:rgba(255,255,255,.025);transition:.3s;display:flex;flex-direction:column}.project-card:hover{transform:translateY(-7px);border-color:rgba(94,231,255,.3);background:rgba(255,255,255,.045)}.project-number{font:11px monospace;color:#666}.project-card h3{font:600 21px "Space Grotesk";margin-top:45px}.project-card p{color:var(--muted);font-size:12px;line-height:1.6;margin:10px 0 auto}.project-bottom{display:flex;justify-content:space-between;align-items:center;margin-top:25px;font-size:11px;color:#888}.repo-link{color:#fff}.loading-card{grid-column:1/-1;align-items:center;justify-content:center;color:var(--muted);gap:15px}.loader{width:20px;height:20px;border:2px solid #333;border-top-color:#fff;border-radius:50%;animation:spin .8s linear infinite}
.github-card{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line);padding:45px;border-radius:22px;background:radial-gradient(circle at 80% 50%,rgba(167,139,250,.12),transparent 35%),rgba(255,255,255,.025)}.stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px}.stat{padding:27px;border:1px solid var(--line);border-radius:15px;background:rgba(255,255,255,.02)}.stat strong{display:block;font:700 34px "Space Grotesk"}.stat span{color:#777;font-size:11px}
.contact{border-top:1px solid var(--line)}.big-link{display:inline-flex;gap:20px;font:600 clamp(25px,4vw,50px) "Space Grotesk";letter-spacing:-2px;border-bottom:1px solid #444;padding-bottom:10px;transition:.3s}.big-link:hover{color:var(--accent2);border-color:var(--accent2)}
footer{max-width:1200px;margin:auto;padding:35px 28px 55px;border-top:1px solid var(--line);display:flex;justify-content:space-between;color:#666;font-size:10px;text-transform:uppercase;letter-spacing:1px}
.reveal{opacity:0;transform:translateY(25px);transition:opacity .8s ease,transform .8s ease}.reveal.visible{opacity:1;transform:none}
@media(max-width:800px){.nav-links{display:none}.hero{grid-template-columns:1fr;padding-top:50px}.hero-orb{height:400px}.ring-1{width:280px;height:280px}.ring-2{width:340px;height:340px}.split{grid-template-columns:1fr;gap:25px}.skills-grid,.project-grid{grid-template-columns:1fr}.project-head,.github-card{align-items:flex-start;flex-direction:column;gap:25px}.stats-row{grid-template-columns:1fr 1fr}.section{padding:90px 20px}h1{font-size:58px}footer{margin:0 20px;padding-left:0;padding-right:0;gap:20px;flex-direction:column}}
'''

script_js = r'''const username = "proarru";

const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

async function loadGithub() {
  const grid = document.getElementById("project-grid");
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error("GitHub user not found");
    const user = await userRes.json();

    document.getElementById("repo-count").textContent = user.public_repos ?? "0";
    document.getElementById("followers").textContent = user.followers ?? "0";
    document.getElementById("following").textContent = user.following ?? "0";

    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    const repos = await repoRes.json();

    if (!Array.isArray(repos) || !repos.length) {
      grid.innerHTML = `<div class="loading-card">No public repositories yet.</div>`;
      return;
    }

    grid.innerHTML = repos.map((repo, i) => `
      <article class="project-card">
        <span class="project-number">0${i + 1} / REPOSITORY</span>
        <h3>${escapeHtml(repo.name)}</h3>
        <p>${escapeHtml(repo.description || "A project by PROARRU.")}</p>
        <div class="project-bottom">
          <span>${escapeHtml(repo.language || "Code")}</span>
          <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noopener">View ↗</a>
        </div>
      </article>
    `).join("");
  } catch (err) {
    grid.innerHTML = `<div class="loading-card">GitHub repositories could not be loaded right now.<br><small>Check the username or open GitHub directly.</small></div>`;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[ch]));
}

loadGithub();
'''

readme = r'''# PROARRU Portfolio

Animated, aesthetic developer portfolio for GitHub username **proarru**.

## Run locally

Just open `index.html` in a browser.

For the GitHub repository section to work reliably, you can also use any simple local server, for example:

```bash
python -m http.server 8000
