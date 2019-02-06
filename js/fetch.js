let BiographyLink = document.querySelector('#biography-link');
let AnAutohagiographyLink = document.querySelector('#anAutohagiography-link');
let TheBookOfTheLawLink = document.querySelector('#theBookOfTheLaw-link');
let MoonchildLink = document.querySelector('#moonchild-link');
let TheBookOfTheLiesLink = document.querySelector('#theBookOfTheLies-link');

let linkArray = [BiographyLink, AnAutohagiographyLink, TheBookOfTheLawLink, MoonchildLink, TheBookOfTheLiesLink];

linkArray.forEach((eachLink) => {
    eachLink.addEventListener('click', (e) => {
        switch (eachLink) {
            case BiographyLink:
                fetchPage(eachLink, '/labyrinth.book/htmlAC/biography.html');
                break;

            case AnAutohagiographyLink:
                fetchPage(eachLink, '/labyrinth.book/htmlAC/anAutohagiography.html');
                break;

            case TheBookOfTheLawLink:
                fetchPage(eachLink, '/labyrinth.book/htmlAC/theBookOfTheLaw.html');
                break;

            case MoonchildLink:
                fetchPage(eachLink, '/labyrinth.book/htmlAC/moonchild.html');
                break;

            case TheBookOfTheLiesLink:
                fetchPage(eachLink, '/labyrinth.book/htmlAC/theBookOfTheLies.html');
                break;
        }
    })
})

                                    //------------//
let BiographyLinkFn = document.querySelector('#biography-link-fn');
let ThusSpokeZarathustraLinkFn = document.querySelector('#thus-spoke-zarathustra-link-fn');
let BeyondGoodAndEvilFn = document.querySelector('#beyond-good-and-evil-link-fn');
let TheAntichristFn = document.querySelector('#the-antichrist-fn');

let linkArrayFn = [BiographyLinkFn, ThusSpokeZarathustraLinkFn, BeyondGoodAndEvilFn, TheAntichristFn];

linkArrayFn.forEach((eachLink) => {
    eachLink.addEventListener('click', (e) => {
        switch (eachLink) {
            case BiographyLinkFn:
                fetchPage(eachLink, '/laburinth.book/htmlFN/biographyFn.html');
                break;

            case ThusSpokeZarathustraLinkFn:
                fetchPage(eachLink, '/labyrinth.book/htmlFN/thusSpokeZarathustraFn.html');
                break;

            case BeyondGoodAndEvilFn:
                fetchPage(eachLink, '/labyrinth.book/htmlFN/beyondGoodAndEvilFn.html');
                break;

            case TheAntichristFn:
                fetchPage(eachLink, '/labyrinth.book/htmlFN/theAntichristFn.html');
                break;
        }
    })
})


function fetchPage(link, page) {
    let baseURL = `${window.location.protocol}//${window.location.hostname}`;

    if (window.location.port) {
        baseURL += `:${window.location.port}`;
    }

    fetch(`${baseURL}/${page}`)
    .then(function (response) {
        return response.text()
    })
    .then(function (html) {
        let doc = new DOMParser().parseFromString(html, "text/html");

        anime({
            targets: '.text-section h1, .text-section p, .text-section div',
            translateX: 700,
            opacity: 0,
            easing: 'easeInExpo',
            duration: 700,
            complete: (anim) => {
                document.querySelector('.column-wrapper').remove();
            }
        })

            anime({
                targets: '.image-section',
                translateY: 2200,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
            })
            anime({
                targets: '.gallery-counter',
                translateX: 5200,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
            })


            setTimeout(function () {
                document.querySelector('body').insertBefore(doc.querySelector('.new-content'), document.querySelector('.gallery-nav'));

                anime({
                    targets: '.new-content .text-section h1, .new-content .text-section p, .new-content .text-section div',
                    translateX: [-600, 0],
                    delay: (el, i) => 100 * i,
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                })
                anime({
                    targets: '.image-section',
                    translateY: [-600, 0],
                    delay: (el, i) => 100 * i,
                    opacity: [0, 1],
                    borderRadius: ['0%', '20%'],
                    easing: 'easeOutExpo',
                })
                anime({
                    targets: '.gallery-counter',
                    translateY: [300, 0],
                    delay: 1000,
                    opacity: [0, 1],
                    borderRadius: ['0%', '20%'],
                    easing: 'easeOutExpo',
                })
            }, 800);
        })
}