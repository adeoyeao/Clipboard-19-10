import Head from "next/head"
import styles from "../styles/layouts/index.module.scss"
import React, { useState } from "react"

import Brand from "../components/Brand"
import Button from "../components/Button"
import Copy from "../components/Copy"
import Form from "../components/Form"
import Icon from "../components/Icon"
import Image from "../components/Image"
import Logo from "../components/Logo"
import Social from "../components/Social"

const Index = () => {
      const [ visible, setVisible ] = useState(false)
      const [ platform, setPlatform ] = useState("")

      const handleClick = (e) => {
            const name = e.target.name
            setVisible(!visible)
            setPlatform(name)
      }

      return (
            <main className={styles.site}>
                  <Head>
                        <title>Clipboard</title>
                  </Head>
                  <section className={styles.cta}>
                        <Logo type="primary" />
                        <Copy type="primary" 
                        head="A history of everything you copy"
                        text="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."/>
                        <div className={styles.buttons}>
                              <Button type="primary" handleClick={handleClick}/>
                              <Button type="secondary" handleClick={handleClick}/>
                        </div>
                  </section>
                  <section className={styles.section}>
                        <Copy type="secondary" 
                        head="Keep track of your snippets"
                        text="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devies. Our Mac and iOS apps will help you organize everything."/>
                  </section>
                  <section className={styles.about}>
                        <Image image="computer" />
                        <Copy type="tertiary"
                        head="Quick Search"
                        text="Easily search your snippets by content, category, web address, application, and more." />
                        <Copy type="tertiary"
                        head="iCloud Sync"
                        text="Instantly saves and syncs snippets accross all your devices." />
                        <Copy type="tertiary"
                        head="Complete History"
                        text="Retrieve any snippets from the first moment your start using the app." />
                  </section>
                  <section className={styles.section}>
                        <Copy type="secondary"
                        head="Access Clipboard anywhere"
                        text="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks." />
                  </section>
                  <section className={styles.section}>
                        <Image image="devices" />
                  </section>                  
                  <section className={styles.section}>
                        <Copy type="secondary"
                        head="Supercharge your workflow"
                        text="We've got the tools to boost your productivity." />
                  </section>
                  <section className={styles.grid}>
                        <Icon icon="blacklist" />
                        <Copy type="tertiary" 
                        head="Create blacklist"
                        text="Ensure sensitivite information never makes its way to your clipboard by excluding certain sources."/>
                        <Icon icon="text" />
                        <Copy type="tertiary" 
                        head="Plain text snippets"
                        text="Remove unwanted formatting from copied text for a consistent look."/>
                        <Icon icon="preview" />
                        <Copy type="tertiary" 
                        head="Sneak preview"
                        text="Quick preview of all snippets on your Clipboard for easy access."/>
                  </section>
                  <section className={styles.grid}>
                        <Brand brand="google"/>
                        <Brand brand="hp"/>
                        <Brand brand="ibm"/>
                        <Brand brand="microsoft"/>
                        <Brand brand="vector-graphics"/>
                  </section>
                  <section className={styles.cta}>
                        <Copy type="secondary" 
                        head="Clipboard for iOS and Mac OS"
                        text="Available for free on the App Store. Download for Mac or iOS, synce with iCloud and you're reading to start adding to your clipboard." />
                        <div className={styles.buttons}>
                              <Button type="primary" handleClick={handleClick}/>
                              <Button type="secondary" handleClick={handleClick}/>
                        </div>
                  </section>
                  <footer className={styles.footer}>
                        <Logo type="secondary" />
                        <div>
                              <Social social="facebook" />
                              <Social social="twitter" />
                              <Social social="instagram" />
                        </div>
                  </footer>
                  {visible && <Form handleClick={handleClick} platform={platform}/>}
            </main>
      )
} 

export default Index