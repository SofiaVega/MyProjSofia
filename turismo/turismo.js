var app = new Vue({ 
    el: '#loop',
    data: {
        bucl: [
            {title:"Guanajuato", 
            text: "Leon, Guanajuato es un punto en el que cultura, tradiciones, economia e industria se mezclan para ofrecer un abundante abanico de posibilidades.",
            image: "http://cdn.cnn.com/cnnnext/dam/assets/180705110204-01-things-to-do-guanajuato---aerial.jpg"},
            {title: "La paz", 
            text: "Si estas planeando unas vacaciones en las que el sol sea tu compañero y la naturaleza el escenario de todos esos nuevos recuerdos seguro estas pensando en visitar La Paz, el sitio perfecto para los amantes de la naturaleza, principalmente, de escenarios acuaticos.",
            image: "https://res.cloudinary.com/simpleview/image/upload/v1587763833/clients/loscabosmx/Balandra_e6ddc651-799b-4e0e-863a-74767e0253ba.jpg"},
            {title: "Cancun", 
            text: "Su belleza escenica enmarcada por playas de arena blanca y mar turquesa; hace a Cancun el destino turistico mas famoso de Mexico.",
            image: "https://cdn.getyourguide.com/img/location/5b45f52dbd137.jpeg/88.jpg"}
        ]
    }
});

var condicional = new Vue({
    el: '#condicional',
    data(){
        return {
            bandera: false,
            nombre: ""
        }
    },
    methods: {
        boton(){
            this.bandera = !this.bandera;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: { message: 'Vamonos de vacaciones!' }
});