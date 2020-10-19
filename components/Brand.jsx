import styles from "../styles/components/brand.module.scss"

const Brand = (props) => {
      return (
            <img src={`./images/logo-${props.brand}.png`} alt={`Logo for ${props.brand.toUpperCase()}`}/>
      )
}

export default Brand