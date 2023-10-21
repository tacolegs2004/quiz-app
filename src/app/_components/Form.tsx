"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";

export default function Form() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);

  const createPerson = api.person.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setAge("");
      setId(0);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPerson.mutate({ name, age, id });
        console.log(name);
      }}
      className="flex flex-col gap-2"
    >
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        type="text"
        name="Name"
        placeholder="Enter your name"
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        value={age}
        type="text"
        name="Age"
        placeholder="Enter your age"
        id="name"
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-slate-400 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPerson.isLoading}
      >
        {createPerson.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
