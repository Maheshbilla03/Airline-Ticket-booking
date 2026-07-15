const plane = document.querySelector(".plane");

setInterval(() => {
plane.style.transform =
`translateY(${Math.random()*20}px)`;
},1000);