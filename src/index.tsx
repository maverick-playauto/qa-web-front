import ReactDOM from "react-dom/client";
import Router from "./Router";
import GlobalStyle from "./globalStyle/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <Router />
  </>
);
