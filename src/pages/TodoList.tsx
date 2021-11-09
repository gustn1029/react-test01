import React from "react";
import { useRef, useState } from "react";

interface Todo {
    id:number,
    text: string
}

function TodoList() {

    const todoRef = useRef<HTMLInputElement>(null);

    const [todo, setTodo] = useState<Todo[]>([{
        id:0,
        text: ''
    }]);

    const confirm = () => {
        if(todoRef && todoRef.current) {
            const newTodo = todoRef.current.value;
            setTodo([...todo, {
                id: todo[todo.length-1].id + 1,
                text: newTodo
            }]);
        }
    }

    return (
        <>
        <h1>Todo List</h1>
            <input type="text" ref={todoRef} />
            <button onClick={confirm}>click</button>
            <ul>
                {todo.map((v, index) => {
                    if(index > 0) {
                        return <li key={v.id}>{v.text}</li>
                    }
                })}
            </ul>
        </>
    )
}

export default TodoList;