"use client";
import EventForm, { EventFormData } from "@/components/form/form";

/**
 * @component AddEvents
 * @description This component renders a form for adding new events. It uses the `EventForm`
 * component to handle form submission and pre-fills the form with default values.
 *
 * @returns JSX.Element
 */

function AddEvents() {
  const defaultValues = {
    name: "",
    description: "",
    date: "",
    time: "",
  };

  const handleSubmit = async (data: EventFormData) => {
    const res = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res;
  };
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col gap-5 mt-10 border p-5 rounded-2xl">
        <h1 className="text-3xl font-bold">Add Events</h1>
        <EventForm defaultValues={defaultValues} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEvents;
