import {useContext, createContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"ToDo msg",
            completed:false,
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) =>{},
    deleteToDo: (id) => {},
    toggleComplete: (id, msg) => {}
});

export const useToDo = () =>{
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider
