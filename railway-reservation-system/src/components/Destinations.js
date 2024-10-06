import React from 'react'
import duronto from '../assets/duronto_express.jpeg'
import goldenchariot from '../assets/goldenchariot.jpg'
import rajdhani from '../assets/rajdhani.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Book Your Trains</h3>
      <div className='grid'>
        <div>
          <a href='https://www.yatra.com/indian-railways/duronto-express-12246-train'><img src={duronto} alt='destination-1' /></a>
          <h3>Duronto Express</h3>
          <p>
          Duronto Express is a category of long-distance non-stop source to destination trains run by the Indian Railways. Initially these trains did not have any ticketing stops between the origin and the destination, but since January 2016 it is possible to book tickets from those technical stops. "Duronto" means "very fast" in Bengali.
          </p>
        </div>

        <div>
          <a href='https://www.goldenchariot.org/book/bookticket'><img src={goldenchariot} alt='destination-2' /></a>
          <h3>Golden Chariot</h3>
          <p>
          The Golden Chariot is a luxury tourist train that connects the important tourist spots in the Indian states of Karnataka, Goa, Kerala & Tamil Nadu as well as Pondicherry, depending on the selected itinerary. It is named after the Stone Chariot in the Vitthala Temple at Hampi.
          </p>
        </div>

        <div>
          <a href='https://www.yatra.com/indian-railways/rajdhani-express-12433-train'><img src={rajdhani} alt='destination-3' /></a>
          <h3>Rajdhani Express</h3>
          <p>
          The Rajdhani Express is a series of passenger train service in India operated by Indian Railways connecting the national capital New Delhi with the capitals or largest city of various states. The word Rajdhani has been derived from the Devanagri script, which means Capital in English.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
