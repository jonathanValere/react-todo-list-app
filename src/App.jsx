import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt);

import "./App.css";

function App() {
  // STATES ----------------------------------------
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  // GESTIONNAIRES --------------------------------------
  //Gestion onclick ajouter une tâche ---------
  const handleAddTask = () => {
    // Création d'une copie de la liste
    const newList = [...list];
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
    // Mettre à jour le state (list) avec la copie
    return setList(newList);
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
      {/* Afficher un texte si la liste est vide */}
      {list.length > 0 ? <p>Tâches à effectuer</p> : <p>No tasks</p>}
      <ul>
        {/* Vérification que la liste n'est pas vide */}
        {list.length > 0 &&
          // Si pas vide, boucler sur ma tableau représentant toutes mes tâches
          list.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                name={task.nameTask}
                id={task.nameTask}
                onChange={() => handleTaskDone(task.id)}
              />
              <span className={task.done ? "task-done" : ""}>
                {task.nameTask}
              </span>{" "}
              <span onClick={() => handleDeleteTask(task.id)}>X</span>
            </li>
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
