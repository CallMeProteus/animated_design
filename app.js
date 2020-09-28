// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


gsap.to('.box1',{x:1040, rotation:360, duration:3, delay:3});
gsap.from('.box1',{opacity:0, duration:2,delay:2});
//gsap.to('#zero',{y:'-200', duration:1,delay:1.2});

gsap.from('#section-one', {
    duration:2, y:'-300%', ease:'back'
})
function myfunction3(){
    gsap.to('.box2', {scale:'3', duration:2,});
}

function myfunction2(){
    gsap.to('.box2', {x:'-260%', duration:2, stagger:0.5});
}
function myfunction(){
   
    gsap.to('#section-two',{opacity:1, duration:0.5,});
    myfunction2()
  
}
// function myFunction(){
//     gsap.from('#section-one', {
//         duration:2, y:'-300%', ease:'back'
//     })
//     // gsap.from('#section-two',{scale:-3, duration:2,delay:2});
// }
// document.getElementById("section-one").onscroll = function() {myFunction()};