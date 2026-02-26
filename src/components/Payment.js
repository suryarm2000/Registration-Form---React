function Payment({values, handleChange, submitted, errors}){

    return(
        <div>
            <h2>Payment Information</h2>
                <div className="payment-row">
                    <div className="ticket-section">
                        <label className="input-field ticket-input-section">
                            <p className="form-text">Number of Tickets</p>
                            <input 
                                className= {submitted && errors.tickets ? "input-box tickets error" : "input-box tickets"} 
                                type="text" 
                                name="tickets" 
                                value={values.tickets} 
                                onChange={handleChange} 
                            />
                            {submitted && errors.tickets && <p className="error-text">{errors.tickets}</p>}
                        </label>
                    </div>
                    <div className="pay-method">
                        <p className="form-text">Payment Method</p>
                        <div className="radio-payment">
                            <label className="radio">
                                <input 
                                    className="radio-input" 
                                    type="radio" 
                                    name="paymentMethod" 
                                    value="creditcard" 
                                    checked={values.paymentMethod === "creditcard"} 
                                    onChange={handleChange} 
                                />
                                <p className="form-text">Credit Card</p>
                            </label>
                            <label className="radio">
                                <input 
                                    className="radio-input" 
                                    type="radio" 
                                    name="paymentMethod" 
                                    value="debitcard" 
                                    checked={values.paymentMethod === "debitcard"} 
                                    onChange={handleChange} 
                                />
                                <p className="form-text">Debit Card</p>
                            </label>
                            <label className="radio">
                                <input 
                                    className="radio-input" 
                                    type="radio" 
                                    name="paymentMethod" 
                                    value="cash" 
                                    checked={values.paymentMethod === "cash"} 
                                    onChange={handleChange} 
                                />
                                <p className="form-text">Cash</p>
                            </label>
                            <label className="radio">
                                <input 
                                    className="radio-input" 
                                    type="radio" 
                                    name="paymentMethod" 
                                    value="check" 
                                    checked={values.paymentMethod === "check"} 
                                    onChange={handleChange} 
                                />
                                <p className="form-text">Check</p>
                            </label>
                        </div>
                        {submitted && errors.paymentMethod && <p className="error-text">{errors.paymentMethod}</p>}
                    </div>
                </div>
                <div className="confirm-grid">
                    <p className="form-text payment-para">
                        I understand that participation in this event may involve some degree of risk. 
                        I release WebminarPros LLC from any liability for injury, loss, or damage to personal property.
                    </p>
                    <div className="sign-input-div">
                        <label className="sign-input-section">
                            <p className="form-text">Signature</p>
                            <input 
                                className= {submitted && errors.sign ? "input-box sign error" : "input-box sign"} 
                                type="text" 
                                name="sign" 
                                value={values.sign} 
                                onChange={handleChange}
                            />
                        </label>
                        {submitted && errors.sign && <p className="error-text">{errors.sign}</p>}
                    </div>
                    <label className="radio confirm-section">
                        <input 
                            className="radio-confirm" 
                            type="radio" 
                            name="confirm" 
                            value="confirm" 
                            checked={values.confirm === "confirm"} 
                            onChange={handleChange} 
                        />
                        <p className="form-text">Yes, I understand</p>
                    </label>
                    <div className="date-signed-input-div">
                        <label className="payment-inputs date-signed-input-section">
                            <p className="form-text">Date Signed</p>
                            <input 
                                className= {submitted && errors.dateSigned ? "input-box error" : "input-box"} 
                                type="date" 
                                name="dateSigned" 
                                value={values.dateSigned} 
                                onChange={handleChange} 
                            />
                        </label>
                        {submitted && errors.dateSigned && <p className="error-text">{errors.dateSigned}</p>}
                    </div>
                </div>
            <div className="submit-section">
                <button className="button-submit" type="submit" disabled={!values.confirm} >Submit</button>
            </div>
        </div>
    )
}

export default Payment;