import { useState } from "react";
import About from "./components/About";
import Participant from "./components/Participant";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

function Page(){

    const [inputs, setInputs] = useState({
        name: "",
        dob: "",
        gender: "",
        email: "",
        number: "",
        platform: "",
        othertext: "",
        tickets: "",
        paymentmethod: "",
        confirm: "",
        sign: "",
        datesigned: ""
    });

    function handleChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox"? target.checked : target.value;
        if(name === "name"){
            const fullName = value.replace(/[^a-zA-Z. ]/g, "");
            setInputs((prev) => ({
                ...prev,
                [name] : fullName
            }));
            return;
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

    function handleSubmit(e){
        e.preventDefault();
        console.log("INPUTS DATA:", inputs);
        let canSubmit = true;
        for(const [key, value] of Object.entries(inputs)){
            if(value === ""){
                if(key === "othertext"){
                    if(inputs.platform === "other"){
                        canSubmit = false;
                    }
                }else{
                    canSubmit = false;
                }
            }
        }
        if(!canSubmit){
            alert("Please fill out all the details");
        }
    }

    return(
        <div className="page">
            <About />
            <hr />
            <form onSubmit={handleSubmit}>
                <Participant values={inputs} handleChange={handleChange} />
                <hr />
                <Payment values={inputs} handleChange={handleChange} />
            </form>
            <hr />
            <Footer />
        </div>
    );
}

export default Page;