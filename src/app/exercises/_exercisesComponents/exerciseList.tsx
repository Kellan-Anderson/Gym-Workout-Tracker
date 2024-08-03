'use client'

import { Pencil, Trash } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import type { exercise } from "~/server/db/schema"

type ExerciseListProps = {
  exercises: exercise[]
}

export default function ExerciseList({ exercises } : ExerciseListProps) {

  return (
    <Accordion type="single" collapsible className="flex flex-col gap-2">
      {exercises.map(e => (
        <ExerciseListItem
          key={e.id}
          exercise={e}
          onEditClick={(id) => console.log('Editing', id)}
          onDeleteClick={(id) => console.log('Deleting', id)}
        />
      ))}
    </Accordion>
  );
}


type ExerciseListItemProps = {
  exercise: exercise,
  onEditClick?: (arg0: string) => void,
  onDeleteClick?: (arg0: string) => void,
}

export function ExerciseListItem({ exercise, onDeleteClick, onEditClick } : ExerciseListItemProps) {
  const descriptionText = exercise.description === '' || exercise.description === null
    ? 'No description'
    : exercise.description

  return (
    <AccordionItem value={exercise.id} className="border px-4 rounded-md">
      <AccordionTrigger className="text-base">{exercise.name}</AccordionTrigger>
      <AccordionContent className="flex flex-col relative">
        <p className="font-bold pb-1">Description:</p>
        <p className="pb-3">{descriptionText}</p>
        <p className="font-bold pb-1">Your PR:</p>
        <p>{exercise.personalRecord ?? 'No data'}</p>
        <div className="absolute flex flex-row justify-end gap-2 bottom-4 right-0">
          <Button className="gap-1.5" onClick={() => onEditClick?.(exercise.id)}>
            <Pencil className="h-5 w-5" />
            Edit
          </Button>
          <Button className="gap-1.5" variant='destructive' onClick={() => onDeleteClick?.(exercise.id)}>
            <Trash className="h-5 w-5" />
            Delete
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}