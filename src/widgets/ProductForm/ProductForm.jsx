import { useCallback, useState } from 'react'
import { Button } from '../../shared/ui/Button'
import { TextArea } from '../../shared/ui/TextArea'
import { floatRegex } from '../../shared/lib/regex'
import CategoryPicker from '../CategoryPicker/CategoryPicker'
import ImageUp from '../../shared/icons/ImageUp.svg'
import { cva } from '../../shared/lib/cva'
import toast from 'react-hot-toast'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { typings } from '../../shared/lib/typings'

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
  const [price, setPrice] = useState(price_)
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

  const isDisabled =
    !name || !content || !price || !categoryId || (categoryId?.value === -1 && customCategory.length < 4)

  const imageChange = (e) => {
    const file = e.target.files[0]

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      toast.error(typings.pngError)
      e.preventDefault()
      return
    }

    if (file.size / 1024 / 1024 >= 2) {
      toast.error(typings.error2mb)
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
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <TextArea
            rows={1}
            onChange={changeName}
            value={name}
            placeholder={typings.enterTitle}
            className="text-2xl self-start flex-grow max-w-xl transition-all border-b border-solid pb-1 border-transparent focus:border-b-secondary/70 focus:border-solid resize-none"
          />
          <CategoryPicker
            customCategory={customCategory}
            setCustomCategory={setCustomCategory}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
            className="row-span-2"
          />
        </div>
        <ReactQuill
          className="min-h-10 [&_p]:text-secondary [&_li]:text-secondary mb-16 redactor-styles"
          value={content}
          onChange={setContent}
        />
      </div>

      <div className="flex justify-end">
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
        <span className="absolute right-0 pointer-events-none">{typings.currency}</span>
      </div>
      <Button
        className="min-w-[328px] self-end"
        disabled={isDisabled}
        onClick={() => onSubmit({ name, content, price, categoryId: categoryId?.value, customCategory, image })}
      >
        Сохранить
      </Button>
    </>
  )
}
