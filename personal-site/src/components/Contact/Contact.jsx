import { useEffect, useState } from 'react';
import styles from './Contact.module.css';
import sendImg from "../../assets/send.png"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            };
            const mailtoLink = `mailto:aneledindil@gmail.com
            ?subject=${encodeURIComponent(payload.subject)}
            &body=${encodeURIComponent(
                `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`)}`;
            window.location.href = mailtoLink;
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Contact</h2>
                    <p className={styles.subtitle}>
                        I'm open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                </header>
                <div className={styles.contactInfo}>
                    
                    <div className={styles.contactForm}>
                        <form className={styles.sendMessageForm} onSubmit={handleSubmit}>
                            <h3 className={styles.semiTitle}>Send Me A Message</h3>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>Name:</label>
                                
                                <label htmlFor="email" className={styles.label}>Email:</label>
                                <input type="text" placeholder="Your Name" className={styles.inputField} onChange={handleChange} name="name" value={formData.name}/>
                                <input type="email" placeholder="Your Email" className={styles.inputField} onChange={handleChange} name="email" value={formData.email}/>
                            </div>
                            <label htmlFor="subject" className={styles.label}>Subject</label>
                            <input type="text" placeholder="Subject" className={styles.inputField} onChange={handleChange} name="subject" value={formData.subject}/>
                            <textarea placeholder="Your Message" className={styles.textArea} onChange={handleChange} name="message" value={formData.message}></textarea>
                            <button type="submit" className={styles.submitButton}><img src={sendImg} alt="Send" className={styles.sendIcon} /> <span>Send Message</span></button>
                        </form>
                    </div>
                    
                    <div className={styles.directContact}>
                        <h3 className={styles.semiTitle}>Get In Touch</h3>
                        <div className={styles.contactDetails}>
                            <p>Email: <a href="mailto:aneledindil@gmail.com">aneledindil@gmail.com</a></p>
                        </div>
                        
                        <div className={styles.contactDetails}>
                            <p>Phone: +27 81 008 5564</p>
                        </div>
                        <div className={styles.contactDetails}>
                            <p>Current Location: Stellenbosch, South Africa</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
