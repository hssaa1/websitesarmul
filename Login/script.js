// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const kode = document.getElementById("kode").value;

    // Validasi kode token
    if (kode === "123456") { // Ubah "123456" sesuai dengan token yang diinginkan
        window.location.href = "halaman utama.html"; // Redirect ke halaman utama
    } else {
        alert("Kode Token salah, coba lagi.");
    }
});
