"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactKeycloakSPA;

var _react = _interopRequireDefault(require("react"));

var _web = require("@react-keycloak/web");

var _keycloakJs = _interopRequireDefault(require("keycloak-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactKeycloakSPA(props) {
  let authClient = new _keycloakJs.default(props.config);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_web.ReactKeycloakProvider, {
    authClient: authClient
  }, /*#__PURE__*/_react.default.createElement(Login, {
    COMPONENT: props.component
  })));
}

function Login(props) {
  const obj = (0, _web.useKeycloak)();
  let {
    authenticated
  } = obj.keycloak;

  if (!authenticated) {
    let {
      login
    } = obj.keycloak;

    try {
      login();
    } catch {
      let a = '';
    }

    return null;
  }

  let {
    COMPONENT
  } = props;
  return /*#__PURE__*/_react.default.createElement(COMPONENT, {
    keycloak: obj.keycloak
  });
}