const api = "https://api.foursquare.com/v2/venues/search?query=cafe&ll=41.9028,12.4964&limit=10&client_id&client_secretO&v=20180720&oauth_token=ETMR1KX3COLMBGTTN1YAEMA1W2QADJB4E4COOYFHGEIE5ROD&v=20180805"


export const getLocations = () => {
    fetch('https://api.foursquare.com/v2/venues/search?query=cafe&ll=41.9028,12.4964&limit=10&client_id&client_secretO&v=20180720&oauth_token=ETMR1KX3COLMBGTTN1YAEMA1W2QADJB4E4COOYFHGEIE5ROD&v=20180805')
    .then(res => res.json())
    .then(items => {
        this.setState({ items: items.response.venues });
      })
    .catch(error => this.onGetLocationsError('', error));
  }