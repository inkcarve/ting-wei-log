import { action, observable, computed } from "mobx";
import authorData from "../data/author-data";
import authorData_en from "../data/author-data-en";
import { i18n } from '../i18n/i18n';
let store: Store;
console.log(i18n.language);
class Store {
  @observable lastUpdate = 0;
  @observable light = false;
  @observable language = i18n.language;
  // @observable authorData = i18n.language === 'en' ? authorData_en : authorData;
  private timer: any;
  public authorData: any=authorData;
  public authorData_en: any=authorData_en;
  
  constructor(isServer: boolean, lastUpdate: any) {
    this.lastUpdate = lastUpdate;
    // this.authorData_en = authorData_en;
  }
  
  // @action start = () => {
  //   this.timer = setInterval(() => {
  //     this.lastUpdate = Date.now();
  //     this.light = true;
  //   });
  // };

  @action changeLanguage = async()=>{
    i18n.changeLanguage(i18n.language === 'en' ? 'zh_TW' : 'en');
    this.language = i18n.language
    this.authorData = i18n.language === 'en' ? authorData_en : authorData;
    // this.light = !this.light;
    console.log(this.language);
  }

  stop = ():void => clearInterval(this.timer);
}

export function initStore(isServer: boolean, lastUpdate = Date.now()) {
  if (isServer) {
    console.log('server store')
    return new Store(isServer, lastUpdate);
  } else {
    if (!store) {
      console.log('new store')
      store = new Store(isServer, lastUpdate);
    }
    console.log('store exist')
    return store;
  }
}
