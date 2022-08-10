# react-keycloak-spa
# notice: in react 18 dont use StrictMode
### start by keycloak and call my init component after autentication
```javascript
import React from 'react';
import ReactKeycloakSPA from 'react-leycloak-spa';
import MyApp from './my-app';

export default class App extends React.Component{
  render(){
    return (
      <ReactKeycloakSPA 
        config={
          //object - keycloak config
        }
        component={
          MyApp //component that called after autentication
        }
      />
    )
  }
}
```

### use keycloak data in my init component
```javascript
class MyApp extends React.Component{
  render(){
    let {keycloak} = this.props;
    // all of keycloak data is in this.props.keycloak
    .................
  }
}
```
