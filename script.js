document.addEventListener('DOMContentLoaded', () => {
    
    const secoes = document.querySelectorAll('.secao');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); 
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    secoes.forEach(secao => {
        observer.observe(secao);
    });
});