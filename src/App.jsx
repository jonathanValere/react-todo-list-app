import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt);
import "./App.css";
import Task from "./components/Task";

function App() {
  // STATES ----------------------------------------
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  // GESTIONNAIRES --------------------------------------
  //Gestion onclick ajouter une tâche ---------
  const handleAddTask = () => {
    // Création d'une copie de la liste
    const newList = [...list];
    // Le champs est rempli, on insère la tâche dans la liste
    if (task) {
      // Insertion de la tâche dans la nouvelle liste
      newList.push({ id: list.length + 1, nameTask: task, done: false });
      // Mise à jour le state (list)
      setList(newList);
      setTask("");
    }
  };

  // Tâche réalisée ou non --------
  const handleTaskDone = (id) => {
    // Création d'une copie de la liste
    const newList = [...list];
    // Parcourir la nouvelle liste
    newList.map((task) => {
      // Mettre la tâche à true
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    // ! Les tâches barrées devront être affichées en bas de la liste ---
    // Séparation en 2 tableaux. Un pour les tâches réalisées et l'autre pour les tâches à faire
    const listDone = newList.filter((task) => task.done === true);
    const listToDo = newList.filter((task) => task.done === false);
    // Fusionner les tableaux en mettant insérant les tâches réalisées à la fin de la liste
    const newListUpdated = [...listToDo, ...listDone];
    // Mettre à jour le state (list) avec la copie ----
    return setList(newListUpdated);
  };

  // Supprimer la tâche-------
  const handleDeleteTask = (id) => {
    // Création d'une copie de la liste
    const newList = [...list];
    // Retirer la tâche dont l'id est renseigné en argument
    const newListUpdated = newList.filter((task) => task.id !== id);
    // Mise à jour le state (list) avec la copie
    return setList(newListUpdated);
  };

  // console.log(list);

  // Render ----------------------------------------
  return (
    <main>
      {/* Afficher un texte indiquant que la liste est vide */}
      <h2>{list.length > 0 ? "Tâches à effectuer" : "No tasks"}</h2>
      <ul>
        {/* Vérification que la liste n'est pas vide */}
        {list.length > 0 &&
          // Si pas vide, boucler sur ma tableau représentant toutes mes tâches
          list.map((task) => (
            <Task
              key={task.id}
              name={task.nameTask}
              id={task.nameTask}
              onChange={() => handleTaskDone(task.id)}
              onClick={() => handleDeleteTask(task.id)}
              done={task.done}
            />
          ))}
      </ul>
      <div>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="New task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button onClick={handleAddTask}>Add task</button>
      </div>
    </main>
  );
}

export default App;
