var app = new Vue({
    el: '#app',
    data(){
        return {
            galletas: 0,
            brownies: 0,
            panaderos: 0,
            vendedores: 0,
            dinero: 0

        }
    },
    methods: {
        hacerGalletas(){
            this.galletas++;
            this.$refs.galletas.textContent = this.galletas;
        },
        autoGalletas(){
            this.galletas+=this.galletasPorSegundo;
            this.$refs.galletas.textContent = this.galletas;
        },
        hacerBrownies(){
            this.brownies += 1;
            this.$refs.brownies.textContent = this.brownies;
        },
        autoBrownies(){
            this.brownies+=this.browniesPorSegundo;
            this.$refs.brownies.textContent = this.brownies;
        },
        autoDinero(){
            this.dinero+=this.dineroPorSegundo;
            this.$refs.dinero.textContent = this.dinero;
        },
        contratarPanaderos(){
            this.panaderos += 1;
            this.$refs.panaderos.textContent = this.panaderos;
        },
        contratarVendedores(){
            this.vendedores += 1;
            this.$refs.vendedores.textContent = this.vendedores;
        },
        venderGalletas(){
            this.dinero += 25;
            this.galletas -= 5;
            this.$refs.galletas.textContent = this.galletas;
            this.$refs.dinero.textContent = this.dinero;

        },
        venderBrownies(){
            this.dinero += 50;
            this.brownies -= 5;
            this.$refs.brownies.textContent = this.brownies;
            this.$refs.dinero.textContent = this.dinero;

        }
    },
    computed: {
        galletasPorSegundo() {
            return this.panaderos*15 - this.vendedores*5;
        },
        browniesPorSegundo() {
            return this.panaderos*15 - this.vendedores*5;
        },
        dineroPorSegundo() {
            return this.vendedores*75 - this.panaderos*30;
        }
    },
    mounted() {
        setInterval(this.autoGalletas, 1000);
        setInterval(this.autoBrownies, 1000);
        setInterval(this.autoDinero, 1000);
        this.$refs.galletas.textContent = this.galletas;
        this.$refs.brownies.textContent = this.brownies;
        this.$refs.panaderos.textContent = this.panaderos;
        this.$refs.vendedores.textContent = this.vendedores;
        this.$refs.dinero.textContent = this.dinero;
    }
});