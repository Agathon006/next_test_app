import { Todo } from '@/components/Todo';
import { getTodos } from '@/service/queries/getTodos';

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <p className="mt-2 text-2xl">Todos page</p>
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
