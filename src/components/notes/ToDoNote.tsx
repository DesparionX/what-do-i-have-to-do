import { useState, type MouseEvent } from "react";
import type { ToDoList } from "../../data/ToDoList";
import { useServices } from "../../hooks/ServicesHooks";
import { Link } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

type ToDoProps = {
  data: ToDoList;
  deleteList: (listId: string) => Promise<void>;
}

export default function ToDoNote({ props }: {props: ToDoProps}) {
const { listService } = useServices();
const [flat, setFlat] = useState(false);

async function completeNote(e: MouseEvent, noteId: string){
  e.preventDefault();
  const bt = e.target as HTMLButtonElement;

  const note = props.data.notes!.find(n => n.id === noteId);
  if (!note) {
    throw new Error("Something went wrong !\nCannot find the note.")
  }

  note.isCompleted = !note.isCompleted;

  const updated = await listService.changeNoteStatusAsync(props.data.id, note.id, note.isCompleted);

  if (!updated) throw new Error("Could not update the note.");

  if (note.isCompleted)
    bt.classList.add("line-through")
  else
    bt.classList.remove("line-through");
}

  return (
    <div className={`hover-3d my-12 mx-5 ${flat ? " flat" : ""}`} onClick={() =>setFlat(true)} onMouseLeave={() => setFlat(false)} id={props.data.id}>
      <div className="note-body" id={"list-" + props.data.id}>
        <div className="flex flex-row flex-wrap items-center">
          <button type="button" className="w-8 left-3 absolute delete-note-icon" onClick={() => props.deleteList(props.data.id)} hidden={flat ? false : true}>
            <TrashIcon/>
          </button>
          <h1>{props.data.title}</h1>
          <Link to={`/addit-note/${props.data.id}`} className="w-10 right-2 absolute edit-icon" hidden={flat ? false : true}>
            <PencilSquareIcon/>
          </Link>
        </div>
        <div className="notes mb-6">
          {props.data.notes?.map(note => (
            <li id={note.id}>
              <button type="button" className={note.isCompleted ? "line-through" : ""} onClick={(e) => completeNote(e, note.id)}>{note.content}</button>
            </li>
        ))}
        </div>
      </div>
      {/* 8 empty divs needed for the 3D effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
