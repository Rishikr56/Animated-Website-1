var tl = gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    duration:1,
    delay:0.5,
    stagger:0.5,
    opacity:0,
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    stagger:0.5,
    duration:0.8,
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:2,
    delay:0.2,
    stagger:1,
})