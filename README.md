## Overview

This project provides a front-end interface for exploring the Rick and Morty API. It features a client setup for GraphQL queries, and components for listing locations and residents from the popular TV show, with pagination support and a modal view for resident details and adding individual notes and comments.

## Installation

1. #### Install Dependencies:

To use these components, ensure you have _@apollo/client_ installed for GraphQL interactions. You need _@apollo/client_ and          _graphql_. Install them via npm or yarn:

    `npm install @apollo/client graphql`

    or

    `yarn add @apollo/client graphql`

2. #### Apollo Client:
Set up the Apollo Client in a dedicated file (e.g., `apollo-client.ts`), and ensure it points to the correct GraphQL URI.

3. #### Component Integration:*
Import the components in your pages or other components as needed. Ensure that the GraphQL endpoint is correctly configured in the Apollo Client.

4. #### Environment:
This project requires a Next.js environment. Ensure you have Next.js set up:

   `npx create-next-app@latest`

Navigate to your project folder, and integrate the components.

5. #### Run The Development Server:

Start the development server to see the components in action:

   `npm run dev`

   or

   `yarn dev`


6. #### GraphQL Schema:

Optionally, if you need to extend the GraphQL schema or make changes, update your schema definitions and resolvers.

7. #### Styles:

If using Tailwind CSS, ensure it is installed and configured in your project. Import the styles in your main styles.css or in component-level CSS modules.

8. #### Data Fetching:

Use the custom hooks like `useGetLocations` within your functional components to fetch data on the client side.


## Design Decisions
- **GraphQL:** Chosen for its efficient data fetching, allowing clients to request exactly what they need, reducing bandwidth usage.
- **Tailwind CSS:** Utilized for its utility-first approach, enabling rapid UI development with a set of consistent, composable utility classes.
- **Pagination:** Implemented to enhance user experience by reducing the initial payload size and allowing users to navigate large datasets.
- **Modal Pattern:** Provides an immersive, focused experience for viewing detailed resident information without navigating away from the current view.


## License
Copyright © 2024 [Godfrey Owidi](https://github.com/godfreyowidi). <br />
This project is [MIT](https://github.com/godfreyowidi/rick-morty-locations/blob/main/LICENSE) licensed.
