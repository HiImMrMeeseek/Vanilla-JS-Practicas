const perfiles = [
    {
        id: 1,
        name: 'Mona Lisa',
        job: 'Modelo',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=iohCz0oN',
        text: 'Soy una modelo muy reconocida por mis trabajos entre los años 1503 y 1519 en donde fui la modelo de una obra de arte que hoy en dia es muy valorada, hecha por mi amigo Leonardo.'
    },
    {
        id: 2,
        name: 'Darth Vader',
        job: 'Tirano / Asesino / Comandante de la Flota Imperial',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/08/fotos-perfil-whatsapp_21.jpg?itok=QGbUfv3N',
        text: 'Soy Anakin Skywalker, mas conocido por mi nombre artistico Darth Vader. Soy una persona que pertenece a la pura raza y creo en el exterminio de quienes se me opongan. soy el Señor de los Sith, supremo Comandante de la Flota Imperial y lider de la legion 501.'
    },
    {
        id: 3,
        name: 'Firulais Cuzquin',
        job: 'Dormir / Comer',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/08/fotos-perfil-whatsapp_19.jpg?itok=KPvyH_K2',
        text: 'Soy Firulais Cuzquin, pero la gente me llama "cuzco" o "firulais" me dedico a dormir y comer todo el dia. Cuando no estoy ocupado haciendo eso, me dedico a pedir caricias o jugar con mi amigo "mulato".'
    },
    {
        id: 4,
        name: 'Ratin Ratatouille',
        job: 'Cheff',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/08/fotos-perfil-whatsapp_18.jpg?itok=ue4vkjn7',
        text: 'Sor Ratin, la gente me llama "Cheffsito", soy un cheff de cocina gourmet sin pulgares, por esto mismo me acompaño de mi compañero humano al que controlo con tirones de pelo para que use sus manos con pulgares por mi en la cocina.'
    },
    {
        id: 5,
        name: 'Monkie Monitus',
        job: 'Agricultor',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/08/fotos-perfil-whatsapp_23.jpg?itok=N05PdWlN',
        text: 'Soy Monki, me dedico a cultivar todo tipo de frutas (Aunque no es muy rentable porque me las como casi todas), en mis tiempos libres me gusta saltar de arbol en arbol, gritando a todo pulmon.'
    },
    {
        id: 6,
        name: 'Michifus Pelitus',
        job: 'Dormir / Comer',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/08/fotos-perfil-whatsapp.jpg?itok=7yo32Aec',
        text: 'Soy Michifus, Duermo casi todo el dia, solo me levanto a comer, cagar y orinar. de a ratos golpeo una pelota de jugete que me regalaron mis humanos, pido caricias y si alguien me molesta lo rasguño y muerdo por atrevidos. (nadie se mete conmigo)'
    },
    {
        id: 7,
        name: 'Son Goku',
        job: 'Protector de la tierra y la humanidad',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/08/fotos-perfil-whatsapp_15.jpg?itok=ySpiD1bd',
        text: 'Soy Son Goku, pero la gente me llama Goku. Soy un extraterrestre que fui criado en la tierra, donde aprendi conceptos sobre moralidad y amor por la humanidad. por eso ahora me dedico a proteger el planeta que me acogio y los seres vivos que en él viven.'
    },
];

// seleccion items
const img = document.getElementById('person-img');
const autor = document.getElementById('autor');
const job = document.getElementById('trabajo');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const sigBtn = document.querySelector('.sig-btn');
const randomBtn = document.querySelector('.random-btn');

// primer item
let currentItem = 0;

// cargar item inicial
window.addEventListener('DOMContentLoaded', (e) => {
    mostrarP(currentItem);
});

// mostrar la persona segun el item

const mostrarP = () => {
    const item = perfiles[currentItem];
    img.src = item.img;
    autor.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// funcionalidad del btn siguiente

sigBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > perfiles.length - 1){
        currentItem = 0;
    }
    mostrarP(currentItem);
});

// funcionalidad del btn anterior

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = perfiles.length - 1;
    }
    mostrarP(currentItem);
});

randomBtn.addEventListener('click', () => {
    currentItem = random();
    mostrarP(currentItem);
});

const random = () => {
    return Math.floor(Math.random() * perfiles.length);
};