const cursos = [
    {
        id: 1,
        title: "HTML y CSS desde cero",
        shortDescription: "Lo básico para crear páginas web con HTML y CSS.",
        longDescription: "Este curso te da una introducción clara y sencilla a HTML y CSS. Verás cómo estructurar páginas, aplicar estilos con CSS, usar flexbox y grid, y lograr que tus sitios se vean bien en diferentes pantallas.",
        image: "./img/html-css-javascriptIMG.jpg",
        duration: "10 horas",
        level: "Básico"
    },
    {
        id: 2,
        title: "JavaScript moderno",
        shortDescription: "Aprende a programar en JS con sintaxis actual.",
        longDescription: "Vas a empezar con lo esencial de JavaScript y avanzar hacia temas más modernos como funciones flecha, promesas, async/await, y cómo interactuar con el DOM. Ideal si estás empezando o quieres actualizarte.",
        image: "./img/modernJS.webp",
        duration: "15 horas",
        level: "Intermedio"
    },
    {
        id: 3,
        title: "Fundamentos de UX",
        shortDescription: "Conceptos básicos para diseñar buenas experiencias.",
        longDescription: "Verás por qué es importante pensar en el usuario al diseñar. Aprenderás sobre wireframes, prototipos, pruebas de usabilidad y cómo estructurar la información de forma clara.",
        image: "./img/ux-design-guide.png",
        duration: "8 horas",
        level: "Básico"
    },
    {
        id: 4,
        title: "React para principiantes",
        shortDescription: "Crea interfaces modernas con React paso a paso.",
        longDescription: "Este curso te enseña a usar React desde lo más básico. Verás cómo trabajar con componentes, manejar el estado, usar hooks y conectar APIs para hacer apps web dinámicas.",
        image: "./img/reactcourse.webp",
        duration: "12 horas",
        level: "Intermedio"
    },
    {
        id: 5,
        title: "Python aplicado a datos",
        shortDescription: "Empieza a trabajar con datos usando Python.",
        longDescription: "Aprenderás a usar librerías como Pandas, NumPy y Matplotlib para analizar y visualizar datos. También tocarás temas de machine learning con Scikit-learn. Ideal si te interesa la ciencia de datos.",
        image: "./img/python.jpg",
        duration: "20 horas",
        level: "Avanzado"
    },
    {
        id: 6,
        title: "Introducción al Marketing Digital",
        shortDescription: "Conoce estrategias básicas para moverte en lo digital.",
        longDescription: "Te mostraremos herramientas clave como SEO, redes sociales, email marketing y analítica. Verás cómo crear campañas simples que tengan impacto. Todo explicado de forma práctica.",
        image: "./img/marketing.jpg",
        duration: "14 horas",
        level: "Intermedio"
    }
];



function mostrarTarjetasCursos() {
    const contenedorCursos = document.getElementById('coursesGrid');

    cursos.forEach(curso => {
        const columna = document.createElement('div');
        columna.className = 'col-lg-4 col-md-6 col-sm-12';

        columna.innerHTML = `
            <div class="card course-card h-100">
                <img src="${curso.image}" class="card-img-top" alt="${curso.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${curso.title}</h5>
                    <p class="card-description mb-4">${curso.shortDescription}</p>
                    <button class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#courseModal" data-id="${curso.id}">Ver más</button>
                </div>
            </div>
        `;

        contenedorCursos.appendChild(columna);
    });
}

function prepararModal() {
    const modalCursos = document.getElementById('courseModal');

    modalCursos.addEventListener('show.bs.modal', function (evento) {
        const boton = evento.relatedTarget;
        const cursoId = boton.getAttribute('data-id');
        const curso = cursos.find(c => c.id == cursoId);

        document.getElementById('modalTitle').textContent = curso.title;
        document.getElementById('modalDescription').textContent = curso.longDescription;
        document.getElementById('modalDuration').textContent = `Duración: ${curso.duration}`;
        document.getElementById('modalLevel').textContent = `Nivel: ${curso.level}`;
    });
}



function manejarFormulario() {
    const formulario = document.querySelector('.subscription-form');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('¡Gracias por suscribirte!');
        formulario.reset();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarTarjetasCursos();
    prepararModal();
    manejarFormulario();
});
