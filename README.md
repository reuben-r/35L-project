## Running the app locally
1. Obtain Google Maps API key
  - Go to console.cloud.google.com/google/maps-apis and create account or log in to existing account
  - Create a new project, navigate to new project
  - Within the new project, copy the new API key and check "Enable all google APIs for this project"

2. Clone github repo locally<br>
3. To use the production version (branchname "prod")
  - navigate to 35L-project/client-server-APP/fe/src/pages/rider/index.jsx
  - Replace 'KEY' in [googleMapsApiKey: "KEY",] with the newly acquired maps API key
  - Repeat for  35L-project/client-server-APP/fe/src/pages/driver/index.jsx
4. To use the (incomplete) test version (branchname "test")
  - navigate to 35L-project/client-server-APP/fe/src/profilesAPI_Driver.jsx
  - Replace 'KEY' in [script.src = `https://maps.googleapis.com/maps/api/js?key=KEY&libraries=places&callback=initMap`;] with the newly acquired maps API key
  - Repeat for 35L-project/client-server-APP/fe/src/profilesAPI_Rider.jsx
5. In any branch, do the following
6. cd into 35L-project/client-server-APP/sqlInstruction.txt and follow the listed instructions to connect the database
7. cd into 35L-project/client-server-APP/be, and run "npm install", followed by "npm start"
8. cd into 35L-project/client-server-APP/fe, and run "npm install", followed by "npm start"
9. Access the app through the localhost:PORT where PORT is specified in the command line following the npm start command
