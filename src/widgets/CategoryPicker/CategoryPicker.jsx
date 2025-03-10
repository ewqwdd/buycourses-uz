import Select from 'react-select'
import { useCategories } from '../../shared/hooks/useCategories'
import { selectStyles } from '../../shared/lib/selectStyles'
import { Input } from '../../shared/ui/Input'
import { cva } from '../../shared/lib/cva'
import { typings } from '../../shared/lib/typings'

export default function CategoryPicker({ categoryId, setCategoryId, setCustomCategory, customCategory, className }) {
  const { data } = useCategories()
  const options = data.map((item) => ({ value: item.id, label: item.name }))
  options.push({ value: -1, label:  typings.newCategory})

  return (
    <div className={cva("flex flex-col gap-2 min-w-56", className)}>
      <Select
        value={categoryId}
        onChange={(v) => setCategoryId(v)}
        isSearchable
        options={options}
        styles={selectStyles}
        placeholder={typings.category}
      />
      {categoryId?.value === -1 && <Input value={customCategory} onChange={e => setCustomCategory?.(e.target.value)} placeholder={typings.name}  />}
    </div>
  )
}
