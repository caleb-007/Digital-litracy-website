import React, { Component } from 'react'
import '../home/styles.css'
// courses 
import C1 from '../../pages/img/c1.png'
import C2 from '../../pages/img/c2.png'
import C3 from '../../pages/img/c3.png'
import C4 from '../../pages/img/c4.png'
import Star from "../../pages/img/star.svg";
import Footer from '../../navigation/footer/footer'

import Hero from '../img/chero.png'
class cources extends Component {
    render() {
        return (
            <div>
                <div class="card carddy text-white position-relative" >
                    <img class="card-img img-fluid" className='heroh' src={Hero} alt="images" style={{height:'60vh'}}></img>
                    <div class="card-img-overlay" >
                        <div className='container pt-5 d-flex justify-content-center align-items-center ' style={{height:'80%'}}>
                        <h1 className=" ru pl-sm-4 pt-sm-4 hero-h white">Your Courses</h1>
                        </div>
                    </div>
                    </div>
                    <div  className="jumbotron " style={{backgroundColor: "#fff"}}>
                <div className='container pt-3'>
                <div className='row'>
                {/* col 1 */}
                <div className='col-md-6 col-lg-4'>
                <div class="card mb-2 mb-sm-0 mywidth" style={{width: "18rem"}}>
                <img class="card-img-top" src={C1} alt="img"></img>
                <div class="card-body p-2">
                <h1 className="card-title ro  heading2  text-left">Flyer design</h1>
                
                <div className='d-flex py-2'>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <p className=" ro card-text pr-1 fw3 p">4.0 (1 reviews)</p>
                </div>
               
                <a href='/courses' className='btn enroll text-center ro fw3 p green' style={{borderRadius:"0",padding:"0.1em 0.9em",backgroundColor:"#5F5F5F",border:'4px solid #5F5F5F',width:"100%",color:"#fff"}}> ENROLL</a>

                </div>
                </div>
                </div>

                {/* col 2 */}
                <div className='col-md-6 col-lg-4 '>
                <div class="card mb-2 mb-sm-0 mywidth" style={{width: "18rem"}}>
                <img class="card-img-top" src={C4} style={{width: "100%",height:"10em"}}alt="on"></img>
                <div class="card-body p-2">
                <h1 className="card-title ro  heading2  text-left">UI design</h1>
                
                <div className='d-flex py-1'>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <p className=" ro card-text pr-1 fw3 p">4.5 (4 reviews)</p>
                </div>
              
                <a href='/courses' className='btn enroll text-center ro fw3 p green' style={{borderRadius:"0",padding:"0.1em 0.9em",backgroundColor:"#5F5F5F",border:'4px solid #5F5F5F',width:"100%",color:"#fff"}}> ENROLL</a>

                </div>
                </div>
                </div>



                 {/* col 3 */}
                 <div className='col-md-6 col-lg-4 '>
                <div class="card mb-2 mb-sm-0 mywidth" style={{width: "18rem"}}>
                <img class="card-img-top" src={C2} style={{width: "100%",height:"10em"}}alt="on2"></img>
                <div class="card-body p-2">
                <h1 className="card-title ro  heading2  text-left">
            Photoshop basics</h1>
                
                <div className='d-flex py-1'>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <p className=" ro card-text pr-1 fw3 p">4.5 (5 reviews)</p>
                </div>
            
                <a href='/courses' className='btn enroll text-center ro fw3 p green' style={{borderRadius:"0",padding:"0.1em 0.9em",backgroundColor:"#5F5F5F",border:'4px solid #5F5F5F',width:"100%",color:"#fff"}}> ENROLL</a>

                </div>
                </div>
                </div>

                {/* col 4 */}
                <div className='col-md-6 col-lg-4'>
                <div class="card mb-2 mb-sm-0 mywidth" style={{width: "18rem"}}>
                <img class="card-img-top" src={C3} style={{width: "100%",height:"10em"}}alt="on3"></img>
                <div class="card-body">
                <h1 className="card-title ro heading2  text-left">Introduction to 
            Goggle Slides</h1>
                
                <div className='d-flex py-1'>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <img src={Star} alt=''></img>
                <p className=" ro card-text pr-1 fw3 p">4.2 (5 reviews)</p>
                </div>
               
                <a href='/courses1' className='btn enroll text-center ro fw3 p green' style={{borderRadius:"0",padding:"0.1em 0.9em",backgroundColor:"#5F5F5F",border:'4px solid #5F5F5F',width:"100%",color:"#fff"}}> ENROLL</a>

                </div>
                </div>
                </div>
                
                </div>
               
                </div>
                </div>

                
                <div  className="jumbotron " style={{backgroundColor: "#1A9988",marginBottom:'0'}}>
                <div className='container '>
           
                <h5  className=" ru  homeheading2 fw2  text-center white">Courses will be available coming soon!!</h5>
               
               
                
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default cources;
