// window.onload = function() {
//   if(!window.location.hash) {
//       window.location = window.location + '#loaded';
//       window.location.reload();
//   }
// }

//hamburger menu

const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelector(".dropdown");
	const navLinks = document.querySelectorAll(".dropdown li");

	//Toggle Nav
	hamburger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 1s ease forwards ${index / 7 +
					0.5}s`;
			}
		});
	});
};
navSlide();


// float effect

gsap.registerPlugin(ScrollTrigger);


let boxes = gsap.utils.toArray('.project');
boxes.forEach((box, index) => {
	const media = box.querySelector(".project-img");
  const flex1 = box.querySelector(".flex1");
  const flex2 = box.querySelector(".flex2");
  const flex3 = box.querySelector(".flex3");
	const heading = box.querySelectorAll("h1");
  const heading2 = box.querySelectorAll("h2");
  const heading3 = box.querySelectorAll("h3");
  const heading6 = box.querySelectorAll("h6");
	const body = box.querySelectorAll("p");
  const colorCircle = box.querySelectorAll("#circle");

// image Timeline

// let imgTl = gsap.timeline({ 
// 	scrollTrigger: {
// trigger: box,
// start: "top 95%",
// end: "center top",
// // markers: true,
// toggleActions: "play none none reverse"

// 		}})
// 		imgTl.fromTo(media, { y: 175 }, { y: 0, duration: 3, ease: "back.out"});

    // Flex 3 Media Timelines

let flex1Tl = gsap.timeline({ 
	scrollTrigger: {
trigger: box,
start: "top 95%",
end: "center top",
// markers: true,
toggleActions: "play none none reverse"
		}})
		flex1Tl.fromTo(flex1, { y: 200 }, { y: 0, duration: 3, ease: "back.out"});

    let flex2Tl = gsap.timeline({ 
      scrollTrigger: {
    trigger: box,
    start: "top 95%",
    end: "center top",
    // markers: true,
    toggleActions: "play none none reverse"
        }})
        flex2Tl.fromTo(flex2, { y: 300 }, { y: 0, duration: 3, ease: "back.out"}, "+=0.5");

        let flex3Tl = gsap.timeline({ 
          scrollTrigger: {
        trigger: box,
        start: "top 95%",
        end: "center top",
        // markers: true,
        toggleActions: "play none none reverse"
            }})
            flex3Tl.fromTo(flex3, { y: 400 }, { y: 0, duration: 3, ease: "back.out"}, "+=1.0");
		
		// largeTitle Timeline

		let headingTl = gsap.timeline({ 
	scrollTrigger: {
trigger: box,
start: "top 95%",
end: "center top",
// markers: true,
toggleActions: "play none none reverse"
		}})
		headingTl.fromTo(heading, { y: 200 }, { y: 0, duration: 2.75, ease: "back.out"}, "-=0.5");

    // heading2 Timeline

		let heading2Tl = gsap.timeline({ 
      scrollTrigger: {
    trigger: box,
    start: "top 95%",
    end: "center top",
    // markers: true,
    toggleActions: "play none none reverse"
        }})
        heading2Tl.fromTo(heading2, { y: 200 }, { y: 0, duration: 2.75, ease: "back.out"}, "-=0.75");

    // heading3 Timeline

		let heading3Tl = gsap.timeline({ 
      scrollTrigger: {
    trigger: box,
    start: "top 95%",
    end: "center top",
    // markers: true,
    toggleActions: "play none none reverse"
        }})
        // heading3Tl.fromTo(heading3, { y: 100 }, { y: 0, duration: 1.5, ease: "back.out"}, "-=0.25");
        heading3Tl.fromTo(heading3, { opacity: 0 }, { opacity: 1, duration: 5, ease: "back.out"}, "-=1.5");
        

            // heading6 Timeline

		let heading6Tl = gsap.timeline({ 
      scrollTrigger: {
    trigger: box,
    start: "top 95%",
    end: "center top",
    // markers: true,
    toggleActions: "play none none reverse"
        }})
        // heading6Tl.fromTo(heading6, { y: 20 }, { y: 0, duration: 1.75, ease: "back.out"}, "-=1.5");
        heading6Tl.fromTo(heading6, { opacity: 0 }, { opacity: 1, duration: 5, ease: "back.out"}, "-=1.5");
		// body Timeline

// 		let bodyTl = gsap.timeline({ 
// 	scrollTrigger: {
// trigger: box,
// start: "top 95%",
// end: "center 50%",
// // markers: true,
// toggleActions: "play none none reverse"
// // toggleClass: {targets: texth1, className: "is-stuck"},
// 		}})
// 		bodyTl.fromTo(body, { y: 200 }, { y: 0, duration: 3, ease: "back.out"});


    // color circle Timeline

    let colorCircleTl = gsap.timeline({ 
      scrollTrigger: {
    trigger: box,
    start: "top 95%",
    end: "center 50%",
    // markers: true,
    toggleActions: "play none none reverse"
    // toggleClass: {targets: texth1, className: "is-stuck"}
        }})
        // colorCircleTl.fromTo(colorCircle, { opacity: 0 }, { opacity: 1, duration: 1.75, ease: "back.out"}, "+=0.5");
        colorCircleTl.fromTo(colorCircle, { y: 50 }, { y: 0, duration: 3, ease: "back.out"});
});


let pinnedBoxes = gsap.utils.toArray('.pinned');
pinnedBoxes.forEach(pinnedBox => {
	ScrollTrigger.create({
		trigger: pinnedBox,
		start: "bottom bottom",
    // markers: true,
		pin: true,
		anticipatePin: 1,
		pinSpacing: false
	});
});

let imagePins = gsap.utils.toArray('.imagePin');
imagePins.forEach(imagePin => {
	ScrollTrigger.create({
		trigger: imagePin,
		start: 'bottom top',
    // toggleActions: "play none none reverse",
    pin: true,
    // markers: true,
		anticipatePin: 1,
		pinSpacing: false
		// toggleClass: {targets: intro, className: "low-opacity"}
	});
});

let fades = gsap.utils.toArray('.fade');
fades.forEach((fade, index) => {

const fadeTl = gsap.timeline( { 
   
  scrollTrigger: {
    trigger: fade,
    start: "center 85%",
    end: "bottom 40%",
    scrub: true,
    // markers: {startColor: "orange", endColor: "orange", fontSize: "18px", fontWeight: "bold", indent: 20},
    toggleActions: "play reverse play reverse",
    toggleClass: {targets: fade, className:"grayscale-off"}
  }
  
});

fadeTl
// // .fromTo(fade, { scale: 1.25, duration: 10 }, { scale: 0.85, duration: 10 })
// .to(fade, { opacity: 1, duration: 10 })
//   .to(fade, { opacity: 0, duration: 10 });
  // .to(fade, { opacity: 0, duration: 3 },
  //     0.5);
});






let controller;
let slideScene;
let pageScene;
let detailScene;

function animateSlides() {
  //Init Controller
  controller = new ScrollMagic.Controller();
  //Select some things
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //Loop over each sllide
  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".hero-desc");
    const title = slide.querySelector(".hero-desc");
   

    //New ANimation
    const pageTl = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageTl.fromTo(nextSlide, { y: "0%" }, { y: "100%" });
    pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTl.fromTo(nextSlide, { y: "100%" }, { y: "0%" }, "-=0.5");
    //Create new scene
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      // .addIndicators({
      //   colorStart: "white",
      //   colorTrigger: "white",
      //   name: "page",
      //   indent: 200
      // })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(controller);
  });
}
const mouse = document.querySelector(".cursor");
const mouseTxt = mouse.querySelector("span");
const burger = document.querySelector(".burger");
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
// function activeCursor(e) {
//   const item = e.target;
//   if (item.id === "logo" || item.classList.contains("burger")) {
//     mouse.classList.add("nav-active");
//   } else {
//     mouse.classList.remove("nav-active");
//   }
//   if (item.classList.contains("explore")) {
//     mouse.classList.add("explore-active");
//     gsap.to(".title-swipe", 1, { y: "0%" });
//     mouseTxt.innerText = "Tap";
//   } else {
//     mouse.classList.remove("explore-active");
//     mouseTxt.innerText = "";
//     gsap.to(".title-swipe", 1, { y: "100%" });
//   }
// }
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to("#logo", 1, { color: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}

//Barba Page Transitions
const logo = document.querySelector("#logo");
barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        animateSlides();
        logo.href = "./index.html";
      },
      beforeLeave() {
        slideScene.destroy();
        pageScene.destroy();
        controller.destroy();
      }
    },
    {
      namespace: "project",
      beforeEnter() {
        logo.href = "../index.html";
        detailAnimation();
      },
      beforeLeave() {
        controller.destroy();
        detailScene.destroy();
      }
    }
  ],
  transitions: [
    {
      leave({ current, next }) {
        let done = this.async();
        //An Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
        tl.fromTo(
          ".swipe",
          0.75,
          { x: "-100%" },
          { x: "0%", onComplete: done },
          "-=0.5"
        );
      },
      enter({ current, next }) {
        let done = this.async();
        //Scroll to the top
        window.scrollTo(0, 0);
        //An Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(
          ".swipe",
          1,
          { x: "0%" },

          { x: "100%", stagger: 0.2, onComplete: done }
        );
        tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
        tl.fromTo(
          ".nav-header",
          1,
          { y: "-100%" },
          { y: "0%", ease: "power2.inOut" },
          "-=1.5"
        );
      }
    }
  ]
});

//EventListeners
burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
