const getData = async (x) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${x},us&units=imperial&appid=8e82c4661e8a9fb77637f833ac5af542`
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
    const simpWeather = document.createElement('div')
    simpWeather.className = 'simpWeather'
    const simpleWeather = document.querySelector('.simpleWeather')
    const currTemp = document.createElement('p')
    currTemp.textContent = `${Math.floor(currentTemp)}`
    simpleWeather.append(currTemp)


    console.log();




  } catch (error) {
    console.log(error);
  }
}
getData(90210)






















// searchBtn = document.querySelector('button')
// searchBtn.addEventListener('click', (e) => {
//   e.preventDefault()
//   let input = document.querySelector('#text').value
//   getData(input)

// })













// function removeWeather() {
//   let removeDiv = document.querySelector('')
//   while (removeDiv.lastChild) {
//     removeDiv.removeChild(removeDiv.lastChild)
//   }
// }