import styles from "../styles/components/form.module.scss"
import React, { useState } from "react"

const Form = (props) => {
      const [ input, setInput ] = useState({
            name: "",
            email: ""
      })

      const [valid, setValid] = useState({
            name: false,
            email: false
      })

      const nameStyle = {
            border: "2px solid red"
      }

      const emailStyle = {
            border: "2px solid red"
      }

      valid.name && (nameStyle.border = "2px solid green")
      valid.email && (emailStyle.border = "2px solid green")

      const handleChange = (e) => {
            const {name, value} = e.target
            const regex = /\w{2,}/ig
            const emailRegex =/\w{2,}\@\w{2,}\./ig

            setInput(prev => {
                  return {
                  ...prev,
                  [name]: value
            }})

            if(name === "name") {
                  regex.test(value) ? setValid(prev => {
                        return {
                        ...prev,
                        name: true
                  }
                  }) : setValid(prev => {
                        return {
                        ...prev,
                        name: false
                  }
                  })
            }

            if(name === "email") {
                  emailRegex.test(value) ? setValid(prev => {
                        return {
                        ...prev,
                        email: true
                  }
                  }) : setValid(prev => {
                        return {
                        ...prev,
                        email: false
                  }
                  })
            }
      }

      const handleSubmit = (e) => {
            (!valid.name || !valid.email) && e.preventDefault()
      }

      return (
            <div className={styles.form}>
                  <button className={styles.closeButton} onClick={(e) => props.handleClick(e)}></button>
                  <form method="POST" action="/email">
                        <h1>Download for {props.platform}</h1>
                        <input type="text" placeholder="Claire Denis" name="name"
                        value={input.name} onChange={handleChange} style={nameStyle}/>
                        <input type="text" placeholder="c.denis@canal.com" name="email" value={input.email} onChange={handleChange} style={emailStyle}/>
                        <div className={styles.line}></div>
                        <input type="submit" value="Request Download Link" onClick={handleSubmit}/>
                  </form>
            </div>
      )
}

export default Form