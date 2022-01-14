import React, { useState } from 'react'
import { Footer, Header } from '../componenet'
import { BsArrowRight } from "react-icons/bs"
import AvatarImage from "../images/mandog.jpg";



function ContactPage() {
    const [name, setName] = useState("");
    const [activity, setActivity] = useState("");
    const [email, setEmail] = useState("");
    const [checkbox, setCheckbox] = useState(false);


    const [sent, setSent] = useState(false);
    const [err, setErr] = useState("");

    const handleSend = () => {
        if(name === "" || name.length <= 0 || name === null || name.length <=2 || activity.length <= 0) {
            setErr("Fields Can not be Empty!");
            setSent(false)
        }
        else if(email.length <= 5) {
            setErr("Email format wrong!");
            setSent(false);
        }
        else if(!checkbox){
            setErr("Checkbox Needs to be checked");
            setSent(false);

        }
        else {
            setSent(true)
        }
    }

    return (
        <div className='contactpage'>
            <Header />
            {!sent ? (
            <section className='contactpage__container'>
                <h4>/Get in touch</h4>
                {err && <p className='error'>{err}</p>}
                <div className='contactpage__container__topdiv'>
                    
                    <p>
                        Hey, my name is <input required className='contactpage__input' value={name} onInput={(e) => setName(e.target.value)} type="text" name='name' placeholder='Type Here'/> and I need help with  
                        <input className='contactpage__input' name="activity" value={activity} onInput={(e) =>setActivity(e.target.value)} placeholder='Adopting, Grooming, Fostering'/>
                        Get in touch with me at <input required className='contactpage__input' type="email" name="email" value={email} onInput={(e) => setEmail(e.target.value)} placeholder='Your Email ID Here' /> !
                    </p>
                    
                </div>

                <div className='terms__div'>
                    <input required type="checkbox" value={checkbox} onClick={() => setCheckbox(!checkbox)} name='terms' className='terms__checkbox' />
                    <label htmlFor='terms__checkbox'>I here by accept all terms and conditions.</label>
                </div>

                <div>
                    <button onClick={handleSend} type='submit' className='contactpage__btn'>Send Enquiry
                        <BsArrowRight />
                    </button>
                </div>
            </section>
            ):(
                <section className='contactpage__container'>
                    <h4>/Get in touch</h4>
                    <div className='contactpage__success'>
                        <p>Your Inquiry has been recieved. You should get a  response between 2-4 days.</p>
                        <p>Thank you.</p>
                    </div>
                </section>
            )}

            <div className='contactpage__middiv'>
                <div className='contactpage__middiv-div'>
                    <img className='middiv__img' src={AvatarImage} alt="Contact" />
                    <div>
                        <h4>Gabriel</h4>
                        <p>Adoption Agent and Team Leader</p>
                    </div>
                </div>

                <div>
                    <p>needhelp@petland.agency</p>
                    <p>(123) 888-7773</p>
                </div>
                <div>
                    <p>809 Slat lake Road</p>
                    <p>Wayoming, USA 23834-03849</p>
                </div>

                <div>
                    <p>+(123) 328-2823</p>
                    <p>info@petland.agency</p>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default ContactPage
