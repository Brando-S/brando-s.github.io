import TextImage from "../components/TextImage";
import Carousel from 'react-bootstrap/Carousel';

export function PetEmotionsProject() {
    return (
        <div className="markdownDiv">
            <center><h1>Pet Emotions</h1></center>
            <p>
                Throughout most of the development of the Lunapets game, I just couldn't shake the feeling that the pets felt lifeless.
                I knew for a while that I needed to figure out some kind of a solution. The single largest most impactful feature in the entire game is Pets.
                The entire game revolves around pets and the game is even named Lunapets.
            </p>
            <p>
                It is very important that the pets feel like they are alive. If player's feel like the pets are alive, then
                they are more likely to form a meaningful bond with the pet itself and get satisfaction from raising and caring for their pets.
            </p>
            <h2>Facial Expressions</h2>
            <p>
                Humans have two main ways of displaying emotion: body language and facial expressions. Our pets already have fairly good support
                for displaying body language through skeletal animation, but we don't have any good support for displaying facial expressions.
                I believe that not having proper facial expressions are the reason our pets look so lifeless.
            </p>
            <TextImage style={{ maxWidth: "20%", float: "right" }} src="/images/petEmotions/lifelessGorilla.png" text="A gorilla pet without facial expressions. A little unnerving." />
            <p>
                When taking a look at the picture of the Gorilla it shouldn't be too surprising that I thought they needed improvements. The eyes are wide open
                and the pupil almost fills the whites of the eye. It honestly looks like something out of a horror movie.
            </p>
            <p>
                Our solution to this problem was to add proper facial expressions for pets.
            </p>
            <h2>Design</h2>
            <p>
                Most games engines use a technology called Shape Keys and/or Mesh Deformation to make realistic facial expressions. Unfortunately,
                the Roblox Engine does not support this feature which meant I had to get more creative when finding a solution.
            </p>
            <h3>Facial Bones</h3>
            <p>
                The only way in roblox to alter the shape of a mesh is with Skeletal Animations. That means I could add
                individual bones to the face region of the mesh and then alter the pets facial expressions using standard animations.
            </p>
            <p>
                While this would technically work, it has a lot of potential issues. Firstly, it would probably not be the most efficient. There would need to be a lot
                of bones within the face to make the facial expressions convincing enough. This would also be very expensive and time consuming. Someone would need
                to go through a pet model and add these bones, completely repaint all of the vertex weights, reexport and import all of the models,
                and create a new animation for each supported facial expression. This would all have to be done separately for each pet model in the game, and we have over 200 total in Lunapets.
            </p>
            <h3>Surface UI</h3>
            <TextImage style={{ maxWidth: "20%", float: "right" }} src="/images/petEmotions/firstAttempt.png" text="An initial proof of concept. Something is still off with the eyes." />
            <p>
                What if instead of manipulating the mesh at all, we instead just apply a SurfaceGui over the top of the parts of the face and then animate those?
                The face would then turn into multiple 2D surface guis and then they would be able to be animated with 2D textures.
                I thought about this system a lot and couldn't really come up with a reason why it would not work.
            </p>
            <p>
                The idea is pretty simple. I would just create two separate transparent parts for each eye and attach them to the mesh. Then, at runtime I would simply mount a surface
                gui to those parts using Roact. The surface guis would then have eye textures that fill the entire area.
            </p>
            <p>
                After making the first proof of concept, something was still off with the way the pet looked. I originally thought that it was caused by the pupil being so large, so I
                started messing around with the size of the pupil. This is when I started to realize I actually had no idea how an eye should actually look
                to make the entire face look like any given emotion.
            </p>
            <div className="textDiv">
                <h4>Eyelids</h4>
                <p>
                    Upon further investigation I realized that I needed to add eyelids to the eye ball texture.
                    <TextImage style={{ maxWidth: "20%", float: "left" }} src="/images/petEmotions/angryGorilla.png" text="An angry gorilla." />
                    Eyelids play a huge part in communicating emotion in
                    their expressions. I decided I would add eyelids to the texture and see how that looked and if it made any difference. Looking at the picture of the
                    angry gorilla, it immedietly becomes very apparent that eyelids make a huge difference.
                </p>
                <p>
                    The angry gorilla only appears angry because of the angled eyelids. If you look closely, you can actually notice that the eyelids are the only difference
                    between this gorilla and the gorilla without eyelids. Now it seems obvious, but at the time it was surprising just how much of a difference simply adding eyelids
                    actually made.
                </p>
            </div>
            <h4>Mouth</h4>
            <p>
                I thought that the eyelids would be enough to make pets look like they were expressing any emotion we wanted. That was until I tried to make
                a pet look happy. I couldn't quite seem to make a pet appear happy with just the eye lids alone. Angling the eyelids opposite the angle of the angry gorilla
                actually made the gorilla look a little sad and flat eyelids made it look neutral.
            </p>
            <p>
                I realized that I might need to add a mouth to accompany the eyes. Similarly to the eyelids, after adding a mouth I had no problem making the gorilla look
                as if it was happy. The mouth made a big difference as well. After adding the mouth though, the team agreed that this was enough parts to make most if not all
                of the emotions that we wanted.
            </p>
            <h2>Expression Types</h2>
            <p>
                To start with I added just a few basic expressions that each pet would support.
                <br /><br />
                <b>We currently have the following expressions: </b>
                <ul>
                    <li>Happy</li>
                    <li>Neutral</li>
                    <li>Angry</li>
                    <li>Sad</li>
                </ul>
                <br />
            </p>
            <Carousel fade>
                <Carousel.Item>
                    <img src="/images/petEmotions/finalGorillaHappy.png" className="d-block w-100"/>
                    <Carousel.Caption>
                        <h3>Happy</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/petEmotions/finalGorillaSad.png" className="d-block w-100"/>
                    <Carousel.Caption>
                        <h3>Sad</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/petEmotions/finalGorillaAngry.png" className="d-block w-100"/>
                    <Carousel.Caption>
                        <h3>Angry</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )

}