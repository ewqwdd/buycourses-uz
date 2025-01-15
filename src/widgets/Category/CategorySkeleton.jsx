import { cva } from "../../shared/lib/cva"

export default function CategorySkeleton({ name, className, as, ...props }) {
  const Cmp = as || 'div'
  return (
    <Cmp
      className={cva('rounded-xl bg-background border border-foreground1 gap-3 animate-pulse min-h-[254px]', className)}
      {...props}
    />
  )}