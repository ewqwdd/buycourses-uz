import { formatCurrency } from '../../../shared/lib/formatCurrecny'
import { formatPrice } from '../../../shared/lib/formatPrice'
import useUserStore from '../../../shared/store/useUserStore'
import styles from './Balance.module.css'

export default function Balance() {
  const balance = useUserStore((state) => state.user?.balance) ?? 0

  return (
    <div className="ml-auto text-sm text-secondary font-semibold relative flex justify-center items-center">
      {formatPrice(balance)}
      <div className="absolute w-full h-[38px] left-0 opacity-60">
        <div className={styles.ellipse1} />
        <div className={styles.ellipse2} />
        <div className={styles.ellipse3} />
      </div>
    </div>
  )
}
