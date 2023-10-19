import { NextResponse } from "next/server";
import cources from "../data.json"; // Import the course data from a JSON file

// Define an asynchronous GET request handler
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query"); // Extract the 'query' parameter from the URL

  // Filter the 'cources' array based on the query
  const filterCources = cources.filter((cource) => {
    // Check if the lowercase title of a course includes the lowercase query
    return cource.title.toLowerCase().includes(query.toLowerCase());
  });

  // Return a JSON response containing the filtered courses
  return NextResponse.json(filterCources);
}
