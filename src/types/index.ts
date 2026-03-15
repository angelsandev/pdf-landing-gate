// src/types/index.ts
import type { ImageMetadata } from "astro";

export interface RelatedProduct {
  src: ImageMetadata;
  name: string;
  url: string;
}
export interface FAQItem {
  question: string;
  answer: string;
}