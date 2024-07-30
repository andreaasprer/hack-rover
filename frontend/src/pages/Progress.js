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
                    'Played catch up at the end of Day 1 due to attending orientation.',
                    "Assisted in coding the program for the rover's wheels."
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
                    'First iteration of acrylic board caused size issues. We had trouble allocating space for all the parts on top of our acrylic base.',
                    'Connected the tire motors to the motor controllers. Had multiple issues with syncing up the tire patterns such that the rover is going the right direction. Corrected this by modifying the code and switching the motors wires on the motor controller.',
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
                    "Replicated the wiring for the distance, temperature, and humidity sensors from Chen's circuit schematics.",
                    "Assembled the components for the final iteration.",
                    "Wrote the program for the sensors and sending them over to the frontend. Andrea and I had trouble figuring out how to send instructions to control the servo motors from the frontend back to the pico."
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