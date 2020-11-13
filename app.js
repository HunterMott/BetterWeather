const getData = async (x) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${x},us&units=imperial&appid=92c2817d5789ddbc77e00ec8a9362f8d`
  removeWeather()
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
    // const simpWeather = document.createElement('div')
    // simpWeather.className = 'simpWeather'
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
    console.log(data);
    const simpleWeather = document.querySelector('.simpleWeather')
    simpleWeather.append(cityName, currTemp, disc, highLow)
    backgroundCondition(data.weather[0].main)
    // return data;

  } catch (error) {
    console.log(error);
  }
}

searchBtn = document.querySelector('#search')
searchBtn.addEventListener('click', () => {
  let input = document.querySelector('#blank').value
  getData(input)
  // backgroundCondition()

})

function removeWeather() {
  let removeDiv = document.querySelector('.simpleWeather')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

///COLOR CHAGING BACKGROUND
// 80 + = #C29BA3
// 79 - 65 = #FFDAD1
// 64 - 45 = #E0F8F5
// 44 < = #B7EAF7

function backgroundCondition(weather) {
  // let weather = getData(84020)
  if (weather == 'Clear') {
    document.querySelector('body').style.backgroundImage = ('https://images.unsplash.com/photo-1495511167051-13bb07bde85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')
  } else if (weather == 'Rain') {
    document.querySelector('body').style.backgroundImage = ('https://images.unsplash.com/photo-1544994108-7b68a790caba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')
  } else if (weather == 'Clouds') {
    document.querySelector('body').style.backgroundImage = ('https://images.unsplash.com/photo-1485249245068-d8dc50b77cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80')
  } else if (weather == 'Snow') {
    document.querySelector('body').style.backgroundImage = ('https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')
  } else if (weather == 'Drizzle') {
    document.querySelector('body').style.backgroundImage = ('https://images.unsplash.com/photo-1511634829096-045a111727eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80')
  } else if (weather == 'Thunderstorm') {
    document.querySelector('body').style.backgroundImage = ('https://images.unsplash.com/photo-1457528877294-b48235bdaa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')
  } else {
    document.querySelector('body').style.backgroundColor = ('#8A9BA7')
  }
}
// backgroundCondition(data.weather[0].main)