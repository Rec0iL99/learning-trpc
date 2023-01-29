import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const getUser = () => {
    if (req.headers.authorization !== "secret") {
      return null;
    }
    return {
      name: "alex",
    };
  };

  return {
    req,
    res,
    user: getUser(),
  };
};
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUser: t.procedure.query((req) => {
    req.input; // string
    return { id: req.input, name: "Bilbo" };
  }),
  createUser: t.procedure.mutation(async (req) => {
    console.log("mutation happened");
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

async function main() {
  // express implementation
  const app = express();

  app.use((req, _res, next) => {
    // request logger
    console.log("⬅️ ", req.method, req.path, req.body ?? req.query);

    next();
  });

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app.get("/", (_req, res) => res.send("hello"));
  app.listen(2021, () => {
    console.log("listening on port 2021");
  });
}

main();
