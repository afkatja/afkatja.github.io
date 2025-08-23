import { Camera } from "lucide-react"

const photos = [
  {
    id: 1,
    src: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/3a26f04b0fe122445edea9c9acc395f7/a823993b-c23b-492e-a91d-86e6f14fef5f_rw_1920.jpg?h=addc9d2e7fe9db326d76d07a5d9461b5",
    title: "Reptile",
    category: "wildlife",
    // likes: 145,
    height: "h-80",
  },
  {
    id: 2,
    src: "https://pro2-bar-s3-cdn-cf5.myportfolio.com/3a26f04b0fe122445edea9c9acc395f7/69be866e-bcc9-4fd6-a707-f4815810bc2c_rw_1920.jpg?h=8824ab7819b091fb5efd81d7d361c55a",
    title: "Red eyed tree frog",
    category: "wildlife",
    // likes: 89,
    height: "h-96",
  },
  {
    id: 3,
    src: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/3a26f04b0fe122445edea9c9acc395f7/22bc2a98-b077-42bd-a426-92b83a4c8828_rw_1920.jpg?h=984381309b94ce3131d1fe2981014076",
    title: "Daniel and Pablo",
    category: "portrait",
    // likes: 76,
    height: "h-72",
  },
  {
    id: 4,
    src: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/3a26f04b0fe122445edea9c9acc395f7/2fb3d247-b87f-4075-9783-f19397fc35bd_rw_1920.jpg?h=8e1776665e434a170b5fdc01dd6c8b4a",
    title: "Ocean Waves",
    category: "landscape",
    // likes: 234,
    height: "h-64",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc1NTYwNjM3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Natural Light",
    category: "portrait",
    likes: 167,
    height: "h-88",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1711289469579-b01082b4e1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc1NTYzMTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Abstract Vision",
    category: "creative",
    likes: 92,
    height: "h-96",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1742365915135-36320e7ba252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTU2MzEwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Forest Path",
    category: "landscape",
    likes: 198,
    height: "h-72",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc1NTYwNjM3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Urban Portrait",
    category: "portrait",
    likes: 143,
    height: "h-80",
  },
]

enum Category {
  All = "all",
  Portrait = "portrait",
  Landscape = "landscape",
  Wildlife = "wildlife",
}

const categories = [
  { id: Category.All, label: "All Photos", icon: Camera },
  { id: Category.Portrait, label: "Portrait", icon: Camera },
  { id: Category.Landscape, label: "Landscape", icon: Camera },
  { id: Category.Wildlife, label: "Wildlife", icon: Camera },
]
export { photos, categories, Category }
