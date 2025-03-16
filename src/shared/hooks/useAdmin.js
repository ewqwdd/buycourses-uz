import useUserStore from '../store/useUserStore'

export const useAdmin = () => {
  const role = useUserStore((state) => state.user?.role)
  return role === 'admin'
}
