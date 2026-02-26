import { useState } from "react";
import dayjs from "dayjs";
import About from "./components/About";
import Participant from "./components/Participant";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

function Page(){

    const [inputs, setInputs] = useState({
        name: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        number: "",
        platform: "",
        otherText: "",
        tickets: "",
        paymentMethod: "",
        confirm: "",
        sign: "",
        dateSigned: "",
        nameReplacement: "Digital Marketing Masterclass",
        dateReplacement: "October 15, 2028"
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        number: "",
        platform: "",
        otherText: "",
        tickets: "",
        paymentMethod: "",
        confirm: "",
        sign: "",
        dateSigned: ""
    });

    function handleChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox"? target.checked : target.value;
        if(name === "name"){
            const fullName = value.replace(/[^a-zA-Z. ]/g, "");
            setInputs((prev) => ({
                ...prev,
                [name] : fullName,
                "nameReplacement" : fullName.trim() === "" ? "Digital Marketing Masterclass" : fullName
            }));
            return;
        }
        if(name === "dateOfBirth"){
            const dateOfBirth = dayjs(value).format("MMMM D, YYYY")
            setInputs((prev) => ({
                ...prev,
                [name] : value,
                "dateReplacement" : value === "" ? "October 15, 2028" : dateOfBirth
            }))
        }
        if(name === "number"){
            const phoneNumber = value.replace(/\D/g, "").slice(0, 10);
            setInputs((prev) => ({
                ...prev,
                [name] : phoneNumber
            }));
            return;
        }
        if(name === "email"){
            const emailInput = value.replace(/\s/g, "").toLowerCase();
            setInputs((prev) => ({
                ...prev,
                [name] : emailInput
            }));
            return;
        }
        if(name === "tickets"){
            const ticketsNumber = value.replace(/\D/g, "").slice(0, 4);
            setInputs((prev) => ({
                ...prev,
                [name] : ticketsNumber
            }));
            return;
        }
        setInputs((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    function validate(){
        const newErrors = {};
        if(!inputs.name.trim()){
            newErrors.name = "Name is required";
        }
        if(!inputs.dateOfBirth){
            newErrors.dateOfBirth = "Date of Birth is required";
        }
        if(!inputs.gender){
            newErrors.gender = "Choose a gender";
        }
        if(!inputs.number){
            newErrors.number = "Phone Number is required";
        }
        if(inputs.number.length !== 10){
            newErrors.number = "Enter a valid Phone number";
        }
        if(!inputs.email.trim()){
            newErrors.email = "Email is required";
        }
        if(!inputs.platform){
            newErrors.platform = "Choose one option";
        }
        if(inputs.platform === "other" && !inputs.otherText.trim()){
            newErrors.otherText = "Specify your answer";
        }
        if(!inputs.tickets){
            newErrors.tickets = "Number of tickets is required";
        }
        if(!inputs.paymentMethod){
            newErrors.paymentMethod = "Please Choose a payment method";
        }
        if(!inputs.sign){
            newErrors.sign = "Sign is required";
        }
        if(!inputs.dateSigned){
            newErrors.dateSigned = "Date Signed is required";
        }
        return newErrors;
    }

    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);

        const validationErrors = validate();
        setErrors(validationErrors);
        
        let errorPresent = false;
        Object.keys(validationErrors).forEach(key => {
            if(validationErrors[key]){
                errorPresent = true;
                return;
            }
        });
        if(errorPresent) return;

        const newInputs = {
            name: "",
            dateOfBirth: "",
            gender: "",
            email: "",
            number: "",
            platform: "",
            otherText: "",
            tickets: "",
            paymentMethod: "",
            confirm: "",
            sign: "",
            dateSigned: "",
            nameReplacement: "Digital Marketing Masterclass",
            dateReplacement: "October 15, 2028"
        }

        setInputs(newInputs);
        alert("Form Submitted");
    }

    return(
        <div className="page">
            <About values={inputs} />
            <hr />
            <form onSubmit={handleSubmit}>
                <Participant values={inputs} handleChange={handleChange} submitted={submitted} errors={errors} />
                <hr />
                <Payment values={inputs} handleChange={handleChange} submitted={submitted} errors={errors} />
            </form>
            <hr />
            <Footer />
        </div>
    );
}

export default Page;