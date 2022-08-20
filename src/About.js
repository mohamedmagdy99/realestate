import  Navbar from './Navbar';
import Footer from './Footer';
import './About.css';
const About = () => {
       const dumbtalk = "Hey, beautiful. Stop crying because it is over. Start smiling because that ungrateful loser is someone else problem. Don’t be sad that he chose her over you, stop counting your thunderstorms, and start counting your rainbows! Hey pal, if they hurt you again, just tell me, I can make their death look like an accident! Don’t worry I have got your back.What should I do to make you listen to me? Buy some kind of friendship premium? Take my money, because I’m tired of you not taking me seriously. Yes, I cry when I see touching commercials, but it doesn’t mean you can make fun of me"
       return (  
              <div className="About">
                     <Navbar />
                     <div className='flex-wrapper'>
                            <div className="content">   
                                   <h1>why us?</h1>
                                   <p>{dumbtalk}</p>
                                   <h1>our numbers</h1>
                                   <p>{dumbtalk}</p>
                            </div>
                            </div>
                            <Footer />
                     
              </div>
       );
}
 
export default About;