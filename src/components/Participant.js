function Participant({values, handleChange, submitted, errors}){

    return(
        <div>
            <h2>Participant Information</h2>
                <div className="form-row name-dob-section">
                    <label className="input-field name-input-section">
                        <p className="form-text">Full Name</p>
                        <input
                            className= {submitted && errors.name ? "input-box name error" : "input-box name"} 
                            type="text" 
                            name="name" 
                            value={values.name} 
                            onChange={handleChange} 
                        />
                        {submitted && errors.name && <p className="error-text">{errors.name}</p>}
                    </label>
                    <label className="input-field dob-input-section">
                        <p className="form-text">Date of Birth</p>
                        <input 
                            className= {submitted && errors.dateOfBirth ? "input-box dob error" : "input-box dob"} 
                            type="date" 
                            name="dateOfBirth" 
                            value={values.dateOfBirth} 
                            onChange={handleChange}
                        />
                        {submitted && errors.dateOfBirth && <p className="error-text">{errors.dateOfBirth}</p>}
                    </label>
                </div>
                <div className="form-row">
                    <div className="gender-select">
                        <p className="form-text">Gender</p>
                        <label className="radio">
                            <input 
                                className="radio-input" 
                                type="radio" 
                                name="gender" 
                                value="male" 
                                checked={values.gender === "male"} 
                                onChange={handleChange} 
                            />
                            <p className="form-text">Male</p>
                        </label>
                        <label className="radio">
                            <input 
                                className="radio-input" 
                                type="radio" 
                                name="gender" 
                                value="female" 
                                checked={values.gender === "female"} 
                                onChange={handleChange} 
                            />
                            <p className="form-text">Female</p>
                        </label>
                        {submitted && errors.gender && <p className="error-text">{errors.gender}</p>}
                    </div>
                    <div className="name-email-section">
                        <label className="input-field number-input-section">
                            <p className="form-text">Phone Number</p>
                            <input 
                                className= {submitted && errors.number ? "input-box number error" : "input-box number"} 
                                type="text" 
                                name="number" 
                                value={values.number} 
                                onChange={handleChange} 
                            />
                            {submitted && errors.number && <p className="error-text">{errors.number}</p>}
                        </label>
                        <label className="input-field email-input-section">
                            <p className="form-text">Email</p>
                            <input 
                                className= {submitted && errors.email ? "input-box email error" : "input-box email"} 
                                type="email" 
                                name="email" 
                                value={values.email} 
                                onChange={handleChange} 
                            />
                            {submitted && errors.email && <p className="error-text">{errors.email}</p>}
                        </label>
                    </div>
                </div>
                <div className="social-media-section">
                    <p className="form-text">Where did you hear about this virtual event?</p>
                    <div className="social-radio">
                        <label className="radio">
                            <input 
                                className="radio-input" 
                                type="radio" 
                                name="platform" 
                                value="facebook" 
                                checked={values.platform === "facebook"} 
                                onChange={handleChange} 
                            />
                            <p className="form-text">Facebook</p>
                        </label>
                        <label className="radio">
                            <input 
                                className="radio-input" 
                                type="radio" 
                                name="platform" 
                                value="youtube" 
                                checked={values.platform === "youtube"} 
                                onChange={handleChange} 
                            />
                            <p className="form-text">Youtube</p>
                        </label>
                        <label className="radio">
                            <input 
                                className="radio-input" 
                                type="radio" 
                                name="platform" 
                                value="instagram" 
                                checked={values.platform === "instagram"} 
                                onChange={handleChange} 
                            />
                            <p className="form-text">Instagram</p>
                        </label>
                        <label className="radio">
                            <input 
                                className="radio-input" 
                                type="radio" 
                                name="platform" 
                                value="twitter" 
                                checked={values.platform === "twitter"} 
                                onChange={handleChange} 
                            />
                            <p className="form-text">Twitter</p>
                        </label>
                        <label className="radio other">
                            <input 
                                className="radio-input" 
                                type="radio" 
                                name="platform" 
                                value="other" 
                                checked={values.platform === "other"} 
                                onChange={handleChange} 
                            />
                            <p className="form-text">Other:</p>
                            <input 
                                className= {submitted && errors.otherText ? "error input-box othertext" : "input-box othertext"} 
                                type="text" 
                                name="otherText" 
                                value={values.otherText} 
                                onChange={handleChange} 
                                disabled={values.platform !== "other"} 
                            />
                        </label>              
                    </div>
                    {submitted && errors.platform && <p className="error-text">{errors.platform}</p>}
                    {submitted && errors.otherText && <p className="error-text">{errors.otherText}</p>}
                </div>
        </div>
    );
}

export default Participant;