interface Items {
    id: number; // Unique identifier for the item
    name: string; // Name of the item displayed to the user
    description?: string; // Optional description of the item
    price: number; // Price of the item
    image?: string; // Optional URL or path to an image of the item
    rating: number;
  }