import Header from '../components/Header'
import './about.css'

const MemberCard = ({ image, name, major, role }) => {
    return (
        <div className="member-card">
            <img src={image}  alt={`${name}'s picture`} className="member-image"/>
            <h3>{name}</h3>
            <p><strong>Major:</strong> {major}</p>
            <p><strong>Role:</strong> {role}</p>
        </div>
    )
} 

const About = () => {
    return (
        <div>
            <Header />
            <div className="team-info">
                <h2>Team BruinNet</h2>
                <img src='bruinNetLogo.PNG' alt='bruinNetLogo' width='40%'></img>
            </div>
            <div className='members'>
                <MemberCard name='Andrea Asprer' major='Computer Science' role='Web Developer' />
                <MemberCard name='Biruk Kahsay' major='Civil Engineering' role='Circuit Code' />
                <MemberCard name='Alyssa Agarie' major='Materials Science' role='CAD' />
                <MemberCard name='Chen Chai' major='Electrical Engineering' role='Design and Circuit Schematics' />
            </div>
        </div>
    )
}

export default About