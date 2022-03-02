var contador = 0;

const aumentarNum = () => {
    updateNum(++contador);
};

const aumentarNumX = () => {
    updateNum(contador = contador + 10);
};

const resetNum = () => {
    contador = 0;
    updateNum(contador);
}

const updateNum = (val) =>{
    document.getElementById('h1').innerHTML = val;
}