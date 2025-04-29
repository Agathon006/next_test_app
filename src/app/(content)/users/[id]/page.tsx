import { getUserById } from '@/service/queries/getUserById';

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const user = await getUserById(id);

  return (
    <div className="mt-2">
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <section>
        <h3>Address</h3>
        <p>Street {user.address.street}</p>
        <p>Suite {user.address.suite}</p>
        <p>City {user.address.city}</p>
        <p>Zipcode {user.address.zipcode}</p>
      </section>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
