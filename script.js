
// ============================================
// PRICEWISE - PRODUCT PRICE COMPARISON WEBSITE
// ============================================

// Representative product photographs.
// Prices are sample values for the college mini-project.

const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=max&w=1000&q=85`;

const products = [
  // MOBILES
  { id: 1, name: "Samsung Galaxy M15 5G", category: "Mobiles", image: photo("photo-1510557880182-3d4d3cba35a5"), prices: [["Amazon", 13999], ["Flipkart", 13499], ["Croma", 14299]] },
  { id: 2, name: "Apple iPhone 15", category: "Mobiles", image: photo("photo-1592750475338-74b7b21085ab"), prices: [["Amazon", 52999], ["Flipkart", 51999], ["Croma", 53999]] },
  { id: 3, name: "Redmi Note 13", category: "Mobiles", image: photo("photo-1511709949950-?"), prices: [["Amazon", 14999], ["Flipkart", 14499], ["Croma", 15499]] },
  { id: 4, name: "OnePlus Nord CE", category: "Mobiles", image: photo("photo-1598327105666-5b89351aff97"), prices: [["Amazon", 21999], ["Flipkart", 21499], ["Croma", 22499]] },

  // LAPTOPS
  { id: 5, name: "HP Pavilion Laptop", category: "Laptops", image: photo("photo-1496181133206-80ce9b88a853"), prices: [["Amazon", 57990], ["Flipkart", 56990], ["Croma", 58990]] },
  { id: 6, name: "Dell Inspiron Laptop", category: "Laptops", image: photo("photo-1588872657578-7efd1f1555ed"), prices: [["Amazon", 62990], ["Flipkart", 61990], ["Croma", 63990]] },
  { id: 7, name: "Lenovo IdeaPad Slim", category: "Laptops", image: photo("photo-1496181133206-80ce9b88a853"), prices: [["Amazon", 49990], ["Flipkart", 48990], ["Croma", 50990]] },

  // ELECTRONICS
  { id: 8, name: "boAt Wireless Headphones", category: "Electronics", image: photo("photo-1505740420928-5e560c06d30e"), prices: [["Amazon", 1499], ["Flipkart", 1399], ["Croma", 1599]] },
  { id: 9, name: "JBL Bluetooth Speaker", category: "Electronics", image: photo("photo-1608043152269-423dbba4e7e1"), prices: [["Amazon", 2999], ["Flipkart", 2899], ["Croma", 3199]] },
  { id: 10, name: "Samsung Smart TV", category: "Electronics", image: photo("photo-1593359677879-a4bb92f829d1"), prices: [["Amazon", 32990], ["Flipkart", 31990], ["Croma", 33990]] },
  { id: 11, name: "Noise Smart Watch", category: "Electronics", image: photo("photo-1523275335684-37898b6baf30"), prices: [["Amazon", 1999], ["Flipkart", 1899], ["Croma", 2099]] },
  { id: 12, name: "Canon Digital Camera", category: "Electronics", image: photo("photo-1516035069371-29a1b244cc32"), prices: [["Amazon", 45990], ["Flipkart", 44990], ["Croma", 46990]] },

  // JEWELLERY
  { id: 13, name: "Gold Plated Necklace", category: "Jewellery", image: photo("photo-1611652022419-a9419f74343d"), prices: [["Amazon", 899], ["Flipkart", 799], ["Myntra", 999]] },
  { id: 14, name: "Pearl Earrings", category: "Jewellery", image: photo("photo-1535632066927-ab7c9ab60908"), prices: [["Amazon", 499], ["Flipkart", 449], ["Myntra", 549]] },
  { id: 15, name: "Fashion Bracelet", category: "Jewellery", image: photo("photo-1611591437281-460bfbe1220a"), prices: [["Amazon", 399], ["Flipkart", 349], ["Myntra", 449]] },
  { id: 16, name: "Designer Ring", category: "Jewellery", image: photo("photo-1605100804763-247f67b3557e"), prices: [["Amazon", 699], ["Flipkart", 649], ["Myntra", 749]] },

  // CLOTHING
  { id: 17, name: "Cotton Kurti", category: "Clothing", image: photo("photo-1483985988355-763728e1935b"), prices: [["Amazon", 799], ["Flipkart", 699], ["Myntra", 849]] },
  { id: 18, name: "Designer Saree", category: "Clothing", image: photo("photo-1610030469983-98e550d6193c"), prices: [["Amazon", 1499], ["Flipkart", 1399], ["Myntra", 1599]] },
  { id: 19, name: "Casual Jeans", category: "Clothing", image: photo("photo-1542272604-787c3835535d"), prices: [["Amazon", 1199], ["Flipkart", 1099], ["Myntra", 1299]] },
  { id: 20, name: "Men's Casual Shirt", category: "Clothing", image: photo("photo-1596755094514-f87e34085b2c"), prices: [["Amazon", 899], ["Flipkart", 799], ["Myntra", 999]] },
  { id: 21, name: "Floral Dress", category: "Clothing", image: photo("photo-1595777457583-95e059d581b8"), prices: [["Amazon", 1299], ["Flipkart", 1199], ["Myntra", 1399]] },

  // BEAUTY
  { id: 22, name: "Gentle Face Wash", category: "Beauty", image: photo("photo-1608248543803-ba4f8c70ae0b"), prices: [["Amazon", 249], ["Flipkart", 229], ["Nykaa", 259]] },
  { id: 23, name: "Daily Sunscreen", category: "Beauty", image: photo("photo-1556229010-6c3f2c9ca5f8"), prices: [["Amazon", 399], ["Flipkart", 379], ["Nykaa", 419]] },
  { id: 24, name: "Matte Lipstick", category: "Beauty", image: photo("photo-1586495777744-4413f21062fa"), prices: [["Amazon", 499], ["Flipkart", 479], ["Nykaa", 459]] },
  { id: 25, name: "Daily Moisturizer", category: "Beauty", image: photo("photo-1608248543803-ba4f8c70ae0b"), prices: [["Amazon", 349], ["Flipkart", 329], ["Nykaa", 369]] },

  // FOOTWEAR
  { id: 26, name: "Running Shoes", category: "Footwear", image: photo("photo-1542291026-7eec264c27ff"), prices: [["Amazon", 1999], ["Flipkart", 1899], ["Myntra", 2099]] },
  { id: 27, name: "Women's Sandals", category: "Footwear", image: photo("photo-1543163521-1bf539c55dd2"), prices: [["Amazon", 899], ["Flipkart", 849], ["Myntra", 949]] },
  { id: 28, name: "Casual Sneakers", category: "Footwear", image: photo("photo-1460353581641-37baddab0fa2"), prices: [["Amazon", 1499], ["Flipkart", 1399], ["Myntra", 1599]] },

  // BAGS
  { id: 29, name: "Women's Handbag", category: "Bags", image: photo("photo-1584917865442-de89df76afd3"), prices: [["Amazon", 1299], ["Flipkart", 1199], ["Myntra", 1399]] },
  { id: 30, name: "Travel Backpack", category: "Bags", image: photo("photo-1553062407-98eeb64c6a62"), prices: [["Amazon", 999], ["Flipkart", 899], ["Myntra", 1099]] },
  { id: 31, name: "Elegant Sling Bag", category: "Bags", image: photo("photo-1566150905458-1bf1fc113f0d"), prices: [["Amazon", 899], ["Flipkart", 849], ["Myntra", 949]] },

  // HOME DECOR
  { id: 32, name: "Decorative Table Lamp", category: "Home Decor", image: photo("photo-1507473885765-e6ed057f782c"), prices: [["Amazon", 1199], ["Flipkart", 1099], ["Croma", 1299]] },
  { id: 33, name: "Modern Wall Clock", category: "Home Decor", image: photo("photo-1563861826100-9cb868fdbe1c"), prices: [["Amazon", 799], ["Flipkart", 749], ["Croma", 849]] },
  { id: 34, name: "Decorative Vase", category: "Home Decor", image: photo("photo-1578500494198-246f612d3b3d"), prices: [["Amazon", 599], ["Flipkart", 549], ["Croma", 649]] }
];

// ============================================
// GENERAL FUNCTIONS
// ============================================

function formatPrice(price) {
  return "₹" + Number(price).toLocaleString("en-IN");
}

function getLowestPrice(product) {
  return Math.min(...product.prices.map(item => item[1]));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

// ============================================
// DISPLAY PRODUCTS
// ============================================

function renderProducts() {
  const productGrid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  if (!productGrid) return;

  const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const selectedCategory = categoryFilter ? categoryFilter.value : "all";

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      selectedCategory.toLowerCase() === product.category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-products">
        <h3>No products found</h3>
        <p>Try another product name or category.</p>
      </div>`;
    return;
  }

  productGrid.innerHTML = filteredProducts.map(product => {
    const lowest = getLowestPrice(product);

    return `
      <article class="product-card">
        <div class="product-image-container">
          <button class="image-view-button"
                  type="button"
                  data-view-image="${product.id}"
                  aria-label="View ${escapeHTML(product.name)} image">
            <img class="product-image"
                 src="${product.image}"
                 alt="${escapeHTML(product.name)}"
                 loading="lazy">
            <span class="image-view-label">View Image</span>
          </button>
        </div>

        <div class="product-info">
          <span class="product-category">${escapeHTML(product.category)}</span>
          <h3>${escapeHTML(product.name)}</h3>

          <p class="lowest-price">
            Best sample price:
            <strong>${formatPrice(lowest)}</strong>
          </p>

          <p class="store-count">
            Compared across ${product.prices.length} stores
          </p>

          <button class="compare-button"
                  type="button"
                  data-compare="${product.id}">
            Compare Prices
          </button>
        </div>
      </article>`;
  }).join("");

  // Fallback image if an image URL cannot load.
  productGrid.querySelectorAll(".product-image").forEach(img => {
    img.addEventListener("error", function () {
      this.onerror = null;
      this.src = photo("photo-1490312278390-ab64016e0aa9");
      this.alt = "Product photograph unavailable";
    });
  });
}

// ============================================
// VIEW PRODUCT IMAGE LARGER
// ============================================

function createImageViewer() {
  if (document.getElementById("imageViewer")) return;

  const style = document.createElement("style");
  style.textContent = `
    .image-view-button {
      display: block;
      position: relative;
      width: 100%;
      height: 245px;
      padding: 12px;
      border: 0;
      background: #fff;
      cursor: zoom-in;
      overflow: hidden;
    }

    .image-view-button .product-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform .25s ease;
    }

    .image-view-button:hover .product-image {
      transform: scale(1.04);
    }

    .image-view-label {
      position: absolute;
      bottom: 10px;
      right: 10px;
      padding: 6px 11px;
      border-radius: 20px;
      background: rgba(20, 45, 90, .85);
      color: white;
      font-size: 12px;
    }

    #imageViewer {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(10, 18, 35, .88);
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    #imageViewer.active {
      display: flex;
    }

    #imageViewer .viewer-content {
      position: relative;
      width: min(850px, 95vw);
      max-height: 90vh;
      padding: 18px;
      border-radius: 16px;
      background: white;
      text-align: center;
    }

    #imageViewer img {
      max-width: 100%;
      max-height: 75vh;
      width: auto;
      height: auto;
      object-fit: contain;
    }

    #imageViewer h3 {
      margin: 12px 0 0;
      color: #17366b;
    }

    #imageViewer .viewer-close {
      position: absolute;
      top: 8px;
      right: 12px;
      border: 0;
      background: #17366b;
      color: white;
      border-radius: 50%;
      width: 34px;
      height: 34px;
      font-size: 22px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const viewer = document.createElement("div");
  viewer.id = "imageViewer";
  viewer.innerHTML = `
    <div class="viewer-content">
      <button class="viewer-close" type="button" aria-label="Close image">&times;</button>
      <img id="largeProductImage" src="" alt="Product image">
      <h3 id="largeProductName"></h3>
    </div>`;
  document.body.appendChild(viewer);

  viewer.addEventListener("click", event => {
    if (event.target === viewer ||
        event.target.closest(".viewer-close")) {
      closeImageViewer();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeImageViewer();
  });
}

function openImageViewer(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;

  createImageViewer();

  document.getElementById("largeProductImage").src = product.image;
  document.getElementById("largeProductName").textContent = product.name;
  document.getElementById("imageViewer").classList.add("active");
}

function closeImageViewer() {
  const viewer = document.getElementById("imageViewer");
  if (viewer) viewer.classList.remove("active");
}

// ============================================
// PRICE COMPARISON
// ============================================

function compareProduct(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;

  const overlay = document.getElementById("comparisonOverlay");
  const title = document.getElementById("comparisonTitle");
  const rows = document.getElementById("comparisonRows");

  if (!overlay || !title || !rows) return;

  title.textContent = "Price comparison - " + product.name;

  const sortedPrices = [...product.prices].sort((a, b) => a[1] - b[1]);

  rows.innerHTML = sortedPrices.map((item, index) => `
    <div class="comparison-row">
      <span>${escapeHTML(item[0])}</span>
      <strong>${formatPrice(item[1])}</strong>
      ${index === 0 ? '<span class="best-deal">Lowest sample price</span>' : ""}
    </div>
  `).join("");

  overlay.style.display = "flex";
}

function closeComparison() {
  const overlay = document.getElementById("comparisonOverlay");
  if (overlay) overlay.style.display = "none";
}

// ============================================
// SAVINGS CALCULATOR
// ============================================

function calculateSavings() {
  const original = Number(document.getElementById("originalPrice").value);
  const best = Number(document.getElementById("bestPrice").value);
  const result = document.getElementById("savingsResult");

  if (!result) return;

  if (!Number.isFinite(original) || !Number.isFinite(best) ||
      original <= 0 || best < 0) {
    result.textContent = "Please enter valid prices.";
    return;
  }

  const savings = original - best;

  result.textContent = savings >= 0
    ? "You save " + formatPrice(savings) + "!"
    : "The selected price is higher than the original price.";
}

// ============================================
// DISCOUNT CALCULATOR
// ============================================

function calculateDiscount() {
  const markedPrice = Number(document.getElementById("markedPrice").value);
  const discount = Number(document.getElementById("discountPercent").value);
  const result = document.getElementById("discountResult");

  if (!result) return;

  if (!Number.isFinite(markedPrice) ||
      !Number.isFinite(discount) ||
      markedPrice <= 0 || discount < 0 || discount > 100) {
    result.textContent = "Enter a valid price and discount from 0 to 100.";
    return;
  }

  const finalPrice = markedPrice - (markedPrice * discount / 100);

  result.textContent = "Final price: " + formatPrice(finalPrice);
}

// ============================================
// DEMO PRICE ALERT
// ============================================

function setupAlertForm() {
  const form = document.getElementById("alertForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document.getElementById("alertProduct").value.trim();
    const target = Number(document.getElementById("targetPrice").value);
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("alertMessage");

    if (!productName || !email || !Number.isFinite(target) || target <= 0) {
      if (message) message.textContent = "Please enter valid alert details.";
      return;
    }

    if (message) {
      message.textContent =
        "Demo alert created for " + productName +
        " at " + formatPrice(target) +
        ". This demonstration does not send real emails.";
    }

    form.reset();
  });
}

// ============================================
// EVENT SETUP
// ============================================

function setupEvents() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const productGrid = document.getElementById("productGrid");
  const overlay = document.getElementById("comparisonOverlay");

  if (searchInput) {
    searchInput.addEventListener("input", renderProducts);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", renderProducts);
  }

  if (productGrid) {
    productGrid.addEventListener("click", function (event) {
      const compareButton = event.target.closest("[data-compare]");
      const imageButton = event.target.closest("[data-view-image]");

      if (compareButton) {
        compareProduct(compareButton.dataset.compare);
      }

      if (imageButton) {
        openImageViewer(imageButton.dataset.viewImage);
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closeComparison();
    });
  }
}

// ============================================
// START WEBSITE
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  createImageViewer();
  renderProducts();
  setupEvents();
  setupAlertForm();
});



