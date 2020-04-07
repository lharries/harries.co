import React from "react"
import Layout from "../components/layout"
import Obfuscate from "react-obfuscate"

const ContactMe = () => {
  return (
    <Layout>
      <h2>Contact me</h2>
      <br />
      <br />
      <p>
        The best way to contact me is to{" "}
        <a href="https://twitter.com/messages/compose?recipient_id=854833945258491905">
          send me a DM on Twitter
        </a>{" "}
        or email me at <Obfuscate email="luke.harries@me.com" />
      </p>
    </Layout>
  )
}

export default ContactMe
