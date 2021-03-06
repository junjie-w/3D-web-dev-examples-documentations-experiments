var iframe = document.getElementsByTagName('iframe');
iframe.loading = 'lazy';

const island__load = document.getElementById("island__load");
const island__clear = document.getElementById("island__clear");
const island__iframe = document.getElementById('island__iframe');
// island__button.addEventListener("click", () => {
//     island__frame.src = island__frame.src;
// })
island__clear.addEventListener("click", () => {
    island__iframe.contentWindow.location.replace("about: blank");
})


const shadow__load = document.getElementById("shadow__load");
const shadow__clear = document.getElementById("shadow__clear");
const shadow__iframe = document.getElementById('shadow__iframe');
island__load.addEventListener("click", () => {
    island__iframe.classList.add("iframe-big")
})

island__clear.addEventListener("click", () => {
    island__iframe.classList.remove("iframe-big")
})

shadow__clear.addEventListener("click", () => {
    shadow__iframe.contentWindow.location.replace("about: blank");
})

const loadButtons = document.getElementsByClassName("loadButton");
const closeButtons = document.getElementsByClassName("clearButton");
const iframeCounts = document.getElementsByClassName("loading-iframe");
const loadButtons__array = Array.prototype.slice.call(loadButtons)
const closeButtons__array = Array.prototype.slice.call(closeButtons)
const iframeCounts__array = Array.prototype.slice.call(iframeCounts)

loadButtons__array.map((button, index) => button.addEventListener("click", () => {
    iframeCounts__array[index].classList.add("iframe-big")
}))
closeButtons__array.map((button, index) => button.addEventListener("click", () => {
    iframeCounts__array[index].classList.remove("iframe-big")
}))


const scriptLoadButtons = document.getElementsByClassName("loadButton--jsfiddle");
const scriptCloseButtons = document.getElementsByClassName("clearButton--jsfiddle");
const loadingScripts = document.getElementsByClassName("loading-script--jsfiddle");
const loadingIframes = document.getElementsByClassName("loading-iframe--jsfiddle");

const scriptLoadButtons__array = Array.prototype.slice.call(scriptLoadButtons)
const scriptCloseButtons__array = Array.prototype.slice.call(scriptCloseButtons)
const loadingScripts__array = Array.prototype.slice.call(loadingScripts)
const loadingIframes__array = Array.prototype.slice.call(loadingIframes)

scriptLoadButtons__array.map((button, index) => button.addEventListener("click", () => {
    loadingScripts__array[index].classList.add("display")
    // loadingScripts__array[index].querySelector("iframe").classList.add("display")
    loadingIframes__array[index].classList.add("hide")
}))
scriptCloseButtons__array.map((button, index) => button.addEventListener("click", () => {
    loadingScripts__array[index].classList.remove("display")
    // loadingScripts__array[index].querySelector("iframe").classList.remove("display")
    loadingIframes__array[index].classList.remove("hide")
}))

// document.querySelector(".loadButton--jsfiddle").addEventListener("click", () => {
//     // document.querySelector(".loading-script--jsfiddle").style.display = "inline-block"
//     // document.querySelector(".loading-iframe--jsfiddle").style.display = "none"
//     document.querySelector(".loading-script--jsfiddle").classList.add("display")
//     document.querySelector(".loading-iframe--jsfiddle").classList.add("hide")
// })

// document.querySelector(".clearButton--jsfiddle").addEventListener("click", () => {
//     document.querySelector(".loading-script--jsfiddle").classList.remove("display")
//     document.querySelector(".loading-iframe--jsfiddle").classList.remove("hide")
// })

document.querySelector(".mathSin").addEventListener("mouseenter", () => {
    document.querySelector(".sinCos").style.display = "inline-block"
})
document.querySelector(".mathSin").addEventListener("mouseleave", () => {
    document.querySelector(".sinCos").style.display = "none"
})

// // document.querySelector(".hamburger").addEventListener("mouseenter", () => {
// //     document.querySelector(".nav__ul").style.display = "inline-block"
// // })

// // if (window.matchMedia("(max-width: 700px)").matches) {
// //     document.querySelector(".nav").addEventListener("mouseenter", () => {
// //         console.log("uhu")
// //         document.querySelector(".nav__ul").style.display = "inline-block"
// //     })

// //     document.querySelector(".nav").addEventListener("mouseleave", () => {
// //         document.querySelector(".nav__ul").style.display = "none"
// //     })
// // }