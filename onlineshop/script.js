// Array produk yang berisi data nama dan harga produk
const products = [
    { name: "Pashmina Ceruty", price: 30000 },
    { name: "Bella Square", price: 25000 },
    { name: "Pet Jersey Premium", price: 25000 },
    { name: "Bergo Hamidah", price: 20000 },
    { name: "Pollycoton Square", price: 35000 },
    { name: "Paris Classic Premium", price: 35000 }
];

// Fungsi untuk menampilkan produk di halaman utama
function displayProducts() {
    const productGrid = document.getElementById('products');
    productGrid.innerHTML = ''; // Clear the product grid before adding

    products.forEach((product, index) => {
        // Membuat elemen kartu produk
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Menambahkan gambar produk
        const productImage = document.createElement('img');
        productImage.src = `assets/produk%20${index + 1}.jpeg`;  // Ganti dengan gambar yang sesuai
        productImage.alt = product.name;
        productCard.appendChild(productImage);

        // Menambahkan nama produk
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productCard.appendChild(productName);

        // Menambahkan harga produk
        const productPrice = document.createElement('p');
        productPrice.textContent = `Rp${product.price}`;
        productCard.appendChild(productPrice);

        // Menambahkan tombol "Beli Sekarang"
        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-now');
        buyButton.textContent = 'Beli Sekarang';
        buyButton.onclick = () => goToCheckout(index); // Mengarahkan ke checkout dengan indeks produk
        productCard.appendChild(buyButton);

        // Menambahkan kartu produk ke grid
        productGrid.appendChild(productCard);
    });
}

// Fungsi untuk mengarahkan ke halaman checkout dengan mengirimkan query parameter produk yang dipilih
function goToCheckout(productIndex) {
    const url = `checkout/checkout.html?productIndex=${productIndex}`;
    window.location.href = url; // Pindahkan ke halaman checkout
}

// Pastikan fungsi displayProducts dipanggil setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(); // Menampilkan produk saat halaman pertama kali dimuat
});
