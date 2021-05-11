console.log("loaded animate.js");

let animation = anime({
    targets: "img",

    // Properties 
    translateX: 1000,
    borderRadius: 50,

    // Property Parameters
    duration: 2000,
    easing: "linear",

    // Animation Parameters
    direction: "reverse"
  });

console.log("finished animate.js");