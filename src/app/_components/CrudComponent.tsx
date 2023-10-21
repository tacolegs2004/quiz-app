import { api } from "~/trpc/server";
import Form from "./Form";

async function CrudShowcase() {
  const person = await api.person.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {person ? (
        <p className="mb-2">
          Your name is <span className="capitalize">{person.name}</span>, and
          you are {person.age} years old
        </p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <Form />
    </div>
  );
}
