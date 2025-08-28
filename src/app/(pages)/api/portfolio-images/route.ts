import { NextRequest, NextResponse } from "next/server"
import { getPortfolioImageUrls } from "@/app/lib/getPortfolioImages"

export async function GET(req: NextRequest, res: NextResponse) {
  const url = req.nextUrl.searchParams.get("url")
  if (typeof url !== "string") {
    return NextResponse.json({ error: "url is required" }, { status: 400 })
  }

  try {
    const imageUrls = await getPortfolioImageUrls(url)
    return NextResponse.json({ imageUrls }, { status: 200 })
  } catch (error) {
    console.error("Error fetching or parsing album:", error)
    NextResponse.json(
      { error: "Error fetching or parsing album" },
      { status: 500 }
    )
  }
}
