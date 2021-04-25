import { makeAutoObservable } from "mobx";
import { Photo } from "../interfaces/IPhoto";

class StoreUserPhoto {
  photos: Photo[];

  constructor() {
    const arr = localStorage.getItem("PHOTO");
    this.photos = arr ? JSON.parse(arr) : [];
    makeAutoObservable(this);
  }

  addPhoto(photo: Photo) {
    this.photos = [...this.photos, photo];
    this.saveLocalStorage()
  }

  dletePhoto(id: string) {
    this.photos = this.photos.filter((el) => el.id !== id);
    this.saveLocalStorage()
  }

  saveLocalStorage() {
    localStorage.setItem("PHOTO", JSON.stringify(this.photos));
  }
}

export default new StoreUserPhoto();
