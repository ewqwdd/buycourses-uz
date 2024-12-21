import styles from './Balance.module.css'

export default function Balance() {
  return (
    <div className='ml-auto text-sm text-secondary font-semibold relative flex justify-center items-center'>
      17,43 рубля
      <div className="absolute w-full h-[38px] left-0 opacity-60">
        <div className={styles.ellipse1} />
        <div className={styles.ellipse2} />
        <div className={styles.ellipse3} />
      </div>
    </div>
  )
}
