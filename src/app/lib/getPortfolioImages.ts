export const categoriesFromLabels = {
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

const fetchPhotos = async () => {
  try {
    const response = await fetch(
      "https://get-portfolio-images-348112642196.northamerica-south1.run.app",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectUrl: "https://katjahollaar.myportfolio.com/favorites",
          categories: categoriesFromLabels,
        }),
      }
    )
    const imageUrls = await response.json()

    return imageUrls
  } catch (err) {
    console.error("Error fetching photos:", err)
  }
}
export { fetchPhotos }
