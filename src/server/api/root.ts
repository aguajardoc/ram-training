import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

import { levelModuleRouter } from "./routers/level-module";
import { levelToTrackRouter } from "./routers/level-to-track";
import { moduleProblemRouter } from "./routers/module-problem";
import { moduleRouter } from "./routers/module";
import { problemRouter } from "./routers/problem";
import { resourceRouter } from "./routers/resource";
import { trackLevelRouter } from "./routers/track-level";
import { trackRouter } from "./routers/track";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  levelModule: levelModuleRouter,
  levelToTrack: levelToTrackRouter,
  moduleProblem: moduleProblemRouter,
  module: moduleRouter,
  problem: problemRouter,
  resource: resourceRouter,  
  trackLevel: trackLevelRouter,
  track: trackRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);