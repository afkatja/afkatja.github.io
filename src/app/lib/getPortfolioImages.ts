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
  if (!labels || labels.length === 0) return "Other"

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
    const response = await fetch(projectUrl)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const html = await response.text()

    const doc = parse(html)

    const imageElements = doc.querySelectorAll(".grid--main img")

    const imagesWithLabels = Array.from(imageElements).map(async (img: any) => {
      const url = img.getAttribute("data-src") || img.src

      const response = await fetch(
        "https://vision-api-proxy-348112642196.northamerica-south1.run.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imageUrl: url }),
        }
      )
      const result = await response.json()

      const labels = result.labelAnnotations!
      const labelsSorted = labels
        // ?.filter(label => !!label.topicality)
        // .filter(label => label.topicality > 0.9)
        .map((l: { description: string }) => l.description)

      return {
        url,
        category:
          !!labelsSorted &&
          labelsSorted.length &&
          labelsSorted.filter((l: string) => !!l).length
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
