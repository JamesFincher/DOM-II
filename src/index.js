import "./less/index.less";

// Your code goes here!

window.onload = function (e) {
	console.log(`event ${e.type} executed! Fun Bus Page loaded successfully!`);
	const heading = document.querySelector("h1");
	heading.style.backgroundColor = "yellow";
};
window.addEventListener("copy", () => {
	navigator.clipboard.readText().then((text) => {
		heading.textContent += text;
	});
});

document.body.addEventListener("click", (evt) => {
	evt.target.classList.toggle("mirror");
});
