/* ==========================================================================
   Darsh Gangakhedkar — portfolio behaviour
   Vanilla ES2015+. No dependencies. No build step.
   ========================================================================== */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ======================================================================
     1. NAV
     ====================================================================== */
  var nav = $("#nav");
  var onNav = function () { nav.classList.toggle("lifted", window.scrollY > 8); };
  window.addEventListener("scroll", onNav, { passive: true });
  onNav();

  var burger = $("#burger");
  var sheet = $("#sheet");
  function setSheet(open) {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    sheet.classList.toggle("open", open);
  }
  burger.addEventListener("click", function () { setSheet(!sheet.classList.contains("open")); });
  sheet.addEventListener("click", function (e) { if (e.target.tagName === "A") setSheet(false); });

  // active section highlighting
  var sections = $$("section[id]");
  var navAnchors = $$("#navLinks a");
  if ("IntersectionObserver" in window && sections.length) {
    var seen = {};
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        seen[en.target.id] = en.isIntersecting;
        if (en.isIntersecting) {
          navAnchors.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navIO.observe(s); });
  }

  /* ======================================================================
     2. TICKER
     ====================================================================== */
  var words = [
    "LLM-as-a-judge", "RAGAS", "NL-to-SQL", "3D Gaussian Splatting",
    "Model gates", "MCP", "GANs", "FastAPI", "PyTorch", "TDD",
    "Benchmarking", "Docker", "Modal A100", "Cohen's kappa"
  ];
  var track = $("#tickerTrack");
  if (track) {
    var run = words.map(function (w) { return "<span>" + w + "</span>"; }).join("");
    track.innerHTML = run;
  }

  /* ======================================================================
     3. TIMELINE
     ====================================================================== */
  var timeline = [
    {
      when: "Jan 2026 — May 2026",
      role: "AI Engineer Intern",
      org: "SupHerb Farms &amp; Telit Cinterion · Merced, CA",
      lit: true,
      bullets: [
        "Built a 3D Gaussian Splatting pipeline integrating YOLOv9 and SAM, reaching <b>85% biomass estimation accuracy</b> and <b>0.78 mean IoU</b> against ground-truth evaluation.",
        "Deployed FastAPI services on Modal A100 GPUs to enable <b>zero-downtime model updates</b> on large-scale 3D reconstructions, with optimised SQL transformations supporting real-time querying."
      ]
    },
    {
      when: "Sep 2025 — Present",
      role: "AI Engineer",
      org: "Water Systems Management Lab, UC Merced · Merced, CA",
      lit: true,
      bullets: [
        "Engineered an LLM natural-language-to-SQL application with rigorous automated evaluation pipelines, improving <b>execution accuracy from 61% to 84%</b> and exact set match to <b>76%</b> across 700,000+ records.",
        "Built predictive pipelines under strict temporal evaluation, boosting recall on drought-driven land change by <b>28%</b> and delivering reliable acreage forecasts."
      ]
    },
    {
      when: "May 2025 — Aug 2025",
      role: "AI Researcher",
      org: "DOE TEAMUP — Perovskite Solar Cell Research · Merced, CA",
      lit: false,
      bullets: [
        "Built and systematically evaluated a GAN-based synthetic data pipeline in PyTorch, expanding the training dataset by <b>400%</b> and lifting rare-defect weighted F1 from <b>0.43 to 0.61</b>.",
        "Containerised SciPy and Pandas evaluation tooling on GCP with Docker, achieving <b>100% reproducible environments</b> for external research partners."
      ]
    },
    {
      when: "Sep 2024 — Present",
      role: "Founder &amp; President",
      org: "Machine Learning Club, UC Merced · Merced, CA",
      lit: true,
      bullets: [
        "Leading a 15+ student team to deploy and evaluate a PyTorch/OpenCV object detection system for an autonomous e-bike, securing grant funding and validated simulation results.",
        "Designing technical sessions on retrieval-augmented generation, guiding student teams to raise <b>RAGAS context precision from 0.65 to 0.88</b>."
      ]
    }
  ];

  var tlEl = $("#timeline");
  if (tlEl) {
    tlEl.innerHTML = timeline.map(function (t) {
      return '<div class="tl-item reveal' + (t.lit ? " lit" : "") + '">' +
        '<h3>' + t.role + "</h3>" +
        '<p class="tl-org">' + t.org + "</p>" +
        '<p class="tl-when">' + t.when + "</p>" +
        '<ul class="tl-list">' +
          t.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("") +
        "</ul>" +
      "</div>";
    }).join("");
  }

  /* ======================================================================
     4. WORK
     ====================================================================== */
  var work = [
    {
      name: "ModelGate",
      sub: "Sandboxed model evaluation engine",
      kind: "arch",
      badge: "badge-arch",
      badgeLabel: "Architecture only",
      year: "Aug 2026",
      tech: ["Python", "FastAPI", "Daytona", "Agentic orchestration"],
      metric: "under 3%",
      metricKicker: "False-positive rejections",
      tagline: "A promotion gate that stops bad models before production.",
      desc: "Between 15% and 25% of deployed machine-learning models fail in production despite strong backtests, because researchers end up overfitting their own evaluation. ModelGate spins up a clean-room Linux sandbox in roughly 0.4 seconds, re-evaluates the candidate against out-of-sample risk metrics — including slippage and transaction costs — and blocks promotion automatically.",
      metrics: [
        "False-positive rejection rate held under 3%",
        "100% pass rate across 42 TDD-driven tests",
        "Cryptographically hashed audit ledger for full traceability"
      ],
      note: "Sandbox verification needs a live Daytona account, so this card shows architecture and measured results rather than a recording.",
      repo: "Model-Gate",
      flow: [
        "Candidate model proposed for promotion",
        "Daytona clean-room sandbox · ~0.4s cold start",
        "Out-of-sample risk metrics · slippage + costs",
        "Gate decision: promote or block",
        "Hashed audit ledger"
      ]
    },
    {
      name: "Apple Container MCP Eval Harness",
      sub: "Measuring tool-calling accuracy",
      kind: "arch",
      badge: "badge-arch",
      badgeLabel: "Architecture only",
      year: "Sep 2026",
      tech: ["Go", "Python", "Model Context Protocol"],
      metric: "74% → 89%",
      metricKicker: "Tool-calling accuracy",
      tagline: "An MCP server, and the harness that grades it.",
      desc: "No accuracy baseline existed for Apple-container MCP tools specifically. So I built a minimal MCP server exposing three container operations, then a from-scratch Python evaluation harness that measures tool-calling accuracy against it — and used that harness to iterate on the tool descriptions themselves.",
      metrics: [
        "Tool-calling accuracy improved from 74% to 89%",
        "Parameter hallucination reduced to under 2%",
        "100% safe-refusal across tested destructive-operation cases"
      ],
      note: "The server wraps Apple's container CLI, which only runs on Apple-silicon macOS. It cannot be executed on this machine, so this is architecture plus measured results.",
      repo: "apple-container-mcp-harness",
      flow: [
        "LLM client",
        "MCP server · 3 container tools",
        "Apple container CLI",
        "Python evaluation harness",
        "74% → 89% accuracy"
      ]
    },
    {
      name: "Bobcat Connect",
      sub: "Two-sided campus event marketplace",
      kind: "video",
      badge: "badge-demo",
      badgeLabel: "Recorded demo",
      year: "Dec 2025",
      tech: ["Flask", "Python", "HTML/CSS", "Google Calendar API"],
      metric: "8,000 students",
      metricKicker: "Two-sided marketplace",
      tagline: "Clubs post events. Students actually show up.",
      desc: "A unified events platform for UC Merced's 8,000 students. Clubs publish events, students discover and RSVP from a global or a following feed, and organisers get engagement analytics. RSVPs write directly to Google Calendar, and a verification system stops unverified accounts from posting.",
      metrics: [
        "Global and following feeds with likes and follows",
        "One-click RSVP integrated with Google Calendar",
        "Club verification plus an organiser analytics dashboard"
      ],
      note: "Previously deployed on PythonAnywhere — that free tier has since expired, so this is a recording of the working app running locally.",
      repo: "bobcat-connect",
      slug: "bobcat-connect"
    },
    {
      name: "ADHD-Helper",
      sub: "“The Goblin Killer” — local-first focus dashboard",
      kind: "video",
      badge: "badge-local",
      badgeLabel: "Recorded run",
      year: "May 2026",
      tech: ["JavaScript", "Vite", "Vitest", "LLM"],
      metric: "100% local",
      metricKicker: "No backend, no account",
      tagline: "A dashboard that makes hard things visually rewarding.",
      desc: "A local-first browser dashboard built to make doing difficult work visibly rewarding. Kill counters, GitHub-style activity heatmaps, visual Pomodoro reps, daily mood metrics and an LLM-powered weekly coach review — plus an optional local calendar proxy, because Google blocks browser CORS on private ICS feeds.",
      metrics: [
        "Local-first: no account, no server, no data leaving the machine",
        "Tested with vitest and tsc typechecking against JSDoc types",
        "Fully documented: PRD, glossary, architecture audit, issue plan"
      ],
      note: "Runs as a Vite dev server on the local machine; this is a recorded walkthrough of the working app.",
      repo: "ADHD-Helper",
      slug: "adhd-helper"
    },
    {
      name: "TEAMUP PV IV-Curve Analysis",
      sub: "Photovoltaic characterisation pipeline",
      kind: "video",
      badge: "badge-local",
      badgeLabel: "Recorded run",
      year: "2025",
      tech: ["Python", "SciPy", "Pandas", "Matplotlib"],
      metric: "Voc · Jsc · FF",
      metricKicker: "Extracted per device",
      tagline: "From raw IV curves to publication-quality parameters.",
      desc: "Part of the DOE TEAMUP perovskite solar-cell research. The pipeline extracts open-circuit voltage, short-circuit current density, fill factor and maximum power point; calculates series resistance and ideality factor using the Sites method; removes outliers; batch-processes Excel measurement sets; and exports publication-quality plots.",
      metrics: [
        "Sites-method series resistance and ideality factor",
        "Batch processing across multiple measurement files",
        "Reproducible Docker environment validated on GCP"
      ],
      note: "A command-line research pipeline rather than a web app; this is a recording of a real analysis run against the sample measurement dataset shipped in the repository.",
      repo: "TEAMUP-research",
      slug: "teamup-iv-curves"
    }
  ];

  var workList = $("#workList");
  if (workList) {
    workList.innerHTML = work.map(function (p) {
      var media;
      if (p.kind === "arch") {
        media = '<div class="arch">' + p.flow.map(function (n, i) {
          var isLast = i === p.flow.length - 1;
          return (i ? '<span class="arch-arrow" aria-hidden="true"></span>' : "") +
            '<div class="arch-node' + (isLast ? " result" : "") + '">' +
              '<span class="idx" aria-hidden="true">' + (i + 1) + "</span>" +
              "<span>" + n + "</span>" +
            "</div>";
        }).join("") + "</div>";
      } else {
        media =
          '<div class="media" data-media="video" data-loop="assets/video/' + p.slug + '-loop.mp4">' +
            '<div class="media-fallback">' +
              '<span class="mf-metric">' + p.metric + "</span>" +
              '<span class="mf-note">' + p.metricKicker + " · recorded walkthrough plays here.</span>" +
            "</div>" +
            '<video class="media-video" muted loop playsinline preload="none" ' +
              'poster="assets/video/' + p.slug + '.jpg" aria-label="' + p.name + ' demo recording">' +
              '<source type="video/mp4" />' +
            "</video>" +
            '<button class="media-play" type="button">Watch the full demo</button>' +
          "</div>";
      }

      return '<article class="work-card reveal">' +
        '<div class="work-body">' +
          '<h3>' + p.name + "</h3>" +
          '<div class="work-head">' +
            '<span class="badge ' + p.badge + '"><i aria-hidden="true"></i>' + p.badgeLabel + "</span>" +
            '<span class="work-year">' + p.year + "</span>" +
          "</div>" +
          '<p class="work-tagline">' + p.tagline + "</p>" +
          '<p class="work-desc">' + p.desc + "</p>" +
          '<ul class="work-metrics">' + p.metrics.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul>" +
          '<div class="chips">' + p.tech.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>" +
          '<div class="work-foot">' +
            '<a class="link-arrow" href="https://github.com/Darshmello/' + p.repo + '" target="_blank" rel="noopener noreferrer">Source on GitHub <svg class=\"ico\" viewBox=\"0 0 16 16\" width=\"13\" height=\"13\" aria-hidden=\"true\"><path d=\"M5 11 11 5M5.5 5H11v5.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/></svg></a>' +
          "</div>" +
          '<p class="work-note">' + p.note + "</p>" +
        "</div>" +
        '<div class="work-media">' + media + "</div>" +
      "</article>";
    }).join("");
  }

  /* ======================================================================
     6. REVEAL ON SCROLL
     ====================================================================== */
  var revealables = $$(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ======================================================================
     7. COUNTERS
     ====================================================================== */
  var counters = $$("[data-count]");

  // The markup carries the true value, so a crawler or a no-JS visitor reads the
  // real number. Reset to zero here so the count-up has somewhere to travel from.
  counters.forEach(function (el) {
    var dp = parseInt(el.getAttribute("data-decimals") || "0", 10);
    el.textContent = (0).toFixed(dp) + (el.getAttribute("data-suffix") || "");
  });

  function runCount(el) {
    var to = parseFloat(el.getAttribute("data-count"));
    var dp = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1400, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = clamp((ts - start) / dur, 0, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (to * eased).toFixed(dp) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = to.toFixed(dp) + suffix;
    }
    requestAnimationFrame(step);
  }
  if (reduced || !("IntersectionObserver" in window)) {
    counters.forEach(function (el) {
      el.textContent = parseFloat(el.getAttribute("data-count")).toFixed(parseInt(el.getAttribute("data-decimals") || "0", 10)) + (el.getAttribute("data-suffix") || "");
    });
  } else {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCount(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ======================================================================
     8. BACKDROP TRAVEL — the image rides up as you read, the scrim deepens
     ====================================================================== */
  var root = document.documentElement;
  var scrollTick = false;
  function paintScroll() {
    scrollTick = false;
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var y = window.scrollY;
    if (!reduced) root.style.setProperty("--p", clamp(y / max, 0, 1).toFixed(4));
    root.style.setProperty("--s", clamp(y / (window.innerHeight * 0.85), 0, 1).toFixed(3));
  }
  window.addEventListener("scroll", function () {
    if (!scrollTick) { scrollTick = true; requestAnimationFrame(paintScroll); }
  }, { passive: true });
  window.addEventListener("resize", paintScroll);
  paintScroll();

  /* ======================================================================
     9. VIDEO SLOTS — lazy mount, graceful fallback
     ====================================================================== */
  function mountVideo(slot) {
    var video = $("video", slot);
    var source = video ? $("source", video) : null;
    if (!video || !source) return;

    var failed = false;
    function fail() { failed = true; slot.classList.remove("has-video"); }

    // only fetch the loop when the card is actually near the viewport
    var mounted = false;
    function mount() {
      if (mounted) return;
      mounted = true;

      // These listeners are attached here, not above, on purpose. Until this point the
      // <source> has no src, and Chrome fires `error` on a src-less <source> during
      // resource selection. Registering earlier latches `failed` on page load and the
      // play button never appears even though the video loads fine.
      video.addEventListener("error", fail);
      source.addEventListener("error", fail);
      video.addEventListener("loadeddata", function () {
        if (!failed) slot.classList.add("has-video");
      });

      source.src = slot.getAttribute("data-loop");
      video.load();
    }

    if ("IntersectionObserver" in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { mount(); if (!reduced && !failed) { var pr = video.play(); if (pr && pr.catch) pr.catch(function () {}); } }
          else if (!video.paused) { video.pause(); }
        });
      }, { threshold: 0.25 });
      vio.observe(slot);
    } else {
      mount();
    }

    var play = $(".media-play", slot);
    if (play) {
      play.addEventListener("click", function () {
        openViewer([{ type: "video", src: "assets/video/" + slotWalk(slot) + ".mp4", cap: "" }], 0);
      });
    }
    function slotWalk(s) {
      return (s.getAttribute("data-loop") || "").replace("assets/video/", "").replace("-loop.mp4", "");
    }
  }
  $$('[data-media="video"]').forEach(mountVideo);

  /* ======================================================================
     10. VIEWER (photos + demo videos)
     ====================================================================== */
  var lb = $("#lightbox");
  var lbImg = $("#lbImg");
  var lbCap = $("#lbCap");
  var lbClose = $("#lbClose");
  var lbPrev = $("#lbPrev");
  var lbNext = $("#lbNext");
  var lbItems = [];
  var lbIndex = 0;
  var lastFocus = null;

  function renderViewer() {
    var item = lbItems[lbIndex];
    if (!item) return;

    var figure = $(".lb-figure", lb);
    var existingVideo = $("video", figure);
    if (existingVideo) existingVideo.remove();

    if (item.type === "video") {
      lbImg.hidden = true;
      var v = document.createElement("video");
      v.src = item.src;
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      figure.insertBefore(v, lbCap);
    } else {
      lbImg.hidden = false;
      lbImg.src = item.src;
      lbImg.alt = item.cap || "";
    }
    lbCap.textContent = item.cap || "";
    var many = lbItems.length > 1;
    lbPrev.hidden = !many;
    lbNext.hidden = !many;
  }

  function openViewer(items, index) {
    lbItems = items; lbIndex = index;
    lastFocus = document.activeElement;
    lb.classList.add("open");
    lb.hidden = false;
    renderViewer();
    lbClose.focus();
    document.body.style.overflow = "hidden";
  }

  function closeViewer() {
    lb.classList.remove("open");
    lb.hidden = true;
    var v = $("video", $(".lb-figure", lb));
    if (v) v.pause();
    lbImg.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  lbClose.addEventListener("click", closeViewer);
  lbPrev.addEventListener("click", function () { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; renderViewer(); });
  lbNext.addEventListener("click", function () { lbIndex = (lbIndex + 1) % lbItems.length; renderViewer(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeViewer(); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (lb.classList.contains("open")) closeViewer();
      else setSheet(false);
    }
    if (!lb.classList.contains("open") || lbItems.length < 2) return;
    if (e.key === "ArrowLeft") { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; renderViewer(); }
    if (e.key === "ArrowRight") { lbIndex = (lbIndex + 1) % lbItems.length; renderViewer(); }
  });

  /* ======================================================================
     11. MISC
     ====================================================================== */
  var year = new Date().getFullYear();
  $$("[data-year]").forEach(function (el) { el.textContent = year; });
})();
