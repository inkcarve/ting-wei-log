import { action, observable } from 'mobx'

let store ;

class Store {
  @observable lastUpdate = 0
  @observable light = false

  private timer;

  constructor (isServer, lastUpdate) {
    this.lastUpdate = lastUpdate
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    })
  }

  stop = () => clearInterval(this.timer)
}

export function initStore (isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate)
  } else {
    if (!store) {
      store = new Store(isServer, lastUpdate)
    }
    return store
  }
}
