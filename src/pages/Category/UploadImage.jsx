import toast from 'react-hot-toast'
import { typings } from '../../shared/lib/typings'
import $api from '../../shared/lib/$api'
import { useQueryClient } from '@tanstack/react-query'

export default function UploadImage({ slug }) {
  const queryClient = useQueryClient()

  const imageChange = (e) => {
    const file = e.target.files[0]
    console.log(file)

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
    const formData = new FormData()
    formData.append('image', file)
    $api
      .put(`/categories/${slug}/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        toast.success(typings.imageUploaded)
        queryClient.invalidateQueries({
          queryKey: ['categories'],
        })
      })
      .catch(() => {
        toast.error(typings.error)
      })
  }

  return (
    <div className="flex text-xs items-center gap-1 font-medium text-secondary">
      <span className="font-semibold text-sm text-primary">Upload Image:</span>
      <input type="file" accept="image/*" onChange={imageChange} />
    </div>
  )
}
