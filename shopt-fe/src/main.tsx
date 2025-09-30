import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryProvider } from "./providers/QueryProvider";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryProvider>
);
