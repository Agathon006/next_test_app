import { DataService } from "@/services/dataService";
import Link from "next/link";

export default async function UsersPage() {
  const users = await DataService.getUsers();

  return (
    <div>
      <p className="mt-2 text-2xl">Users page</p>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mt-2">
            <Link href={`users/${user.id}`}>
              {user.name} {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
