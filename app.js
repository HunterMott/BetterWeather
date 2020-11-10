const getData = async (x) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${x},us&units=imperial&appid=8e82c4661e8a9fb77637f833ac5af542`
  try {
    const response = await axios.get(url)
    const data = response.data
    // console.log(data);
    const currentTemp = data.main.temp





  } catch (error) {
    console.log(error);
  }
}
getData(84020)