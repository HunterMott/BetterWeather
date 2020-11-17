// Current weather function
const getData = async (x) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${x},us&units=imperial&appid=92c2817d5789ddbc77e00ec8a9362f8d`
  removeWeather('.simpleWeather')
  removeWeather('.forecastParent')
  try {
    const response = await axios.get(url)
    const data = response.data
    const zipName = data.name
    const currentTemp = data.main.temp
    const currentFeels = data.main.feels_like
    const tempMax = data.main.temp_max
    const tempMin = data.main.temp_min
    const description = data.weather[0].description
    const icon = data.weather[0].icon
    const weatherCond = data.weather[0].main
    const cityName = document.createElement('h4')
    cityName.textContent = `${zipName}`
    // const iconimg = document.createElement('img')
    // iconimg.setAttribute('src', `http://openweathermap.org/img/w/${icon}.png`)
    const currTemp = document.createElement('h3')
    currTemp.textContent = `${Math.floor(currentTemp)}` + "\xB0"
    const highLow = document.createElement('h5')
    highLow.textContent = `with highs of ${Math.floor(tempMax)}` + "\xB0" + ` and lows of ${Math.floor(tempMin)}` + "\xB0" + '.'
    const disc = document.createElement('h5')
    disc.textContent = `${description}`
    const simpleWeather = document.querySelector('.simpleWeather')
    simpleWeather.append(cityName, currTemp, disc, highLow)
    backgroundCondition(data.weather[0].main)

  } catch (error) {
    console.log(error);
  }
}


// Input and button 
searchBtn = document.querySelector('#search')
searchBtn.addEventListener('click', () => {
  let input = document.querySelector('#blank').value
  getData(input)
  getForecast(input)
})
// Clear DOM function
function removeWeather(x) {
  let removeDiv = document.querySelector(`${x}`)
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

// This my by backgound function
function backgroundCondition(weather) {
  if (weather === 'Clear') {
    document.querySelector('body').style.backgroundImage = ('url(https://images.unsplash.com/photo-1574110745453-0f417d9b5023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)')
  } else if (weather === 'Rain') {
    document.querySelector('body').style.backgroundImage = ('url(https://images.unsplash.com/photo-1544994108-7b68a790caba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)')
  } else if (weather === 'Clouds') {
    document.querySelector('body').style.backgroundImage = ('url(https://images.unsplash.com/photo-1485249245068-d8dc50b77cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80)')
  } else if (weather === 'Snow') {
    document.querySelector('body').style.backgroundImage = ('url(https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)')
  } else if (weather === 'Drizzle') {
    document.querySelector('body').style.backgroundImage = ('url(https://images.unsplash.com/photo-1511634829096-045a111727eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80)')
  } else if (weather === 'Thunderstorm') {
    document.querySelector('body').style.backgroundImage = ('url(https://images.unsplash.com/photo-1457528877294-b48235bdaa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)')
  } else {
    document.querySelector('body').style.backgroundColor = ('#8A9BA7')
  }
}


// This is my forecast function! 
const getForecast = async (x) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${x},us&units=imperial&appid=92c2817d5789ddbc77e00ec8a9362f8d`
  try {
    const fcResponse = await axios.get(url)
    const fcData = fcResponse.data.list
    const slicedData = fcData.splice(0, 8)
    console.log(slicedData);
    slicedData.forEach((forecast) => {
      const dateTime = forecast.dt_txt
      const fcTemp = forecast.main.temp
      const fcIcon = forecast.weather[0].icon
      const fcDesc = forecast.weather[0].description
      const fcWind = forecast.wind.speed
      const forecastDT = document.createElement('p')
      forecastDT.textContent = `${dateTime}`
      forecastDT.className = ('dtClass')
      const forecastTemp = document.createElement('p')
      forecastTemp.textContent = `${Math.floor(fcTemp)}` + "\xB0"
      forecastTemp.className = ('tempClass')
      const forecastIcon = document.createElement('img')
      forecastIcon.setAttribute('src', `http://openweathermap.org/img/w/${fcIcon}.png`)
      forecastIcon.className = ('imgClass')
      const forecastDesc = document.createElement('p')
      forecastDesc.textContent = `${fcDesc}`
      forecastDesc.className = ('descClass')
      const forecastWind = document.createElement('p')
      forecastWind.textContent = `Wind speed of ${Math.floor(fcWind)} mph`
      forecastWind.className = ('windClass')
      const multiForecast = document.querySelector('.forecastParent')
      const singleForecast = document.createElement('div')
      singleForecast.className = ('forecastDaddy')
      singleForecast.append(forecastDT, forecastTemp, forecastIcon, forecastDesc, forecastWind)
      multiForecast.append(singleForecast)
    })
  } catch (error) {
    console.log(error);
  }
}