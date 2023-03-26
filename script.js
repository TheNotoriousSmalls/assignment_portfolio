// Menu 

const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
})



// Use intersection observer to animate in sections

// If intersectionObervser is not supported
var intersectionObserverSupported = 'IntersectionObserver' in window
var intersectItems = document.querySelectorAll('.reveal');

if (intersectionObserverSupported) {
    // Interscetion observer options
    var intersectionObserverOptions = {
        threshold: 0.2
    }

    // Create observer with options
    var revealObserver = new IntersectionObserver(items => {

        items.forEach(entry => {
            entry.target.classList.toggle("active", entry.isIntersecting)
        })
    }, intersectionObserverOptions);


    // Observer each element with className .reveal
    for (i = 0; i < intersectItems.length; ++i) {
        revealObserver.observe(intersectItems[i]);
    }

} else {
    // Add active to all elements
    intersectItems.forEach(element => {
        element.classList.add('active')
    });
}