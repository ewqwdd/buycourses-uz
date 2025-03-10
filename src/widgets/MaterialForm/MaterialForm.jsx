import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import toast from 'react-hot-toast'
import { Button } from '../../shared/ui/Button'
import Trash from '../../shared/icons/Trash.svg'
import { Input } from '../../shared/ui/Input'
import { urlRegex } from '../../shared/lib/regex'

function MaterialForm({ name, url, setName, setUrl, onSubmit, onDelete, isEdditing }) {
  const handleNameChange = useCallback(
    (e) => {
      setName(e.target.value)
    },
    [setName]
  )

  const handleUrlChange = useCallback(
    (e) => {
      setUrl(e.target.value)
    },
    [setUrl]
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (!name || !url) {
        toast.error('Заполните все поля')
        return
      }
      if (!urlRegex.test(url)) {
        toast.error('Введите корректную ссылку')
        return
      }
      if (name.length < 5) {
        toast.error('Название должно быть не менее 5 символов')
        return
      }
      onSubmit()
    },
    [onSubmit]
  )

  return (
    <form className="flex flex-col gap-4 max-w-60" onSubmit={handleSubmit}>
      <Input placeholder="Название материала" value={name} onChange={handleNameChange} />
      <Input placeholder="Ссылка на материал" value={url} onChange={handleUrlChange} />
      <div className="flex justify-between">
        <Button type="submit" variant="secondary">
          {isEdditing ? 'Сохранить' : 'Добавить'}
        </Button>
        {onDelete && (
          <button onClick={onDelete} type="button" className="p-2">
            <Trash className="size-6" />
          </button>
        )}
      </div>
    </form>
  )
}

MaterialForm.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
}

export default MaterialForm
