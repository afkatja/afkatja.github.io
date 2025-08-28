import { parse } from "node-html-parser"
import vision from "@google-cloud/vision"

const categories = {
  Wildlife: [
    "animal",
    "bird",
    "mammal",
    "fish",
    "insect",
    "wildlife",
    "frog",
    "toucan",
  ],
  Portrait: [
    "person",
    "face",
    "selfie",
    "smile",
    "model",
    "portrait",
    "dreadlocks",
  ],
  Landscape: [
    "mountain",
    "river",
    "sky",
    "scenery",
    "landscape",
    "valley",
    "road",
    "sea",
    "beach",
    "ocean",
    "car",
    "vehicle",
  ],
  Architecture: ["building", "city", "bridge", "tower", "architecture"],
  Abstract: ["pattern", "texture", "design", "shape", "abstract"],
}

/**
 * Picks the first matching category for an array of labels.
 * @param {string|undefined[]} labels - The labels to check.
 * @returns {string|undefined} The category name, or undefined if no match is found.
 */
function pickCategory(labels: (string | undefined | null)[]): string {
  if (!labels || labels.length === 0) return undefined

  const normalizedLabels = labels
    .filter(label => typeof label === "string" && !!label)
    .map(label => (label as string).toLowerCase())

  for (const [category, keywords] of Object.entries(categories)) {
    if (
      keywords.some(keyword =>
        normalizedLabels.some(label => label === keyword.toLowerCase())
      )
    ) {
      return category
    }
  }

  return "Other"
}

async function getPortfolioImageUrls(projectUrl: string) {
  const imageUrls: { url: string; category: string }[] = []
  try {
    const { VISION_API_KEY } = process.env
    if (!VISION_API_KEY) {
      throw new Error("VISION_API_KEY is not set in environment variables")
    }
    const credentialsJson = JSON.parse(
      Buffer.from(VISION_API_KEY, "base64").toString("utf-8")
    )
    const visionClient = new vision.ImageAnnotatorClient({
      credentials: {
        private_key: credentialsJson.private_key?.replace(/\\n/g, "\n"),
        client_email: process.env.VISION_CLIENT_EMAIL,
      },
    })
    const response = await fetch(projectUrl)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const html = await response.text()

    const doc = parse(html)

    const imageElements = doc.querySelectorAll(".grid--main img")

    const imagesWithLabels = Array.from(imageElements).map(async (img: any) => {
      const url = img.getAttribute("data-src") || img.src

      const [result] = await visionClient.labelDetection(url)
      const labels = result.labelAnnotations!
      const labelsSorted = labels
        // ?.filter(label => !!label.topicality)
        // .filter(label => label.topicality > 0.9)
        .map(l => l.description)

      return {
        url,
        category:
          !!labelsSorted &&
          labelsSorted.length &&
          labelsSorted.filter(l => !!l).length
            ? pickCategory(labelsSorted)
            : "Other",
      }
    })
    const images = await Promise.all(imagesWithLabels)
    imageUrls.push(...images)

    return imageUrls
  } catch (error) {
    console.error("Error fetching or parsing album:", error)
    return []
  }
}

export { getPortfolioImageUrls }
