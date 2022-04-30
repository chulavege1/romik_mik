import React from 'react'; import ReactDOM from 'react-dom'; 
import { HashRouter } from 'react-router-dom'; 
//
import App from './App'
// ------------------------->
// Main components + helpers modules. 
ReactDOM.render(
  <>
    {/* <ApolloProvider client={client}> */}
      <HashRouter>
        {/* <GraphqlPoolData> */}
          <App />
        {/* </GraphqlPoolData> */}
      </HashRouter>
    {/* </ApolloProvider> */}
  </>
, document.getElementById('Romick')
);