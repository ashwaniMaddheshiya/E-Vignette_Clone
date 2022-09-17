import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import './styles/Home.css'
import Select from 'react-select'
import familyCar from './images/familyCar.jpg'
import highway from './images/highway.jpg'
import paymentCard from './images/paymentCard.jpg'
import CountryCard from './CountryCard'
import bulgaria from './images/bulgaria.jpg'
import hungary from './images/hungary.jpg'
import slovakia from './images/slovakia.jpg'
import slovenia from './images/slovenia.jpg'
import czech_republic from './images/czech_republic.jpg'
import { useNavigate } from 'react-router-dom'


// Options for country...
const countryCategory = [
  { label: "Bulagaria", value: "Bulagaria" },
  { label: "Hungary", value: "Hungary" },
  { label: "Slovakia", value: "Slovakia" },
  { label: "Slovenia", value: "Slovenia" },
  { label: "Czech Republic", value: "Czech Republic" }
];


// Options for Vehicle...
const vehicleCategory = [
  { label: "Vehicles < 3.5t", value: "Vehicles < 3.5t" },
  { label: "Trailers", value: "Trailers" }
];


//Options for Duration...
const durationCategory = [
  { label: "1 weekend", value: "1 weekend" },
  { label: "1 week", value: "1 week" },
  { label: "1 month", value: "1 month" },
  { label: "3 months", value: "3 months" },
  { label: "1 year", value: "1 year" }
]



const Home = () => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [vehicleOptions, seVehicleOptions] = useState([]);
  const [durationOptions, setDurationOptions] = useState([]);
  const navigate = useNavigate();



  const handleSubmit = () => {
    // Navigate is used to transfer data to the next route...
    navigate("/register", {
      state: {
        country: countryOptions,
        vehicle: vehicleOptions,
        duration: durationOptions
      }
    });

  }


  const handleCountryChange = (countryCategory) => {
    //Get the data from dropdown...
    setCountryOptions(countryCategory.value)
  }

  const handleVehicleChange = (vehicleCategory) => {
    seVehicleOptions(vehicleCategory.value)
  }

  const handleDurationChange = (durationCategory) => {
    setDurationOptions(durationCategory.value)
  }





  return (

    <>
      <div className="home">

        <div className="upperSection d-flex align-items-center">
          <Container>

            <div className="upper_registration_section   ">
              <p className=' fs-2 lh-1'>E-vignettes at vintrica</p>
              <p>Buy a motorway e-vignette quickly and easily at vintrica.</p>


              {/* Registartion Form */}
              <div className="registration_form  w-100 h-25 ">
                <div className="container">
                  <div className="row m-0">

                    {/* The DropDown for selecting options for registration */}
                    <div className="left col-md-3 p-1">
                      <Select options={countryCategory} placeholder="Country" onChange={handleCountryChange} />
                    </div>
                    <div className="mid col-md-3 p-1">
                      <Select options={vehicleCategory} placeholder="Vehicle" onChange={handleVehicleChange} />
                    </div>
                    <div className="right col-md-3 p-1">
                      <Select options={durationCategory} placeholder="Duration" onChange={handleDurationChange} />
                    </div>
                    <div className="right col-md-3 p-1">
                      <Button onClick={handleSubmit} className='col-md-12'>Continue</Button>
                    </div>

                  </div>
                </div>
              </div>

              <div className="secureInfo mt-5">
                <strong>Secure: </strong> Your Data is transmitted SSl-encrypted.
              </div>

            </div>
          </Container>
        </div>

        <div className="upperMidSection">
          <Container>
            <div className='innerContainer d-flex justify-content-between'>

              <div className="leftSection w-50">
                <h2>E-vignette: here’s how it works</h2>
                <div className="procedure">
                  With vintrica it’s easy to register your number plate online for all motorways and main roads that require a vignette. You can simply buy a vignette either from home before you start your journey or on the spur of the moment during your journey on your smartphone before you get on the motorway.
                </div><br />
                <ul>
                  <li>Quick to use</li>
                  <li>Instant Activation</li>
                  <li>Vignette directly on your mobile phone</li>
                  <li>Secure online payment</li>
                </ul>
              </div>
              <div className="rightSection w-50 d-flex justify-content-center align-items-center">
                <div className="imgSection w-75 h-75">
                  <img src={familyCar} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="lowerMidSection">
          <Container>
            <div className="innerlowerMidSection d-flex justify-content-between">
              <div className="icon1 w-25  d-flex flex-column align-items-center">
                <img src={highway} alt="" />
                <div className="imgDetails d-flex flex-column align-items-center justify-content-center">
                  <h5>Select e-vignette</h5>
                  Enter vehicle category and registration number.
                </div>
              </div>

              <div className="icon2 w-25 d-flex flex-column align-items-center">
                <img src={paymentCard} alt="" />
                <div className="imgDetails d-flex flex-column align-items-center justify-content-center">
                  <h5>Pay securely online</h5>
                  Pay tolls simply and securely online.
                </div>
              </div>

              <div className="icon3 w-25 d-flex flex-column align-items-center">
                <img src={highway} alt="" />
                <div className="imgDetails d-flex flex-column align-items-center justify-content-center">
                  <h5>Set off with no worries</h5>
                  Receive the e-vignette immediately by email or text message.
                </div>
              </div>
            </div>
          </Container>
        </div>


        <div className="lowerSection">
          <Container>
            <div className="outerOfOtherCountry">
              <div className="text fs-3" style={{ marginLeft: "17px" }}>
                <span> With vintrica, you can travel all over Europe</span>
              </div>
              <div className="otherCountry d-flex flex-wrap m-2">

                <div className="bulgaria m-2">
                  <CountryCard imgSource={bulgaria} country="Bulgaria" />
                </div>

                <div className="slovenia m-2">
                  <CountryCard imgSource={slovenia} country="Slovenia" />
                </div>

                <div className="slovakia m-2">
                  <CountryCard imgSource={slovakia} country="Slovakia" />
                </div>

                <div className="hungary m-2">
                  <CountryCard imgSource={hungary} country="Hungary" />
                </div>

                <div className="czech_republic m-2">
                  <CountryCard imgSource={czech_republic} country="Czech Republic" />
                </div>

              </div>

              <div className="practical" style={{ marginLeft: "17px" }}>
                <p>Practical: With the <strong>electronic vignette (e-vignette)</strong>, you no longer have to go out of your way to buy an adhesive vignette and stick it on your car windscreen. Instead, <strong>you pay the toll online </strong>on the vintrica website and enter your vehicle registration number. Payment of the toll is checked automatically using camera technology that reads your number plate on the motorway as you pass – without you noticing.</p>
                <p>With vintrica, you will always have a smooth journey: in addition to vignettes for <strong>Bulgaria </strong> and <strong>Slovakia </strong>, we also offer the e-vignette for <strong>Hungary</strong> as an official partner of the Hungarian motorway operator.</p>
              </div>
            </div>
          </Container>
        </div>


        <div className="badgeStartJourney ">
          <Container>
            <div className="badgeInnerContainer  d-flex align-items-center justify-content-between">
              <div className="badgeDetails">
                <span className='fs-3'>Start your journey with vintrica now.</span><br />
                We are there for you on Europe’s motorways. Buy your e-vignette online
              </div>
              <div className="button">
                <Button className='btn-badge'>Continue</Button>

              </div>
            </div>
          </Container>
        </div>

      </div>
    </>
  )
}

export default Home