"use client";
import EventCard from "@/components/card/eventCard";
import EventCardSkeleton from "@/components/skeleton/event-skeleton";
import React, { useEffect, useState } from "react";

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  created_at: string;
}

/**
 * @component Events
 * @description A client-side component that fetches and displays a list of events.
 * It shows a skeleton loader while the data is being fetched and handles various
 * states such as loading, no events found, or displaying the event list.
 *
 * @returns JSX.Element
 */
function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchEvents = async () => {
    setIsLoading(true);
    const response = await fetch("/api/events");
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      throw new Error(data.error || "Failed to fetch events");
    }

    setEvents(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  /**
   * @function renderContent
   * @description Renders the appropriate content based on the loading state and
   * the availability of event data.
   *
   * - If `isLoading` is true, it shows the `EventCardSkeleton` loader.
   * - If there are no events, it displays a "No events found" message.
   * - If events are available, it maps over the event list and renders each
   *   event using the `EventCard` component.
   *
   * @returns JSX.Element
   */
  const renderContent = () => {
    if (isLoading) {
      return <EventCardSkeleton />;
    }

    if (events.length === 0) {
      return <p className="text-center">No events found.</p>;
    }

    return events.map((event) => (
      <EventCard key={event.id} event={event} setEvents={setEvents} />
    ));
  };

  return (
    <div className="flex flex-col gap-5 w-[90%] sm:w-[80%]">
      {renderContent()}
    </div>
  );
}

export default Events;
