import React from 'react';
import Header from '../components/Header';
import './progress.css';

// import images
import Day1Chassis from '../images/day1-chassis-plans.png';
import Day1Website from '../images/day1-website-progress.png';
import Day2Rover from '../images/day2-rover-prototype.png';
import Day2TireFastener from '../images/day2-tire-fastener.png';
import Day2TireSide from '../images/day2-tire-side.png';
import Day3Arm from '../images/day3-arm-iteration.png';
import Day3Website from '../images/day3-website-progress.png';
import Day3Rover from '../images/Day3-final-rover.jpg';

const progressData = [
    {
        day: 'Day 1',
        people: [
            {
                name: 'Andrea',
                tasks: [
                    'I encountered difficulties linking the frontend to the backend, which required me to install additional dependencies.',
                    'In the React app, I coded the UI for the command center and other pages on the website.',
                    'With the website organization, I was having trouble figuring out how to link the pages. Originally, I did this using the classic HTML method of using anchor tags, but with research I found that react websites utilize the React Router DOM for this purpose.'
                ]
            },
            {
                name: 'Alyssa',
                tasks: [
                    'Being in charge of the CAD design I focused on the chassis assembly. The biggest issue I had was creating a fastener that connected to the motor to the chassis. As the motor has 2 holes to place screws through.',
                    'I found it difficult to have the holes directly align with the motor during assembly. The issue turned out to be that my fastener and the motor holes were not concentric because the measurement of the holes were slightly off, but not visible enough to tell they were unaligned.',
                    'When taking the measurements for the holes, I used SolidWorks measuring tool. Thanks to this issue though, I learned that you can edit parts and even create sketches and convert entities on assembly which was very useful for day 2 when creating parts that needed a mold fit to other pieces.',
                    'Another conflict I ran into was grabbing parts from GrabCAD. I was conflicted between choosing a part with a motor that was more accurate to my actual motor dimensions vs a part that included both a motor and a wheel. However after consulting with my team I decided to choose the one that was more accurate.'
                ]
            },
            {
                name: 'Biruk',
                tasks: [
                    'After missing the overwhelming majority of the first day due to orientation, I came back to play heavy catchup with my team for the last hour and a half of day one. I had some of my code covered for me by our remote participent Chen and my job was to build off of it with what little time I had remaining.',
                    "Chen had completed the code for the motors to move when the pico was connected to my laptop, but he was not able to make them move left and right, only forward and back. So looking at his original code I modified it to the point where we would need to use two motor controllers for each set of wheels. One would have control over the front two wheels and the other would connect the back two wheels. We believed that using two motor controls would help solve our problem and we waited to test our hypothesis during the next day of the competition as we had run out of time."
                ]
            },
            { 
                name: 'Chen',
                tasks: [
                    'I was responsible for designing the rover and determining where the motors, power supply, and sensors would be placed.',
                    'I measured each component and created a sketch for the prototype. After the design process, I tried to recreate the rover with the parts I had. As a remote participant, I found it hard to find the perfect chassis that would be able to accommodate the weight of the components.',
                    'I started running the Python code for the motors and later wrote the website for the controls.',
                    'By the end of the day, I could control the rover with my local website to move forward, backward, turn left, and turn right.',
                    ' Another challenge I saw on my prototype is that all the components were crammed because of the lengthy wires, so I decided to increase the size of the rover chassis so my team wouldn’t run into that problem again.'
                ]}
        ],
        images: [Day1Chassis, Day1Website]
    },
    {
        day: 'Day 2',
        people: [
            {
                name: 'Andrea',
                tasks: [
                    'In the command center of the website, I added placeholders for the camera display and sensor readings.',
                    'Wrote the code to send the direction messages to Pico whenever a certain key is pressed in the command center',
                    'For the arm, we have two servo motors. For the UI, we decided to include 2 range sliders to set the degrees the servo should be in with user interaction. Initially, I used a react range slider library but I had difficulty implementing due to lack of documentation. Solved this by using input range',
                    'Optimized the progress documentation website page by utilizing Reacts functional programming capabilities. I stored our progress data in an array, then used the map function to iterate through the array and thus adding new tasks more efficient.'
                ]
            },
            {
                name: 'Alyssa',
                tasks: [
                    'Focused on creating a lift, assembling it and beginning prototyping.',
                    'One issue that we ran into was the dimensioning of the wedge that connects the arm to the chassis. That wedge that connects the arm to the chassis. That wedge has a hole (extrude cut) so the motor can fit in, but the dimensions were too accurate to the motor that the motor could not fit in.',
                    'In comparison to the wedges I created that connect the chassis to the wheels from day 1, I think I didn’t spend as much time properly measuring it as much as possible, so I had to rescale and 3d print it again.',
                    'A lot of communication was made between the circuits delegator (Chen) and the CAD person as I had questions on how the motor worked and my responsibility was to translate that into action. Specifically one part that really required a joint collaboration between me and Chen was the arm. The motor was connected to a servo horn which was too small to have any arm component to be connected. Luckily our team was able to solve this problem by creating a CAD part that had an extrude cut that fit the servo horn'
                ]
            },
            {
                name: 'Biruk',
                tasks: [
                    'After attempting and succeeding with the motor wheels moving through my laptop, I got started on our first iteration of the rover with a 21 by 14 cm wooden board. This sparked issues of sizing and fitting all of the planned necessities on the board with the wiring especially.',
                    'A massive obstacle of the day was trying to communicate efficiently with our remote participant who was experienced with circuits. I had to follow his instructions and clearly show him every part of our pico and breadboard at the same time.',
                    'After spending a lot of time on that, I attempted to fully complete the connection link to the MQTT broker. I followed the instructions exactly and was not able to get it working. I checked with other groups to see if they had established the link and did not find anyone yet. After asking help from the mentors, I was forced to read all of the code line by line and finally found that somehow I replaced one of the constants of mqtt_server with mqtt_user which has completely messed up the connection.',
                    'After finally being able to link the MQTT website, I went back to wiring and was able to accurately have the motor and wheels working through the website by the end of the day.'
                ]
            },
            { 
                name: 'Chen',
                tasks: [
                    'I wrote and edited codes for the motors, cameras, and sensors needed for the rover.',
                    'I also decided on the 3D-printed parts for the motor arm and car chassis with Alyssa, who was responsible for the CAD.',
                    'One of the difficulties I faced was with the camera, as I could not connect it using VS code, so I ended up just using the Arduino IDE.',
                    'By the end of the day, we could control the car via the website, where the temperature, humidity, and distance sensors were displayed.'
                ]}
        ],
        images: [Day2TireFastener, Day2TireSide, Day2Rover]
    },
    {
        day: 'Day 3',
        people: [
            {
                name: 'Andrea',
                tasks: [
                    'Focused on getting the ESP-32 camera ready. Had trouble with installation because I used the wrong software. I tried doing it in VS Code, a code editor, rather than in the Arduino IDE.',
                    'Once I got the camera stream working, I had trouble figuring out how to embed the stream onto the website. Through research I applied an iframe, which is a React component used for embedding other HTML documents within a HTML document.',
                    'Began writing the code to receive and display the temperature, humidity, and ultrasonic distance data onto the website.'
                ]
            },
            {
                name: 'Alyssa and Chen',
                tasks: [
                    'We’ve finally got the 3-D parts done after many trials. The 3-D printer failed multiple times which made it very hard for our team to continue with the final prototype.',
                    'We also had to improvise our rover chassis as we didn’t have enough time to use the acrylic as the material. Because of the time constraints we were unable to have a neat cable management but the final prototype had everything except for an working arm.'
                ]
            },
            {
                name: 'Biruk',
                tasks: [
                    "The last days obstacle was just a massive time crunch. We had the MQTT link set up and had written code for the two different types of sensors the night before. We spent our morning wiring the temperature/humidity sensor and the ultrasonic sensor. After inputting the code for the two, we found that they worked perfectly.",
                    "The last hurdle was the arm and our acrylic chassis. I spent time trying to get our servo code to work since we planned to use two for the claw above and one for the arm portion below. I was able to collaborate with Chen to make our two servo's for the claw portion of our arm sync up perfectly. We later reiterated on our code design by adding speed parameters and slowing down the speed/delay per step.",
                    "Unfortunately, we faced massive issues with the printing of our acrylic board and instead I had to drill and shave holes into a new wood board that we decided to make slightly bigger after our previous sizing issues on day 2. After doing so, we hastily had to assemble our board without finishing the third servo we had planned to move the base of the arm."
                ]
            }
        ],
        images: [Day3Arm, Day3Rover, Day3Website]
    }
];

const Progress = () => {
    return (
        <div>
            <Header />

            <div className='progress-body'>

                {/* Iterate over progressData for each day */}
                {progressData.map((dayData, dayIndex) => (
                    <div key={dayIndex} className='day'>
                        <h2>{dayData.day}</h2>

                        {/* Iterate over the people array to display each person's tasks in a list*/}
                        {dayData.people.map((person, personIndex) => (
                            <div key={personIndex} className='person'>
                                <h3>{person.name}:</h3>
                                <ul>
                                    {person.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className='images'>
                            {/* Iterate through the images */}
                            {dayData.images.map((image, imageIndex) => (
                                <img key={imageIndex} src={image} alt={`Day ${dayIndex + 1} - ${imageIndex + 1}`} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Progress;