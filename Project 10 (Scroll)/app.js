// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContain = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    let containerHeight = linksContain.getBoundingClientRect().height;
    let linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContain.style.height = `${linksHeight}px`
    } else {
        linksContain.style.height = 0;
    }
});
// ********** fixed navbar ************
const nav = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    // console.log(window.pageYOffset);
    let yHeight = window.pageYOffset;
    let navHeight = nav.getBoundingClientRect().height;
    if (yHeight >= navHeight) {
        nav.classList.add('fixed-nav')
    } else {
        nav.classList.remove('fixed-nav')
    }

    if (yHeight >= 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})

// ********** smooth scroll ************
// select links
const scroll = document.querySelectorAll('.scroll-link');

scroll.forEach(function (link) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // navigate to specific spot
        let id = e.currentTarget.getAttribute('href').slice(1);
        let element = document.getElementById(id);
        // calculate the height
        let navHeight = nav.getBoundingClientRect().height;
        let containerHeight = linksContain.getBoundingClientRect().height;
        let fixedNav = nav.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        });
        linksContain.style.height = 0;
    })
});