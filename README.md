# Project Overview

## Project Name

BetterWeather

## Project Description

This web application will take your zip code and return current detailed weather information and weather updates every 3 hours for up to 5 days in advanced! 
(Weather Condition, High and low, Feels like, Wind speeds)

## API and Data Sample
https://openweathermap.org/api

```
{
cod: "200",
message: 0,
cnt: 40,
list: [
{
dt: 1604966400,
main: {
temp: 32.88,
feels_like: 25.81,
temp_min: 32.11,
temp_max: 32.88,
pressure: 1017,
sea_level: 1017,
grnd_level: 863,
humidity: 87,
temp_kf: 0.43
},
weather: [
{
id: 804,
main: "Clouds",
description: "overcast clouds",
icon: "04d"
}
],
clouds: {
all: 91
},
wind: {
speed: 5.57,
deg: 326
},
visibility: 10000,
pop: 0.19,
sys: {
pod: "d"
},
dt_txt: "2020-11-10 00:00:00"
},
```

## Wireframes

https://imgur.com/1elQTSn

### MVP/PostMVP


#### MVP 
* Functional input and submit button.
* Search by zip code.
* Provide details on current weather conditions in the specified zipcode.
* Update background color with current weather conditions.
* Clean and efficient code.

#### PostMVP  
* Add another section for forcasting weather out 5 or more days. 
* Implement background images with current weather conditions, rather than colors.
* Add a daily umbrella recommendation.
* Animate some items to bring the site to life! (Button, and search bar)
* Add a dark mode button.

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 10| Project Approval / Core Application Structure | Complete
|Nov 12| Pseudocode / Actual code | Incomplete
|Nov 13| MVP is done / CSS / Debug | Incomplete
|Nov 16| PostMVP / Debug | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

https://imgur.com/4m2qNYp

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up project plans | H | 3hrs| 4hrs | 3hrs |
| Understanding API | H | 3hrs| 2hrs | -- |
| Get all API data on DOM | H | 3hrs | 3hrs | -- |
| Html | H | 3hrs | 2.5 | -- |
| CSS | H | 3hrs | 3hrs | -- |
| Advanced CSS | M | 3hrs | -- | -- |
| Debug | H | 3hrs | 1.5hrs | -- |
| Beginning JS | H | 3hrs | 4hrs | -- |
| Adaptive background | M | 3hrs | -- | -- |
| Header / Menu | H | 3hrs | -- | -- |
| Manipulate the DOM | H | 3hrs | 2.5hrs | -- |
| Get my weather conditions to have icons | M | 3hrs | 3hrs | -- |
| Clean up code / optimize | M | 2hrs| -- | -- |
| Testing finished product | M | 3hrs| -- | -- |
| Total | H | 41hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
