import { Photo } from "../interfaces/IPhoto";

class StoreUserPhoto {
  photos: Photo[];

  constructor() {
    const arr = localStorage.getItem("PHOTO");
    this.photos = arr ? JSON.parse(arr) : [];
  }

  addPhoto(photo: Photo) {
    this.photos = [...this.photos, photo];
  }

  dletePhoto(id: string) {
    this.photos = this.photos.filter((el) => el.id !== id);
  }

  saveLocalStorage() {
    localStorage.setItem("PHOTO", JSON.stringify(this.photos));
  }
}

export default new StoreUserPhoto();
