import PropTypes from 'prop-types'
import { cva } from '../../shared/lib/cva'

export default function Category({ name, img, className, as, ...props }) {
  const Cmp = as || 'div'
  const picStyles = 'rounded-t-lg rounded-b-[4px] bg-foreground1 h-48 w-full object-cover'
  return (
    <Cmp
      className={cva('rounded-xl bg-background p-1 border border-foreground1 flex flex-col gap-3', className)}
      {...props}
    >
      {img ? <img src={img} className={picStyles} alt="preview" /> : <div className={picStyles} />}
      <div className="px-4 flex flex-col gap-1 pb-4 overflow-x-hidden max-w-full">
        {/* <span className="text-sm text-secondary font-medium overflow-x-clip text-ellipsis text-nowrap">{category}</span> */}
        <h2 className="font-semibold text-xl text-primary overflow-x-clip text-ellipsis text-nowrap">{name}</h2>
      </div>
    </Cmp>
  )
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  as: PropTypes.elementType,
  className: PropTypes.string,
}
