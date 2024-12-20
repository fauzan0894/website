// Pastikan kode ini dijalankan setelah halaman sepenuhnya dimuat
window.onload = function() {
    // Ambil parameter produkIndex dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const productIndex = urlParams.get('productIndex');

    // Array produk
    const products = [
        { name: "Pashmina Ceruty", price: 30000 },
        { name: "Bella Square", price: 25000 },
        { name: "Pet Jersey Premium", price: 25000 },
        { name: "Bergo Hamidah", price: 20000 },
        { name: "Pollycoton Square", price: 35000 },
        { name: "Paris Classic Premium", price: 35000 }
    ];

    // Validasi apakah produkIndex ada dan sesuai
    if (productIndex === null || isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
        alert('Produk tidak ditemukan!');
        window.location.href = '../index.html'; // Arahkan kembali ke halaman index jika tidak valid
        return;
    }

    // Ambil produk berdasarkan indeks
    const product = products[productIndex];

    // Tampilkan nama produk dan harga di form
    document.getElementById('product-name').value = product.name;
    document.getElementById('total-price').value = `Rp${product.price}`;

    // Menghitung harga total saat jumlah produk berubah
    const quantityInput = document.getElementById('quantity');
    quantityInput.addEventListener('input', function() {
        const quantity = quantityInput.value;
        const total = product.price * quantity;
        document.getElementById('total-price').value = `Rp${total}`;
    });

    // Menangani pengiriman form checkout
    const checkoutForm = document.getElementById('checkout');
    checkoutForm.onsubmit = function(event) {
        event.preventDefault(); // Mencegah form dikirim secara default

        // Ambil data dari formulir
        const quantity = document.getElementById('quantity').value;
        const buyerName = document.getElementById('buyer-name').value;
        const buyerAddress = document.getElementById('buyer-address').value;

        // Validasi input pengguna
        if (!quantity || !buyerName || !buyerAddress) {
            alert("Harap lengkapi semua kolom!");
            return;
        }

        // Perhitungan total harga
        const total = product.price * quantity;

        // Menampilkan konfirmasi pembelian (bisa disesuaikan, misalnya dengan menyimpan data ke database atau API)
        alert(`Pembelian berhasil!\nNama Pembeli: ${buyerName}\nAlamat: ${buyerAddress}\nProduk: ${product.name}\nJumlah: ${quantity}\nTotal Harga: Rp${total}`);
        
        // Anda bisa menambahkan kode untuk mengarahkan ke halaman pembayaran atau mengirim data ke server di sini
        // Contoh: window.location.href = 'payment.html';
    };
};
