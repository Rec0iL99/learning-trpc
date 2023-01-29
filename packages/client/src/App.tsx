import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "./utils/trpc";
import "./App.css";

function Sample() {
  const hello = trpc.getUser.useQuery();
  if (!hello.data) return <div>Loading...</div>;
  return (
    <div>
      <p>{hello.data.name}</p>
    </div>
  );
}

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:2021/trpc",
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Sample />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
