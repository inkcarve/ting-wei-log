declare module NodeJS  {
    interface Global {
        window: any,
        navigator: any,
        btoa: any,
    }
  }