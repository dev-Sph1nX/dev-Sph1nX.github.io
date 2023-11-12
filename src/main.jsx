import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const myCache = createCache({
  key: 'my-prefix-key',
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <CacheProvider value={myCache}>
        <ChakraBaseProvider >
            <App />
        </ChakraBaseProvider>
      </CacheProvider>
  </React.StrictMode>
);
