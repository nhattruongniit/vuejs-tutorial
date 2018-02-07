new Vue({
    el: "#vue-app",
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://gianty.com.vn',
        tag: '<a href="https://gianty.com.vn">website</a>',
        age: 25,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        message: 'this is computed property'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time;
        },
        addAge: function(inc) {
            this.age += inc;
        },
        subtractAge: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        eventModifier: function() {
            console.log('event modifire');
        },
        logName: function() {
            console.log('You entered your name');
        },
        logAge: function() {
            console.log('You entered your age');
        }
    },
    computed: {
        addtoA: function() {
            console.log('addtoA');
            return this.a + this.age;
        },
        addtoB: function() {
            console.log('addtoB');
            return this.b + this.age;
        },
        reverseMessage: function() {
            return this.message.split(' ').reverse().join('');
        },
        fullName: function() {
            return this.name + '-' + this.job;
        }
    }
})