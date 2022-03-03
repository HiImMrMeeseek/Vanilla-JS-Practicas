const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    // get random number entre 0 y 3;

    const redNumber = random();
    const greenNumber = random();
    const blueNumber = random();
    document.body.style.backgroundColor = `rgba(${redNumber}, ${greenNumber}, ${blueNumber})`;
    color.textContent = `rgba(${redNumber}, ${greenNumber}, ${blueNumber})`;
});

const random = () => {
    return Math.floor(Math.random() * 256);
}