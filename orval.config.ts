import { defineConfig } from "orval";

const baseUrl = "http://localhost:3000";

export default defineConfig({
  events: {
    input: {
      target: `${baseUrl}/openapi.json`,
    },
    output: {
      mode: "single",
      target: "src/api/events.ts",
      formatter: "prettier",
      client: "swr",
      httpClient: "fetch",
      clean: true,
      baseUrl,
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
          forceSuccessResponse: true,
        },
      },
    },
  },
});
