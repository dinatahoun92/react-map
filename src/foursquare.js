const clientID = 'T2NXZRKH0PH0Y0RTVAMOPKUUU35CNNOUHDH5UHR0QUXAM5QE';
const clientSecret = 'TBPLP5320XBMDYOH2HA4RHRSEVGL5WYC5L3O5O4OTYD4O1GZ';
const v = '20171227';
const ll = "30.7945609,31.0012534";
const limit = "100";
const radius = "3000";
const categories = {
    Food: "4d4b7105d754a06374d81259",
    Library: "4bf58dd8d48988d12f941735",
    Gym: "4bf58dd8d48988d175941735",
    Circus: "52e81612bcbc57f1066b79e7",
    Coffee: "4bf58dd8d48988d1e0931735"
};
export const url = `https://api.foursquare.com/v2/venues/search?ll=${ll}
&categoryId=${Object.values(categories)}&radius=${radius}&client_id=${clientID}&client_secret=${clientSecret}&v=${v}&limit=${limit}`;

export const fetchingPlaces = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            reject('api quota exceeded')
        }).then(data => {
            if (data) {
                resolve(data)
            }
        }).catch(err => reject('an issue with for Square api'))
    });
};
export const fetchImges = (venuesID) => {
    const imgUrl = `https://api.foursquare.com/v2/venues/${venuesID}/photos?limit=9&client_id=${clientID}&client_secret=${clientSecret}&v=${v}`;
    return new Promise((resolve, reject) => {
        fetch(imgUrl).then(response => {
            if (response.ok) {
                return response.json()
            }
            reject('api quota exceeded')
        }).then(data => {
            if (data) {
                const {prefix, height, width, suffix, user, source} = data.response.photos.items[0];
                resolve({
                    imgSrc: `${prefix}${height}x${width}${suffix}`,
                    user,
                    source
                })
            }
        }).catch(err => reject('an issue with for Square api'))
    })

};
