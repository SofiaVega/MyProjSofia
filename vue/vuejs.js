var app = new Vue({ 
    el: '#bucle',
    data: {
        bucl: [
            {message:"libro 1"},
            {message: "libro 2"},
            {message: "libro 3"}
        ]
    }
});

var libro = new Vue({
    el: '#libro',
    data:{
        titulo: 'Asesinato en el orient express',
        genero: 'Misterio',
        imag:'https://images-na.ssl-images-amazon.com/images/I/51rBuKf4IcL._SX326_BO1,204,203,200_.jpg'
    },

});