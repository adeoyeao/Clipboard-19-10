import styles from "../styles/components/image.module.scss"

const Image = (props) => {
      return (
            <img src={`./images/image-${props.image}.png`} alt={`Image of ${props.image}`} className={styles.image}/>
      )
}

export default Image