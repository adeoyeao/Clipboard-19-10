import styles from "../styles/components/icon.module.scss"

const Icon = (props) => {
      return (
            <img src={`./images/icon-${props.icon}.svg`} />
      )
}

export default Icon