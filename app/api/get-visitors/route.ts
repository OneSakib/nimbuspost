import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI!;
const MONGO_DB = process.env.MONGO_DB;

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const client = await MongoClient.connect(MONGO_URI);
  cachedClient = client;
  return client;
}

export async function GET(req: NextRequest) {
  try {
    const client = await connectToDatabase();
    const db = client.db(MONGO_DB);
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "50", 50);
    const skip = parseInt(req.nextUrl.searchParams.get("skip") || "0", 10);
    const visitors = await db
      .collection("visitors")
      .find({})
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json(visitors);
  } catch (error) {
    console.error("Error fetching visitors:", error);
    return NextResponse.json(
      { error: "Failed to fetch visitors" },
      { status: 500 }
    );
  }
}
