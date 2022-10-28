gsap.registerPlugin(ScrollTrigger);
gsap.to(".mann-img", {
    scrollTrigger: {
        trigger: '.section-hero',
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers:true,    
    },
    x:300,
    y: 400,
    scale: 1.5,
    ease: "power1.out",
})

gsap.to(".mann-img-mobile", {
    scrollTrigger: {
        trigger: '.section-hero',
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers:true,    
    },
    y: 300,
    scale: 1.3,
    ease: "power1.out",
})