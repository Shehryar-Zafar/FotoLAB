
window.addEventListener("scroll", function () {
  document.getElementById("mainNavbar")
    .classList.toggle("scrolled", window.scrollY > 60);

  const btn = document.getElementById("backToTop");
  if (btn) btn.style.display = window.scrollY > 300 ? "flex" : "none";
});


function scrollToTop() {
  window.scrollTo({ top: 0 });
}


function animateFadeIns() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}


const products = [
  {
    id: 1,
    name: "Canon EOS R6 Mark II",
    brand: "canon",
    category: "cameras",
    badge: "Bestseller",
    price: "PKR 450,000",
    image: "assets/images/product-1.jpg",
    summary: "40fps burst, 6K RAW video, IBIS, full-frame mirrorless powerhouse.",
    features: {
      Sensor: "24.2 MP Full-Frame CMOS",
      "ISO Range": "100 – 102400",
      Video: "6K RAW / 4K 60fps",
      "AF Points": "1053-point Dual Pixel II",
      "Burst Rate": "Up to 40 fps",
      "Battery Life": "~760 shots",
      Body: "Weather-sealed Magnesium Alloy",
    },
  },
  {
    id: 2,
    name: "Nikon Z8",
    brand: "nikon",
    category: "cameras",
    badge: "New",
    price: "PKR 600,000",
    image: "assets/images/product-2.jpg",
    summary: "45.7 MP full-frame BSI CMOS sensor with 8K video capability.",
    features: {
      Sensor: "45.7 MP BSI CMOS",
      "ISO Range": "64 – 25600",
      Video: "8K N-RAW / 4K 120fps",
      "AF Points": "493 phase-detect",
      "Burst Rate": "Up to 20 fps",
      "Battery Life": "~340 shots",
      Body: "Magnesium Alloy, Weather-sealed",
    },
  },
  {
    id: 3,
    name: "Sony A7 IV",
    brand: "sony",
    category: "cameras",
    badge: "",
    price: "PKR 520,000",
    image: "assets/images/product-3.jpg",
    summary: "33 MP full-frame mirrorless with 759-point phase detection.",
    features: {
      Sensor: "33 MP BSI Exmor R",
      "ISO Range": "100 – 51200",
      Video: "4K 60fps 10-bit",
      "AF Points": "759 phase-detect",
      "Burst Rate": "Up to 10 fps",
      "Battery Life": "~610 shots",
      Body: "Weather-sealed",
    },
  },
  {
    id: 4,
    name: "Yashica MF-2 Super",
    brand: "yashica",
    category: "cameras",
    badge: "Classic",
    price: "PKR 18,500",
    image: "assets/images/product-4.jpg",
    summary: "Iconic 35mm film camera with 38mm f/3.5 fixed lens. A collector's gem.",
    features: {
      "Film Format": "35mm",
      Lens: "38mm f/3.5",
      Focus: "Fixed Focus",
      Flash: "Built-in",
      Exposure: "Automatic",
      Body: "Plastic, Compact",
      Special: "Self-timer included",
    },
  },
  {
    id: 5,
    name: "Fujifilm X-T5",
    brand: "fujifilm",
    category: "cameras",
    badge: "Popular",
    price: "PKR 380,000",
    image: "assets/images/product-5.jpg",
    summary: "40 MP APS-C sensor with 18 film simulations and retro design.",
    features: {
      Sensor: "40.2 MP APS-C X-Trans",
      "ISO Range": "125 – 12800",
      Video: "6.2K 30fps",
      "AF Points": "425 phase-detect",
      "Burst Rate": "Up to 15 fps",
      "Battery Life": "~580 shots",
      Special: "18 Film Simulation Modes",
    },
  },
  {
    id: 6,
    name: "Canon RF 85mm f/1.2L",
    brand: "canon",
    category: "lenses",
    badge: "L-Series",
    price: "PKR 320,000",
    image: "assets/images/product-6.jpg",
    summary: "Stunning portrait lens with creamy bokeh and exceptional sharpness.",
    features: {
      "Focal Length": "85mm",
      "Max Aperture": "f/1.2",
      Mount: "Canon RF",
      "Filter Size": "82mm",
      Weight: "1195g",
      IS: "None (use body IBIS)",
      Elements: "13 elements / 9 groups",
    },
  },
  {
    id: 7,
    name: "Sony FE 24-70mm f/2.8 GM II",
    brand: "sony",
    category: "lenses",
    badge: "G-Master",
    price: "PKR 280,000",
    image: "assets/images/product-7.jpg",
    summary: "The ultimate zoom: f/2.8 throughout, nano AR coating, XD linear motors.",
    features: {
      "Focal Length": "24–70mm",
      "Max Aperture": "f/2.8",
      Mount: "Sony FE (E-mount)",
      "Filter Size": "82mm",
      Weight: "695g",
      IS: "OSS",
      Blades: "11-blade circular aperture",
    },
  },
  {
    id: 8,
    name: "Rode VideoMic Pro+",
    brand: "rode",
    category: "audio",
    badge: "Top Pick",
    price: "PKR 38,000",
    image: "assets/images/product-8.jpg",
    summary: "Directional on-camera microphone with automatic power on/off and safety channel.",
    features: {
      Type: "Supercardioid condenser",
      Frequency: "20Hz – 20kHz",
      SNR: "75dB",
      Power: "Built-in rechargeable Li-ion",
      "Battery Life": "100+ hours",
      Mount: "Rycote Lyre shock mount",
      Output: "3.5mm TRS + USB-C",
    },
  },
  {
    id: 9,
    name: "SanDisk Extreme Pro 256GB",
    brand: "sandisk",
    category: "memory",
    badge: "Pro",
    price: "PKR 12,500",
    image: "assets/images/product-9.jpg",
    summary: "SDXC UHS-I card with read speeds up to 200MB/s. Perfect for 8K video.",
    features: {
      Capacity: "256GB",
      "Read Speed": "Up to 200MB/s",
      "Write Speed": "Up to 140MB/s",
      Standard: "UHS-I, U3, V30, A2",
      Format: "SDXC",
      Waterproof: "Yes",
      Warranty: "Lifetime Limited",
    },
  },
  {
    id: 10,
    name: "Manfrotto MT055XPRO3",
    brand: "manfrotto",
    category: "tripods",
    badge: "Pro",
    price: "PKR 55,000",
    image: "assets/images/product-10.jpg",
    summary: "Aluminium 3-section tripod with 90° column mechanism. Max load 8kg.",
    features: {
      Material: "Aluminium",
      Sections: "3",
      "Max Height": "170cm",
      "Min Height": "9cm (inverted)",
      "Max Load": "8kg",
      Weight: "2.6kg",
      Special: "90° centre column mechanism",
    },
  },
  {
    id: 11,
    name: "Godox AD600 Pro",
    brand: "godox",
    category: "lighting",
    badge: "Studio",
    price: "PKR 95,000",
    image: "assets/images/product-11.jpg",
    summary: "600Ws outdoor flash with TTL, HSS, and built-in 2.4G X-system.",
    features: {
      Power: "600Ws",
      "Flash Duration": "1/220s – 1/10200s",
      HSS: "Yes",
      TTL: "Canon / Nikon / Sony / Fuji",
      "Recycle Time": "0.01–1.5 sec",
      Battery: "600 full-power flashes",
      Mount: "Bowens",
    },
  },
  {
    id: 12,
    name: "Lowepro ProTactic 450 AW II",
    brand: "lowepro",
    category: "bags",
    badge: "Bestseller",
    price: "PKR 42,000",
    image: "assets/images/product-12.jpg",
    summary: "Camera backpack with side-access, built-in AllWeather cover & laptop sleeve.",
    features: {
      Capacity: "35L",
      "Laptop Sleeve": 'Up to 15"',
      Tablet: 'Up to 10"',
      AllWeather: "Included rain cover",
      Access: "Side + back access",
      Colour: "Black",
      Material: "Ripstop nylon",
    },
  },
  {
    id: 13,
    name: "Polaroid Originals Color 600",
    brand: "polaroid",
    category: "misc",
    badge: "",
    price: "PKR 4,500",
    image: "assets/images/product-13.jpg",
    summary: "Instant colour film pack for Polaroid 600-series cameras. 8 photos per pack.",
    features: {
      Type: "Instant colour film",
      "Photos/Pack": "8",
      Compatible: "600-type cameras, i-Type",
      ISO: "640",
      "Image Size": '3.1" × 3.1"',
      "Develop Time": "~15 min (room temperature)",
      Storage: "Keep refrigerated",
    },
  },
];


let activeBrand = "all";
let activeCategory = "all";

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const noResults = document.getElementById("noResults");

  const filtered = products.filter((p) => {
    const brandOk = activeBrand === "all" || p.brand === activeBrand;
    const catOk = activeCategory === "all" || p.category === activeCategory;
    return brandOk && catOk;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.style.setProperty("display", "block", "important");
    return;
  }
  noResults.style.setProperty("display", "none", "important");

  grid.innerHTML = filtered.map((p) => {
    const hasImage = p.image && p.image.trim() !== "";
    const imgHTML = hasImage
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy"/>`
      : "";

    return `
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3 fade-in">
        <div class="product-card">
          <div class="product-img-wrap">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
            <div class="compare-check-wrap" title="Add to compare list">
              <input type="checkbox" id="cmp_${p.id}"
                onchange="toggleCompare(${p.id}, this.checked)"
                ${compareList.includes(p.id) ? "checked" : ""}/>
            </div>
            <div class="prod-icon-placeholder">
              <i class="bi bi-camera"></i>
              <span>Add Image Here</span>
            </div>
            ${imgHTML}
          </div>
          <div class="product-body">
            <div class="product-brand"><i class="bi bi-tag-fill me-1"></i>${p.brand.toUpperCase()}</div>
            <div class="product-name">${p.name}</div>
            <p class="product-summary">${p.summary}</p>
            <div class="product-price"><i class="bi bi-currency-dollar me-1"></i>${p.price}</div>
            <div class="product-actions">
              <button class="btn-sm-accent" onclick="openProductModal(${p.id})">
                <i class="bi bi-eye me-1"></i>View Details
              </button>
              <button class="btn-sm-ghost" onclick="toggleCompareFromBtn(${p.id})" title="Add to compare">
                <i class="bi bi-bar-chart-steps"></i>
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }).join("");

  setTimeout(() => animateFadeIns(), 50);
}

function filterCategory(cat, btn) {
  activeCategory = cat;
  if (btn) {
    document.querySelectorAll(".cat-tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  }
  renderProducts();
}

function filterBrand(brand, btn) {
  activeBrand = brand;
  document.querySelectorAll(".brand-btn").forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderProducts();
}


let compareList = [];

function toggleCompare(id, checked) {
  if (checked) {
    if (compareList.length >= 4) {
      alert("You can compare up to 4 products at a time.");
      document.getElementById("cmp_" + id).checked = false;
      return;
    }
    compareList.push(id);
  } else {
    compareList = compareList.filter((x) => x !== id);
  }
  updateCompareBar();
}

function toggleCompareFromBtn(id) {
  const box = document.getElementById("cmp_" + id);
  if (!box) return;
  box.checked = !box.checked;
  toggleCompare(id, box.checked);
}

function removeFromCompare(id) {
  compareList = compareList.filter((x) => x !== id);
  const box = document.getElementById("cmp_" + id);
  if (box) box.checked = false;
  updateCompareBar();
}

function clearAllCompare() {
  compareList = [];
  document.querySelectorAll('[id^="cmp_"]').forEach((b) => (b.checked = false));
  updateCompareBar();
}

function updateCompareBar() {
  const bar = document.getElementById("compareBar");
  const list = document.getElementById("compareItemsList");
  if (!bar) return;
  if (compareList.length === 0) { bar.classList.remove("visible"); return; }
  bar.classList.add("visible");
  list.innerHTML = compareList.map((id) => {
    const p = products.find((x) => x.id === id);
    return `<div class="compare-chip">
      <i class="bi bi-camera" style="color:var(--main);"></i>
      ${p.name}
      <button onclick="removeFromCompare(${id})" title="Remove">✕</button>
    </div>`;
  }).join("");
}

function openCompareModal() {
  if (compareList.length < 2) {
    alert("Please select at least 2 products to compare.");
    return;
  }
  const sel = compareList.map((id) => products.find((p) => p.id === id));

  let html = `<tr><th>Feature</th>`;
  sel.forEach((p) => (html += `<th>${p.brand.toUpperCase()}<br><small>${p.name}</small></th>`));
  html += `</tr>`;

  html += `<tr><td>Price</td>`;
  sel.forEach((p) => (html += `<td>${p.price}</td>`));
  html += `</tr>`;

  html += `<tr><td>Category</td>`;
  sel.forEach((p) => (html += `<td>${p.category}</td>`));
  html += `</tr>`;

  const allKeys = [...new Set(sel.flatMap((p) => Object.keys(p.features)))];
  allKeys.forEach((key) => {
    html += `<tr><td>${key}</td>`;
    sel.forEach((p) => (html += `<td>${p.features[key] || "—"}</td>`));
    html += `</tr>`;
  });

  document.getElementById("compareTable").innerHTML = html;
  new bootstrap.Modal(document.getElementById("compareModal")).show();
}


function openProductModal(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("modalTitle").textContent = p.name;

  const featureIconMap = {
    Sensor: "bi-cpu", "ISO Range": "bi-brightness-high", Video: "bi-camera-video",
    "AF Points": "bi-crosshair", "Burst Rate": "bi-lightning", "Battery Life": "bi-battery-half",
    Body: "bi-shield", "Focal Length": "bi-zoom-in", "Max Aperture": "bi-circle",
    Mount: "bi-link", Weight: "bi-box", Capacity: "bi-hdd",
    "Read Speed": "bi-arrow-right", "Write Speed": "bi-arrow-left",
    Power: "bi-plug", Price: "bi-tag", Type: "bi-info-circle",
  };

  const featureRows = Object.entries(p.features).map(([k, v]) => {
    const icon = featureIconMap[k] || "bi-dot";
    return `<li><i class="bi ${icon}"></i><strong>${k}</strong>${v}</li>`;
  }).join("");

  const hasImage = p.image && p.image.trim() !== "";
  const imageSection = hasImage
    ? `<img src="${p.image}" alt="${p.name}" style="max-width:100%;max-height:220px;object-fit:contain;display:block;margin:0 auto;"/>`
    : `<div class="modal-product-icon">
         <i class="bi bi-camera"></i>
         <span>Add your product image here</span>
       </div>`;

  document.getElementById("modalBody").innerHTML = `
    <div class="row g-4">
      <div class="col-md-5">
        ${imageSection}
        <div class="text-center mt-3">
          <span class="product-brand"><i class="bi bi-tag-fill me-1"></i>${p.brand.toUpperCase()}</span>
          <div class="product-price">${p.price}</div>
        </div>
      </div>
      <div class="col-md-7">
        <p style="color:var(--muted);font-size:0.9rem;margin-bottom:20px;">
          <i class="bi bi-info-circle me-2 text-accent"></i>${p.summary}
        </p>
        <h6 style="font-family:var(--disp);font-size:0.8rem;letter-spacing:2px;color:var(--main);margin-bottom:12px;">
          <i class="bi bi-list-check me-2"></i>KEY SPECIFICATIONS
        </h6>
        <ul class="feature-list list-unstyled">${featureRows}</ul>
      </div>
    </div>`;

  new bootstrap.Modal(document.getElementById("productModal")).show();
}


function sendMessage() {
  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const msg = document.getElementById("cMsg").value.trim();

  if (!name || !email || !msg) { alert("Please fill in all fields."); return; }
  if (!email.includes("@")) { alert("Please enter a valid email address."); return; }

  window.location.href = `mailto:info@fotolab.pk?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
  document.getElementById("formSuccess").style.display = "block";
  document.getElementById("cName").value = "";
  document.getElementById("cEmail").value = "";
  document.getElementById("cMsg").value = "";
}


document.addEventListener("DOMContentLoaded", function () {
  animateFadeIns();

 
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  if (cat) {
    activeCategory = cat;
    const btn = document.querySelector(`.cat-tab-btn[data-cat="${cat}"]`);
    if (btn) {
      document.querySelectorAll(".cat-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    }
  }

  renderProducts();
});
