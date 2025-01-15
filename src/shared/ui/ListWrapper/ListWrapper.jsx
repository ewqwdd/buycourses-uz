import { cva } from "../../lib/cva"

export default function ListWrapper({className, children, ...props}) {
  return (
    <div className={cva("grid grid-cols-2 flex-1 gap-3 self-start", className)} {...props}>
        {children}
    </div>
  )
}
