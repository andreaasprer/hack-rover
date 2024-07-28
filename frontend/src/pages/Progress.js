import React from 'react';
import Header from '../components/Header';
import './progress.css';

// import images
import Day1Chassis from '../images/day1-chassis-plans.png';
import Day2Rover from '../images/day2-rover-prototype.png';
import Day2TireFastener from '../images/day2-tire-fastener.png';
import Day2TireSide from '../images/day2-tire-side.png';
import Day3Arm from '../images/day3-arm-iteration.png';
import Day3Website from '../images/day3-website-progress.png';

const progressData = [
    {
        day: 'Day 1',
        people: [
            {
                name: 'Andrea',
                tasks: [
                    'Difficulty linking the frontend to the backend. Had to install dependencies',
                    'In react app, coded the UI for the command center and other pages on the website',
                    'With the website organization, I was having trouble figuring out how to link the pages. Originally, I did this using the classic HTML method of using anchor tags, but with research I found that react websites utilize the React Router DOM for this purpose.'
                ]
            },
            {
                name: 'Alyssa',
                tasks: [
                    'Being in charge of the CAD design I focused on the chassis assembly. The biggest issue I had was creating a fastener that connected to the motor to the chassis. As the motor has 2 holes to place screws through.',
                    'I found it difficult to have the holes directly align with the motor during assembly. The issue turned out to be that my fastener and the motor holes were not concentric because the measurement of the holes were slightly off, but not visible enough to tell they were unaligned.',
                    'When taking the measurements for the holes, I used SolidWorks measuring tool. Thanks to this issue though, I learned that you can edit parts and even create sketches and convert entities on assembly which was very useful for day 2 when creating parts that needed a mold fit to other pieces.',
                    'Another conflict I ran into was grabbing parts from GrabCAD. I was conflicted between choosing a part with a motor that was more accurate to my actual motor dimensions vs a part that included both a motor and a wheel. However after consulting with my teammates I decided to choose the CAD that was more accurate.'
                ]
            },
            {
                name: 'Biruk',
                tasks: [
                    'Played catch up at the end of Day 1 due to attending orientation.',
                    'Assisted in coding the wheels for the rover.'
                ]
            },
            { name: 'Chen', tasks: [] }
        ],
        images: [Day1Chassis]
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
                    'Connected the tire motors to the motor controllers. Had multiple issues with syncing up the tire patterns such that the rover is going the right direction. Corrected this by modifying the code and switching the motors wires on the motor controller.'
                ]
            },
            { name: 'Chen', tasks: [] }
        ],
        images: [Day2TireFastener, Day2TireSide, Day2Rover]
    }
];

const Progress = () => {
    return (
        <div>
            <Header />
            <div className='progress-body'>
                {progressData.map((dayData, dayIndex) => (
                    <div key={dayIndex} className='day'>
                        <h2>{dayData.day}</h2>
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