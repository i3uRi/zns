export { pubSub, pubSub as default }

function ps() {
  const set = new Set()

  return {
    pub(v) {
      for (const fn of set) fn(v)
    },
    sub(fn) {
      set.add(fn)
      return () => set.delete(fn)
    },
  }
}

function pubSub() {
  const every = new Set()
  const map = new Map()

  return {
    emit(to, v) {
      if (map.has(to)) for (const fn of map.get(to)) fn(v)
      for (const fn of every) fn(to, v)
    },
    on(to, fn) {
      if (!map.has(to)) map.set(to, new Set())
      map.get(to).add(fn)
      return () => this.off(to, fn)
    },
    off(to, fn) {
      if (fn == null) return map.delete(to)
      else return map.has(to) && map.get(to).delete(fn)
    },
    onEvery(fn) {
      every.add(fn)
      return () => every.delete(fn)
    },
    offEvery(fn) {
      if (fn == null) {
        every.clear()
        return true
      } else return every.delete(fn)
    },
  }
}

// const MAP = Symbol('PubSubMap')
// const EVERY = Symbol('PubSubEvery')

// class PubSub {
//   constructor() {
//     this[MAP] = new Map()
//     this[EVERY] = new Set()
//   }

//   emit = (to, v) => {
//     if (this[MAP].has(to)) for (const fn of this[MAP].get(to)) fn(v)
//     for (const fn of this[EVERY]) fn(to, v)
//   }

//   on = (to, fn) => {
//     if (!this[MAP].has(to)) this[MAP].set(to, new Set())
//     this[MAP].get(to).add(fn)
//     return () => this.off(to, fn)
//   }

//   off = (to, fn) => {
//     if (fn == null) return this[MAP].delete(to)
//     else return this[MAP].has(to) && this[MAP].get(to).delete(fn)
//   }

//   onEvery = fn => {
//     this[EVERY].add(fn)
//     return () => this[EVERY].delete(fn)
//   }

//   offEvery = fn => {
//     if (fn == null) {
//       this[EVERY].clear()
//       return true
//     }
//     return this[EVERY].delete(fn)
//   }
// }
