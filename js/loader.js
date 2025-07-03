document.addEventListener('DOMContentLoaded', function () {
    const loaderHTML = `
        <div id="page-loader">
            <div id="loader-logo"></div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', loaderHTML);

    window.addEventListener('load', function () {
        const loader = document.getElementById('page-loader');
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.style.display = 'none', 1000);
        }, 600);
    });
});
