import React from "react"
import Layout from "../components/layout"
import Obfuscate from "react-obfuscate"

const ContactMe = () => {
  const em1 = "luke@"
  const em2 = "harr"
  const em3 = "ies.co"

  const email = em1 + em2 + em3

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
        or email me at <Obfuscate email={email} />
      </p>
    </Layout>
  )
}

export default ContactMe
