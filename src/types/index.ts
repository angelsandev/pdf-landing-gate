// src/types/index.ts
import type { ImageMetadata } from "astro";

export interface RelatedProduct {
  src: ImageMetadata;
  name: string;
  url: string;
}
