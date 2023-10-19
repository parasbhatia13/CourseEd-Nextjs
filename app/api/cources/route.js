import cources from "./data.json";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
export async function GET(request) {
  return NextResponse.json(cources);
}
// request to get the data from body
export async function POST(request) {
  const { title, description, level, link } = await request.json();
  const newCource = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };
  cources.push(newCource);
  return NextResponse.json(cources);
}
