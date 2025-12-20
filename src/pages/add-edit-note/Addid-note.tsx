import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/services-hooks/AuthHooks";
import { useEffect, useRef, useState, type FormEvent} from "react";
import { useServices } from "../../hooks/ServicesHooks";
import type { ToDoNote } from "../../data/ToDoNote";
import type { IToDoListDto } from "../../models/dtos/IToDoListDto";
import { CheckIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import type { IUser } from "../../data/interfaces/IUser";
import { useModal } from "../../hooks/ModalHooks";

export function AdditNote(){
    const { currentUser } = useAuth();
    const { listService, userService } = useServices();
    const { showModal } = useModal();
    const navigate = useNavigate();

    const { id } = useParams();
    const isNew = !id;

    const [ user, setUser ] = useState<IUser | null>(null);
    const [ list, setList ] = useState<IToDoListDto | null>(null);
    
    const shouldScrollRef = useRef(false);

    useEffect(() => {
        if (!currentUser) return;

        async function loadUser(){
            if (currentUser) {
                const dbUser = await userService.findByIdAsync(currentUser.id);
                setUser(dbUser);
            }
        }

        async function loadNote(){
            if (id) {
                const dbList = await listService.getListByIdAsync(id, currentUser!.id);

                const dto: IToDoListDto = {
                    id: dbList.id,
                    title: dbList.title,
                    user: dbList.user,
                    userId: dbList.userId,
                    notes: dbList.notes,
                    updatedAt: dbList.updatedAt,
                    createdAt: dbList.createdAt
                };
                
                setList(dto);
            }
            else {
                const dto: IToDoListDto = {
                    id: crypto.randomUUID(),
                    title: "",
                    user: user!,
                    userId: user?.id,
                    notes: [],
                    createdAt: new Date()
                };

                setList(dto);
            }
        }

        loadUser();
        loadNote();
    }, [id, currentUser, listService, userService, user]);
    
    // Notes
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState<ToDoNote[]>([]);

    useEffect(() => {
        if (list) {
           loadList(); 
        }

        async function loadList(){
            setTitle(list!.title);
            setNotes(list!.notes ?? [])
        }
    }, [list]);

    const [content, setContent] = useState("");

    function addNote(){
        if (!content || content.trim() === "") return;

        const newNote: ToDoNote = {
            id: crypto.randomUUID(),
            content: content,
            list: list!,
            listId: list!.id,
            addedAt: new Date(),
            isCompleted: false
        }

        setNotes(prev => [...prev, newNote]);
        setContent("");
        shouldScrollRef.current = true;
    }

    function scrollToBottom(){
        const notesList = document.getElementById("notes-list");
        notesList?.scrollTo({ top: notesList.scrollHeight, behavior: "smooth" });
    }

    useEffect(() => {
        if (shouldScrollRef.current) {
            scrollToBottom();
            shouldScrollRef.current = false;
        }
    }, [notes]);

    function deleteNote(id: string){
        setNotes(prev => prev.filter(n => n.id !== id));
    }

    async function additAsync(e: FormEvent){
        e.preventDefault();

        if (!title) {
            throw new Error("Title is missing !");
        }

        if (!notes) {
            throw new Error("Must have at least one note !");
        }

        const dto: IToDoListDto = {
            id: list!.id,
            title: list?.title ? list.title : title,
            user: user!,
            userId: user?.id,
            notes: notes,
            createdAt: list?.createdAt ? list.createdAt : new Date(),
            updatedAt: !isNew ? new Date() : undefined 
        }

        await listService.additListAsync(isNew, dto);
        await showModal({title: "Success !", message: `List ${isNew ? "added" : "updated"} successfully !`})
        navigate("/notes");
    }

    const noteList = (
        notes.map(note => {
            return (
                <div className="flex flex-row items-center" key={note.id}>
                    <li id={note.id} className={note.isCompleted ? "line-through" : ""}>{note.content}</li>
                    <hr/>
                    <button type="button" className="delete-note-icon ml-5 w-5 mt-0.5" onClick={() => deleteNote(note.id)}> <TrashIcon /> </button>
                </div>
                
            );
        }));

    return (
            <div className="mt-12">
                <form className="note-body pointer-events-all" id="addit-list" name="addit-list" onSubmit={additAsync}>
                    <div className="relative flex justify-center items-center">
                        <Link to="/notes" className="absolute left-2 mt-auto w-7 back-icon">
                            <ArrowUturnLeftIcon />
                        </Link>
                        <input className="flex-1 bottom-border-only w-fit max-w-15r min-w-52 h-10 text-3xl text-center" autoComplete="off" type="text" placeholder="Add title..." id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <button type="submit" className="absolute right-2 mt-2 w-10 save-icon">
                            { isNew ? <PlusCircleIcon/> : <CheckIcon/>}
                        </button>
                    </div>
                    <div id="notes-list" className="notes ml-7 mt-3 max-h-112">
                        {noteList}
                    </div>
                    <div className="add-note items-center mt-0 ml-19">
                        <input type="text" className="border-none focus:outline-none max-w-15r min-w-20 overflow-hidden text-ellipsis" autoComplete="off" placeholder="Add new note..." id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>
                        <button type="button" className="ml-5 w-5 add-note-icon" onClick={addNote}> <CheckIcon /> </button>
                    </div>
                </form>
            </div>
    );

}