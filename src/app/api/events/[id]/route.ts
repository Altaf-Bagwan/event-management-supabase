import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

/**
 * @function GET
 * @description Fetches a single event from the Supabase database by its ID.
 *
 * This function retrieves a specific record from the "event" table using
 * the provided event ID. If an error occurs during the data retrieval process,
 * it catches the error and logs it, returning a generic error message to the client.
 *
 * @param {Request} request - The incoming request object.
 * @param {Object} params - An object containing the URL parameters.
 * @param {string} params.id - The ID of the event to retrieve.
 * @async
 * @returns {Promise<NextResponse>}
 *  - On success: Returns a JSON response containing the event data.
 *  - On error: Returns a JSON response with an error message and a status of 500.
 *
 * @throws Will throw an error if there is an issue with the Supabase query.
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const { data, error } = await supabase
      .from("event")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      throw error;
    }
    return NextResponse.json(data);
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
 * @function PUT
 * @description Updates an existing event in the Supabase database.
 *
 * This function expects a PUT request containing a JSON body with the
 * updated event details. It updates the event corresponding to the provided ID.
 * If an error occurs during the update process, it logs the error and returns
 * a generic error message to the client.
 *
 * @param {Request} request - The incoming request object containing updated event details.
 * @param {Object} params - An object containing the URL parameters.
 * @param {string} params.id - The ID of the event to update.
 * @async
 * @returns {Promise<NextResponse>}
 *  - On success: Returns a JSON response with a success message.
 *  - On error: Returns a JSON response with an error message and a status of 500.
 *
 * @throws Will throw an error if there is an issue with the Supabase query.
 */
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const updatedData = await request.json();

    const { error } = await supabase
      .from("event")
      .update(updatedData)
      .eq("id", id);
    if (error) {
      throw error;
    }
    return NextResponse.json({
      message: "Successfully event updated",
    });
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
 * @function DELETE
 * @description Deletes an event from the Supabase database by its ID.
 *
 * This function removes a specific event from the "event" table using
 * the provided event ID. If an error occurs during the deletion process,
 * it logs the error and returns a generic error message to the client.
 *
 * @param {Request} request - The incoming request object.
 * @param {Object} params - An object containing the URL parameters.
 * @param {string} params.id - The ID of the event to delete.
 * @async
 * @returns {Promise<NextResponse>}
 *  - On success: Returns a JSON response with a success message.
 *  - On error: Returns a JSON response with an error message and a status of 500.
 *
 * @throws Will throw an error if there is an issue with the Supabase query.
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const { error } = await supabase.from("event").delete().eq("id", id);
    if (error) {
      throw error;
    }
    return NextResponse.json({
      message: "Successfully event deleted",
    });
  } catch (err) {
    // Log unexpected errors
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
