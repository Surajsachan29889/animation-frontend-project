gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
    repeat:-1
})

tl
.to(".imgcontainer", {
    width: "100%",
    ease:Expo.easeInOut,
    stagger:2
},'flag')

.to(".text h1", {

    ease:Expo.easeInOut,
    stagger:2,
    top:0
},'flag')

.to(".text h1", {
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%"
},'flag')

.to(".para",{
    ease:Expo.easeInOut,    
    stagger:2,
    width:"40%",
},'flag')

// card animation

gsap.to(".cardsec1",{
    x:290,
    duration:1,
    scrollTrigger:{
        trigger:".cardsec1",
        start:"top 400px",
        end:"bottom 600px",
        toggleActions:"play none none reverse"   
    }
})
gsap.from(".cardsec1",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".cardsec1",
        start:"top 400px",
        end:"bottom 600px",
        toggleActions:"play none none reverse"    
    }
})
gsap.to(".cardsec2",{
    duration:1,
    scrollTrigger:{    
        trigger:".cardsec2",
        start:"top 400px",
        end:"bottom 650px",
        toggleActions:"play none none reverse"        
    }
})
gsap.from(".cardsec2",{
    x:600,
    opacity:0,
    duration:1,
    scrollTrigger:{       
        trigger:".cardsec2",
        start:"top 400px",
        end:"bottom 650px",
        toggleActions:"play none none reverse"    
    }
})
const spit = new SplitType(".textanime h1");
gsap.to(".char", {
    y:0,
    stagger:0.03,
    delay:0.2,
    duration:.5,
    scrollTrigger:{
        trigger:".char",
        markers:false,
        start:"top 550px",
        end:"top 700px",
        toggleActions:"play none none reverse"
    }
})
gsap.from(".popicon td", {
    duration: 0.8,
    scale:0,
    opacity:0,
    stagger:0.2,
    ease:"back.out(1.7)",
    scrollTrigger:{
        trigger:"td",
        markers:false,
        start:1500 ,
        end:"bottom 30%",
        toggleActions:"play none none reverse",
}   
  })

gsap.from(".backimganime img",{
    duration: .5,
    scale: 4,
    ease: 'power2.out',
    scrollTrigger:{
        trigger:".backimganime img",
        scrub:1,
    }
})  
