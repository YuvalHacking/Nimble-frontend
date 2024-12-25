import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

// Apollo Client setup with file upload support
const client = new ApolloClient({
  link: createUploadLink({
    uri: process.env.REACT_APP_API_URL,  
    headers: {
      'x-apollo-operation-name': 'uploadCSV',  
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
