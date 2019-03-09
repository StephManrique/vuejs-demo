var app = new Vue({
      el: '#app',
      data: {
         nombre: 'Lalo',
         apellido: 'Landa',
         numero: 0,
         imagen_visible: true,
         lista: [
            {nombre: 'Lionel Messi', pais: 'Argentina'},
            {nombre: 'Luis Suárez', pais: 'Uruguay'},
            {nombre: 'Neymar', pais: 'Brasil'}, 
            {nombre: 'James Rodríguez', pais: 'Colombia'},
            {nombre: 'Andrés Iniesta', pais: 'España'},
            {nombre: 'Chicharito Hernández', pais: 'México'}, 
            {nombre: 'Alexis Sánchez', pais: 'Chile'},
            {nombre: 'Paolo Guerrero', pais: 'Perú'},
            {nombre: 'Paraguay', pais: 'Justo Villar'},
            {nombre: 'Marcelo Moreno Martins', pais: 'Bolivia'},
            {nombre: 'Walter Ayoví', pais: 'Ecuador'},
            {nombre: 'Salomón Rondón', pais: 'Venezuela'},
         ],
         personajes: []
      },
      methods: {
        generarNumeroAlAzar: function(){
          this.numero = Math.floor((Math.random() * 1000) + 1);
        },
        created: function(){
          this.$http.get('http://localhost:8080/demo').then(function(response){
            console.log('Respuesta del servidor: ' + response);
            this.personajes = response.body;
          }, function(){
            alert('Error!');
          });
        }
      }
   });

var app1 = new Vue({
  el: '#app-1',
    data: {
      message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})


