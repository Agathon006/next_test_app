'use client';

import { useState } from 'react';
import { useCreateTodo } from '@/hooks/todos/useCreateTodo';

export const AddingTodoInput = () => {
    const [title, setTitle] = useState('');
    const { mutate, isPending, isError, error } = useCreateTodo();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim() && !isPending) {
            mutate({ title }, {
                onSuccess: () => {
                    setTitle('');
                }
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-2 items-center"
        >
            <input
                type="text"
                value={title}
                maxLength={50}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add new todo"
                className="border p-2 rounded"
                disabled={isPending}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                disabled={isPending || !title.trim()}
            >
                {isPending ? 'Adding...' : 'Add'}
            </button>
            {isError && (
                <p className="text-red-500 text-sm">{error?.message || 'Failed to create todo'}</p>
            )}
        </form>
    );
};

/* 
// Альтернативная реализация с использованием Suspense вместо React Query

import { useState, use, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createTodoAction } from '@/actions/todos/createTodoAction';

// Хук для работы с Suspense
function useSuspenseTodo() {
  const [todoPromise, setTodoPromise] = useState<Promise<any> | null>(null);
  
  const createTodo = (title: string) => {
    const promise = createTodoAction({ title });
    setTodoPromise(promise);
    return promise;
  };
  
  const result = todoPromise ? use(todoPromise) : null;
  
  return {
    createTodo,
    result
  };
}

// Компонент формы с Suspense
function AddTodoForm() {
  const [title, setTitle] = useState('');
  const { createTodo } = useSuspenseTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      createTodo(title)
        .then(() => setTitle(''))
        .catch(() => {}); // Ошибки будут обрабатываться ErrorBoundary
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={!title.trim()}
      >
        Add
      </button>
    </form>
  );
}

// Компонент с обработкой ошибок и состояния загрузки
export function SuspenseAddTodoInput() {
  return (
    <ErrorBoundary
      fallback={<div className="text-red-500">Something went wrong adding the todo</div>}
    >
      <Suspense fallback={<div>Adding todo...</div>}>
        <AddTodoForm />
      </Suspense>
    </ErrorBoundary>
  );
}

// Преимущества Suspense:
// - Встроенная поддержка в React
// - Декларативный подход к обработке загрузки
// - Возможность координировать несколько загрузок

// Недостатки Suspense:
// - Сложнее обрабатывать локальные ошибки - требуется ErrorBoundary
// - Нет встроенной поддержки для отмены запросов, повторных попыток
// - Сложнее управлять состоянием загрузки на уровне отдельных компонентов
// - Нет встроенного кэширования и инвалидации кэша
*/
