# The City that Never Sleeps
This interactive visualization allows users to see how many noise complaints there were in different locations of NYC at different points in time. We gathered our data from the NYC Open Data https://data.cityofnewyork.us/Social-Services/311-Noise-Complaints/p5f6-bkga and because the dataset was too big and didn't entirely help us understand the impact that COVID had on noise complaints, we filtered our data to only have data points with a creation date of January 1, 2019, until March 31st, 2021 and a complaint type of a noise complaint. Additionally, the only columns we kept from the original dataset were the creation date, zip code, a tuple of the longitude and latitude coordinate, neighborhood, borough, residential type, complaint type, and unique key. By only keeping these limited aspects of the data and the data points that met the 2 aforementioned constraints, we were able to zoom in and focus on having our visualization inform users so that they could understand how COVID impacted noise complaints in NYC.

The first visual encoding that we used was a heatmap because it effectively represents severity and has a negative connotation with it (after all, nobody likes loud noise especially to the point where they have to file an official noise complaint). The color range for the heatmap is from transparent (which represents no complaints) to tan (which represents a low number of complaints) to red (which represents a high number of complaints). After initial feedback in class and from peer critiques, we decided to add another option for a second visual encoding: 3D hexagon structures. The higher hexagon heights represent higher numbers of complaints for the geographic area that those hexagons are over. The visualization allows a user to simply explore by letting them navigate around the map with their mouse and zoom in and out to get a more precise view of a specific location in NYC on the map. In addition to the exploratory visualization components, users can select and apply different filters on the left. They can select between the hexagon and heatmap visualization type, select one or more of the options listed for each of the metrics listed (borough, neighboorhood, zip code, and location type). They can also filter based on date by using the slider to specify the start date and the stop date that they want. This is perhaps the most valuable feature available to users because it can give them the best insights to help them understand what impact the pandemic had on noise complaints.

All three of us contributed equally to brainstorming and deciding design decisions in the beginning. Magdalena and Melody created the initial base for the react app and deck.gl while Amanda parsed the dataset and downsized it (after discussion with Magdalena and Melody) by removing certain columns of data and grabbing the rows with the appropriate creation date. We then split up different components of the web dev process (Amanda and Melody did paired programming) until we had to switch our focus to debugging the code (which we did together since 3 brains together are better than 1). Finally, when we got our MVP working, we split up the recording for our demos into 3rds, each recorded our corresponding part, and Magdalena Price compiled all recordings together in the end. Magdalena and Amanda were in class to answer questions that classmates had about our MVP and write down the comments and ideas we received. After formally receiving our feedback, all 3 of us came back together and discussed what changes we wanted to implement for the Final Prototype. Then, we put our heads together to debug more issues we were having. Magdalena and Melody also coded the slider and new hexagon encoding which were new components  while Amanda did the final write-up. The aspect that took the most time by far was debugging which together with 3 brains combined took approximately 20 hours throughout this assignment.


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
