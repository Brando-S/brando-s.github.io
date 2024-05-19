import { Carousel } from "react-bootstrap"
import TextImage from "../components/TextImage"
import VideoImage from "../components/TextVideo"
import { Link } from "react-router-dom"

export default function GaardTech() {

    return <>
        <br />
        <TextImage src={"/images/gaard/gaardtechLogo.png"} text=" " style={{borderRadius: "15px", maxWidth: "300px"}} />
        <br />
        <p>
            Gaard Tech is an electronics company focused on making products for the visually and audibly impaired.
        </p>
        <p>
            My business partner George and I started this company in 2023 after noticing a lack of practically priced devices on the market to help people with these impairments navigate the world.
            We believed that the current solutions on the market are over-priced for the value they provide to the user, and we thought we could produce higher quality
            alternatives that are more affordable for people in need.
        </p>
        <h2>Kettering University</h2>
        <p>
            Gaard Tech has a partnership with Kettering University of Flint, MI. Kettering assists us with new product design and securing
            grant funding.
        </p>
        <center>
            <img className="rounded-circle shadow-4-strong" alt="avatar2" src="/images/gaard/ketteringSeal.png" />
        </center>
        <h2>Founders</h2>
        <p>
            I (Brandon) am the Chief Technical Officer and Vice President of Engineering at Gaard Tech. I am responsible for managing and approving
            all engineering which includes new product design, new product implementation, and existing product improvement.
        </p>
        <h4>George</h4>
        <p>
            George is the Chief Executive Officer and President of Gaard Tech. George is also the founder of <Link to={"/gi"} className="textLink">General Inspection</Link>, an engineering and robotics company that
            has been in business for over 30 years.
        </p>
        <h2>Reargaard</h2>
        <p>
        Reargaard is the first product that we designed, developed, and are now manufacturing. This device uses state-of-the-art LiDAR technology to view the world and sense oncoming objects that could potentially be a threat to the wearer. 
        The user wears this device on their waist and receives haptic feedback when the device detects a potential threat approaching the wearer. 
        The perceived danger of the threat is encoded into the haptics. We are currently putting the finishing touches on the design of the cases and starting volume manufacturing of the electronics.
        </p>
        <h5>Visual Design</h5>
        <p>
        Reargaard is small enough to be carried in your hand, being slightly larger than a modern cell phone. As time progresses, we are continuously working to improve and iterate on the design of Reargaard 
        to not only make it smaller and more comfortable for the user to wear but also to make it more affordable.
        </p>
        <h5>Technical Design</h5>
        <p>
        Reargaard uses custom electronics designed from scratch along with a state-of-the-art LiDAR sensor. The electronics were designed by an electronics design firm, and all of the software was written in-house by myself. 
        Unfortunately, the electronics and software are proprietary, and due to their nature, I can not include much about it here.
        </p>
        <Carousel fade className="fixedCarousel">
                <Carousel.Item className="fixedCarouselItem">
                    <img src="/images/gaard/reargaardBoard.png" className="d-block w-100 h-300" />
                </Carousel.Item>
                <Carousel.Item className="fixedCarouselItem">
                    <img src="/images/gaard/caseDesign.png" className="d-block w-100 h-300" />
                </Carousel.Item>
        </Carousel>
        <br/>
        <h2>Omnigaard</h2>
        <p>
        Omnigaard is our second product. It aims to solve some of the challenges that we couldn't with Reargaard, 
        mainly by seeing 360 degrees around the wearer without any blind spots.
        </p>
        <p>
        This product is still quite early in development, with Kettering University performing research studies concerning potential designs.
        </p>
        <p>
            One of the largest challenges with this product is figuring out a way to effectively provide haptic feedback to the user in a way that
            easily communicates the direction a potential threat is approaching from.
        </p>
    </>

}