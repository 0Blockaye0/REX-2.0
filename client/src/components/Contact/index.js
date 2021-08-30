import React from "react";
let iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13782.989867863755!2d-97.75223721801525!3d30.272775740475755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50a22f2576f%3A0xfded6e1aca5cba6!2sDowntown%20Austin%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1630283627047!5m2!1sen!2sus"

function Contact(props) {

    return (
        <section id="reach-out">
            <div>
                <h2>Reach Out</h2>
            </div>

            <div className="contact-info">
                <div>
                    <h3>REX Rescue Express 2.0</h3>
                    <p>
                        Any questions or concerns before signing up?
                        <br />
                        Let us know and we'll be happy to talk to you!
                    </p>
                    
                    <address>
                        55 Main Street <br />
                        Some Town, CA <br />
                        12345 <br />
                        P: 555.RUN.BUNDZ (555.786.2839) <br />
                        E: <a href="mailto:blake.austin.dev@gmail.com">REX</a>
                    </address>
                </div>

            <div className="contact-form">
                <h3>Contact Us</h3>
                <form>
                    <input type="text" id="contact-name" placeholder="Your Name" />

                    <textarea id="contact-message" placeholder="Message"></textarea>
                  {/* will need to add submit btn handler */}
                    <button type="submit">Submit</button>
                </form>
            </div>

                <iframe 
                    src= {iframeSrc}
                    allowfullscreen
                >
                </iframe>
            </div>    
        </section>
    )
}

export default Contact;