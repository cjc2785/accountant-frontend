# accountant-frontend

A ui application that allows accountants to view sales reports and make tax payments.

## State Management

This application uses the Redux library for state management. The "creators.js" file contains async action creators. These creators return functions called "thunks." The redux-thunk middleware executes these thunks, supplying them with a dispatch function to dispatch additional actions as the thunks make http requests using the axios library. Reducers live in the "reducers.js" file and update their slice of the store based on incoming actions. The store itself is setup in "store.js." 






