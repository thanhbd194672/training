import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./locates/i18n"
import { Provider } from "react-redux";
import store from "./store/store";
import { worker } from "./mocks/browser";

// worker.start({ onUnhandledRequest: "warn" }).then(() => {
//   const root = ReactDOM.createRoot(document.getElementById('root')!);
//   root.render(
//     <Provider store={store}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </Provider>
//   );
// });

const enableMocking = async () => {
  const { worker } = await import("./mocks/browser");
  await worker.start({ onUnhandledRequest: "warn" });

};

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root")!);
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
});

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );
