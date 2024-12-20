const products = [
    { id: 1, name: "Pashmina Ceruty", price: 30000, category: "Aksesoris", image: "assets/produk1.jpeg" },
    { id: 2, name: "Bella Square", price: 25000, category: "Aksesoris", image: "assets/produk2.jpeg" },
    { id: 3, name: "Smartwatch", price: 1500000, category: "Elektronik", image: "assets/produk3.jpeg" },
    { id: 4, name: "Kaos Polos", price: 50000, category: "Fashion", image: "assets/produk4.jpeg" },
    { id: 5, name: "Headset Gaming", price: 250000, category: "Elektronik", image: "assets/produk5.jpeg" },
    { id: 6, name: "Celana Jeans", price: 150000, category: "Fashion", image: "assets/produk6.jpeg" },
    { id: 7, name: "Tas Kulit Premium", price: 350000, category: "Fashion", image: "assets/produk7.jpeg" },
];

// Elemen DOM
const productGrid = document.getElementById("product-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

// Fungsi untuk menampilkan produk
function displayProducts(productsToDisplay) {
    productGrid.innerHTML = ""; // Kosongkan grid
    productsToDisplay.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp${product.price.toLocaleString()}</p>
            <button>Beli Sekarang</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Fungsi untuk memfilter produk berdasarkan kategori
function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Event listener untuk tombol filter
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        filterProducts(category);
    });
});

// Tampilkan semua produk saat halaman dimuat
displayProducts(products);
