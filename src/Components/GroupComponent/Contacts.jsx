import { useState } from "react";
import { SendMail } from "../../Api/main";
import swal from "sweetalert";
import SvgIcon from "../BaseComponent/SvgIcons";
const Contact = () => {

    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [valid, setIsValid] = useState(true);
    const [error, setError] = useState(false);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name == "email") {
            emailRegex.test(value) ? setIsValid(true) : setIsValid(false);
        }
        setEmailData({ ...emailData, [name]: value });
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        const isNotEmpty = Object.values(emailData).every(value => value !== '');
        setError(!isNotEmpty);
        const response = valid && isNotEmpty ? await SendMail(emailData) : null;
        if (response !== null && response !== undefined) {
            if (response?.data && response.data.send) {
                swal('Success!', `${response.data.message}`, 'success');
                setEmailData({
                    name: "",
                    email: "",
                    message: ""
                })
            }
            else {
                swal("Oops!", `${response.data.message}`, "error");
                setEmailData({
                    name: "",
                    email: "",
                    message: ""
                })
            }
        }
    };

    return (
        <section className="footer_contact hide" id="page_Contacts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12 my-3">
                        <div className="map_child" id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d252665.23881224444!2d77.56587716884574!3d8.313296338094117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695702263229!5m2!1sen!2sin" className="map_view" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form id="contact_form">
                            <h3 className="text-center">Get Touch with me</h3>
                            <div className="form-group">
                                <label htmlFor='firstName' >Name:</label>
                                <input type="text" name="name" value={emailData.name} className="form-control" onChange={handleOnChange} id="firstName" inputMode="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor='email' >Email:</label>
                                <input type="email" name="email" value={emailData.email} className="form-control" onChange={handleOnChange} id="email" inputMode="email" />
                                <p className={`${valid ? "d-none" : "d-block"} text-danger`}>Email is Not Valid</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" value={emailData.message} onChange={handleOnChange} className="form-control" rows={3} cols={3} />
                            </div>
                            <span className={`text-danger ${error ? 'd-block' : 'd-none'}`}>Make sure to check All the fields are filled.</span>
                            <input type="submit" onClick={(data) => sendEmail(data)} className="submitbtn my-3" />
                        </form>
                    </div>
                </div>
                <h6 className="text-center">
                    <SvgIcon
                        iconType={'heart'}
                    />
                    developed By Dhenesh
                </h6>
            </div>
        </section>
    )
}
export default Contact;