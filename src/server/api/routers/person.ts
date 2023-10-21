import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

let person = {
  name: "taco",
  age: "12",
  id: 1,
};

const personRouter = createTRPCRouter({
  person: publicProcedure
    .input(
      z.object({
        name: z.string(),
        age: z.string(),
        id: z.number(),
      }),
    )
    .query(({ input }) => {
      return `${input.name}`;
    }),

  create: publicProcedure
    .input(
      z.object({ name: z.string().min(1), age: z.string(), id: z.number() }),
    )
    .mutation(({ input }) => {
      // simulate a slow db call
      person = { name: input.name, age: input.age, id: input.id };
      return person;
    }),

  getLatest: publicProcedure.query(() => {
    return person;
  }),
});

export default personRouter;
