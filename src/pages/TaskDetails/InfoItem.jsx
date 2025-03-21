import styles from './taskDetail.module.css'

export default function InfoItem({itemName, image}) {
  return (
    <div className={styles.infoItem}>
      <img src={image} alt="" />
      <span>{itemName}</span>
    </div>
  )
}