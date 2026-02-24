function Participant({values, handleChange}){

    return(
        <div>
            <h2>Participant Information</h2>
                <div className="form-row name-dob-section">
                    <label className="input-field name-input-section">
                        <p className="form-text">Full Name</p>
                        <input className="input-box name" type="text" name="name" value={values.name} onChange={handleChange} />
                    </label>
                    <label className="input-field dob-input-section">
                        <p className="form-text">Date of Birth</p>
                        <input className="input-box dob" type="date" name="dob" value={values.dob} onChange={handleChange}/>
                    </label>
                </div>
                <div className="form-row">
                    <div className="gender-select">
                        <p className="form-text">Gender</p>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="gender" value="male" checked={values.gender === "male"} onChange={handleChange} />
                            <p className="form-text">Male</p>
                        </label>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="gender" value="female" checked={values.gender === "female"} onChange={handleChange} />
                            <p className="form-text">Female</p>
                        </label>
                    </div>
                    <div className="name-email-section">
                        <label className="input-field number-input-section">
                            <p className="form-text">Phone Number</p>
                            <input className="input-box number" type="text" name="number" value={values.number} onChange={handleChange} />
                        </label>
                        <label className="input-field email-input-section">
                            <p className="form-text">Email</p>
                            <input className="input-box email" type="email" name="email" value={values.email} onChange={handleChange} />
                        </label>
                    </div>
                </div>
                <div className="social-media-section">
                    <p className="form-text">Where did you hear about this virtual event?</p>
                    <div className="social-radio">
                        <label className="radio">
                            <input className="radio-input" type="radio" name="platform" value="facebook" checked={values.platform === "facebook"} onChange={handleChange} />
                            <p className="form-text">Facebook</p>
                        </label>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="platform" value="youtube" checked={values.platform === "youtube"} onChange={handleChange} />
                            <p className="form-text">Youtube</p>
                        </label>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="platform" value="instagram" checked={values.platform === "instagram"} onChange={handleChange} />
                            <p className="form-text">Instagram</p>
                        </label>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="platform" value="twitter" checked={values.platform === "twitter"} onChange={handleChange} />
                            <p className="form-text">Twitter</p>
                        </label>
                        <label className="radio other">
                            <input className="radio-input" type="radio" name="platform" value="other" checked={values.platform === "other"} onChange={handleChange} />
                            <p className="form-text">Other:</p>
                            <input className="input-box othertext" type="text" name="othertext" value={values.othertext} onChange={handleChange} disabled={values.platform !== "other"} />
                        </label>              
                    </div>
                </div>
        </div>
    );
}

export default Participant;