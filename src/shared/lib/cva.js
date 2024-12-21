import { twMerge } from 'tailwind-merge'

export const cva = (...args) => {
  const val = args.map((elem) => {
    if (typeof elem === 'string') {
      return elem
    } else if (elem) {
      return Object.entries(elem)
        .filter(([, value]) => value)
        .map((elem) => elem[0])
        .join(' ')
    }
  })
  return twMerge(...val)
}
