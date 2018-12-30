import { action, observable, computed } from "mobx";
import authorData from "../data/author-data";
import authorData_en from "../data/author-data-en";
import { i18n } from "../i18n/i18n";
let store: Store;
console.log(i18n.language);
class Store {
  @observable lastUpdate = 0;
  @observable light = false;
  @observable language = i18n.language;
  @observable authorData = this.checkIfChinese() ? authorData : authorData_en;
  private timer: any;
  // public authorData: any = authorData;
  // public authorData_en: any = authorData_en;

  constructor(isServer: boolean, lastUpdate: any) {
    this.lastUpdate = lastUpdate;
    // this.authorData_en = authorData_en;
  }

  checkIfChinese() {
    if(!i18n.language){return;}
    return i18n.language.search('zh')!==-1;
  }

  @action changeLanguage = async () => {
    i18n.changeLanguage(this.checkIfChinese() ? "en" : "zh_TW");
    this.applyLanguage();
  };

  @action applyLanguage = async () => {
    this.language = i18n.language;
    this.authorData = this.checkIfChinese() ? authorData : authorData_en;
    // this.light = !this.light;
    console.log(this.language);
  };

  @computed get toggleLanguageBtnText() {
    return this.checkIfChinese() ? "EN":"中文"
  }

  stop = (): void => clearInterval(this.timer);
}

export function initStore(isServer: boolean, lastUpdate = Date.now()) {
  if (isServer) {
    console.log("server store");
    return new Store(isServer, lastUpdate);
  } else {
    if (!store) {
      console.log("new store");
      store = new Store(isServer, lastUpdate);
    }
    console.log("store exist");
    return store;
  }
}
