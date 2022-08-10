import React from 'react';
import { ReactKeycloakProvider,useKeycloak } from "@react-keycloak/web";
import Keycloak from "keycloak-js";

export default function ReactKeycloakSPA(props){
    let authClient = new Keycloak(props.config);
    return (<div><ReactKeycloakProvider authClient={authClient}><Login COMPONENT={props.component}/></ReactKeycloakProvider></div>);
}
function Login(props){
  const obj = useKeycloak();
  let {authenticated} = obj.keycloak;
  if(!authenticated){
    let {login} = obj.keycloak; 
    try {login()} catch{let a = '';}
    return null
  }
  let {COMPONENT} = props;
  return (<COMPONENT keycloak={obj.keycloak}/>)
}