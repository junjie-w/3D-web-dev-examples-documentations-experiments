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
// island__button.addEventListener("click", () => {
//     island__frame.src = island__frame.src;
// })
shadow__clear.addEventListener("click", () => {
    shadow__iframe.contentWindow.location.replace("about: blank");
})