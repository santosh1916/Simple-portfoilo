
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function allAnimation(){
    var ankerNav = document.querySelectorAll("#nav-part1 a");
    var jstag = document.querySelectorAll(".anim")
    jstag.forEach(elem => {
        elem.addEventListener("mouseenter", function(){
            gsap.to(elem,{
                rotate:0,
                scale:1.2,
                ease: Expo
            })
        elem.addEventListener("mouseleave", ()=>{
            gsap.to(elem, {
                scale:1,
                rotate: -25,
                ease: Expo
            })
        })
    });
    console.log(jstag)
    ankerNav.forEach((Element)=>{
            Element.addEventListener("mousemove" , function(dets){
                gsap.to(Element , {
                    scale:1.2
                })
            })
            Element.addEventListener("mouseleave", function(){
                gsap.to(Element , {
                    scale:1
                })
            })
        })
    })
}
allAnimation();
// pointerFollower();
