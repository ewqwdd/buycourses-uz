import { cva } from "../../shared/lib/cva"

export default function ProductSkeleton({className, as, ...props }) {
  const Cmp = as || 'div'
  return (
    <Cmp
      className={cva('rounded-xl bg-background border border-foreground1 min-h-[280px] animate-pulse', className)}
      {...props}
    />
  )
}