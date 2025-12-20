
import { useEffect, useState } from "react";
import ToDoNote from "../../components/notes/ToDoNote";
import { ToDoList } from "../../data/ToDoList";
import { useAuth } from "../../hooks/services-hooks/AuthHooks";
import { useServices } from "../../hooks/ServicesHooks";
import { useModal } from "../../hooks/ModalHooks";

export default function Notes() {
  const { listService } = useServices();
  const { currentUser } = useAuth();
  const { showModal } = useModal();

  const [lists, setLists] = useState<ToDoList[] | null>(null);

  useEffect(() => {
    async function loadLists(){
      if(currentUser) {
        const userLists = await listService.getUserListsAsync(currentUser.id);

        setLists(userLists)
      }
    }

    loadLists();
  }, [currentUser, listService]);

  async function deleteList(listId: string){
    const confirmed = await showModal({
      title: "Delete confirmation",
      message: "Are you sure you want to delete this list ?",
      hasConfirm: true
    });

    if (!confirmed) return;

    const isDeleted = await listService.deleteListAsync(listId);

    if(isDeleted){
      await showModal({
        title: "Success",
        message: "You have successfully deleted the list."
      });
      setLists(prev => prev?.filter(l => l.id !== listId) || null);
    }
  }

  if(!lists) 
    return (<div>User has no lists yet.</div>);
  
  return ( 
      <div className="flex flex-row flex-wrap justify-center max-w-75r">
        {lists.map(list => (
        <ToDoNote props={{data: list, deleteList: deleteList}}/>
        ))}
      </div>
    );
}
