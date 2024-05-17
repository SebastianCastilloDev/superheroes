const heroes = [
    {
        "nombre": "Superman",
        "poder": "Súper fuerza, vuelo, visión de rayos X, invulnerabilidad",
        "alias": ["El Hombre de Acero", "El Último Hijo de Krypton"],
        "universo": "DC Comics",
        "imagen": "https://th.bing.com/th/id/R.804fe60466884098ed89620fa1ceee6d?rik=JkRwghxKuMMmew&pid=ImgRaw&r=0"
    },
    {
        "nombre": "Spider-Man",
        "poder": "Agilidad sobrehumana, fuerza proporcionada de una araña, sentido arácnido",
        "alias": ["Trepamuros", "El Hombre Araña"],
        "universo": "Marvel Comics",
        "imagen": "https://th.bing.com/th/id/R.0a2d26cbca03b25410fe3350ee614263?rik=lZzhwU0MArgtvg&pid=ImgRaw&r=0"
    },
    {
        "nombre": "Wonder Woman",
        "poder": "Fuerza sobrehumana, vuelo, habilidad en combate",
        "alias": ["Princesa Diana", "La Mujer Maravilla"],
        "universo": "DC Comics",
        "imagen": "https://th.bing.com/th/id/R.a0f6689634ac06f033c4f99bad553d2c?rik=lpwF0looOJQ%2fiw&pid=ImgRaw&r=0"
    },
    {
        "nombre": "Batman",
        "poder": "Habilidades de detective, inteligencia superior, maestría en artes marciales, tecnología avanzada",
        "alias": ["El Caballero Oscuro", "El Cruzado de la Capa"],
        "universo": "DC Comics",
        "imagen": "https://images.hdqwalls.com/wallpapers/batman-animate-l2.jpg"
    },
    {
        "nombre": "Iron Man",
        "poder": "Genio inventor, tecnología de armaduras avanzadas",
        "alias": ["Tony Stark"],
        "universo": "Marvel Comics",
        "imagen": "https://th.bing.com/th/id/R.cbb90ed0829bd8170cc1f7d2742cd5f5?rik=IiNd5abM1IYE5A&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31800000%2fIron-Man-iron-man-3-31868069-1600-1200.jpg&ehk=f46CLrSD16BzkwfuLDaMT74%2fxp0jjvhbaL%2bbmihaJlY%3d&risl=&pid=ImgRaw&r=0"
    }
];

// Obtener el contenedor de las tarjetas de superhéroes
const superheroesContainer = document.getElementById('superheroes-container');

// Iterar sobre los superhéroes y crear una tarjeta para cada uno
heroes.forEach(hero => {
    // Crear elementos de tarjeta
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    // Construir contenido de la tarjeta
    card.innerHTML = `
        <img class="card-img-top" src="${hero.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${hero.nombre}</h5>
            <p class="card-text">Poder: ${hero.poder}</p>
            <p class="card-text">Alias: ${hero.alias.join(', ')}</p>
            <p class="card-text">Universo: ${hero.universo}</p>
            <a href="#" class="btn btn-primary">Ver más</a>
        </div>
    `;

    // Agregar la tarjeta al contenedor de superhéroes
    superheroesContainer.appendChild(card);
});
