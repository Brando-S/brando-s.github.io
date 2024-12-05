import { Carousel, Col, Container, ListGroup, Row } from "react-bootstrap"
import TextImage from "../components/TextImage"
import VideoImage from "../components/TextVideo"
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"
import ProjectComponent from "../components/ProjectComponent"
import Collapsible from "react-collapsible"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, darcula, duotoneDark, materialDark, okaidia, solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function GeneralInspection() {

    const technolyColumns: string[][] = [
        ["C#", ".Net", "Entity Framework", "SQL", "Algorithms"], 
        ["C++", "RTOS", "Embedded Systems", "Robotics", "Computer Vision"],
        ["XML", "YML", "Git", "GitHub CI/CD", "Signal Processing"],
        ["WPF", "MVVM", "WinForms"],
    ];

    const buildTechnologyGrid = () => {
        const toReturn: React.JSX.Element[] = [];
        let rows = 0;

        technolyColumns.forEach(col => {
            rows = Math.max(col.length, rows);
        });

        for(let i = 0; i < rows; i++) {
            toReturn.push(
            <Row>
                {
                    technolyColumns.map(arr => {
                        const itemName = i < arr.length ? arr[i] : "";
                        return <Col>
                            {itemName}
                        </Col>
                    })
                }
            </Row>);
        }

        return toReturn;
    };

    return <>
        <br />
        <TextImage src={"/images/gi/giLogo.png"} text=" "/>
        <p>
            General Inspection is an electronics and robotics engineering company that specializes in automated 3D inspection systems for
            the manufacturing industry. General Inspection was founded in 1991 and has served the global manufacturing market for over 30 years.
            GI's 3D inspection and gaging systems have become the world standard in automated 3D inspection of cylindrical manufactured goods. 
        </p>
        <p>
            I worked with General Inspection for 3 years, first starting as a Software Engineer, and eventually becoming a <b>Software Technical Lead</b> where 
            I led and architected GI's inspection software. I also often interfaced directly with customers to understand business requirements
            and provide technical support, either remotely or in the field.
        </p>
        <p>
            <h2>Tech Stack & Technologies</h2>
                <hr />
                <Container>
                    {buildTechnologyGrid()}
                </Container>
        </p>
        <h2>Projects</h2>
            <Collapsible trigger={"Real-Time Coroutines"}>
                <h4><center>Real-Time Coroutines</center></h4>
                <p>
                    At General Inspection it was very hard to maintain large Real-Time logic modules because the module logic would often need to perform some asynchronous action (like motor movement) and then wait for that action to complete before moving on.
                    These modules could not halt because they are executed in a Real-Time environment with Real-Time requirements which led to the use of large and often very complex state machines. These state machines would grow fast and be very hard to read and maintain as control flow
                    jumped around depending on the internal state.
                </p>
                <p>
                    I was tasked to implement a better design pattern that other developers could use to develop their Real-Time Logic Modules so that they would be simpler and much easier to understand and follow through the control flow. I had used Coroutines before during my time in the gaming industry 
                    and knew they would be a perfect solution to our problem.
                </p>
                <p>
                    After researching Coroutine support and implementation within C++ I realized that coroutines were only supported in C++ version 20 and higher, which our version of RTOS did not support. This became a roadblock for us
                    and to solve it myself and another senior team member worked together to update our version of the RTOS and migrate our large project to it. This gave us the ability to utilize C++ 20 and implement Coroutines.
                </p>
                <p>
                    The results of this project were more than satisfactory. The Coroutine support added allowed us to develop new complex modules in a much simpler and readable way greatly increasing our teams productivity and output. Real-Time logic modules could now
                    be programmed in a much more linear way because individual modules had internal blocking mechanisms that did not ever halt the CPU thread.
                </p>
            </Collapsible>
            <Collapsible trigger={"Data Driven Machine Fault Codes"}>
                <h4><center>Data Driven Machine Fault Codes</center></h4>
                <p>
                    Machine faults at GI were not properly organized and fault strings were hardcoded arbitrarily where ever they were thrown within the software. This caused most faults to be undocumented and
                    only tenured Service Technicians would be familiar with which faults meant what and how to fix them. This also prevented us from translating faults, which was a requirement for a large multi-million dollar machine order. 
                    The system has hundreds of unique faults all through out it so this was going to be a task.
                </p>
                <p>
                    The task was to create new system wide faults that could contain much more information along with meaningful fault codes. It was also necessary that fault behavior could be customized on a per customer basis.
                </p>
                <p>
                    Fault data files were created and placed into the Resource Manager (see Disk Resource Management). When the .Net app booted up, it would read all of these fault data files to get information about each fault and store them into memory.
                    When the .Net app established a communication channel to the Real-Time RTOS, it would send all necessary fault information to the Real-Time portion of the system so that it would know how to behave when a certain fault was active. I then
                    has to go through hundreds of individual classes and recreate all existing hardcoded faults in the new system. Ensuring all prior behavior was perfectly preserved. One huge roadblock to this project was that
                    none of the hardcoded faults had descriptions or any reasoning as to why they get thrown. This meant I had to document hundreds of faults that were made over the course of a decade. I did this by talking to key knowledgeable Service Technicians
                    along with reading and understanding almost a 100 different logic modules.
                </p>
                <p>
                    After implementing this feature customers could now see a full history of all faults thrown on their machine along with a timestamp. Clicking on any fault would display all fault information to the user
                    including all causes for the fault being thrown and suggested troubleshooting steps. This information was instrumental in stream lining our in-house team of Service Technicians. They could now use this as a tool to
                    identify or confirm problems that customers were experiencing on their machine.
                    <br/><br/>
                    This would also be displayed in the users native language. For more on the translations see (System Wide Text Localization).
                </p>
            </Collapsible>
            <Collapsible trigger={"Inter Process Communication Protocol (IPC)"}>
                <h4><center>Inter Process Communication (IPC)</center></h4>
                <p>
                    General Inspection runs two main pieces of software: the front facing .Net process that users interact with and a C++ program that runs on the Real-Time Operating System (RTOS).
                    These processes were separate but needed to communicate data between one another. To communicate we had a shared memory block that both processes could read and write to.
                    This shared memory block however was small and couldn't handle a lot of data. The size was also static so it couldn't be expanded to accomodate more memory. 
                    We needed a reliable way to pass large data payloads from one process to another.
                </p>
                <p>
                    I was tasked to design and implement a system for communicating large amounts of data between multiple processes over a block of shared memory in a reliable and consistant way.
                    The system also needed to ensure state synchronization was guaranteed to prevent race conditions when one process would crash or stop responding.
                </p>
                <p>
                    I designed and implemented a system that could encode, decode, and transmit arbitrarily large data packets through arbitrarily sized (much smaller) memory blocks. The IPC implementation would accept high level objects and encode them into a binary data queue to prepare for transfer.
                    The packet structure contained a packet header and a packet body. The header containing an OP_CODE representing the packet type along with the size of the payload in bytes. When one process was modifying the block, it would use a state byte to lock write access. This way each process would know
                    when the other process was writing. The reading party would continuously read from the block until it read the number of bytes originally sent in the header representing payload size. Once the entire payload was received it would reconstruct the data object based on the OP_CODE.
                </p>
                <p>
                    This was a fantastic and reliable system that we continued to reuse for years to come. This system was originally used to implement a brand new machine fault protocol that was defined in data files. To learn more about that, see the section titled "Data Driven Faults".
                </p>
            </Collapsible>
            <Collapsible trigger={"Disk Resource Management"}>
                <h4><center>Disk Resource Management</center></h4>
                <p>
                    Our customers were often experiencing file resource corruption on their machines after power surges or power outages. This is a big problem because some of the data is valuable to the customer or integral to the machines function. 
                    We wanted to find ways to mitigate this issue while also being able to ship default resources that were updatable after initial installation.
                    This was difficult because currently every instance of reading or writing a file from or to the disk was done manually on a per feature basis.
                </p>
                <p>
                    I was tasked with coming up with a system that allowed developers to create resources (disk files) of arbitrary file types that are tracked within the system. This system should also be resistant to file corruption.
                </p>
                <p>
                    I decided I would make something called a ResourceManager that lived as a singleton within the software. The ResourceManager could have a resource folder hierarchy defined at design time. The resources could then either be manually populated into the hierarchy by developers for default resource files, or written to a resource directory at runtime.
                    When writing a resource to the disk, the ResourceManager would automatically create disk back-ups. When a developer wanted to access a specific resource, they would call one of the predefined functions in the ResourceManager that corresponded to their file type. This function would return a ResourceHandle implementation
                    which contained logic for reading and writing to the file on the disk.
                </p>
                <p>
                    After this project we no longer had an issue with customers losing disk data during power outages or surges. We also started using the ResourceManager anywhere we needed to access files which sped up
                    developer experience greatly in a consistent and quality way when accessing files from the disk.
                </p>
                <br/>
                <p>
                    Here is how it might look for a developer using the Resource Manager as a very simple stripped down example:
                    <div className="codeBlock">
                        <SyntaxHighlighter language="csharp" style={darcula}>
                            {
                                `
public class SomeClass {

    private xmlFileHandle = ResourceManager.getInstance().getXmlResource(Resources.XML_DATA_DIRECTORY, "serializedFoo.xml");

    public void SomeFunction() {
        /**
         * Lazy loaded property that reads the file from the disk or returns the one from memory if it already exists. 
         * Automatically detects file corruption and loads from backups if necessary.
         **/
        Xml.Element theElem = this.xmlFileHandle.Value;

        Foo foo = new Foo();
        foo.loadFromXml(theElem);

        //Some business logic on foo.
        //During this time file streams are never held open or interfaced with directly by the developer.

        this.xmlFileHandle.Value = foo.serializeToXml(); //The setter property on the handle automatically handles saving it to the disk and also creates back-ups.
    }
}`
                            }
                        </SyntaxHighlighter>
            </div>
                </p>
            </Collapsible>
            <Collapsible trigger={"N + 1 Selects (Entity Framework)"}>
                <h4><center>N + 1 Selects (Entity Framework)</center></h4>
                <p>
                    Inspection Results were being stored in a SQL database that was managed by Entity Framework (our ORM) and the software would allow users to export this data into various reports.
                    Some larger customers were reporting unusually long export times for large reports. Based on their feedback it did not sound like the time was growing linearly, but exponentially based on the size of the reports.
                </p>
                <p>
                    I was tasked to dive in and identify the problem and after proper identification document the issue and implement a fix.
                </p>
                <p>
                    After doing some debugging on the client side software I was pretty confident the slow down was coming from Entity Framework. My next step was to log the SQL queries on the database side and quickly identified the issue. A ton of individual SELECT queries were being called on related tables
                    when getting the data for a specific run. My solution was to simply add a stored procedure to the SQL database and call it with EntityFramework. This gave me raw access to the data outside of the ORM in a single stored procedure call to the database.
                </p>
                <p>
                    The solution resulted in approximately a 2000% speed increase in almost all cases when generating data reports. The problem was also documented to hopefully prevent a developer from running into the issue in the future.
                </p>
            </Collapsible>
            <Collapsible trigger={"System Wide Text Localization"}>
                <h4><center>System Wide Text Localization</center></h4>
                <p>
                    Our software had Text Localization for simple strings (small words or phrases) already but we could not translate larger bodies of text such as whole paragraphs within complex structures.
                    This was not an issue until we received a very large order with the preconditions that Machine Fault names and descriptions were localized into the customer's native language.
                </p>
                <p>
                    My task was to design and implement a system that could load and serve translations for arbitrary data objects in a clean and easy to use way. I was also tasked with making the system
                    convert the arbitrary data objects english version into a format that could be sent out to translation service providers because human translations were manditory.
                </p>
                <p>
                    I created a .Net library that would create the rails for text localization of high level data types. It did this by exposing a Base Class called TranslationSupplier that could be extended to implement
                    new TranslationSuppliers. I then created new concrete implementations for TranslationSuppliers to support the old translations along with new ones for translating faults. The idea was you could initialize the library entry point in your application
                    and then register TranslationSupplier implementations. Then, the exposed entry class could be called to fetch a translation from one of the suppliers given an arbitrary text key. If they key was found, the translated version would be returned.
                </p>
                <p>
                    The system would also be able to expore the english versions of the TranslationSuppliers into a data format that could be understood by our outside human translation agency. It could also import the data back from this format after translation.
                </p>
                <p>
                    After implementing this system we were able to translate all simple strings and all complex fault titles and descriptions within the system. It was also very extensible so it could easily be used to translate other things in the future.
                    This caused our company to receive a greater than $10,000,000 machine order and deliver it on time to the customers satisfaction.
                </p>
            </Collapsible>
            <Collapsible trigger={"Inspection & Measurement Algorithms"}>
                <h4><center>Inspection & Measurement Algorithms</center></h4>
                <p>
                    Our core business was inspecting parts for defects along with gaging those parts at the same time for quality control. This is accomplished by taking various sensor data on a machine
                    and then performing some combination of mathematics and algorithms to look for visual defects and measure key features of the part geometry.
                </p>
                <p>
                    I spent a lot of my time at GI creating new measurement algorithms for various part geometry. This was extremely complex and would often require very out of the box thinking as these problems
                    had never been solved before. GI is an industry leader in this market and their proprietary algorithms are one of the largest reasons we dominiated our compentition. All algorithms had to be incredibly accurate (down to single microns)
                    and incredibly fast. Some of the GI machines could inspect and measure up to 2,000 parts per minute and every part had to be fully measured and inspected before leaving the machine. Sometimes we only had a time window of a fraction of a second
                    per part.
                </p>
                <p>
                    Most measurements I talk about are measuring geometry on a 2D part profile and then extending those results into 3D measurements as well. The sensor used to obtain the 2D part profile
                    is irrelevant but is mostly either <b>Computer Vision</b> or a <b>Proprietary Laser Graphing Device</b>. Our measurements had to be accurate down to single microns. A fraction the width of a human hair.
                </p>
                <p>
                    GI does not use any open source or third-party Computer Vision libraries like OpenCv. We develop all of our Computer Vision capabilities in-house from scratch.
                </p>
                <p>
                    I would like to talk more in detail about the measurement algorithms I made while working at GI, but unfortunately they are proprietary trade secrets. I will list a few
                    that I made and what they roughly did, but I can not talk too much about how the internals of the algorithms work as I am bound by a confidentiality agreement.
                </p>
                <p>
                    <h4>Polygon (Hex) Corners and Flats</h4>
                    <p>
                        One measurement I created was used to measure critical features on a Hex Head bolt given multiple shadow graph (silhoutte) images of a rotating part standing up-right.
                        The algorithm would not only build the Hexagon internally by stitching data together from all images, it would also measure the lengths from each corner to each opposite corner. It did the same with the polygon flats.
                    </p>
                    <p>
                        This was mainly used for Hex Head bolts, but could also be utilized with other polygon head shapes as well, such as a 12 point head, or a square head. The only requirement being that the polygon had an even number of corners.
                    </p>
                </p>
                <p>
                    <h4>Radius Measurements</h4>
                    <p>
                        Often times manufactured parts contain Radii (curved surfaces). To the human eye these may look perfectly curved and smooth, but in reality they are not. I developed an algorithm to identify Radii within a part profile
                        and measure key features about a single Radius or a pair of symmetric radii.
                    </p>
                    <p>
                        This was much harder than I originally expected it to be. The data is often very noisy especially because the hardware sensors are so accurate. More often than not if you zoom into the Radius portion on the part and get a closer look,
                        the data does not look curved at all.
                    </p>
                </p>
                <p>
                    <h4>Bottle Gaging</h4>
                    <p>
                        A common quality assurance technique in the Ammunition Industry is to have a negative part precision machined for a particular type and caliber of round. Then, to tell if the geometry passes the spec
                        you can simply drop the round in the negative (gage) and measure the difference in height of the part to the gage. If the part sinks into the gage too much or sticks out too much, it will not properly chamber
                        into a firearm.
                    </p>
                    <p>
                        I built an algorithm that could simulate this process computationally. The user could create their own digital 3D Bottle Gage i the software, and then simulate how well the digital 3D part falls into the gage. We then measure and output the result of that measurement
                        to the user.
                    </p>
                </p>
                <p>
                    <h4>More</h4>
                    <p>
                        I designed and implemented many more algorithms than the ones listed above though a lot of them require a trove of domain knowledge from that niche industry to fully understand and properly communicate because they are complex and domain specific.
                    </p>
                </p>
            </Collapsible>
        <h2>Customers</h2>
        <p>
        General Inspection works primarily in the fastener and defense industry. That being said, most of the work we do is confidential.
        </p>
        <p>
        Below is a list of a few companies I directly worked with during my time at general inspection:
        </p>
        <Marquee className="marquee" gradient={true}>
            <img className="marqueeContent" src="/images/gi/vistaLogo.png" />
            <img className="marqueeContent" src="/images/gi/stanleyLogo.png" />
            <img className="marqueeContent" src="/images/gi/blackDecker.png" />
            <img className="marqueeContent" src="/images/gi/mcgard.png" />
            <img className="marqueeContent" src="/images/gi/handt.png" />
            <img className="marqueeContent" src="/images/gi/pennLogo.png" />
            <img className="marqueeContent" src="/images/gi/sigLogo.png" />
        </Marquee>
        <h2>Media</h2>
        <p>
            Here is a few videos of some of the machines I worked on while working with General Inspection.
        </p>
        <div className="container">
            <div className="row">
                <div className="col">
                    <iframe width="280" height="160" src="https://www.youtube.com/embed/R_0r0-8GUmI?si=Xfy_5YG9NbRMRYlO?modestbranding=1&autohide=1&showinfo=0&controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
                <div className="col">
                    <iframe width="280" height="160" src="https://www.youtube.com/embed/6xxx87d89OU?si=JERDceNgfj6ADJOP?modestbranding=1&autohide=1&showinfo=0&controls=0&start=74" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
            </div>
        </div>
    </>

}