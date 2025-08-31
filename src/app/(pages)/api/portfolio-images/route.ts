import { NextRequest, NextResponse } from "next/server"
import { getPortfolioImageUrls } from "../../../lib/getPortfolioImages"

export async function GET(req: NextRequest) {
  const urlParam = req.nextUrl.searchParams.get("url")
  if (!urlParam) {
    return NextResponse.json({ error: "url is required" }, { status: 400 })
  }
  try {
    const imageUrls = await getPortfolioImageUrls(urlParam.toString())
    return NextResponse.json({ imageUrls }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    )
  }
}
