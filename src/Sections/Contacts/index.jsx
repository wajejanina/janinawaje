import React from 'react'

// Components
import Social from 'Components/Social'

import './styles.scss'

function Contacts ({ contactTitle, contactDescription, recipientEmail, socials }) {
    return (
        <section id="contacts" className="container section section-contacts">
            <div className="contact-container">
                <h2 className="contact-title">{ contactTitle }</h2>
                <p className="contact-description">{ contactDescription }</p>
                <form className="contact-form" action={`https://formspree.io/${recipientEmail}`} method="POST">
                    <div className="contact-form__input">
                        <input id="name" type="text" name="name" placeholder="Name" autoComplete="off" />
                    </div>
                    <div className="contact-form__input">
                        <input id="email" type="email" name="email" placeholder="Email" required autoComplete="off" />
                    </div>
                    <div className="contact-form__textarea">
                        <textarea id="message" name="message" placeholder="Message" required></textarea>
                    </div>
                    <button className="contact-form__submit" type="submit">Send</button>
                </form>
                <p className="contact__find-me">find me on</p>
                <div className="contact__socials">
                    {
                        socials.map((social, i) => <Social key={i} {...social} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Contacts