# The City that Never Sleeps
This interactive visualization allows users to see how many noise complaints there were throughout NYC across the time period of Covid-19. We gathered our data from [NYC Open Data] (https://data.cityofnewyork.us/Social-Services/311-Noise-Complaints/p5f6-bkga).

To start, we filtered the data to include only relevant columns (e.g. Complaint Type, Location Type, Incident Zip Code, etc.), non-null rows, and data points that fell within the timeframe of Covid-19 (January 2020 through March 2021). By focusing in on these limited and relevant aspects of the data, we were able to focus on having our visualization empower users to explore how Covid-19 impacted noise complaints in NYC.

Our visualization incorporates two visual encodings - a heat map and a hexagon map. The heat map was chosen for it's ability to effectively represent magnitude on a 2D scale, and it's intuitive nature where no color (transparency) represents no complaints and dark red represents a high number of complaints. Additionally, it allows for a high level of interactivity, as users are able to zoom in, zoom out, and scroll across the map of New York City. After discussing the intial feedback we received in class and within peer crtiques, we decided to incorproate our second visual encoding - the hexagon layer. This layer enables us to showcase a 3D representation of the data, where both the height and color correspond to the mangitude of complaints within a particular area. The color scale is kept consistent within this visual encoding, allowing users to explore the differences between differing time ranges. The hexagon visual encoding also allows a user to drag and scroll acround in an additional dimension, compared to the heat map visual encoding.

In addition to the exploratory visual encodings, users can select and apply different filters on the left sidebar. They can select between the hexagon and heatmap visual encodings, select one or more of the avaiable options for each of the metrics listed (borough, neighboorhood, zip code, location type), and select a start and end date to narrow down the data's breadth.

Lastly, we offer an informative dropdown towards the upper-right side of screen, where users are told about the visualization, given a link to the dataset, and are given brief instructions for navigating the visualization.

All three of us contributed equally to brainstorming and making key design decisions in the beginning. Magdalena and Melody created the initial base for the react app and deck.gl while Amanda parsed the dataset and downsized it (after discussion with Magdalena and Melody) by removing certain columns of data and grabbing the rows with the appropriate creation date. We then split up different components of the web dev process (Amanda and Melody did paired programming) until we had to switch our focus to debugging the code as a group. Finally, when we got our minimum viable product working, we split up the recording for our demos into 3rds, each recorded our corresponding part, and Magdalena Price compiled all recordings together in the end. Magdalena and Amanda were in class to answer questions that classmates had about our MVP and write down the comments and ideas we received. After formally receiving our feedback, all 3 of us came back together and discussed what changes we wanted to implement for the Final Prototype. Then, we put our heads together to debug more issues we were having. Magdalena and Melody coded the slider and new hexagon encoding (new components) while Amanda did the final write-up. A majority of the time for this project was spent plaaning the initial visualization and debugging the React code. 



## 


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
