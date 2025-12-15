import { ENV } from "./env.js"
import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";


const aj = arcjet({

  key: ENV.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      // Block all bots except the following
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        
      ],
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    slidingWindow({
      mode: "LIVE",
      max: 100, // Refill 5 tokens per interval
      interval: 60, // Refill every 10 seconds

    }),
  ],
});

export default aj;