import { AddingTodoInput } from '@/components/todos/addingTodoInput';
import { Todo } from '@/components/todos/Todo';
import { getTodos } from '@/service/queries/todos/getTodos';

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <p className="mt-2 text-2xl">Todos page</p>
      <AddingTodoInput />
      {/* <SuspenseAddTodoInput /> */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="mt-2">
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
