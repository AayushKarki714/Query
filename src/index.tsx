import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
