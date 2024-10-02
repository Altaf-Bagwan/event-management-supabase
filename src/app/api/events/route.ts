import { supabase } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

/**
 * @function GET
 * @description Fetches a list of events from the Supabase database.
 *
 * This function retrieves all records from the "event" table,
 * ordering them by the "created_at" timestamp in ascending order.
 * If an error occurs during the data retrieval process, it catches the error
 * and logs it, returning a generic error message to the client.
 *
 * @async
 * @returns {Promise<NextResponse>}
 *  - On success: Returns a JSON response containing the list of events.
 *  - On error: Returns a JSON response with an error message and a status of 500.
 *
 * @throws Will throw an error if there is an issue with the Supabase query.
 */
export async function GET() {
  try {
    const { data: events, error } = await supabase
      .from("event")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      throw error;
    }

    return NextResponse.json(events);
  } catch (err) {
    // Log unexpected errors
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

/**
 * @function POST
 * @description Creates a new event in the Supabase database.
 *
 * This function expects a POST request containing a JSON body
 * with the event details. It checks for the presence of required fields
 * (name, description, date, time) and inserts the new event into
 * the "event" table. If any field is missing or an error occurs,
 * it returns an appropriate error message.
 *
 * @param {NextRequest} req - The incoming request object containing event details.
 * @async
 * @returns {Promise<NextResponse>}
 *  - On success: Returns a JSON response with a success message and a status of 200.
 *  - On error: Returns a JSON response with an error message and a status of 500 or 400 depending on the issue.
 */
export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Invalid Method" }, { status: 400 });
  }
  try {
    const body = await req.json();
    const { name, description, date, time } = body;

    if (!name || !description || !date || !time) {
      return NextResponse.json({ message: "Invalid body" }, { status: 400 });
    }

    const { error } = await supabase
      .from("event")
      .insert({ name, description, date, time });
    if (error) {
      throw error;
    }

    return NextResponse.json(
      { message: "Successfully event created" },
      { status: 200 }
    );
  } catch (err) {
    // Log unexpected errors
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
