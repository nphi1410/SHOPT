import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryProvider } from "./providers/QueryProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <App />
  </QueryProvider>
);
