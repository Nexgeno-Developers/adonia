document.addEventListener("DOMContentLoaded", function(){

    'use strict';

    gsap.registerPlugin(ScrollTrigger);

    let workInfoItems = document.querySelectorAll('.work__photo-item');
    workInfoItems.forEach(function(item, index){
        item.style.zIndex = workInfoItems.length - index;
    });

    gsap.set(".work__photo-item", {
        clipPath: "inset(0px 0px 0px 0px)"
    });

    const animation = gsap.to('.work__photo-item:not(:last-child)', {
        clipPath: "inset(0px 0px 100% 0px)",
        stagger: 0.5,
        ease: "none"
    });

    ScrollTrigger.create({
        trigger: '.work',
        start: 'top top',
        end: 'bottom bottom',
        animation: animation, // Use the 'animation' variable here
        scrub: 1
    });

});

