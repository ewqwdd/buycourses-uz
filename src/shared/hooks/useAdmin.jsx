import useUserStore from '../store/useUserStore'

export const useAdmin = () => {
  const email = useUserStore((state) => state.user?.email)
  return email?.includes('chul.com')
}
