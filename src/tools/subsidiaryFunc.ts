import { Photo } from "../interfaces/IPhoto";

export function getLinkImg({ server, id, secret }: Photo) {
  return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
}
