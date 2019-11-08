var app = new Vue({
    el: '#app',
    data: {
        cards: {
            cards: [
                name= ""
            ]
        },
        pokemonName: '',
    },
    methods: {
        async getCards() {
            console.log("Pokemon TCG");
            var url = "pokemon?name=" + this.pokemonName;
            
            try {
                let response = await axios.get(url);
                this.cards = response.data.cards;
                console.log(response.data);
                console.log(this.cards);
                return true;
            }
      catch (error) {
        console.log(error);
      }
    },
    },
    
    
    
    
    
    
})