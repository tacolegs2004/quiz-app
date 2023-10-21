import { api } from "~/trpc/server";
import Form from "./Form";

async function CrudShowcase() {
  const person = await api.person.getLatest.query();

  return (
    <div className="w-full max-w-xs flex-col items-center justify-center">
      {person ? (
        <p className="mb-4">
          Your name is {person.name}, and you are {person.age} years old `
        </p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <section className="w-56">
        <Form />
      </section>
    </div>
  );
}

export default CrudShowcase;
