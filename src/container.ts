export class Container {
  bindMap = new Map()
  // register
  bind(key: string, clazz: any, args: any[] = []) {
    this.bindMap.set(
      key,
      {clazz, args}
    )
  }
  // get instance
  get<T>(key: string) {
    const target = this.bindMap.get(key)
    const {clazz, args} = target
    const instance = Reflect.construct(clazz, args)
    return instance
  }
}