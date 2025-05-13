 
let API_key = '2398e1ca051830da465f52e4a0ec0cf0';
let city_name = 'Delhi'
let geoCodingAPI = (city_name, API_key) => (`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`)

let weather_api = (lat,lon,API_key)=>(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`)
function getLocation() {
    fetch(geoCodingAPI(city_name, API_key))
        .then((data)=>data.json())
        .then((data)=>{
            return {'lon':data[0].lon,'lat': data[0].lat};
      
  }).then((data)=>{
      getWeatherDetails(API_key,data.lat,data.lon)
  })
  .catch((err)=>{
      console.log(err);
  })
}



fetch(geoCodingAPI(city_name, API_key))
    .then((data)=>data.json())
    .then((data)=>{
        return {'lon':data[0].lon,'lat': data[0].lat};
        
    }).then((data)=>{
        getWeatherDetails(API_key,data.lat,data.lon)
    })
    .catch((err)=>{
        console.log(err);
    })
  
function getWeatherDetails(API_key, lat, lon) {
    fetch(weather_api(lat, lon, API_key))
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data.list[0]);
    })
    .catch((err)=>{
        console.log(err);
    })   
    
}
getWeatherDetails()


/* fetch(geoCodingAPI(city_name, API_key))
    .then((data)=>data.json())
    .then((data)=>{
        return {'lon':data[0].lon,'lat': data[0].lat};
        
    }).then((data)=>{
        getWeatherDetails(API_key,data.lat,data.lon)
    })
    .catch((err)=>{
        console.log(err);
    }) */
    