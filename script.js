var dropdown = gsap.timeline()
var crsr = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-7.5+"px"
    crsr.style.top = dets.y-7.5+"px"
})



dropdown.from("nav div", {
    y :-60,
    duration:0.8,
    stagger:0.2,
})

dropdown.from(" .main-video",{
    duration:0.8,
    opacity:0,
})

dropdown.from(".section-1-text ",{
    x:-300,
    duration:0.5,
    opacity:0,
    scrub:2
}) 


gsap.from("#section-2 .section-2-top-right",{
    y:"-100%",
    scrollTrigger:{
        trigger:".section-1-text ",
        scroll:"body",
        start:"top 35%",
        end:"top -30%",
        scrub:1,
        // markers:true
        // stagger:1
    }
})

gsap.from("#section-2 .bottom-top p",{
    y:"-100%",
    scrollTrigger:{
        trigger:"#section-2",
        scroll:"body",
        start:"top 60%",
        end:"top 0%",
        scrub:1,
        // stagger:1
    }
})

gsap.from("#section-2 .combine",{
    y:"-100%",
    markers:true,
    scrollTrigger:{
        trigger:"#section-2 ",
        scroll:"body",
        start:"top 20%",
        end:"top -40%",
        scrub:1,
        // stagger:2
    }
})

gsap.to(".boxes-4",{
    y:"-100%",
    duration:2,
    scrollTrigger:{
        trigger:".pinned-img",
        scroll:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        stagger:2
    }
})

gsap.to(".boxes-3",{
    y:"100%",
    duration:20,
    scrollTrigger:{
        trigger:".pinned-img",
        scroll:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        stagger:5
    }
})

gsap.to(".pinned-img",{
    scrollTrigger:{
        trigger:".pinned-img",
        scroll:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})


gsap.from("#section-6 .section-6-top-right",{
    y:"-100%",
    // markers:true,
    scrollTrigger:{
        trigger:"#section-6 ",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:1,
    }
})

gsap.from("#section-6 .section-6-middle p",{
    y:"-100%",
    // markers:true,
    scrollTrigger:{
        trigger:"#section-6 ",
        scroll:"body",
        start:"top 70%",
        end:"top -5%",
        scrub:1,
    }
})


gsap.from("#section-6 .s-6-bottom-top p",{
    y:"-100%",
    // markers:true,
    scrollTrigger:{
        trigger:"#section-6 ",
        scroll:"body",
        start:"top 10%",
        end:"top -20%",
        scrub:2,
    }
})


gsap.from("#section-6 .s-6-bottom-bottom p",{
    y:"-100%",
    // markers:true,
    scrollTrigger:{
        trigger:"#section-6 ",
        scroll:"body",
        start:"top -10%",
        end:"top -70%",
        scrub:1,
    }
})


gsap.from(".heights p",{
    y:"-100%",
    duration:5.5,
    stagger:0.3,
    scrub:7,
    scrollTrigger:{
        trigger:"footer",
        scroll:"body",
        start:"top 40%",
        end:"top 20%",
        scrub:4,
        // markers:true
        
    }
})