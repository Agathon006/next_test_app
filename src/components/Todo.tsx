'use client'
import { Todo as TodoType } from "@/types"
import { useState } from "react"
import { updateTodoAction } from "@/actions/todoActions"

export function Todo({ todo }: { todo: TodoType }) {
    const [done, setDone] = useState<boolean>(todo.completed);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleTodoOnChange = async () => {
        setIsLoading(true);
        try {
            setDone(prevState => !prevState);
            await updateTodoAction(todo.id, !done);
        } catch {
            setDone(prevState => !prevState);
            console.log('Error changing todo');
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) return <><span>Updating...</span></>;

    return (
        <>
            <input
                className="cursor-pointer"
                type="checkbox"
                checked={done}
                onChange={handleTodoOnChange}
                id={`checkbox-${todo.id}`}
            />
            <label className="ml-2 cursor-pointer" htmlFor={`checkbox-${todo.id}`}>
                {todo.title}
            </label>
        </>
    );
}