document.addEventListener('DOMContentLoaded', () => {
    const transitionElement = document.querySelector('.page-transition');
    const links = document.querySelectorAll('a[href]');

    // Saat halaman masuk
    transitionElement.classList.add('active');
    setTimeout(() => {
        transitionElement.classList.remove('active');
    }, 600); // Durasi animasi harus sama dengan CSS

    links.forEach(link => {
        // Hanya jalankan untuk link yang menuju halaman yang sama (bukan external)
        if (link.target !== "_blank" && !link.href.includes('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const url = link.href;

                transitionElement.classList.add('active');

                // Tunggu animasi keluar sebelum pindah halaman
                setTimeout(() => {
                    window.location.href = url;
                }, 600); // Durasi animasi
            });
        }
    });
});