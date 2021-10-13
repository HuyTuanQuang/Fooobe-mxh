import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Routev } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import lagulage_en from "./translate/english.json";
import lagulage_vi from "./translate/vietnam.json";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "moment/locale/vi";


i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "vi", // language to use
  resources: {
    en: {
      common: lagulage_en, // 'common' is our custom namespace
    },
    vi: {
      common: lagulage_vi,

    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Routev>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
      </Routev>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
