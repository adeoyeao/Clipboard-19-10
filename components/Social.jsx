import Icon from "./Icon"

const Social = (props) => {
      return (
            <a href={`https://www.${props.social}.com`} target="_blank">
                  <Icon icon={props.social} />
            </a>
      )
}

export default Social