import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertAmountFromMilounits(amount: number){
  return amount/1000;
}

export function convertAmountToMilounits(amount: number){
  return Math.round(amount * 1000);
}