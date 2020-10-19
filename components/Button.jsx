import styles from "../styles/components/button.module.scss"

const Button = (props) => {
      let cName
      let platform
      props.type === "primary" ? 
      (cName = `${styles.button} ${styles.primary}`,
      platform = "iOS") : 
      (cName = `${styles.button} ${styles.secondary}`,
      platform = `Mac`)


      return (
      <button className={cName} onClick={(e) => props.handleClick(e)} name={platform}>Download for {platform}</button> 
      )
}

export default Button