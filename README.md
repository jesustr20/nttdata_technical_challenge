# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Install node_modules
First install node_modules using the next:\
1.- npm install.\
2.- The dependencies of the "package.json" file will be installed automatically in order to run the project properly.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Data Services
The table will be displayed with 15 user records that are requested by a "get" service which is located in the "service" folder.

## DataTable
The "Table" folder has a folder called "constant" and a file "table.jsx" The "constant" module has the headers of the tables which will display the specified data In the "table.jsx" file the data will be displayed are requested from the variable "data"

## Data Table: Button Download - Button refresh (Update data)
There are 2 buttons:\
1.- "Descargar lista de usuarios": it will download the 15 requested users which are shown in the table either "ascending", "descending" or "random"\
2.- "Actualizar data": This button helps to update the table data just by clicking on said button, which avoids the need to refresh the page by hitting enter from the same url browser.

## Probar la aplicacion:
Para probar la aplicacion pueden acceder desde este enlace:\
https://nttdata-jarvissac.netlify.app/\

Deployado usando Netlify: (https://app.netlify.com/)