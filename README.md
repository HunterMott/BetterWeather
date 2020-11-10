# Project Overview

## Project Name

BetterWeather

## Project Description

This web application will take your zip code and return deatiled weather information! 
Weather updates every 3 hours for up to 5 days in advanced! 
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

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
* Functional input and submit button.
* Search by zip code.
* Provide details on current weather conditions in the specified zipcode.
* Update background color with current weather conditions.
* Clean and efficient code.

#### PostMVP  
* Pull more data from a second API.
* Add another section for forcasting weather out 5 or more days. 
* Implement background images with current weather conditions, rather than colors.
* Add a daily umbrella recommendation.
* Animate some items to bring the site to life! (Button, and search bar)
* Add a dark mode button.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 10| Project Approval / Core Application Structure | Incomplete
|Nov 12| Pseudocode / get started on JS | Incomplete
|Nov 13| Actual code / CSS / Debug | Incomplete
|Nov 16| MVP is done / PostMVP | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

https://imgur.com/4m2qNYp

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up project plans | H | 3hrs| 4hrs | 3hrs |
| Understanding API | H | 3hrs| -- | -- |
| Get all API data on DOM | H | 3 hrs | -- | -- |
| Html | H | 3hrs | -- | -- |
| CSS | H | 3hrs | -- | -- |
| Advanced CSS | M | 3hrs | -- | -- |
| Debug | H | 3hrs | -- | -- |
| Beginning JS | H | 3hrs | -- | -- |
| Adaptive background | M | 3hrs | -- | -- |
| Header / Menu | H | 3hrs | -- | -- |
| Manipulate the DOM | H | 3hrs | -- | -- |
| Get my weather conditions to have icons | M | 3hrs | -- | -- |
| | | | | |
| | | | | |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
