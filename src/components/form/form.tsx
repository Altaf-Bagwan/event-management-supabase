"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export type EventFormData = {
  name: string;
  description: string;
  date: string;
  time: string;
};

type Props = {
  defaultValues: EventFormData;
  handleSubmit: (data: EventFormData) => Promise<Response>;
};

const EventForm = ({ defaultValues, handleSubmit }: Props) => {
  const { toast } = useToast();

  const form = useForm<EventFormData>({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: EventFormData) => {
    const res = await handleSubmit(data);

    const response = await res.json();

    if (res.ok) {
      toast({
        title: "Event",
        description: response.message,
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: response.error,
      });
      throw new Error(`Error: ${response.error}`);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Event Name */}
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "Event Name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormControl>
                <Input placeholder="Event Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Event Description" {...field} />
              </FormControl>
              <FormDescription>
                Provide a brief description of the event.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date */}
        <FormField
          control={form.control}
          name="date"
          rules={{ required: "Date is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>Select the event date.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Time */}
        <FormField
          control={form.control}
          name="time"
          rules={{ required: "Time is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormDescription>Select the event time.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EventForm;
