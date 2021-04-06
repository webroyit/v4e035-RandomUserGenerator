const app = Vue.createApp({
    // data() is a function that must be return
    data() {
        return {
            firstName: 'Bob',
            lastName: 'Fair',
            email: 'bobfair123abc@mail.com',
            gender: 'male',
            picture: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
        }
    },
    methods: {
        getUser() {
            this.firstName = 'Jill';
            this.lastName = 'Time';
            this.email = 'jilltime123abc@mail.com';
            this.gender = 'female';
            this.picture = 'https://images.unsplash.com/photo-1554555819-f722cb0c01c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80';
        }
    }
});

app.mount('#app');