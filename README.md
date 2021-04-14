# The City that Never Sleeps

Our visualization can be viewed on [Github Pages](https://6859-sp21.github.io/a4-thecitythatneversleeps/), but there are still some persisting Babel/WebWorker issues with the deployment of the MapBox API base map. For full functionality, please see the "Local Testing Instructions" section down below. 

### Visualization Preview

<img width="1333" alt="HeatMap" src="https://user-images.githubusercontent.com/30029166/114647175-a7e35900-9caa-11eb-83ea-42a35a2b54ff.png">
<img width="1330" alt="HexagonMap" src="https://user-images.githubusercontent.com/30029166/114647181-a9ad1c80-9caa-11eb-8135-09c565de5e99.png">

### Our Design Process and Implementation

Our goal for this interactive visualization was to allow users to explore how many noise complaints there were throughout New York City across the time period of Covid-19. We gathered our data from [NYC Open Data](https://data.cityofnewyork.us/Social-Services/311-Noise-Complaints/p5f6-bkga), a free public data project published by New York City agencies and other partners.

Our initial design process involved much deliberation and sketching, where we discussed how we wanted to agrregate and showcase the aggregation of the data. We discussed utilizing techniques such as bar graphs and other 2D visual encodings, but ultimately settled on starting with a heat map. It was also around then that we realized the sheer magnitude of the dataset, and we realized that we had to filter a lot in order to be able to reasonably analyze our data. 

We began with filtering the data to include only relevant columns (e.g. Complaint Type, Location Type, Incident Zip Code, etc.), non-null rows, and data points that fell within the timeframe of Covid-19 (January 2020 through March 2021). By focusing in on these limited and relevant aspects of the data, we were able to focus on having our visualization empower users to explore how Covid-19 impacted noise complaints in NYC. The final column reductions can be found down below under "Noise Complaint Data Columns".

Our final visualization ending up incorporating two visual encodings - a heat map and a hexagon map - but we started with just the heat map. The heat map was chosen for it's ability to effectively represent magnitude on a 2D scale, and it's intuitive nature where no color (transparency) represents no complaints and dark red represents a high number of complaints. Additionally, heat maps allow for a high level of interactivity, as users are able to zoom in, zoom out, and scroll across the map of New York City. After discussing the intial feedback we received in class and in peer critiques, we decided to incorproate our second visual encoding - the hexagon layer. This layer enabled us to showcase a 3D representation of the data, where both the height and color correspond to the mangitude of complaints within a particular area. Additionally, the color scale is kept consistent within this visual encoding, allowing users to better explore the differences between differing time ranges. The hexagon visual encoding also allows a user to drag and scroll around in an additional dimension, compared to the heat map visual encoding.

In addition to implenting toggles between the two different exploratory visual encodings, we incorporated multi-select dropdowns within the left sidebar to allow users to select different filters, and a date range slider to allow users to narrow down the data aggregation. As a result, users are able to select between the hexagon and heatmap visual encodings, select one or more of the avaiable options for each of the metrics listed (borough, neighboorhood, zip code, and location type), and select a start and end date for exploratory purposes.

Lastly, we included an informative dropdown towards the upper-right side of screen, where users are told about the visualization, given a link to the dataset, and are given brief instructions for starting their navigation of the visualization.

All three of us contributed equally to brainstorming and making key design decisions in the beginning. Magdalena and Melody created the initial base for the react app and deck.gl while Amanda parsed the dataset and downsized it (after discussion with Magdalena and Melody) by removing certain columns of data and grabbing the rows with the appropriate creation date. We then split up different components of the web dev process (Amanda and Melody did paired programming) until we had to switch our focus to debugging the code as a group. Finally, when we got our minimum viable product working, we split up the recording for our demos into 3rds, each recorded our corresponding part, and Magdalena Price compiled all recordings together in the end. Magdalena and Amanda were in class to answer questions that classmates had about our MVP and write down the comments and ideas we received. After formally receiving our feedback, all 3 of us came back together and discussed what changes we wanted to implement for the Final Prototype. Then, we put our heads together to debug more issues we were having. Magdalena and Melody coded the slider and new hexagon encoding (new components) while Amanda did the final write-up. A majority of the time for this project was spent plaaning the initial visualization and debugging the React code, with the total amount of time approaching 45 man-hours. 

### Noise Complaint Data Columns

| Unique Key  | Datetime  | Complaint Type | Descriptor | Location Type | Incident Zip Code | Incident Address | Borough | Location|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Unique Identifier  | String in DD/MM/YYYY HH:MM:SS AM/PM Format  | String  | String | String | String  |  String | String  |  (Lat, Lon) Tuple |

### Local Testing Instructions

Make sure you have npm (node package manager) installed on your machine.
Navigate to your terminal and clone this github repository onto your local machine.
Run `npm install` to install all necessary packages.
Run `npm start` to launch the app in development mode.
Open http://localhost:3000 in the browser if your terminal does not already launch it.
