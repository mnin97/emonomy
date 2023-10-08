const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

circleEl = `<div class="circle"> 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.6171989440917969 0.02339935302734375 90 90" fill="none" preserveAspectRatio="xMidYMid meet" role="img"> <circle cx="45.6172" cy="45.0234" r="45" fill="white"></circle> <path d="M31.6317 48.3043L24.1668 48.3045L27.8537 40.5675L31.6317 48.3043ZM36.135 57.5523L45.5341 57.5521L33.7772 35.067L22.2323 35.0672L11.111 57.5527L19.815 57.5526L21.5376 53.9259L34.382 53.9256L36.135 57.5523ZM46.5139 57.5521L62.5015 57.5517C75.8899 57.5515 78.7005 51.7185 78.7004 46.611L78.7004 45.7043C78.7003 40.4154 75.4362 35.0662 62.4708 35.0664L46.5135 35.0667L46.5139 57.5521ZM55.0967 40.9599L61.4736 40.9598C68.9687 40.9596 69.7848 44.1934 69.7848 46.1578L69.7848 46.3392C69.7849 48.3036 68.9689 51.5978 61.4738 51.598L55.0969 51.5981L55.0967 40.9599Z" fill="#030D1D"></path> </svg> 
</div>`;

let circleHtml = ``;
for (let i = 0; i < 30; i++) {
  circleHtml += circleEl;
}
$(".circle-wrapper1").html(circleHtml);
$(".circle-wrapper2").html(circleHtml);

let circleHtml2 = ``;
for (let i = 0; i < 3; i++) {
  circleHtml2 += circleEl;
}
$(".circle-wrapper3").html(circleHtml2);

gsap.set(".sc-intro .scene1 .circle", {
  left: "random(-50%,150)%",
  top: "random(-30,-300)%",
  rotate: 50,
});

const introTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro .sticky-wrapper",
    start: "0% 0%", //트기거기준시작지점 //윈도우기준
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
});
introTl
  .addLabel("a")
  .to(".sc-intro .noise", { opacity: 0 }, "a")
  .to(".sc-intro .sticky .arrow", { opacity: 0 }, "a")
  .to(".sc-intro .text1", { opacity: 1, scale: 1 }, "a+=0.1")
  .to(".header", { opacity: 1 }, "a+=0.1")
  .to(".sc-intro .text1", { opacity: 0 })
  .to(".sc-intro .text2", { opacity: 1 })
  .to(".sc-intro .text2", { opacity: 0 })
  .from(".sc-intro .scene1", { opacity: 0, yPercent: 5 })
  .to(".sc-intro .scene1 .text-style1", { yPercent: -10 })
  .to(".sc-intro .scene1 .text3", { opacity: 0 })

  .addLabel("b")
  .to(".sc-intro .scene1 .text4", { opacity: 1 }, "b")
  .to(
    ".sc-intro .scene1 .circle-wrapper1 .circle",
    1,
    { left: "random(40,50)%", top: "random(70,150)%", rotate: "random(0,360)" },
    "b"
  )
  .to(".sc-intro .scene1 .img-wrap .human2", { opacity: 1 })
  .to(".sc-intro .scene1 .text4", { opacity: 0 })
  .to(".sc-intro .scene1 .text5", { opacity: 1 })
  .to(".sc-intro .scene1 .circle-wrapper2 .circle", 1, {
    left: "random(40,50)%",
    top: "random(70,150)%",
    rotate: "random(0,360)",
  })
  .to(".sc-intro .scene1 .text5", { opacity: 0 })
  .to(".sc-intro .scene1 .text6", { opacity: 1 })
  .addLabel("c")
  .to(
    ".sc-intro .scene1 .circle-wrapper3 .circle",
    1,
    { left: "random(40,50)%", top: "random(70,100)%", rotate: "random(0,360)" },
    "c"
  )
  .to(".sc-intro .scene1 .img-wrap .human3", { opacity: 1 }, "c");

const fireTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-media .sticky-wrapper",
    // markers: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true, // Enables smooth scrolling animation
  },
});

fireTl
  .from(".sc-media li:nth-child(1)", { yPercent: 10 })
  .from(".sc-media li:nth-child(2)", { yPercent: 20 })
  .from(".sc-media li:nth-child(3)", { yPercent: 30 })
  .from(".sc-media li:nth-child(4)", { yPercent: 40 })
  .from(".sc-media li:nth-child(5)", { yPercent: 50 })
  .from(".sc-media li:nth-child(6)", { yPercent: 60 })
  .from(".sc-media li:nth-child(7)", { yPercent: 70 })
  .from(".sc-media li:nth-child(8)", { yPercent: 80 })
  .from(".sc-media li:nth-child(9)", { yPercent: 90 })
  .from(".sc-media li:nth-child(10)", { yPercent: 100 })
  .to(".sc-media li svg", { opacity: 1 });

// gsap.to;

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-media .sticky-wrapper",
    // markers: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true, // Enables smooth scrolling animation
  },
});

const welcomeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-welcome .sticky-wrapper",
    start: "0% 0%", //트기거기준시작지점 //윈도우기준
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
});

welcomeTl.to(".sc-welcome .text-area h2", {
  scrollTrigger: {
    trigger: ".sc-welcome .sticky-wrapper",
    // markers: true,
    start: "top top",
    end: "bottom bottom", // 변경된 end 값
    scrub: true,
  },
  scale: 30,
  xPercent: 200,
});

const BoostTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-welcome .sc-boost",
    // markers: true,
    start: "top center",
    end: "center center",
    scrub: true,
  },
});

const meetTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-meet",
    start: "0% 100%",
    end: "100% 100%",

    scrub: true,
  },
});

meetTimeline.to(".sc-meet .brand-list", { xPercent: "-=30" });

$(".header .gruop-box .gruop-nav .report .menu").click(function () {
  $(".dimmed").addClass("on");
  $(".alert-box").addClass("on");
});
$(".circle").click(function () {
  $(".dimmed").removeClass("on");
  $(".alert-box").removeClass("on");
});
