import { makeAutoObservable } from "mobx";
import { Api } from "../api/Api";
import { Photo } from "../interfaces/IPhoto";

class StorePhotos {
  isLoading: boolean;
  photo: Photo[];
  page: number;
  pages: number | null;
  perpage: number;
  total: number | 0;

  constructor() {
    this.isLoading = false;
    this.photo = [];
    this.page = 1;
    this.pages = null;
    this.perpage = 20;
    this.total = 0;
    makeAutoObservable(this);
  }

  setPage(num: number) {
    this.page = num;
  }

  setPerPage(num: number) {
    this.page = num;
  }

  setTotal(num: string) {
    this.total = isNaN(+num) ? +num : 0;
  }

  setPhoto(arr: Photo[]) {
    if (!arr) {
      this.photo = [];
      return;
    }

    this.photo = arr;
  }

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }

  fetchPhotos(tags: string) {
    this.startLoading();
    Api.getPhotoById(tags, this.perpage, this.page).then(({ photo, total }) => {
      this.setTotal(total);
      this.setPhoto(photo);
      this.stopLoading();
    });
  }
}

export default new StorePhotos();
