import { action, observable } from 'mobx'
import authorData from '../data/author-data';
let store:any ;

class Store {
  @observable lastUpdate = 0
  @observable light = false

  private timer:any;
  public authorData:any;
  constructor (isServer:boolean, lastUpdate:any) {
    this.lastUpdate = lastUpdate
    this.authorData = authorData
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    })
  }

  stop = () => clearInterval(this.timer)
}

export function initStore (isServer:boolean, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate)
  } else {
    if (!store) {
      store = new Store(isServer, lastUpdate)
    }
    return store
  }
}
