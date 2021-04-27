import { message } from "antd";
import { makeAutoObservable } from "mobx";
import { Api } from "../api/Api";

class Authorization {
  isLoad: boolean;
  isAuth: boolean;
  name: string;
  token: string;

  constructor() {
    makeAutoObservable(this);
    this.name = "";
    this.token = "";
    this.isLoad = false;
    this.isAuth = false;
  }

  setLoad(isLoad: boolean) {
    this.isLoad = isLoad;
  }

  registration(name: string, email: string, password: string) {
    this.setLoad(true);
    Api.registration(name, password, email)
      .then((res) => {
        res.status === 200 && message.success(res.message);
        res.status === 400 && message.error(res.message);
      })
      .finally(() => this.setLoad(false));
  }

  authorization(email: string, password: string) {
    this.setLoad(true);
    Api.authorization(password, email)
      .then((res: any) => {
        if (res.status === 200) {
          message.success("Authorization was successful");
          this.name = res.name;
          this.token = res.token;
          this.isAuth = true;
        }
        if (res.status === 400) {
          message.error(res.message);
        }
      })
      .finally(() => this.setLoad(false));
  }

  logOut() {
    this.name = "";
    this.token = "";
    this.isLoad = false;
    this.isAuth = false;
  }
}

export default new Authorization();
