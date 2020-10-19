import styles from "../styles/components/logo.module.scss"

const Logo = (props) => {
      return (
            <img src="/images/logo.svg" alt="Clipboard logo" 
            className={props.type === "primary" ? 
            styles.primary : styles.secondary}/>
      )
}

export default Logo