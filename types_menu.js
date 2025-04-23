const {slideToggle, slideUp, slideDown} = window.domSlider;
function mainNavToggle() {
    const t = document.querySelector(".main_nav .hamburger_button");
    var n, o = !1;
    null != t && ["click", "keydown"].forEach(function(e) {
        t.addEventListener(e, function(e) {
            ("click" == e.type || "keydown" == e.type && 13 === e.keyCode) && (n = n || document.querySelector(".navbar"),
            o || (t.classList.toggle("active"),
            o = !0,
            "false" == t.getAttribute("aria-expanded") ? t.setAttribute("aria-expanded", "true") : t.setAttribute("aria-expanded", "false"),
            slideToggle({
                element: n
            }).then( () => {
                o = !1
            }
            )))
        })
    })
}

function typesListToggle() {
    const e = document.querySelectorAll(".types_list");
    null != e && e.forEach(t => {
        ["click", "keydown"].forEach(function(e) {
            t.addEventListener(e, function(e) {
                ("click" == e.type || "keydown" == e.type && 13 === e.keyCode) && (t.classList.toggle("active"),
                "false" == t.getAttribute("aria-expanded") ? t.setAttribute("aria-expanded", "true") : t.setAttribute("aria-expanded", "false"))
            })
        })
    }
    )
}

function menuListToggle() {
    const e = document.querySelectorAll(".menu_list");
    null != e && e.forEach(t => {
        ["click", "keydown"].forEach(function(e) {
            t.addEventListener(e, function(e) {
                ("click" == e.type || "keydown" == e.type && 13 === e.keyCode) && (t.classList.toggle("active"),
                "false" == t.getAttribute("aria-expanded") ? t.setAttribute("aria-expanded", "true") : t.setAttribute("aria-expanded", "false"))
            })
        })
    }
    )
}

function accordionsHashCheck() {
    var e;
    window.location.hash && document.querySelector(window.location.hash) && ((e = document.querySelector(window.location.hash + "> .accordion_title")) && ((e = e.closest(".accordion_item")).classList.toggle("active"),
    e.querySelector(".accordion_title").setAttribute("aria-expanded", "true"),
    slideDown({
        element: e.querySelector(".accordion_content")
    }),
    getParents(e.parentElement.parentElement, ".accordion_item").forEach(function(e) {
        e.classList.toggle("active"),
        e.querySelector(".accordion_title").setAttribute("aria-expanded", "true"),
        slideDown({
            element: e.querySelector(".accordion_content")
        }).then( () => {
            window.location = window.location.origin + window.location.pathname + window.location.hash
        }
        )
    })))
}

window.addEventListener("DOMContentLoaded", e => {
    const t = document.querySelectorAll("#secondary_nav .secondary_nav_cont > ul > li > ul");
    var n;
    t.forEach(e => {
        e.parentElement.innerHTML += '<img class="dropdown_icon" src="https://www.kennesaw.edu/webstatic/_resources/images/template/caret-down-white.svg" alt="Caret Down Icon" width="10px" /><div class="dropdown_icon_mobile"><img  src="https://www.kennesaw.edu/webstatic/_resources/images/template/plus.svg" alt="Open Icon" tabindex="0" role="button" aria-label="Toggle Dropdown" width="15px" /></div>'
    }
    ),
    "undefined" == typeof ou_dirname || "undefined" == typeof ou_filename || checkNav(ou_dirname + ou_filename) || checkNav(ou_dirname),
    navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && navigator.userAgent && -1 == navigator.userAgent.indexOf("CriOS") && -1 == navigator.userAgent.indexOf("FxiOS") && ((n = document.createElement("script")).type = "text/javascript",
    n.src = "https://www.kennesaw.edu/webstatic/_resources/js/smooth-scroll.min.js",
    document.getElementsByTagName("head")[0].appendChild(n),
    window.onload = function() {
        new SmoothScroll('a[href*="#"]')
    }
    ),
    window.addEventListener("hashchange", e => {
        window.location.hash && document.querySelector(window.location.hash) && "#header_navigation" == window.location.hash && (document.querySelector(".main_nav .hamburger_button").classList.add("active"),
        document.querySelector(".navbar").style.display = "block")
    }
    ),
    Math.floor(132341 * Math.random()) + 1 == 132341 && (document.querySelector("#de").innerHTML = "🦉"),
    mainNavToggle(),
    typesListToggle(),
	menuListToggle(),
    document.querySelector("table") && tableFix(),
    addEventListener("hashchange", e => {
        accordionsHashCheck()
    }
    )
}
),
window.addEventListener("load", e => {}
);
