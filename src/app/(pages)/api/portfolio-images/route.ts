import { NextRequest, NextResponse } from "next/server"
import { getPortfolioImageUrls } from "../../../lib/getPortfolioImages"

export async function GET(req: NextRequest) {
  const urlParam = req.nextUrl.searchParams.get("url")
  if (!urlParam) {
    return NextResponse.json({ error: "url is required" }, { status: 400 })
  }

  try {
    // Validate URL
    let parsed: URL
    try {
      parsed = new URL(urlParam)
    } catch {
      return NextResponse.json({ error: "invalid url" }, { status: 422 })
    }

    // Optional allowlist via env: ALLOWED_ALBUM_HOSTS="example.com,flickr.com"
    const allowlist = (process.env.ALLOWED_ALBUM_HOSTS || "")
      .split(",")
      .map(h => h.trim())
      .filter(Boolean)
    if (allowlist.length > 0 && !allowlist.includes(parsed.hostname)) {
      return NextResponse.json({ error: "host not allowed" }, { status: 403 })
    }
    const imageUrls = await getPortfolioImageUrls(parsed.toString())

    return NextResponse.json({ imageUrls }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "internal server error" },
      { status: 500 }
    )
  }
}
