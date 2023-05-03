import ReactDOM from "react-dom/client";

import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";

import "./index.css";

// INIT VK Mini App
bridge.send("VKWebAppInit");

// INIT React Query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AdaptivityProvider>
  </ConfigProvider>
);
