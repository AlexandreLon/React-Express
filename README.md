# projet-web-server-client

## Architecture

- front : Utils to plug react components into views, it's not needed to edit it
- app : App back 
    - controllers : All logical logic for each routes
    - routes : Router express to create all routes of the application
    - models : All models used in the application
- resources : Front app
    - views : HTML pages with edge engine to templating
    - scss : All styles files
    - components : All components react

Note : To use a component, on your html page, call `<react-element component="<name_of_your_component>"></react-element>`. The name component must be at the root on front/components folder





