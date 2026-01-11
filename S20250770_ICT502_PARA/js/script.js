function calculateCost() {
let d = document.getElementById('destination').value;
let t = document.getElementById('travellers').value;
let days = document.getElementById('days').value;
let s = document.getElementById('style').value;
let total = d * t * days * s;
document.getElementById('result').innerText = 'Estimated cost: $' + total;
}
window.addEventListener('scroll', () => {
document.querySelectorAll('.fade-in').forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight) {
el.classList.add('visible');
}
});
});