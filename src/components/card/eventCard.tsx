"use client";

import Dialogs from "@/components/dialog/dialog";
import { Event } from "@/components/events/events";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EventCardProps {
  event: Event;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

function EventCard({ event, setEvents }: EventCardProps) {
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const res = await fetch(`/api/events/${event.id}`, {
      method: "DELETE",
    });

    const response = await res.json();

    if (res.ok) {
      setOpen(false);
      setEvents((prevEvents) => prevEvents.filter((e) => e.id !== event.id));
      toast({
        title: "Event Deleted",
        description: response.message,
      });
    }
  };
  return (
    <div className="p-3 w-full border rounded">
      <div className="flex justify-between">
        <div>
          <h1 className=" text-xl sm:text-2xl font-bold">{event.name}</h1>
          <p>{event.description}</p>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-1 sm:gap-3">
            <p className=" text-xs sm:text-lg">{event.date}</p>
            <p className="text-xs sm:text-lg">{event.time}</p>
          </div>
          <div className="flex gap-3">
            <Pencil
              className="cursor-pointer"
              onClick={() => router.push(`/edit-event/${event.id}`)}
            />
            <Trash2 className="cursor-pointer" onClick={() => setOpen(true)} />
            <Dialogs
              isOpen={open}
              handleSubmit={handleDelete}
              setOpen={setOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
