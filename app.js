// ===== Snap scroll + dots + áudio (corrigido) =====
const snap = document.getElementById("snap");
const dots = document.querySelectorAll(".dot");
const panels = document.querySelectorAll(".panel");

function goTo(index){
  if (!panels[index]) return;
  panels[index].scrollIntoView({behavior:"smooth"});
  dots.forEach((d,i)=>d.classList.toggle("is-active", i===index));
}

dots.forEach((btn)=>{
  btn.addEventListener("click", ()=>goTo(Number(btn.dataset.to)));
});

if (snap){
  snap.addEventListener("scroll", ()=>{
    const index = Math.round(snap.scrollTop / window.innerHeight);
    dots.forEach((d,i)=>d.classList.toggle("is-active", i===index));
  });
}

const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("soundBtn");

if (bgm && soundBtn){
  bgm.volume = 0.35;

  const tryPlay = async () => {
    try {
      await bgm.play();
      soundBtn.hidden = true;
    } catch (e) {
      soundBtn.hidden = false;
    }
  };

  tryPlay();

  soundBtn.addEventListener("click", async () => {
    await tryPlay();
  });

  window.addEventListener("pointerdown", async () => {
    if (!bgm.paused) return;
    await tryPlay();
  }, { once: true });
}

// ===== Contador de visitas (badge) =====
fetch("https://api.countapi.xyz/hit/euzey.site/visits")
  .then(r => r.json())
  .then(data => {
    const el = document.getElementById("visit-number");
    if (el) el.innerText = String(data.value);
  })
  .catch(() => {
    const el = document.getElementById("visit-number");
    if (el) el.innerText = "—";
  });

// ===== Catálogo IMVU =====
const PRODUCTS = [
{
        id: "73869377",
        name: "LV Trainer black ª",
        type: "shoe",
        gender: "male",
        category: "Sneakers",
        price: 829,
        tags: ["lv","trainer","dark","street"],
        img: "./assets/yeex-dunk.png",
        link: "https://www.imvu.com/shop/product.php?products_id=73869341",
        offer: false,
        fav: true
      },
      {
        id: "73876556",
        name: "Gang Tee  ª",
        type: "clothing",
        gender: "male",
        category: "Tees",
        price: 710,
        tags: ["tee","gang","trap","dark"],
        img: "./assets/yeex-tee.png",
        link: "https://www.imvu.com/shop/product.php?products_id=73876556",
        offer: true,
        fav: false
      },
      {
        id: "73876556",
        name: "Gang tee black ª",
        type: "clothing",
        gender: "male",
        category: "Tees",
        price: 719,
        tags: ["tee","black","trap"],
        img: "./assets/yeex-tee-black.png",
        link: "https://www.imvu.com/shop/product.php?products_id=73876556",
        offer: true,
        fav: false
      },
      {
        id: "67073266",
        name: "u see my heart? ª",
        type: "clothing",
        gender: "male",
        category: "Tees",
        price: 719,
        tags: ["tees","street","dark"],
        img: "./assets/yeex-skull.png",
        link: "https://www.imvu.com/shop/product.php?products_id=67073266",
        offer: true,
        fav: false
      },

      {
        id: "73799859",
        name: "OG Medium B",
        type: "shoe",
        gender: "male",
        category: "sneakers",
        price: 719,
        tags: ["sneakers","street","dark"],
        img: "./assets/yeex-blackwhite.png",
        link: "https://www.imvu.com/shop/product.php?products_id=73799859",
        offer: true,
        fav: false
      },

      {
        id: "70563252",
        name: "R1CK OWENS ORANG ª",
        type: "shoe",
        gender: "male",
        category: "sneakers",
        price: 719,
        tags: ["sneakers","street","dark"],
        img: "./assets/yeex-orange.png",
        link: "https://www.imvu.com/shop/product.php?products_id=70563252",
        offer: true,
        fav: false
      },

      {
        id: "73808456",
        name: "1s low red ª",
        type: "shoe",
        gender: "male",
        category: "sneakers",
        price: 719,
        tags: ["sneakers","street","dark"],
        img: "./assets/yeex-red.png",
        link: "https://www.imvu.com/shop/product.php?products_id=73808456",
        offer: true,
        fav: false
      },

      {
        id: "73808500",
        name: "1s Bred Toe ª",
        type: "shoe",
        gender: "male",
        category: "sneakers",
        price: 719,
        tags: ["sneakers","street","dark"],
        img: "./assets/yeex-blackred.png",
        link: "https://www.imvu.com/shop/product.php?products_id=73808500",
        offer: true,
        fav: false
      },

      {
        id: "64061861",
        name: "Chrome Black laces ª",
        type: "shoe",
        gender: "male",
        category: "sneakers",
        price: 719,
        tags: ["sneakers","street","dark"],
        img: "./assets/yeex-biglaces.png",
        link: "https://www.imvu.com/shop/product.php?products_id=64061861",
        offer: true,
        fav: false
      },

      {
        id: "64061760",
        name: "Chrome <3 ª",
        type: "shoe",
        gender: "male",
        category: "sneakers",
        price: 719,
        tags: ["sneakers","street","dark"],
        img: "./assets/yeex-biglaces2.png",
        link: "https://www.imvu.com/shop/product.php?products_id=64061760",
        offer: true,
        fav: false
      },

       {
        id: "72007279",
        name: "Balenciaga ª",
        type: "clothing",
        gender: "male",
        category: "tees",
        price: 719,
        tags: ["tees","street","dark"],
        img: "./assets/balenciaga.png",
        link: "https://www.imvu.com/shop/product.php?products_id=72007279",
        offer: true,
        fav: false
      },

        {
        id: "71687465",
        name: "CH Sleever W ª",
        type: "clothing",
        gender: "male",
        category: "tees",
        price: 719,
        tags: ["tees","street","dark"],
        img: "./assets/chrome-white.png",
        link: "https://www.imvu.com/shop/product.php?products_id=71687465",
        offer: true,
        fav: false
      },

        {
        id: "71687370",
        name: "CH Sleeves ª",
        type: "clothing",
        gender: "male",
        category: "tees",
        price: 719,
        tags: ["tees","street","dark"],
        img: "./assets/chrome-black.png",
        link: "https://www.imvu.com/shop/product.php?products_id=71687370",
        offer: true,
        fav: false
      },

           {
        id: "67547495",
        name: "S1CK0 ª",
        type: "clothing",
        gender: "male",
        category: "tees",
        price: 719,
        tags: ["tees","street","dark"],
        img: "./assets/sicko.png",
        link: "https://www.imvu.com/shop/product.php?products_id=67547495",
        offer: true,
        fav: false
      },
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const grid = $("#grid");
const resultCount = $("#resultCount");
const topCount = $("#topCount");

const qTop = $("#qTop");
const q = $("#q");
const type = $("#type");
const gender = $("#gender");
const category = $("#category");
const min = $("#min");
const max = $("#max");
const tag = $("#tag");
const toastEl = $("#toast");

let activeTab = "all";
let navGender = "";

// favoritos (persistente)
const FAV_KEY = "yeex_favs_v1";
const favSet = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || "[]"));
PRODUCTS.forEach(p => {
  p.fav = favSet.has(p.id);
});

function saveFavs(){
  localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favSet)));
}

let toastT = null;
function toast(msg){
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(()=>toastEl.classList.remove("show"), 1100);
}

function norm(v) {
  return (v || "").toString().trim().toLowerCase();
}

function inTags(p, t) {
  const tt = norm(t);
  if (!tt) return true;
  return (p.tags || []).some(x => norm(x).includes(tt));
}

function matchesQuery(p, qq) {
  const n = norm(qq);
  if (!n) return true;
  return (
    norm(p.name).includes(n) ||
    norm(p.category).includes(n) ||
    norm(p.gender).includes(n) ||
    norm(p.type).includes(n) ||
    (p.tags || []).some(x => norm(x).includes(n)) ||
    norm(p.id).includes(n)
  );
}

function applyFilters(list) {
  const qAll = norm(q?.value) || norm(qTop?.value);
  const t = norm(type?.value);
  const g = norm(gender?.value) || norm(navGender);
  const cat = norm(category?.value);
  const tg = norm(tag?.value);

  const minV = Number(((min?.value) || "").replace(/\D/g, "")) || null;
  const maxV = Number(((max?.value) || "").replace(/\D/g, "")) || null;

  return list.filter(p => {
    if (!matchesQuery(p, qAll)) return false;

    if (activeTab === "shoe" && norm(p.type) !== "shoe") return false;
    if (activeTab === "clothing" && norm(p.type) !== "clothing") return false;
    if (activeTab === "unisex" && norm(p.gender) !== "unisex") return false;
    if (activeTab === "offers" && !p.offer) return false;
    if (activeTab === "fav" && !p.fav) return false;

    if (t && norm(p.type) !== t) return false;
    if (g && norm(p.gender) !== g) return false;
    if (cat && !norm(p.category).includes(cat)) return false;
    if (!inTags(p, tg)) return false;

    if (minV !== null && Number(p.price) < minV) return false;
    if (maxV !== null && Number(p.price) > maxV) return false;

    return true;
  });
}

function card(p) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = p.link || "#";
  a.target = "_blank";
  a.rel = "noopener";

  const pill = p.offer
    ? `<div class="pill offer">OFERTA</div>`
    : `<div class="pill">${(p.type || "").toUpperCase()}</div>`;

  a.innerHTML = `
    ${pill}
    <button class="favBtn ${p.fav ? "on" : ""}" type="button" aria-label="Favoritar">★</button>
    <div class="thumb"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="meta">
      <div class="title">${p.name}</div>
      <div class="sub">
        <span>${(p.gender || "").toUpperCase()}</span>
        <span>${(p.category || "").toUpperCase()}</span>
        <span class="price">${p.price}c</span>
      </div>
    </div>
  `;

  a.querySelector(".favBtn")?.addEventListener("click", (ev)=>{
    ev.preventDefault();
    ev.stopPropagation();
    p.fav = !p.fav;
    if (p.fav) favSet.add(p.id);
    else favSet.delete(p.id);
    saveFavs();
    toast(p.fav ? "Adicionado aos ★" : "Removido dos ★");
    render();
  });

  a.addEventListener("click", () => toast(`Abrindo: ${p.name}`));
  return a;
}

function render() {
  const filtered = applyFilters(PRODUCTS);

  if (grid) {
    grid.innerHTML = "";
    filtered.forEach(p => grid.appendChild(card(p)));
  }

  if (resultCount) resultCount.textContent = `${filtered.length} item(s)`;

  if (topCount) {
    const offers = PRODUCTS.filter(p => p.offer).length;
    const favs = PRODUCTS.filter(p => p.fav).length;
    topCount.textContent = `Total: ${PRODUCTS.length} • Ofertas: ${offers} • ★: ${favs}`;
  }
}

// tabs
$$('#tabs .tab').forEach(t => {
  t.addEventListener("click", () => {
    $$('#tabs .tab').forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    activeTab = t.dataset.tab || "all";
    render();
  });
});

// inputs
[qTop, q, type, gender, category, min, max, tag].forEach(el => {
  if (!el) return;
  el.addEventListener("input", render);
  el.addEventListener("change", render);
});

$("#clearFilters")?.addEventListener("click", () => {
  if (qTop) qTop.value = "";
  if (q) q.value = "";
  if (type) type.value = "";
  if (gender) gender.value = "";
  if (category) category.value = "";
  if (min) min.value = "";
  if (max) max.value = "";
  if (tag) tag.value = "";
  navGender = "";
  activeTab = "all";
  $$('#tabs .tab').forEach(x => x.classList.toggle("active", x.dataset.tab === "all"));
  render();
  toast("Filtros limpos");
});

// nav (feminino/masculino)
$$('#catalogApp .nav a[data-nav]').forEach(a => {
  a.addEventListener("click", () => {
    navGender = a.dataset.nav || "";
    if (gender) gender.value = navGender;
    activeTab = "all";
    $$('#tabs .tab').forEach(x => x.classList.toggle("active", x.dataset.tab === "all"));
    render();
  });
});

$("#seeAll")?.addEventListener("click", () => {
  setTimeout(()=>toast("Mostrando catálogo"), 200);
});

// start
render();
