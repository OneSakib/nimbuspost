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

export async function GET(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "N/A";
    const userAgent = request.headers.get("user-agent") || "N/A";

    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoRes.json();

    const visitorInfo = {
      ip,
      userAgent,
      country: geoData?.country_name || "N/A",
      city: geoData?.city || "N/A",
      region: geoData?.region || "N/A",
      country_capital: geoData?.country_capital || "N/A",
      postal: geoData?.postal || "N/A",
      latitude: geoData?.latitude || "N/A",
      longitude: geoData?.longitude || "N/A",
      date: new Date().toISOString(),
    };
    // Save to MongoDB
    const client = await connectToDatabase();
    const db = client.db(MONGO_DB);
    const exists = await db.collection("visitors").findOne({
      ip: visitorInfo.ip,
      city: visitorInfo.city,
    });
    if (!exists) {
      await db.collection("visitors").insertOne(visitorInfo);
    }
    return NextResponse.json({ success: true, message: "Visitor logged" });
  } catch (error) {
    console.error("Error logging visitor:", error);
    return NextResponse.json(
      { success: false, error: "Failed to log visitor" },
      { status: 500 }
    );
  }
}
