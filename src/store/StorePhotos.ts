import { makeAutoObservable } from "mobx";
import { Api } from "../api/Api";
import { Photo } from "../interfaces/IPhoto";

class StorePhotos {
  isLoading: boolean;
  tag: string;
  photo: Photo[];
  page: number;
  total: number;

  constructor() {
    makeAutoObservable(this);
    this.isLoading = false;
    this.tag = "";
    this.photo = [];
    this.page = 1;
    this.total = 0;
  }

  setPage(page: number) {
    console.log(page);

    this.page = page;
    this.fetchPhotos();
  }

  setTotal(total: string) {
    this.total = isNaN(+total) ? 0 : +total;
  }

  setTag(tag: string) {
    this.tag = tag;
    this.page = 1;
    this.fetchPhotos();
  }

  fetchPhotos() {
    this.startLoading();
    Api.getPhotosByTags(this.tag, this.page).then((res) => {
      this.setTotal(res.total);
      this.setPhoto(res.photo);
      this.stopLoading();
    });
  }

  setPhoto(photo: Photo[]) {
    if (!photo) {
      this.photo = [];
      return;
    }

    this.photo = photo;
  }

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }

  unMount() {
    this.isLoading = false;
    this.tag = "";
    this.photo = [];
    this.page = 1;
    this.total = 0;
  }
}

export default new StorePhotos();
