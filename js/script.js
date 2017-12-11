/* SPINNER */
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == 'interactive') {
        document.getElementById('home').style.visibility = "hidden";
        document.getElementById('main').style.visibility = "hidden";
        document.getElementById('footer').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('home').style.visibility = "visible";
            document.getElementById('main').style.visibility = "visible";
            document.getElementById('footer').style.visibility = "visible";
        }, 1000);
    }
}

/* Start of Zendesk Chat Script */
window.$zopim || (function (d, s) {
    var z = $zopim = function (c) { z._.push(c) }, $ = z.s =
        d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = function (o) {
            z.set.
                _.push(o)
        }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute("charset", "utf-8");
    $.src = "https://v2.zopim.com/?5HvgNYm26afXMyClu6Riutu8Xb94gFEB"; z.t = +new Date; $.
        type = "text/javascript"; e.parentNode.insertBefore($, e)
})(document, "script");
/* End of Zendesk Chat Script */

/* TYPEWRITER */
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    document.body.appendChild(css);
};

/* NAV DETAILS */
const nav = document.querySelector("nav");
window.addEventListener("scroll", bold);

function bold(e) {
    nav.setAttribute("style", "background-color: #135ac6; box-shadow: 0 0.4rem 0.3rem -0.3rem rgba(0, 0, 0, 0.85);");
}

/* SLIDE MENU  */
const svgOpen = document.getElementById("svgOpen");
const closeMenu = document.querySelector(".closeMenu");
const anchors = document.querySelectorAll("#side-menu a");
anchors.forEach(anchor => anchor.addEventListener('click', closeSlideMenu));
svgOpen.addEventListener('click', openSlideMenu);
closeMenu.addEventListener('click', closeSlideMenu);

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '12.5rem';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
}

/* PANELS */
const panels = document.querySelectorAll('#lavori .panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

/* READ MORE BUTTON */
const readMore = document.getElementById("read-more");
readMore.addEventListener("click", handleReadMore);
const pDisplay = document.querySelectorAll(".about-us p.display");

function handleReadMore() {
    pDisplay.forEach(p => p.style.display = "block");
    setTimeout(removeReadMoreBtn, 400);
}

function removeReadMoreBtn() {
    readMore.style.display = "none";
}

/* GOOGLE MAP */
function initMap() {
    let options = {
        zoom: 9,
        center: { lat: 46.61209, lng: 11.15653 },
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ff4400"
                    },
                    {
                        "saturation": -68
                    },
                    {
                        "lightness": -4
                    },
                    {
                        "gamma": 0.72
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon"
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#0077ff"
                    },
                    {
                        "gamma": 3.1
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "hue": "#00ccff"
                    },
                    {
                        "gamma": 0.44
                    },
                    {
                        "saturation": -33
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "stylers": [
                    {
                        "hue": "#44ff00"
                    },
                    {
                        "saturation": -23
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "hue": "#007fff"
                    },
                    {
                        "gamma": 0.77
                    },
                    {
                        "saturation": 65
                    },
                    {
                        "lightness": 99
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "gamma": 0.11
                    },
                    {
                        "weight": 5.6
                    },
                    {
                        "saturation": 99
                    },
                    {
                        "hue": "#0091ff"
                    },
                    {
                        "lightness": -86
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": -48
                    },
                    {
                        "hue": "#ff5e00"
                    },
                    {
                        "gamma": 1.2
                    },
                    {
                        "saturation": -23
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "saturation": -64
                    },
                    {
                        "hue": "#ff9100"
                    },
                    {
                        "lightness": 16
                    },
                    {
                        "gamma": 0.47
                    },
                    {
                        "weight": 2.7
                    }
                ]
            }
        ]
    }

    const map = new google.maps.Map(document.getElementById('map'), options);
    const marker = new google.maps.Marker({
        position: { lat: 46.6137343, lng: 11.1521004 },
        map: map
    });

    let content = `
        <div>
            <h1 class="center">Ndreca Simon</h1>
            <hr>
            <span><strong>Via Andreas Hofer, 34
            39011 Lana Bolzano</strong></span>
        </div>
    `;

    var infoWindow = new google.maps.InfoWindow({
        content: content
    });

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
}

/* FOOTER CURRENT YEAR */
const year = document.getElementById('year');
const currentYear = (new Date().getFullYear());
(currentYear === 2017) ? year.textContent = '2017' : year.textContent = `2017-${currentYear}`;

/* SMOOTH SCROLLING */
(function (window, undefined) {
    'use strict';
    var height_fixed_header = 82,
        speed = 650,
        moving_frequency = 15,
        links = document.getElementsByTagName('a'),
        href;

    for (var i = 0; i < links.length; i++) {
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if (href !== null && href.length > 1 && href.indexOf('#') !== -1) {
            links[i].onclick = function () {
                var element,
                    href = this.attributes.href.nodeValue.toString(),
                    url = href.substr(0, href.indexOf('#')),
                    id = href.substr(href.indexOf('#') + 1);
                if (element = document.getElementById(id)) {

                    var hop_count = (speed - (speed % moving_frequency)) / moving_frequency,
                        getScrollTopDocumentAtBegin = getScrollTopDocument(),
                        gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                    if (window.history && typeof window.history.pushState == 'function')
                        window.history.pushState({}, undefined, url + '#' + id);

                    for (var i = 1; i <= hop_count; i++) {
                        (function () {
                            var hop_top_position = gap * i;
                            setTimeout(function () { window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency * i);
                        })();
                    }

                    return false;
                }
            };
        }
    }

    var getScrollTopElement = function (e) {
        var top = height_fixed_header * -1;

        while (e.offsetParent != undefined && e.offsetParent != null) {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };

    var getScrollTopDocument = function () {
        return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
    };
})(window);

/* ANIMATIONS */
window.sr = ScrollReveal();

sr.reveal('.ceo', {
    duration: 1500,
    origin: 'left',
    viewFactor: 0.1,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.about-us', {
    duration: 1500,
    origin: 'right',
    viewFactor: 0.2,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.panel', {
    duration: 1500,
    viewFactor: 0.3,
    easing: 'ease-in-out'
}, 100);

sr.reveal('.panel1', {
    origin: 'top',
});

sr.reveal('.panel2', {
    origin: 'bottom',
});

sr.reveal('.panel3', {
    origin: 'top',
});

sr.reveal('.panel4', {
    origin: 'bottom',
});
