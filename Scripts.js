document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.menu a');
    const contents = document.querySelectorAll('.content');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            
            links.forEach(l => l.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
            this.classList.add('active');
        });
    });
});