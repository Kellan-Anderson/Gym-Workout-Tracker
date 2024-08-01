'use client'

import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";


export function AddExerciseButton() {

  const exerciseFormResolver = z.object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().optional(),
  });
  const addExerciseForm = useForm<z.infer<typeof exerciseFormResolver>>({
    resolver: zodResolver(exerciseFormResolver),
    defaultValues: {
      description: '',
      name: ''
    }
  });
  const onAddExerciseFormSubmit: SubmitHandler<z.infer<typeof exerciseFormResolver>> = (values) => {
    console.log({values});
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add an exercise</Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle>Add an exercise</DialogTitle>
        <Form {...addExerciseForm}>
          <form onSubmit={addExerciseForm.handleSubmit(onAddExerciseFormSubmit)}>
            <FormField
              control={addExerciseForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="pb-4">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addExerciseForm.control}
              name="description"
              render={({ field }) => (
                <FormItem className="pb-4">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Exercise description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Add exercise</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}