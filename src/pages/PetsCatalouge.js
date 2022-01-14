import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header, Loading, Pet } from '../componenet'
import "./styles.css";

function PetsCatalouge() {
    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { type, sex, age } = useParams();

    useEffect(() => {
        loadPetsFromApi();
        setTimeout(()=>{
            setIsLoading(false)
        }, 4000)
    }, [])

    const loadPetsFromApi = async() => {
        setPets([])
        // const URL =  `https://api.adoptapet.me/sb?q=${type}&age=${age}`
        const URL = `https://api.adoptapet.me/ap?q=${sex}&age=${age}`
        const newArr = [];
        await fetch(URL)
        .then(response => response.json().then(res => {
            newArr.push(res.page);
            setPets(newArr[0]);
            console.log(newArr[0])
        }))
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div className='petscatalouge'>
            <Header />
            {!isLoading ? (
                <section>
                <div className='petscatalouge__pet'>
                   {/* {pets.map(pet => (
                       <Pet key={pet.id}
                        name={pet.name}
                        pic={pet.pic_url}
                        age={pet.age}
                        color={pet.color}
                        descp={pet.desc}
                        sex={pet.sex}
                        species_name={pet.species_breed.species_name}
                        breed_name={pet.species_breed.breed_name}
                        center={pet.center}
                       />
                   ))} */}
                </div>
                <div className='petscatalouge__error'>
                    <h3>Apologies This Service is Currently Unavailable!</h3>
                    <p>Check back again Lateror reach out to us for assistance 
                        <Link to="/contact"> Contact Us </Link>
                    </p>
                </div>
            </section>
            ):(
                <Loading />
            )}
            
        </div>
    )
}

export default PetsCatalouge
