gsap.to(".star", {
    duration: 1,
    opacity: 0.2,
    stagger: {
        each: 0.5,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0,
        ease: "Power1.easeInOut",
        from: "start",
    }
})