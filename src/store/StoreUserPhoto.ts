import { makeAutoObservable } from "mobx";
import { Api } from "../api/Api";
import { Photo } from "../interfaces/IPhoto";

class StoreUserPhoto {
  photos: Photo[];
  isLoad: boolean;
  token: string;

  constructor() {
    this.photos = [];
    this.isLoad = false;
    this.token = "";
    makeAutoObservable(this);
  }

  setToken(token: string) {
    this.token = token;
    if (token) {
      this.getAllPhoto();
    }
  }

  addPhoto(photo: Photo) {
    this.isLoad = true;
    return Api.addUserPhoto(this.token, photo).then((res: any) => {
      if (res.status === 200) {
        this.isLoad = false;
        this.photos = [...res.photos];
        this.saveLocalStorage("ADD", JSON.stringify(this.photos));
      }
    });
  }

  dletePhoto(secret: string) {
    this.isLoad = true;
    Api.deleteUserPhotoBySecretKey(this.token, secret).then((res) => {
      if (res.status === 200) {
        this.photos = this.photos.filter((el) => el.secret !== secret);
        this.saveLocalStorage("DELETE", JSON.stringify(this.photos));
      }
      this.isLoad = false;
    });
  }

  getAllPhoto() {
    return Api.getAllUserPhoto(this.token).then((res: any) => {
      if (res.status === 200) {
        this.photos = [...res.photos];
        this.saveLocalStorage("GET", JSON.stringify(this.photos));
      }
    });
  }

  saveLocalStorage(str: string, param: string) {
    localStorage.setItem(str, param);
  }

  updateArray(str: string | null) {
    if (!str) return;
    this.photos = [...JSON.parse(str)];
  }
}

export default new StoreUserPhoto();
