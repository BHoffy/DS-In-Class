
const Offer = {
    data() {
      return {
        "offers": [
                {
                    "id": 1,
                    "name": "Janet Doe",
                    "salary": 120000,
                    "bonus": 9000,
                    "company":"EY",
                    "offerDate": "2021-09-08"
                },
                {
                    "id": 2,
                    "name": "Jordan Doe",
                    "salary": 80000,
                    "bonus": 2000,
                    "company":"IU",
                    "offerDate": "2021-08-09"
                }
            ]
        }
    }
  }
  
Vue.createApp(Offer).mount('#offerApp') 