import { defineConfig } from "cypress";

export default defineConfig({
  // viewportWidth: 1920,
  // viewportHeight: 1580,
  // defaultCommandTimeout: 30000,
  // requestTimeout: 10000,
  // pageLoadTimeout: 100000,
  // chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://127.0.0.1:5173/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
