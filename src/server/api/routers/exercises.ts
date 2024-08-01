import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import createUUID from "~/lib/createUUID";
import { exercises } from "~/server/db/schema";
import { asc, eq } from "drizzle-orm";

export const exercisesRouter = createTRPCRouter({
  addExercise: protectedProcedure
    .input(z.object({
      name: z.string().min(1, 'Exercise name is required'),
      description: z.string().optional()
    }))
    .mutation(async ({ ctx, input }) => {
      const exerciseId = createUUID({prefix: 'exercise'});
      await ctx.db.insert(exercises).values({
        createdBy: ctx.session.user.id,
        id: exerciseId,
        name: input.name,
        description: input.description
      })
    }),

  getExercises: protectedProcedure
    .query(async ({ ctx }) => {
      const usersExercises = ctx.db.query.exercises.findMany({
        where: eq(exercises.createdBy, ctx.session.user.id),
        orderBy: [asc(exercises.createdAt)]
      });
      
      return usersExercises;
    })
})