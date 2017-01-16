const $ = window.jQuery = require('jquery');

module.exports = {
  data: function () {
    return {
      showResults: false,
      city: "",
      state: "",
      states: [
        "SC",
        "NC"
      ],
      venues: [
        {
          name: "Select a state and enter a city to display results.",
          contact: {
            phone: "",
            twitter: ""
          }
        }
      ]
    };
  }, created: function() {
    this.$http.get('/api/states').then((data) => {
      const json = data.body;
      for (let i = 0; i < json.length; i++) {
        this.states.push(json[i].abbreviation);
      }
    }, (err) => {
      console.log(err);
    })
  },
  methods: {
    submit: function () {
      this.$http.post('/api/location', {city: this.city, state: this.state}).then((data) => {
        this.venues = data.body.response.venues;
        this.showResults = true;
      }, (err) => {
        console.log(err);
        this.venues[0].name = "No results for that city. Try checking your spelling."
      });
    }
  }
};
