'use client';
import { useUpdateTodo } from '@/hooks/todos/useUpdateTodo';
import { useDeleteTodo } from '@/hooks/todos/useDeleteTodo';
import { Todo as TodoType } from '@/schemas/todos';

export function Todo({ todo }: { todo: TodoType }) {
    const { mutate: updateMutate, isPending: isUpdatePending, isError: isUpdateError, error: updateError } = useUpdateTodo();
    const { mutate: deleteMutate, isPending: isDeletePending, isError: isDeleteError, error: deleteError } = useDeleteTodo();

    const handleTodoOnChange = () => {
        if (!isUpdatePending) {
            updateMutate({
                id: todo.id,
                changes: { completed: !todo.completed }
            });
        }
    };

    const handleTodoOnDelete = () => {
        if (!isDeletePending) {
            deleteMutate({
                id: todo.id
            });
        }
    };

    const isPending = isUpdatePending || isDeletePending;
    const isError = isUpdateError || isDeleteError;
    const error = updateError || deleteError;

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
                className={`ml-2 mr-2 ${isPending ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                htmlFor={`checkbox-${todo.id}`}
                onClick={(e) => isPending && e.preventDefault()}
            >
                {todo.title}
                {isError && <span className="ml-2 text-sm text-red-500"> (Error: {error?.message || 'Operation failed'})</span>}
            </label>
            <button
                onClick={handleTodoOnDelete}
                className="bg-red-500 text-white px-1 rounded cursor-pointer"
                type="button"
                disabled={isPending}
            >
                X
            </button>
        </>
    );
}
