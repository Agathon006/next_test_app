'use client';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { Todo as TodoType } from '@/schemas';

export function Todo({ todo }: { todo: TodoType }) {
    const { mutate, isPending, isError, error } = useUpdateTodo();

    const handleTodoOnChange = () => {
        if (!isPending) {
            mutate({
                id: todo.id,
                changes: { completed: !todo.completed }
            });
        }
    };

    return (
        <>
            <input
                className="cursor-pointer"
                type="checkbox"
                checked={todo.completed}
                onChange={handleTodoOnChange}
                id={`checkbox-${todo.id}`}
                disabled={isPending}
            />
            <label 
                className={`ml-2 ${isPending ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`} 
                htmlFor={`checkbox-${todo.id}`}
                onClick={(e) => isPending && e.preventDefault()}
            >
                {todo.title}
                {isError && <span className="ml-2 text-sm text-red-500"> (Error: {error?.message || 'Failed to update'})</span>}
            </label>
        </>
    );
}
