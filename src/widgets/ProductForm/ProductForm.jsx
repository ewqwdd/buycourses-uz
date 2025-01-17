import React, { useCallback, useEffect, useState } from 'react'
import { TextAreaResize } from '../../shared/ui/TextAreaResize'
import { Button } from '../../shared/ui/Button'
import { TextArea } from '../../shared/ui/TextArea'
import { Badge } from '../../shared/ui/Badge'
import Pencil from '../../shared/icons/Pencil.svg'
import { MaterialForm } from '../MaterialForm'
import { floatRegex } from '../../shared/lib/regex'
import CategoryPicker from '../CategoryPicker/CategoryPicker'
import ImageUp from '../../shared/icons/ImageUp.svg'
import { cva } from '../../shared/lib/cva'
import toast from 'react-hot-toast'

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
  const [image, setImage] = useState()
  const [preview, setPreview] = useState()

  const changeName = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const changePrice = useCallback((e) => {
    if (floatRegex.test(e.target.value) && e.target.value.length < 13) {
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

  const imageChange = (e) => {
    const file = e.target.files[0]

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      toast.error('Вы можете загружать только JPG/PNG файлы.')
      e.preventDefault()
      return
    }

    if (file.size / 1024 / 1024 >= 2) {
      toast.error('Размер изображения должен быть меньше 2MB.')
      e.preventDefault()
      return
    }

    setImage(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result) // Устанавливаем Base64 строку
    }
    reader.readAsDataURL(file) // Читаем файл как Base64
  }

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
      <div className="flex justify-between">
        <MaterialForm
          name={title}
          setName={setTitle}
          url={url}
          setUrl={setUrl}
          onSubmit={isEdditing ? onSubmitMaterialEdit : onSubmitMaterial}
          onDelete={isEdditing ? onDelete : null}
          isEdditing={isEdditing}
        />
        <div className="cursor-pointer size-32 relative rounded-lg overflow-hidden bg-accentSecondary flex items-center justify-center">
          <input
            type="file"
            onChange={imageChange}
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <ImageUp
            className={cva(
              'size-12 text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all',
              {
                'opacity-50': !!preview,
              }
            )}
          />
          {preview && <img src={preview} alt="preview" className="object-cover w-full h-full pointer-events-none" />}
        </div>
      </div>
      <div className="flex gap-2 self-end text-lg text-secondary relative items-center">
        <TextArea
          rows={1}
          placeholder="0.00"
          value={price}
          onChange={changePrice}
          className="max-w-40 text-lg resize-none overflow-hidden text-end pr-10"
        />
        <span className="absolute right-0 pointer-events-none">UZS</span>
      </div>
      <Button
        className="min-w-[328px] self-end"
        disabled={isDisabled}
        onClick={() =>
          onSubmit({ name, content, materials, price, categoryId: categoryId?.value, customCategory, image })
        }
      >
        Сохранить
      </Button>
    </>
  )
}
