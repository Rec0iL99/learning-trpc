// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@coco/backend";

export const trpc = createTRPCReact<AppRouter>();
