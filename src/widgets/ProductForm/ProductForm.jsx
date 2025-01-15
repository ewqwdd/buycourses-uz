import React, { useCallback, useEffect, useState } from 'react'
import { TextAreaResize } from '../../shared/ui/TextAreaResize'
import { Button } from '../../shared/ui/Button'
import { TextArea } from '../../shared/ui/TextArea'
import { Badge } from '../../shared/ui/Badge'
import Pencil from '../../shared/icons/Pencil.svg'
import { MaterialForm } from '../MaterialForm'
import { floatRegex } from '../../shared/lib/regex'
import CategoryPicker from '../CategoryPicker/CategoryPicker'

export default function ProductForm({
  content: content_,
  name: name_,
  materials: materials_,
  price: price_,
  categoryId: categoryId_,
  onSubmit,
}) {
  const [content, setContent] = useState(content_ ?? '')
  const [name, setName] = useState(name_ ?? '')
  const [materials, setMaterials] = useState(materials_ ?? [])
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [price, setPrice] = useState(price_)
  const [edit, setEdit] = useState()
  const [categoryId, setCategoryId] = useState(categoryId_)
  const [customCategory, setCustomCategory] = useState('')

  const changeName = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const changePrice = useCallback((e) => {
    if (floatRegex.test(e.target.value) && e.target.value.length < 14) {
      setPrice(e.target.value)
    }
  }, [])

  const onSubmitMaterial = () => {
    setMaterials((prev) => [...prev, { name: title, url }])
    setTitle('')
    setUrl('')
  }

  const onSubmitMaterialEdit = () => {
    const newMaterials = [...materials]
    newMaterials[edit] = { name: title, url }
    setMaterials(newMaterials)
    setTitle('')
    setUrl('')
    setEdit(null)
  }

  const onDelete = () => {
    setMaterials((prev) => prev.filter((_, i) => i !== edit))
    setEdit(null)
    setTitle('')
    setUrl('')
  }

  useEffect(() => {
    if (Number.isInteger(edit)) {
      const item = materials[edit]
      setTitle(item.name)
      setUrl(item.url)
    }
  }, [edit, materials])

  const isEdditing = Number.isInteger(edit)
  const isDisabled =
    !name ||
    !content ||
    materials.length === 0 ||
    !price ||
    !categoryId ||
    (categoryId?.value === -1 && customCategory.length < 4)

  return (
    <>
      <div className="grid gap-4" style={{ gridTemplateColumns: '1fr auto' }}>
        <TextArea
          rows={1}
          onChange={changeName}
          value={name}
          placeholder="Введите заголовок"
          className="text-2xl self-start flex-grow max-w-xl transition-all border-b border-solid pb-1 border-transparent focus:border-b-secondary/70 focus:border-solid resize-none"
        />
        <CategoryPicker
          customCategory={customCategory}
          setCustomCategory={setCustomCategory}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          className="row-span-2"
        />
        <TextAreaResize
          setValue={setContent}
          value={content}
          className="max-w-xl min-h-10 [&_p]:text-teritary"
          placeholder="Введите текст"
        />
      </div>

      {materials.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {materials.map((material, index) => (
            <Badge variant="primary" key={index} className="gap-1 pr-1">
              <span>{material.name}</span>
              <button className="p-1" onClick={() => setEdit(index)}>
                <Pencil className="size-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
      <MaterialForm
        name={title}
        setName={setTitle}
        url={url}
        setUrl={setUrl}
        onSubmit={isEdditing ? onSubmitMaterialEdit : onSubmitMaterial}
        onDelete={isEdditing ? onDelete : null}
        isEdditing={isEdditing}
      />
      <div className="flex gap-2 self-end text-lg text-secondary relative items-center">
        <TextArea
          rows={1}
          placeholder="0.00"
          value={price}
          onChange={changePrice}
          className="max-w-40 text-lg resize-none overflow-hidden text-end pr-4"
        />
        <span className="absolute right-0 pointer-events-none">₽</span>
      </div>
      <Button
        className="min-w-[328px] self-end"
        disabled={isDisabled}
        onClick={() => onSubmit({ name, content, materials, price, categoryId: categoryId?.value, customCategory })}
      >
        Сохранить
      </Button>
    </>
  )
}
