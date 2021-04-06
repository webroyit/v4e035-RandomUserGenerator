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
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();

            this.firstName = results[0].name.first;
            this.lastName =  results[0].name.last;
            this.email =  results[0].email;
            this.gender =  results[0].gender;
            this.picture =  results[0].picture.large;
        }
    }
});

app.mount('#app');