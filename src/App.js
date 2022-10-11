import fsection from './Assests/fsection.png'
import airplane from './Assests/Icons/airplace.png'
import antenna from './Assests/Icons/antenna.png'
import setting from './Assests/Icons/setting.png'
import Speaker from './Assests/Icons/Speaker.png'
import Guwa from './Assests/Guwa.jpg'
import sikkim from './Assests/sikkim.jpeg'
import ski from './Assests/ski.jpg'
import traveller from './Assests/traveller.png'
import star from './Assests/Icons/star.png'
import expedia from './Assests/expedia.png'
import Jetstar from './Assests/Jetstar.png'
import Phone from './Assests/Icons/Phone.png'
import Facebook from './Assests/Icons/Facebook.png'
import Twitter from './Assests/Icons/Twitter.png'
import Instagram from './Assests/Icons/Instagram.png'
function App() {
  return (
 <>
 <nav >
    <h1 className='navTitle'>Travelliez</h1>
    <div className='links'>
      <h3 className='navLink'>Desitnations</h3>
      <h3 className='navLink'>Hotels</h3>
      <h3 className='navLink'>Bookings</h3>
    <h3 className='lLink'>SignUp</h3>
      <h3 className='lLink'>Login</h3>
    </div>
  </nav>
  <div className="firstsection">

   <div className="text-zone">
    <p className="ptext">best desitnations around the world</p>
    <h1 className="tHead"> Travel, enjoy and live a new and full life</h1>
    <p className="ttext"> Built Wicket longer admire do barton vansity itself do it. 
      Preferred to sportsmen it engrossed listening. Park gate sell they west hard for it.
    </p>
    {/* add youTube Icon here  */}
    <button className='fbtn'>Find out more</button>
    
   </div>
   <img src={fsection} alt="travel" className='fimg'/>
  </div>
  <main className='secondSection'>
    <p className='stext'>CATEGORY</p>
<h1 className='sHead'>We Offer Best</h1>
<div className='card-section'>
<div className='card'>
    <img src={antenna} alt="antenna" className='icons'/>
    <h3 className='ctitle'>Calculated Weather</h3>
    <p className='ctext'>Built Wicket longer admire do barton vanity itself do in it.</p>
  </div>
  <div className='card'>
    <img src={airplane} alt="airplane" className='icons'/>
    <h3 className='ctitle'>Best Flights</h3>
    <p className='ctext'>Engrossed listening. Park gate sell they west hard for the</p>
  </div>
  <div className='card'>
    <img src={Speaker} alt="speaker" className='icon'/>
    <h3 className='ctitle'>Local Events</h3>
    <p className='ctext'>Barton vanity itself do in it. Preferred to men it. engrossed listening.</p>
  </div>
  <div className='card'>
    <img src={setting} alt="setting" className='icons'/>
    <h3 className='ctitle'>Customization</h3>
    <p className='ctext'>We deliver outsourced aviation services for miltaray cutomers</p>
  </div>
</div>
  </main>
  {/* thrid section */}
 <main className='thirdSection'>
 <p className='thtext'>Top Selling</p>
<h1 className='thHead'>Top Desitnations</h1>
<div className='thCard'>
  <div className='thcard'>
<img src={Guwa} className='thicons' alt="place"/>    
 <h4 className='thplace'>Assam, India</h4>
 <p className='thprice'>₹25,000</p>
 <p className='thdays'>5-10 days</p>
  </div>
  <div className='thcard'>
<img src={sikkim} className='thicons' alt="place"/>    
 <h4 className='thplace'>Sikkim, India</h4>
 <p className='thprice'>₹35,000</p>
 <p className='thdays'>12 days</p>
  </div>
  <div className='thcard'>
<img src={ski} className='thicons' alt="place"/>    
 <h4 className='thplace'>NorthEast, India</h4>
 <p className='thprice'>₹50,000</p>
 <p className='thdays'>30 days</p>
  </div>
</div>
 </main>
 <main className='foursection'>
  <h1 className='fourHead'>Ease your travelling experience with us</h1>
<div className='fourcard'>
<img src={traveller} alt="" className='foImag'/>
<div className='fourdetails'>
    <h2 className='fourName'>Make your travel hussle free</h2>
    <div className='service'>
      <img src={star} alt="" className='serviceimg'/>
      <h3>Stay in 5 Stars</h3>
    </div>
    <div className='service'>
      <img src={setting} alt="" className='serviceimg'/>
      <h3>customize your travelling <br/> package at any time</h3>
    </div>
    <div className='service'>
      <img src={Phone} alt="" className="serviceimg"/>
      <h3>contact us at  any time <br/> during your vacation</h3>
    </div>
</div>
</div>
 </main>
{/* five section */}
<main className='fivesection'>
  <img src={expedia} alt="" className="fiveimg"/>
  <img src={Jetstar} alt="" className="fiveimg1"/>
</main>

<main className='sixsection'>
  <h1 className='sixtext'>Subscribe to get information, latest news and other 
  <br/> interesting offer from us
  </h1>
<div className='inputSection'>
  <input type='email' className='inputEmail' 
  placeholder='email'/>
  <button className='sixbtn'>Subscribe</button>
</div>
</main>
{/* footer */}
<footer className='footer'>
  <div className='footerintro'>
    <h3 className='foheading'>
    Travelliez
    </h3>
    <p className='fotext'>
      Book your trips in minutes 
    </p>
  </div>
  <div className='link'>
    <h4 className='linkHead'>Company</h4>
    <p className='linkname'>About</p>
    <p className='linkname'>Carrers</p>
    <p className='linkname'>Mobile</p>
  </div>
  <div className='link'>
    <h4 className='linkHead'>Contact</h4>
    <p className='linkname'>Help/FAQ</p>
    <p className='linkname'>Press</p>
    <p className='linkname'>Affilates</p>
  </div>
  <div className='link'>
    <h4 className='linkHead'>More</h4>
    <p className='linkname'>Airlinefees</p>
    <p className='linkname'>Airline</p>
    <p className='linkname'>Low fare tips</p>
  </div>
  <div className='link'>
    <h4 className='linkHead'>Follow us </h4>
    <img src={Facebook} alt="" className='linkimg'/>
   <img src={Twitter} alt="" className='linkimg'/>
    <img src={Instagram} alt="" className='linkimg'/>
   </div>
  
</footer>
 </>
  );
}

export default App;
