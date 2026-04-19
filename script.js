// 🔹 MENSAJE ALEATORIO
const mensajes = [
    "Pues yo sé los planes que tengo para ustedes —dice el Señor—. Son planes para lo bueno y no para lo malo, para darles un futuro y una esperanza.",

"Todo lo puedo en Aquel que me fortalece.",

"Confía en el Señor con todo tu corazón; no dependas de tu propio entendimiento.",

"Busca el reino de Dios por encima de todo lo demás y lleva una vida justa, y él te dará todo lo que necesites.",

"No se preocupen por nada; en cambio, oren por todo.",

"Sean fuertes y valientes. No tengan miedo ni se desanimen, porque el Señor su Dios está con ustedes dondequiera que vayan.",

"Pero los que confían en el Señor encontrarán nuevas fuerzas.",

"Esfuérzate y sé valiente.",

"El Señor peleará por ustedes; solo quédense tranquilos.",

"Entréguenle todas sus preocupaciones y ansiedades a Dios, porque él cuida de ustedes.",

"No imiten las conductas ni las costumbres de este mundo, más bien dejen que Dios los transforme en personas nuevas al cambiarles la manera de pensar.",

"No nos cansemos de hacer el bien.",

"Así que sean fuertes y valientes, ustedes los que ponen su esperanza en el Señor.",

"El Señor es mi pastor; tengo todo lo que necesito.",

"Guarda tu corazón por encima de todo, porque de él mana la vida.",

"Camina en integridad y anda confiado.",

"El que es fiel en lo poco también es fiel en lo mucho.",

"Dios es nuestro refugio y nuestra fuerza, siempre está dispuesto a ayudar en tiempos de dificultad.",

"El Señor es bueno, un refugio seguro cuando llegan dificultades.",

"Mi gracia es todo lo que necesitas. Mi poder actúa mejor en la debilidad.",

"Por lo tanto, manténganse firmes e inconmovibles.",

"El Señor dirigirá tus pasos.",

"El que comenzó la buena obra en ustedes la continuará hasta que quede completamente terminada.",

"No temas, porque yo estoy contigo.",

"Yo voy delante de ti.",

"El Señor es mi luz y mi salvación, ¿a quién temeré?",

"El Señor es mi fuerza y mi escudo.",

"Alégrense siempre en el Señor.",

"Estén siempre alegres. Nunca dejen de orar.",

"El amor es paciente y bondadoso.",

"Al principio, ninguna disciplina parece ser motivo de gozo, sino de tristeza. Sin embargo, después produce una cosecha de rectitud y paz para los que han sido entrenados por ella. - Hebreos 12:11",

"¿No se dan cuenta de que en una carrera todos corren, pero solo uno obtiene el premio? Así que corran para ganar. Todos los atletas se entrenan con disciplina. Lo hacen para ganar un premio que se desvanecerá, pero nosotros lo hacemos por un premio eterno. Por eso yo corro cada paso con propósito. No solo doy golpes al aire. Disciplino mi cuerpo como lo hace un atleta, lo entreno para que haga lo que debe. De lo contrario, temo que después de predicarles a otros, yo mismo quede descalificado. - 1 Corintios 9:24–27",

"Así que no nos cansemos de hacer el bien. A su debido tiempo cosecharemos numerosas bendiciones si no nos damos por vencidos. - Gálatas 6:9",

"Pues Dios no nos ha dado un espíritu de temor y timidez sino de poder, amor y autodisciplina. - 2 Timoteo 1:7",

"Los perezosos desean mucho y obtienen poco, pero los que se esfuerzan prosperan. - Proverbios 13:4",

"Para aprender, hay que amar la disciplina; es una tontería odiar la corrección. - Proverbios 12:1",

"El trabajo duro da prosperidad, la charla vacía conduce a la pobreza. - Proverbios 14:23",

"Pon todo lo que hagas en manos del Señor, y tus planes tendrán éxito. - Proverbios 16:3",

"Todo lo que te venga a la mano para hacer, hazlo con todas tus fuerzas, porque en el lugar de los muertos, adonde vas, no hay trabajo ni planes ni conocimiento ni sabiduría. - Eclesiastés 9:10",

"Trabajen de buena gana en todo lo que hagan, como si fuera para el Señor y no para la gente. - Colosenses 3:23",

"Este es mi mandato: ¡Sé fuerte y valiente! No tengas miedo ni te desanimes, porque el Señor tu Dios está contigo dondequiera que vayas. - Josué 1:9",

"Él da poder a los indefensos y fortaleza a los débiles. - Isaías 40:29",

"No tengas miedo, porque yo estoy contigo; no te desalientes, porque yo soy tu Dios. Te daré fuerzas y te ayudaré; te sostendré con mi mano derecha victoriosa. - Isaías 41:10",

"Dios me arma de fuerza y hace perfecto mi camino. - Salmos 18:32",

"Así que sean fuertes y valientes, todos ustedes que ponen su esperanza en el Señor. - Salmos 31:24",

"Dios es nuestro refugio y nuestra fuerza, siempre está dispuesto a ayudar en tiempos de dificultad. - Salmos 46:1",

"Mi salud podrá fallar y mi espíritu podrá debilitarse, pero Dios sigue siendo la fuerza de mi corazón; él es mío para siempre. - Salmos 73:26",

"Dios es mi roca firme; él me fortalece y hace perfecto mi camino. - 2 Samuel 22:33",

"Confía en el Señor con todo tu corazón; no dependas de tu propio entendimiento. Busca su voluntad en todo lo que hagas, y él te mostrará cuál camino tomar. - Proverbios 3:5–6",

"Entrega al Señor todo lo que haces; confía en él, y él te ayudará. - Salmos 37:5",

"Pero cuando tenga miedo, en ti pondré mi confianza. - Salmos 56:3",

"Tú guardarás en perfecta paz a todos los que confían en ti, a todos los que concentran en ti sus pensamientos. - Isaías 26:3",

"Pero benditos son los que confían en el Señor y han hecho que el Señor sea su esperanza y confianza. - Jeremías 17:7",

"Y sabemos que Dios hace que todas las cosas cooperen para el bien de quienes lo aman y son llamados según el propósito que él tiene para ellos. - Romanos 8:28",

"La fe demuestra la realidad de lo que esperamos; es la evidencia de las cosas que no podemos ver. - Hebreos 11:1",

"Busquen el reino de Dios por encima de todo lo demás y lleven una vida justa, y él les dará todo lo que necesiten. - Mateo 6:33",

"¡No! Oh pueblo, el Señor te ha dicho lo que es bueno, y lo que él exige de ti: que hagas lo que es correcto, que ames la misericordia y que camines humildemente con tu Dios. - Miqueas 6:8",

"Recuerden, es pecado saber lo que se debe hacer y luego no hacerlo. - Santiago 4:17",

"No dejen que el mal los venza, más bien venzan el mal haciendo el bien. - Romanos 12:21",

"Apártense del mal y hagan el bien; busquen la paz y esfuércense por mantenerla. - 1 Pedro 3:11",

"Al Señor le agrada más cuando hacemos lo que es correcto y justo que cuando le ofrecemos sacrificios. - Proverbios 21:3",

"Pues somos la obra maestra de Dios. Él nos creó de nuevo en Cristo Jesús, a fin de que hagamos las cosas buenas que preparó para nosotros tiempo atrás. - Efesios 2:10",

"Insiste en estas enseñanzas para que todos los que confían en Dios se dediquen a hacer el bien. Estas enseñanzas son buenas y de provecho para todos. - Tito 3:8",

"Si necesitan sabiduría, pídansela a nuestro generoso Dios, y él se la dará; no los reprenderá por pedirla. - Santiago 1:5",

"Pues el Señor concede sabiduría; de su boca provienen el saber y el entendimiento. - Proverbios 2:6",

"¡Adquirir sabiduría es lo más sabio que puedes hacer! Y cualquier otra cosa que desees, deséala con inteligencia. - Proverbios 4:7",

"Tu palabra es una lámpara que guía mis pies y una luz para mi camino. - Salmos 119:105",

"Tus oídos lo oirán. Detrás de ti, una voz dirá: «Este es el camino que debes seguir», ya sea a la derecha o a la izquierda. - Isaías 30:21",

"Cuando venga el Espíritu de verdad, él los guiará a toda la verdad. No hablará por su propia cuenta, sino que les dirá lo que ha oído y les contará lo que sucederá en el futuro. - Juan 16:13",

"Aquí en el mundo tendrán muchas pruebas y tristezas; pero anímense, porque yo he vencido al mundo. - Juan 16:33",

"Entonces experimentarán la paz de Dios, que supera todo lo que podemos entender. La paz de Dios cuidará su corazón y su mente mientras vivan en Cristo Jesús. - Filipenses 4:7",

"Cuando mi mente se llenó de dudas, tu consuelo renovó mi esperanza y alegría. - Salmos 94:19",

"Ahora, que el Señor de paz mismo les dé su paz en todo momento y en toda situación. El Señor esté con ustedes. - 2 Tesalonicenses 3:16",

"Luego dijo Jesús: «Vengan a mí todos los que están cansados y llevan cargas pesadas, y yo les daré descanso. - Mateo 11:28",

"El que vive con integridad anda seguro, pero el que toma caminos torcidos será descubierto. - Proverbios 10:9",

"Los que llevan una vida intachable y hacen lo correcto, los que dicen la verdad con corazón sincero. - Salmos 15:2",

"La honestidad guía a la gente buena; la deshonestidad destruye a los traicioneros. - Proverbios 11:3",

"Que la integridad y la honestidad me protejan, porque en ti pongo mi esperanza. - Salmos 25:21",

"Si eres fiel en las cosas pequeñas, también lo serás en las grandes; pero si eres deshonesto en las cosas pequeñas, tampoco actuarás con honradez en las responsabilidades más grandes. - Lucas 16:10",

"Espera con paciencia al Señor; sé valiente y esforzado; sí, espera al Señor con paciencia. - Salmos 27:14",

"He guardado tu palabra en mi corazón, para no pecar contra ti. - Salmos 119:11",

"El Señor dirige los pasos de los justos; se deleita en cada detalle de su vida. - Salmos 37:23",

"Puedes hacer todos los planes que quieras, pero el propósito del Señor prevalecerá. - Proverbios 19:21",

"Es lo mismo con mi palabra. Yo la envío, y siempre produce fruto. Logrará todo lo que yo quiero, y prosperará en todos los lugares donde yo la envíe. - Isaías 55:11",

"Sigan pidiendo, y recibirán lo que piden; sigan buscando, y encontrarán; sigan llamando, y la puerta se les abrirá. - Mateo 7:7",

"Pues nada es imposible para Dios. - Lucas 1:37",

"Yo soy la vid; ustedes son las ramas. Los que permanecen en mí y yo en ellos producirán mucho fruto porque, separados de mí, no pueden hacer nada. - Juan 15:5",

"Pero recibirán poder cuando el Espíritu Santo descienda sobre ustedes; y serán mis testigos, y le hablarán a la gente acerca de mí en todas partes: en Jerusalén, por toda Judea, en Samaria y hasta los lugares más lejanos de la tierra. - Hechos 1:8",

"También nos alegramos al enfrentar pruebas y dificultades porque sabemos que nos ayudan a desarrollar resistencia. Y la resistencia desarrolla firmeza de carácter, y el carácter fortalece nuestra esperanza segura de salvación. Y esa esperanza no acabará en desilusión. Pues sabemos con cuánta ternura nos ama Dios, porque nos ha dado el Espíritu Santo para llenar nuestro corazón con su amor. - Romanos 5:3–5",

"Es por eso que nunca nos damos por vencidos. Aunque nuestro cuerpo está muriendo, nuestro espíritu va renovándose cada día. Pues nuestras dificultades actuales son pequeñas y no durarán mucho tiempo. Sin embargo, ¡nos producen una gloria que durará para siempre y que es de mucho más peso que las dificultades! Así que no miramos las dificultades que ahora vemos; en cambio, fijamos la vista en cosas que no pueden verse. Pues las cosas que ahora podemos ver pronto se habrán ido, pero las cosas que no podemos ver permanecerán para siempre. - 2 Corintios 4:16–18",

"Una palabra final: sean fuertes en el Señor y en su gran poder. - Efesios 6:10",

"Y estoy seguro de que Dios, quien comenzó la buena obra en ustedes, la continuará hasta que quede completamente terminada el día que Cristo Jesús vuelva. - Filipenses 1:6",

"Piensen en las cosas del cielo, no en las de la tierra. - Colosenses 3:2",

"Dios hará que esto suceda, porque aquel que los llama es fiel. - 1 Tesalonicenses 5:24",

"He peleado la buena batalla, he terminado la carrera y he permanecido fiel. - 2 Timoteo 4:7",

"Mantengámonos firmes sin titubear en la esperanza que afirmamos, porque se puede confiar en que Dios cumplirá su promesa. - Hebreos 10:23",

"Dios bendice a los que soportan con paciencia las pruebas y las tentaciones. Después de superarlas, recibirán la corona de vida que Dios ha prometido a quienes lo aman. - Santiago 1:12",

"En su bondad, Dios los llamó a que participen de su gloria eterna por medio de Cristo Jesús. Entonces, después de que hayan sufrido un poco de tiempo, él los restaurará, los sostendrá, los fortalecerá y los afirmará sobre un fundamento sólido. - 1 Pedro 5:10",

"Pues todo hijo de Dios vence a este mundo de maldad, y logramos esa victoria por medio de nuestra fe. - 1 Juan 5:4",

];

// 🔹 FECHA ACTUAL (solo día)
const hoy = new Date().toDateString();

// 🔹 DATOS GUARDADOS
const mensajeGuardado = localStorage.getItem("mensajeDelDia");
const fechaGuardada = localStorage.getItem("fechaMensaje");

// 🔹 LÓGICA
let mensajeFinal;

if (fechaGuardada === hoy && mensajeGuardado) {
    // usar el mismo mensaje del día
    mensajeFinal = mensajeGuardado;
} else {
    // generar nuevo mensaje
    mensajeFinal = mensajes[Math.floor(Math.random() * mensajes.length)];

    // guardar en localStorage
    localStorage.setItem("mensajeDelDia", mensajeFinal);
    localStorage.setItem("fechaMensaje", hoy);
}

// 🔹 MOSTRAR MENSAJE
document.getElementById("mensajeFijo").textContent = mensajeFinal;

// 🔹 EFECTO SCROLL
const mensajeScroll = document.querySelector(".mensaje-scroll");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    mensajeScroll.style.opacity = Math.max(1 - scrollY / 100, 0);
})

// 🔹 TUS DATOS (los cambias cuando quieras)
const datos = {
    titulo: "Ora por mi 🙏",
    mensaje: "Tener calridad para mis metas",
    ocupacion: "A tareado",
    feeling: "Okay"
};

// 🔹 COLORES OCUPACIÓN
const coloresOcupacion = {
    "Libre": "🟢",
    "Medio Libre": "🟡",
    "A tareado": "🟠",
    "Ocupado": "🔴",
    "Full Ocupado": "🔴"
};

// 🔹 EMOJIS FEELING
const emojisFeeling = {
    "Bien": "😀",
    "Okay": "☺️",
    "Medio": "🙂",
    "Contento": "😄",
    "Estresado": "😣",
    "Pensativo": "🤔",
    "Indiferente": "🫥",
    "Funny": "😂",
    "Molesto": "🙄🤌",
    "Triste": "😢",
    "Cansado": "🫩",
    "Enfermo": "😵‍💫",
};

// 🔹 MOSTRAR EN PANTALLA
document.getElementById("tituloDisplay").textContent = datos.titulo;
document.getElementById("mensajeDisplay").textContent = datos.mensaje;

document.getElementById("ocupacionDisplay").textContent =
    `${coloresOcupacion[datos.ocupacion]} Ocupación: ${datos.ocupacion}`;

document.getElementById("feelingDisplay").textContent =
    `${emojisFeeling[datos.feeling]} Feeling: ${datos.feeling}`;

// 🔹 TAREAS INTERNAS
const tareas = {
    "Lunes": [
        { titulo: "Business Intelgence", descripcion: "Estudio y dominio fuerete de KPI's para mostrar en entrevista debido a que los trabajos son enfocados a negociosr retail. Revenue growth, Churn rates,Conversion metrics,Customer lifetime value,Operationa efficiency." },
        { titulo: "Proeficiencia en SQL", descripcion: "Estudio profundo del programa SQL para mostrar requerimiento de entrevistas 'dominio de herramienta/SQL Avanzado' en entrevistas y practicar SQL avanzado" }
    ],
    "Martes": [
        { titulo: "Macros Excel", descripcion: "Practica de EXCEL avanzado: Pivot Query, Pivot Tables, Dynamic Dashboards " },
        {titulo: "Repaso SQL", descripcion: "Repaso de domingo y lunes"},
        {titulo: "Busqueda de Datasets", descripcion: "Planificación profunda y planteamiento de Proyectos a mostrar en perfiles de trabajo y GITHUB"},
        {titulo: "Curso Corto GITHUB", descripcion: "Familiriazación de plataforma"}
    ],
    "Miércoles": [{ titulo: "CRUSO POWER BI", descripcion: "Curso gratis MS Power BI" },
        {titulo: "Repaso SQL", descripcion: "Repaso de domingo y lunes"},
        {titulo: "Busqueda de Datasets", descripcion: "Planificación profunda y planteamiento de Proyectos a mostrar en perfiles de trabajo y GITHUB"},
        {titulo: "Repaso profundo Python", descripcion: "Repaso profundo de librerias, Examenes Estadísticos y planteamiento de proyecto en PY"}],
    "Jueves": [
        { titulo: "Revisión", descripcion: "Analizar progreso semanal" },
        { titulo: "CRUSO POWER BI", descripcion: "Curso gratis MS Power BI: Enfocar en: Revenue growth, Churn rates, Conversion metrics, Customer lifetime value, Operationa efficiency." },
        { titulo: "Establecer Proyectos", descripcion: "Tener lista dirección, info, y desarrollo de proyectos para portafolio a mostrar basado en unión de herramientas principales 'proyecto 1: Excel Avanzado con MACROS,SQL herramienta de Visulización Tableu. proyecto 2: SQL,Python, herramienta de visualización Power BI " }
    ],
    "Viernes": [
        { titulo: "NO INFO YET", descripcion: "Para pensar: Un momento amargo de 10 minutos puede contaminar los 1330 minutos que te restan de día? Ahora, ¿puede eso sobrepasar el entendimiento de saber que eres salvo hoy?" }
    ],
    "Sábado": [{ titulo: "NO INFO YET", descripcion: "Para pensar: ¿Qué puedo hacer hoy que necesite mañana?"}],
    "Domingo": [
        { titulo: "Conexión Profunda con Dios", descripcion: "Orar un buen rato a solas y sin distracciones" },
        { titulo: "Repaso profundo de SQL", descripcion: "Repasar y guardar de manera concreta y profunda resoluciones y consultas que toman en cuenta en entrevistas: CTEs, Windows Functions, Subquerys, Sotred Procedures"},
        {titulo: "Estudio Estadistico", descripcion: " Repaso profundo de estadistica y como emplearlos y ejecutarlos en proyectos reales para demostrar 'Perfil Analítico' que requieren trabajos"}
    ]
};

// 🔹 ELEMENTOS
const botones = document.querySelectorAll(".dia");
const container = document.getElementById("tareasContainer");

// 🔹 DETECTAR DÍA ACTUAL
const diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const diaActual  = diasSemana[new Date().getDay()];

// marcar botón actual
botones.forEach(btn => {
    if (btn.dataset.dia === diaActual ) {
        btn.classList.add("activo");
        mostrarTareas(diaActual );
    }
});

// 🔹 CHECKLIST STORAGE
function obtenerEstado() {
    return JSON.parse(localStorage.getItem("estadoTareas")) || {};
}

function guardarEstado(estado) {
    localStorage.setItem("estadoTareas", JSON.stringify(estado));
}

// 🔹 CLICK EN DÍA
botones.forEach(btn => {
    btn.addEventListener("click", () => {
        botones.forEach(b => b.classList.remove("activo"));
        btn.classList.add("activo");

        const dia = btn.dataset.dia;
        mostrarTareas(dia);
    });
});

// 🔹 MOSTRAR TAREAS
function mostrarTareas(dia) {
    container.classList.remove("visible");

    setTimeout(() => {
        container.innerHTML = "";

        const lista = tareas[dia];
        const estado = obtenerEstado();

        if (!lista || lista.length === 0) {
            container.innerHTML = "<p class='placeholder'>Sin tareas</p>";
        } else {
            lista.forEach((t, index) => {
                const key = `${dia}-${index}`;
                const completada = estado[key];

                const div = document.createElement("div");
                div.classList.add("tarea");
                if (completada) div.classList.add("completada");

                div.innerHTML = `
                    <div class="tarea-header">
                        <input type="checkbox" ${completada ? "checked" : ""} data-key="${key}">
                        <h4>${t.titulo}</h4>
                    </div>
                    <p>${t.descripcion}</p>
                `;

                container.appendChild(div);
            });

            // listeners check
            document.querySelectorAll(".tarea input").forEach(check => {
                check.addEventListener("change", (e) => {
                    const estado = obtenerEstado();
                    estado[e.target.dataset.key] = e.target.checked;
                    guardarEstado(estado);

                    e.target.closest(".tarea").classList.toggle("completada");
                });
            });
        }

        container.classList.add("visible");
    }, 120);
}
// 🔹 HEADER QUE SE ENCOGE
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("small");
    } else {
        header.classList.remove("small");
    }
});

// 🔹 PROYECTOS INTERNOS
const proyectos = [
    {
        titulo: "Perfil Actualizado y vivo en LinkedIn",
        descripcion: "Actualización de CV, Actualización de Proyectos mostrando conceptos avanzados de Analisis y BI intelligence, Creación de contenido para la plataforma para tener exposure",
        progreso: 10
    },
    {
        titulo: "Conceptos Avanzados de Estadística",
        descripcion: "Apliación y método de testeo en datos y cuando utilizarlos",
        progreso: 20
    },
    {
        titulo: "SQL Avanzado",
        descripcion: "Optimización de queries y análisis",
        progreso: 10
    },
    {
        titulo: "Gran Proyecto de BI intelligence por medio de experiencia propia",
        descripcion : "Comenzar un side hustle y documentarlo mostrando como se uso DA para poder obtener buenos resultados",
        progreso: 0
    },
    {
        titulo: "Proyectos Job Landing",
        descripcion : "Serie de 3 proyectos que llaman a entrevistas demostrando ser un candidato apto para empleo: Poryecto 1: KPIS, Proyecto 2:The ROOT-CAUSE Analysis Project, Proyecto 3: Proyecto Recomendación Estilo Consultoria.",
        progreso: 0
    }
];

// 🔹 ELEMENTOS
const lista = document.getElementById("listaProyectos");
const detalle = document.getElementById("detalleProyecto");

// 🔹 CREAR BOTONES
proyectos.forEach((p, index) => {
    const btn = document.createElement("button");
    btn.classList.add("proyecto-btn");
    btn.textContent = p.titulo;

    btn.addEventListener("click", () => {
        document.querySelectorAll(".proyecto-btn").forEach(b => b.classList.remove("activo"));
        btn.classList.add("activo");

        mostrarProyecto(p);
    });

    lista.appendChild(btn);
});

// 🔹 MOSTRAR DETALLE
function mostrarProyecto(proyecto) {
    detalle.classList.remove("visible");

    setTimeout(() => {
        detalle.innerHTML = `
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>

            <div class="barra">
                <div class="progreso" id="barraProgreso"></div>
            </div>

            <p id="porcentajeTexto">0%</p>
        `;

        detalle.classList.add("visible");

        animarProgreso(proyecto.progreso);

    }, 120);
}

function animarProgreso(valorFinal) {
    const barra = document.getElementById("barraProgreso");
    const texto = document.getElementById("porcentajeTexto");

    let actual = 0;

    const intervalo = setInterval(() => {
        actual++;

        barra.style.width = actual + "%";
        texto.textContent = actual + "%";

        // 🎨 color dinámico
        if (actual < 30) {
            barra.style.background = "#ef4444"; // rojo
        } else if (actual < 70) {
            barra.style.background = "#f59e0b"; // naranja
        } else {
            barra.style.background = "#22c55e"; // verde
        }

        if (actual >= valorFinal) {
            clearInterval(intervalo);
        }

    }, 10);
}

