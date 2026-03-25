const products = {
  best: [
    {
      title: "Bike Classic",
      description: "Best bike for city riding",
      price: 32,
      oldPrice: 42,
      image: "./image/product1.png",
    },
    {
      title: "Mountain Bike",
      description: "Perfect for mountains",
      price: 22,
      oldPrice: 28,
      image: "./image/product2.png",
    },
    {
      title: "Road Bike",
      description: "Fast and lightweight",
      price: 18,
      oldPrice: 26,
      image: "./image/product3.png",
    },
    {
      title: "Urban Bike",
      description: "Comfort for daily trips",
      price: 48,
      oldPrice: 56,
      image: "./image/product4.png",
    },
  ],

  new: [
    {
      title: "New Speed Bike",
      description: "New 2026 model",
      price: 55,
      oldPrice: 70,
      image: "https://via.placeholder.com/250x180",
    },
    {
      title: "Electric Bike",
      description: "Eco transport",
      price: 120,
      oldPrice: 150,
      image: "https://via.placeholder.com/250x180",
    },
    {
      title: "Mini Bike",
      description: "Compact and light",
      price: 40,
      oldPrice: 52,
      image: "https://via.placeholder.com/250x180",
    },
  ],
};

const grid = document.getElementById("productsGrid");
const buttons = document.querySelectorAll(".filter-btn");

function renderProducts(category) {
  grid.innerHTML = "";

  products[category].forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <div class="product-badge">${category === "best" ? "Best-seller" : "New"}</div>

      <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
      </div>

      <h3 class="product-title">${product.title}</h3>
      <p class="product-description">${product.description}</p>

      <div class="product-price">
        <span class="current-price">$${product.price}</span>
        <span class="original-price">$${product.oldPrice}</span>
      </div>

      <button class="add-to-cart">
        <img src="./image/Shopping cart.png" alt="Cart">
      </button>
    `;

    grid.appendChild(card);
  });
}

// перемикання табів
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    renderProducts(filter);
  });
});

// перший рендер
renderProducts("best");

const tabsData = {
  benefits: {
    title: "Benefits",
    text: `Consectetur excepteur elit ullamco incididunt voluptate tempor
    exercitation. Lorem commodo ullamco quis velit officia aute
    laboris elit sit exercitation ut esse pariatur occaecat quis`,
    image:
      "https://media.gettyimages.com/id/505252817/vector/yoga-positions.jpg?b=1&s=1024x1024&w=gi&k=20&c=ApZzkXDYrO6bMjDQk4wUdT36R-iTFhKLEqeZwtQjw5w=",
    sections: [
      {
        subtitle: "Laboris consequat ad",
        text: `Consectetur excepteur elit ullamco incididunt voluptate tempor
        exercitation. Lorem commodo ullamco quis velit officia aute
        laboris elit sit exercitation ut esse pariatur`,
      },
      {
        subtitle: "Duis duis do labore pariatur",
        text: `Ad qui aliqua nulla nostrud consectetur laboris nostrud commodo
        voluptate. Lorem id qui laborum aute voluptate`,
      },
      {
        subtitle: "Deserunt ex",
        text: `Cupidatat culpa id do laboris nisl aliqua eu. Veniam aliqua duis
        Lorem adipisicing et minim velit quis`,
      },
    ],
  },

  ingredients: {
    title: "Ingredients",
    text: `Our formula includes carefully selected components that are tested
    for quality and effectiveness. Each ingredient works together to
    support overall wellness, improve energy levels, and maintain
    balance in your daily routine.`,
    image: "https://picsum.photos/500/400?random=1",
    sections: [
      {
        subtitle: "Vitamin A",
        text: `Supports immune system and helps maintain healthy vision.
        Also contributes to normal growth and development of the body.`,
      },
      {
        subtitle: "Vitamin C",
        text: `Improves skin health and boosts natural protection against
        environmental stress and fatigue.`,
      },
      {
        subtitle: "Natural Extracts",
        text: `Plant-based ingredients that help support metabolism,
        provide antioxidants, and promote overall vitality.`,
      },
    ],
  },

  how: {
    title: "How to use",
    text: `Using the product is simple and convenient. Follow these steps
    regularly to achieve the best possible results and maintain
    consistency in your routine.`,
    image: "https://picsum.photos/500/400?random=2",
    sections: [
      {
        subtitle: "Step 1",
        text: `Take the recommended amount once per day, preferably in the
        morning with food.`,
      },
      {
        subtitle: "Step 2",
        text: `Drink a glass of water after taking the product to help
        absorption.`,
      },
      {
        subtitle: "Step 3",
        text: `Stay consistent and combine with a healthy lifestyle
        for better results.`,
      },
    ],
  },

  reviews: {
    title: "Reviews",
    text: `Customers from different countries share their experiences
    after using the product regularly. Most of them noticed
    improvements in energy, mood, and daily productivity.`,
    image: "https://picsum.photos/500/400?random=3",
    sections: [
      {
        subtitle: "John",
        text: `Amazing product! After a few weeks I started feeling more
        energetic and focused throughout the day.`,
      },
      {
        subtitle: "Anna",
        text: `Really helped me improve my daily routine. The quality
        feels great and the results are noticeable.`,
      },
      {
        subtitle: "Michael",
        text: `I was surprised by how effective it is. Definitely something
        I will continue using.`,
      },
    ],
  },

  faqs: {
    title: "FAQs",
    text: `Here are some of the most common questions people ask before
    starting to use the product.`,
    image: "https://picsum.photos/500/400?random=4",
    sections: [
      {
        subtitle: "Is it safe?",
        text: `Yes, the product is tested and meets quality standards.
        Always follow the recommended usage instructions.`,
      },
      {
        subtitle: "How long to see results?",
        text: `Most users report noticeable changes within a few weeks
        of regular use.`,
      },
      {
        subtitle: "Can I use it daily?",
        text: `Yes, it is designed for everyday use as part of a balanced
        lifestyle.`,
      },
    ],
  },
};
const content = document.getElementById("benefitsContent");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderTab(tab) {
  const data = tabsData[tab];

  let sectionsHTML = "";

  data.sections.forEach((section) => {
    sectionsHTML += `
      <div class="benefits-subsection">
        <h3 class="benefits-subtitle">${section.subtitle}</h3>
        <p class="benefits-paragraph">${section.text}</p>
      </div>
    `;
  });

  content.innerHTML = `
    <div class="benefits-text">
      <h2 class="benefits-title">${data.title}</h2>
      <p class="benefits-paragraph">${data.text}</p>
      ${sectionsHTML}
    </div>

    <div class="benefits-image">
      <img src="${data.image}" alt="${data.title}">
    </div>
  `;
}

// переключення табів
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const tab = btn.dataset.tab;
    renderTab(tab);
  });
});

// перший рендер
renderTab("benefits");
