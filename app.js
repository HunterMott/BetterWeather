const getData = async (x) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${x},us&units=imperial&appid=8e82c4661e8a9fb77637f833ac5af542`
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




    const simpleWeather = document.querySelector('.simpleWeather')
    simpleWeather.append(cityName, currTemp, disc, highLow)




  } catch (error) {
    console.log(error);
  }
}

searchBtn = document.querySelector('#search')
searchBtn.addEventListener('click', () => {
  let input = document.querySelector('#blank').value
  getData(input)

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