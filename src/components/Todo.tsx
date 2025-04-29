'use client';
import { Todo as TodoType } from '@/types';
import { updateTodoAction } from '@/actions/todoActions';

export function Todo({ todo }: { todo: TodoType }) {
  const handleTodoOnChange = async () => {
    await updateTodoAction(todo.id, !todo.completed);
  };

  return (
    <>
      <input
        className="cursor-pointer"
        type="checkbox"
        checked={todo.completed}
        onChange={handleTodoOnChange}
        id={`checkbox-${todo.id}`}
      />
      <label className="ml-2 cursor-pointer" htmlFor={`checkbox-${todo.id}`}>
        {todo.title}
      </label>
    </>
  );
}
