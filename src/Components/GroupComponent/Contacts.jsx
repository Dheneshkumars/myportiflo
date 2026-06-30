import { useState, useEffect } from "react";
import swal from "sweetalert";
import { SendMail } from "../../Api/main";
const Contact = () => {

    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [valid, setIsValid] = useState(true);
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    useEffect(() => {
        const updateOnline = () => setIsOnline(navigator.onLine);
        window.addEventListener('online', updateOnline);
        window.addEventListener('offline', updateOnline);
        return () => {
            window.removeEventListener('online', updateOnline);
            window.removeEventListener('offline', updateOnline);
        };
    }, []);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            emailRegex.test(value) ? setIsValid(true) : setIsValid(false);
        }
        setEmailData({ ...emailData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        const trimmedData = {
            name: emailData.name.trim(),
            email: emailData.email.trim(),
            message: emailData.message.trim()
        };
        const newErrors = {
            name: trimmedData.name ? '' : 'Please enter your name.',
            email: emailRegex.test(trimmedData.email) ? '' : 'Please enter a valid email address.',
            message: trimmedData.message ? '' : 'Please enter a message.'
        };

        setIsValid(!newErrors.email);
        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.message) {
            return;
        }

        const response = await SendMail(trimmedData);
        const success = response && (response.send || response.success || response.status === 'success');
        if (success) {
            setEmailData({ name: '', email: '', message: '' });
            swal({
                title: 'Message sent',
                text: 'Your message has been sent. We will contact you soon.',
                icon: 'success',
                button: 'OK'
            });
        } else {
            swal({
                title: 'Send failed',
                text: response.message || 'Unable to send message right now. Please try again later.',
                icon: 'error',
                button: 'OK'
            });
        }
    };

    return (
        <section className="footer_contact hide" id="page_Contacts">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-header">
                        <span className="section-label">Contact</span>
                        <h3>Let’s build something together</h3>
                        <p>For professional inquiries, project work, or collaboration opportunities, send a message below and I will respond as soon as possible.</p>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-map-card">
                            <div className="map-panel-title">
                                <h4>My location</h4>
                                <p>Showing Nagercoil, Tamil Nadu</p>
                            </div>
                            {isOnline ? (
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1438579974685!2d77.43083291545968!3d8.175734893179149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0341a03f5f15b9%3A0x181005a8fe10382f!2sNagercoil%2C%20Tamil%20Nadu%20629901!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                                    title="Nagercoil location"
                                    className="map_view"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            ) : (
                                <div className="offline-location">
                                    <h4>Offline Available</h4>
                                    <p>Nagercoil, Tamil Nadu</p>
                                    <p>Zipcode: <strong>629501</strong></p>
                                </div>
                            )}
                            <div className="location-details">
                                <div>
                                    <p className="detail-label">City</p>
                                    <strong>Nagercoil</strong>
                                </div>
                                <div>
                                    <p className="detail-label">Zipcode</p>
                                    <strong>629501</strong>
                                </div>
                                <div>
                                    <p className="detail-label">Country</p>
                                    <strong>India</strong>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-card">
                            <form id="contact_form" onSubmit={sendEmail}>
                                <div className="form-head">
                                    <h4>Send a Professional Message</h4>
                                    <p>Share your name, email, and a short message. I will respond as soon as possible.</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='firstName'>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={emailData.name}
                                        className="form-control"
                                        onChange={handleOnChange}
                                        id="firstName"
                                        inputMode="text"
                                        placeholder="Your full name"
                                    />
                                    {errors.name && <p className="text-danger">{errors.name}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={emailData.email}
                                        className="form-control"
                                        onChange={handleOnChange}
                                        id="email"
                                        inputMode="email"
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && <p className="text-danger">{errors.email}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={emailData.message}
                                        onChange={handleOnChange}
                                        className="form-control"
                                        rows={5}
                                        placeholder="Write your message here"
                                    />
                                    {errors.message && <p className="text-danger">{errors.message}</p>}
                                </div>
                                <button type="submit" className="submitbtn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;
