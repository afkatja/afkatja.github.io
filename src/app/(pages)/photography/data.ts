import { Camera } from "lucide-react"
import { PhotoCard } from "./PhotoCard"

enum Category {
  All = "all",
  Portrait = "portrait",
  Landscape = "landscape",
  Wildlife = "wildlife",
  Macro = "macro",
  Other = "other",
  Architecture = "architecture",
  Abstract = "abstract",
}

const categories = [
  { id: Category.All, label: "All Photos", icon: Camera },
  { id: Category.Portrait, label: "Portrait", icon: Camera },
  { id: Category.Landscape, label: "Landscape", icon: Camera },
  { id: Category.Wildlife, label: "Wildlife", icon: Camera },
  { id: Category.Macro, label: "Macro", icon: Camera },
  { id: Category.Architecture, label: "Architecture", icon: Camera },
  { id: Category.Abstract, label: "Abstract", icon: Camera },
  { id: Category.Other, label: "Other", icon: Camera },
]

export const getPresentCategories = (photos: PhotoCard[]): Category[] => {
  // 1. Get unique category strings from the photos
  const photoCategoryStrings = new Set<string>(
    photos.map(photo => photo.category.toLowerCase())
  )

  // 2. Get all possible values from the Category enum, excluding 'All'
  const allCategoryValues = Object.values(Category) as Category[]
  const enumCategoriesToFilter = allCategoryValues.filter(
    category => category !== Category.All
  )

  // 3. Filter the enum values to find those present in the photo data
  const presentCategories = enumCategoriesToFilter.filter(category =>
    photoCategoryStrings.has(category)
  )

  return presentCategories
}

export { categories, Category }
