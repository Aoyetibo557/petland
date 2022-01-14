import React, {useEffect, useState} from 'react';
import "./Portal.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Loading } from '..';



function Portal() {
    const [cont, setCont] = useState(false);
    const [ques1, setQues1] = useState("");
    const [ques2, setQues2] = useState("");
    const [ques3, setQues3] = useState("");
    const [ques4, setQues4] = useState("");
    const [ques5, setQues5] = useState("");
    const [ques6, setQues6] = useState("");
    const [ques7, setQues7] = useState("");

    const [err, setErr] = useState("");
    const [succ, setSucc] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            durationL: 2000,
            easing: "ease"
        })
    },[])

    const handleClick = () => {
        if(ques1 === "" || ques2 === "" || ques3 === "" || ques4 === "" || ques5 === "" ||ques6 === "" || ques7 === "") {
            setErr("All Questions Must Be Answered!");
            setSucc(false)
        }
        else {
            setSucc(true);
            navigate(`/pets/${ques1}/${ques2}/${ques6}`)

        }
    }

   
    return (
        <div className='portal'>
            <div data-aos="fade-up" className={!cont ? 'portal__top' : 'hide'}>
                <h3>Would You Like to take a Quick Quiz? </h3> 
                <h4>It Will Help Provide an Optimized Viewing List for Available Pets</h4>

                <div className='portal__btn__div'>
                    <button onClick={() => setCont(true)} type="submit" className='portal__btn'>Continue</button>
                    <Link to="/"  className='portal__btn'>Skip</Link>
                </div>
            </div>

            {cont ? (
                
                <div className={!succ ? 'portal__questions' : 'hide'}>
                    <p className='error'>{err && err}</p>
                    <div className='portal__questions__div'>
                        <p>1. What Type of Pet Do you Want to Adopt? {ques1 &&  `<${ques1}>`}</p>
                        <div className='portal__radio'>
                            <input type="radio" value={ques1} onChange={() => setQues1("dog")}  name="pet-type" />
                            <label htmlFor='dog'>Dog</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques1} onChange={() => setQues1("Cat")}  name="pet-type" />
                            <label htmlFor='cat'>Cat</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques1} onChange={() => setQues1("other")}  name="pet-type" />
                            <label htmlFor='oter'>Other Pet</label>
                        </div>
                    </div>
                    {/* Question 2 */}
                    <div className='portal__questions__div'>
                        <p>2. What Sex do You Prefer? {ques2 &&  `<${ques2}>`}</p>
                        <div className='portal__radio'>
                            <input type="radio" value={ques2} onChange={() => setQues2("Female")} name="sex-type" />
                            <label htmlFor='female'>Female</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques2} onChange={() => setQues2("Male")} name="sex-type" />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques2} onChange={() => setQues2("None")} name="sex-type" />
                            <label htmlFor='no-pref'>No Preference</label>
                        </div>
                    </div>
                    
                    {/* question 3 */}
                    <div className='portal__questions__div'>
                        <p>3. How Many People Live in Your Household? {ques3 &&  `<${ques3}>`}</p>
                        <div className='portal__radio'>
                            <input type="number" value={ques3} onChange={(e) =>setQues3(e.target.value)} name="num-people" />
                        </div>
                        
                    </div>
                    {/* Question 4 */}
                    <div className='portal__questions__div'>
                        <p>4. Are There any other pets in the Household? {ques4 &&  `<${ques4}>`}</p>
                        <div className='portal__radio'>
                            <input type="radio" value={ques4} onChange={() => setQues4("Yes")} name="yes-no" />
                            <label htmlFor='yes'>Yes</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques4} onChange={() => setQues4("No")} name="yes-no" />
                            <label htmlFor='no'>No</label>
                        </div>
                    </div>
                    {/* question 5 */}
                    <div className='portal__questions__div'>
                        <p>5. How would You rate your Knowledge of the Type of Pet you are Intrested In? {ques4 &&  `<${ques4}>`}</p>
                        <div className='portal__radio'>
                            <input type="radio" value={ques5} onChange={() => setQues5("Very Knowledgeable")} name="knowledge" />
                            <label htmlFor='very'>Very Knowledgeable</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques5} onChange={() => setQues5("Somewhat Knowledgeable")} name="knowledge" />
                            <label htmlFor='somewhat'>Somewhat Knowledgeable</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques5} onChange={() => setQues5("Little Knowledgeable")} name="knowledge" />
                            <label htmlFor='little'>Little or No Knowledged</label>
                        </div>
                    </div>

                    {/* Question 6 */}

                    <div className='portal__questions__div'>
                        <p>6. What Age would you prefer {ques6 &&  `<${ques6}>`}</p>
                        <div className='portal__radio'>
                            <input type="radio" value={ques6} onChange={() => setQues6("baby")} name="pet-location" />
                            <label htmlFor='inside'>Baby</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques6} onChange={() => setQues6("young")} name="pet-location" />
                            <label htmlFor='outside'>Young</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques6} onChange={() => setQues6("adult")} name="pet-location" />
                            <label htmlFor='dont-know'>Adult</label>
                        </div>
                    </div>

                    {/* Question 7 */}

                    <div className='portal__questions__div'>
                        <p>7. What Type of Residence do you currently have? {ques7 &&  `<${ques7}>`}</p>
                        <div className='portal__radio'>
                            <input type="radio" value={ques7} onChange={() => setQues7("Single Family")} name="owner-location" />
                            <label htmlFor='single'>Single Family</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques7} onChange={() => setQues7("Duplex")} name="owner-location" />
                            <label htmlFor='duplex'>Duplex</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques7} onChange={() => setQues7("Apartment")} name="owner-location" />
                            <label htmlFor='apartment'>Apartment</label>
                        </div>
                        <div className='portal__radio'>
                            <input type="radio" value={ques7} onChange={() => setQues7("Other")} name="owner-location" />
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>
                    
                    <div>
                        <button onClick={handleClick} className='portal__btn' type='submit'>Submit</button>
                    </div>
                    
                </div>
            ): ("")}

            <div className={!succ ? 'hide' : ""}>
                <Loading />
            </div>
        </div>
    )
}

export default Portal
