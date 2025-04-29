'use client';
import { useRouter } from 'next/navigation';

export const ReturnButton = () => {
  const router = useRouter();

  return (
    <button
      className="p-2 cursor-pointer text-yellow-400 w-min"
      type="button"
      onClick={() => router.back()}
    >
      Return
    </button>
  );
};
