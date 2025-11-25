import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-label">SEND A MESSAGE</p>
          <h3 className="contact-title">Let's Build Something</h3>
          <p className="contact-text">
            Have a project in mind or just want to say hi? Drop a quick note and I'll respond as soon as I can.
          </p>
          <div className="contact-form-container">
            <form
              className="contact-form"
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
              <input type="email" name="email" placeholder="Email Address" className="contact-input" required />
              <textarea name="message" placeholder="Tell me about your project..." className="contact-textarea" required />
              <button type="submit" className="contact-button">
                Send Message <span>➜</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

