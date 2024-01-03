document.addEventListener('astro:page-load', () => {
    const hamburgerNav = document.querySelector('.hamburger')
    hamburgerNav && 
    hamburgerNav.addEventListener('click', () => {
        const navLinks =  document.querySelector('.nav-links');
        navLinks && navLinks.classList.toggle('expanded')
    })
})
