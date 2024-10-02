"use client";

import EventForm, { EventFormData } from "@/components/form/form";
import EventFormSkeleton from "@/components/skeleton/form-skeleton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * @component EditEvent
 * @description A client-side component to edit an existing event. It fetches the
 * event data based on the given event ID and allows the user to update the details.
 *
 * @param {Object} params - An object containing URL parameters.
 * @param {string} params.id - The ID of the event to edit.
 *
 * @returns JSX.Element
 */

function EditEvent({ params }: { params: { id: string } }) {
  const { id } = params;
  const [eventData, setEventData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/events/${id}`);
      const data = await response.json();
      setEventData(data);
    }

    fetchData();
  }, [id]);

  const handleSubmit = async (data: EventFormData) => {
    const res = await fetch(`/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.push("/");
    }

    return res;
  };

  return (
    <div className="w-full flex justify-center items-center h-full ">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col gap-5 mt-10 border p-5 rounded-2xl">
        <h1 className="text-3xl font-bold ">Edit Event</h1>
        {eventData === null ? (
          <EventFormSkeleton />
        ) : (
          <EventForm defaultValues={eventData} handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default EditEvent;
