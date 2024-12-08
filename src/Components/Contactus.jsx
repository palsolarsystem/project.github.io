import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../assets/Style/contact.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');
  
    // Validation rules
    const validateField = (name, value) => {
      switch (name) {
        case 'name':
          return value.trim().length < 2 
            ? 'Name must be at least 2 characters long'
            : value.trim().length > 50
            ? 'Name must not exceed 50 characters'
            : '';
  
        case 'email':
          return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ? 'Invalid email address'
            : '';
  
        case 'phone':
          return !/^[0-9]{10}$/.test(value.replace(/[^0-9]/g, ''))
            ? 'Phone number must be 10 digits'
            : '';
  
        case 'subject':
          return value.trim().length < 5
            ? 'Subject must be at least 5 characters long'
            : value.trim().length > 100
            ? 'Subject must not exceed 100 characters'
            : '';
  
        case 'message':
          return value.trim().length < 10
            ? 'Message must be at least 10 characters long'
            : value.trim().length > 1000
            ? 'Message must not exceed 1000 characters'
            : '';
  
        default:
          return '';
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
  
      if (touched[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: validateField(name, value)
        }));
      }
    };
  
    const handleBlur = (e) => {
      const { name, value } = e.target;
      setTouched(prev => ({
        ...prev,
        [name]: true
      }));
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    };
  
    const validateForm = () => {
      const newErrors = {};
      Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Mark all fields as touched
      const touchedFields = {};
      Object.keys(formData).forEach(key => {
        touchedFields[key] = true;
      });
      setTouched(touchedFields);
  
      if (!validateForm()) {
        return;
      }
  
      setSubmitStatus('sending');
  
      try {
        const response = await fetch('YOUR_SERVER_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          setTouched({});
          setErrors({});
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      }
    };

  return (
    <section className="contact-section">
      <div className="section-title">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Have any questions? We'd love to hear from you.</p>

          <div className="contact-details">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 9687330939</p>
                <p>+91 9723738399</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>palsolarsystem@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Shop No. 30, Ramdev Complex, Moti Bhoyan, Vadsar Road,Ta. Kalol, Dist. Gandhinagar, 382721.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your Name"
              className={errors.name && touched.name ? 'error' : ''}
            />
            {errors.name && touched.name && (
              <div className="error-text">{errors.name}</div>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Email"
                className={errors.email && touched.email ? 'error' : ''}
              />
              {errors.email && touched.email && (
                <div className="error-text">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Phone"
                className={errors.phone && touched.phone ? 'error' : ''}
              />
              {errors.phone && touched.phone && (
                <div className="error-text">{errors.phone}</div>
              )}
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Subject"
              className={errors.subject && touched.subject ? 'error' : ''}
            />
            {errors.subject && touched.subject && (
              <div className="error-text">{errors.subject}</div>
            )}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your Message"
              rows="5"
              className={errors.message && touched.message ? 'error' : ''}
            ></textarea>
            {errors.message && touched.message && (
              <div className="error-text">{errors.message}</div>
            )}
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={submitStatus === 'sending'}
          >
            {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
            <Send size={18} className="send-icon" />
          </button>

          {submitStatus === 'success' && (
            <div className="success-message">Message sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message">Failed to send message. Please try again.</div>
          )}
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;