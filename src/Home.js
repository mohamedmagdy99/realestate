import Footer from './Footer';
import './Home.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Home = () => {
       const ImgUrl= "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
       const WhyOurCompany ="our company dedicated to innovating the luxury real estate industry, offers absolutly new experiences through a global network of execeptional agents"
       return ( 
              <div className="home">
                     <Navbar />
                     <div className="intro">
                            <h1>Modern home.<br/> your best home.</h1>
                            <p>Let's find a perfect home for you</p>
                     </div>
                     
                     <div className="content">
                            <img src={ImgUrl} alt="house"/>
                            
                            <h3>why our company?</h3><p> {WhyOurCompany} <Link to="/About">More</Link></p>
                     </div>
                     <div className="content">
                            <h3>why our company?</h3><p> {WhyOurCompany} <Link to="/Projects">More</Link></p>
                            <img src={ImgUrl} alt="house"/>
                     </div>
                     <Footer />
              </div>
        );
}
 
export default Home;