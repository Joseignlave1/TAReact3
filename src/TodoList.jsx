import { useState } from "react";
import "./TodoList.css";
const TodoList = () => {
    const tasksList = ["Lavar Ropa", "Ir a entrenar"];
    const [tasks, setTasks] = useState(tasksList);
    const [inputValue, setInputValue] = useState("");
    
    const addTask = () => {
        if(inputValue.trim()) {
            setTasks([...tasks, inputValue ])
            setInputValue(""); //Limpiamos el valor del input despues de añadir la tarea
        }
    }
    const removeTask = (indexItem) => {
        setTasks((prevState) => {
            return prevState.filter((item, index) => index !== indexItem)
        })
    }
    return(
        <div className="component-container">
            <p>Bienvenido a este TodoList Improvisado</p>
            <label id="text" htmlFor="tarea">Escriba la tarea que quiere añadir</label>
            <input 
            type="text" 
            id="tarea"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Añada su tarea"
            />
            <ul className="task-list">
                {tasks.map((item, index) => {
                        return <div>
                            <p id="task-item">{item}</p>
                            <button id="button-delete-task" onClick={() => removeTask(index)}>Eliminar Tarea</button>
                        </div>
                    })}
            </ul>
            <button id="button-add-task" onClick={addTask}>Añadir Tarea</button>
        </div>
    )
}
export default TodoList;