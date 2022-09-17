import React ,{useState} from 'react'
import { Container } from 'react-bootstrap'
import ArrayPointer from './ArrowPointer';
import Select from 'react-select'
import './styles/Registration.css'
import { useLocation, useNavigate } from 'react-router-dom';


const countries = [
  { label: "India ", value: "India " },
  { label: "Germany ", value: "Germany " },
  { label: "Hungary", value: "Hungary" },
  { label: "Czech Republic", value: "Czech Republic" },
  { label: "Poland", value: "Poland" },
  { label: "Austria", value: "Austria" },
  { label: "Romania", value: "Romania" },
  { label: "Turkey", value: "Turkey" },
]

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const[registerCountry, setRegisterCountry] = useState([]);
  const[startingDate, setStartingDate] = useState([]);

  const handleAddCart = () =>{
    navigate("/cart", {state:{country:location.state.country, vehicle:location.state.vehicle, duration:location.state.duration, registerCountry: registerCountry, startingDate:startingDate }})
  }


  const handleRegisterChange = (countries) =>{
    setRegisterCountry(countries.value);
    
  }

  const handleDateChange = (e) =>{
    setStartingDate(e.target.value);
  }

  

  return (
    <>
      <Container className='p-5'>
        <h3>Register e-vignette</h3>
        <div className="d-flex">
          <div className="step1 m-3">
            <ArrayPointer message="Select e-vignette" value="step1"/>
          </div>

          <div className="step2 m-3">
            <ArrayPointer message="number&validity" value="step1"/>
          </div>

          <div className="step3 m-3">
            <ArrayPointer message="Shopping cart" value="step1"/>
          </div>

          <div className="step4 m-3">
            <ArrayPointer message="E-mail Address" value="step1"/>
          </div>

          <div className="step5 m-3">
            <ArrayPointer message="Overview - T&C" value="step1"/>
          </div>

          <div className="step6 m-3">
            <ArrayPointer message="Pay & Go" value="step1"/>
          </div>
        </div>

        <div className="containerVehicles w-100 h-25">
          <div className="selectedVehicle p-3 m-3">

            <h4>{location.state.vehicle}</h4>
          </div>
        </div>
        <strong className='fs-5'>Valid in : </strong> {location.state.country}


        <div className="vehicleDetailsContainer mt-3 p-4">
          <div className="vehicleDetails">
            <div className='fs-4'> Vehicle Details</div>
            <div className="countryRegistration mt-3 d-flex justify-content-between">
              <div className="mt-2"> Country Of Registartion</div>
              <div className="col-md-9 ">
                <Select options={countries} placeholder="Select Country" onChange={handleRegisterChange}/>
              </div>
            </div>
          </div>
        </div>

        <div className="containerDuration w-100 h-25 mt-4">
          <div className="selectedDuration p-3 m-3 d-flex justify-content-between">
            <div>
              <h4>{location.state.duration}</h4>

              This e-vignette is valid for {location.state.duration} from the start date.
            </div>
            <div className="price fs-3">
              <strong>7.80$</strong>
            </div>

          </div>

        </div>

        <div className="validityDetailsContainer mt-3 p-4">
          <div className="validityDetails ">
            <div className='fs-4'>Validity period</div>
            <div className="countryRegistration mt-3 d-flex justify-content-between">
              <div className="mt-2"> Start date</div>
              <div className="col-md-9 border border-secondary ">
              <input type="date" class="form-control"  onChange={handleDateChange}/>
              </div>
            </div>
          </div>
        </div>

        <div className="startDate mt-5">
          <div className="startingOn p-3">
            Start Date: <strong className=' text-primary'>Please first select the start date</strong>
          </div>
        </div>

        <div className="addToCart mt-5">
        <button type="button" class="btn btn-primary btn-lg w-100" onClick={handleAddCart}>Add to Cart</button>
        </div>

        <div className="secureData mt-4">
          <strong>Secure</strong>: Your data is transmitted SSL-encrypted.

        </div>

      </Container>
    </>
  )
}

export default Registration