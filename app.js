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

// loadButtons[i].addEventListener("click", () => {
//     iframeCounts[i].classList.add("iframe-big")
// })

// closeButtons[i].addEventListener("click", () => {
//     iframeCounts[i].classList.remove("iframe-big")
// })