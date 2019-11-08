const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: ['Manzana', 'Pera', 'Platano'],
        vehiculos: [
            { marca: 'mazda', cantidad: 10 },
            { marca: 'kia', cantidad: 2 },
            { marca: 'renault', cantidad: 0 }
        ],
        nuevoVehiculo: '',
        total: 0
    },
    methods: {
        agregarVehiculo() {
            this.vehiculos.push({
                marca: this.nuevoVehiculo, cantidad: 0
            });
            this.nuevoVehiculo = '';
        }
    },
    computed: {
        sumarVehiculos() {
            this.total = 0;
            for (vehiculo of this.vehiculos) {
                this.total = this.total + vehiculo.cantidad;
            }
            return this.total;
        }
    }
})