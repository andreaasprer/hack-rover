import Header from '../components/Header'
import Logo from '../images/bruinNetLogo.PNG'
import teamPhoto from '../images/teamPhoto.png'
import './about.css'

const MemberCard = ({ name, major, role }) => {
    return (
        <div className="member-card">
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
                <div className="images">
                    <img src={Logo} alt='bruinNetLogo' width='40%'></img>
                    <img src={teamPhoto} alt='bruinNetLogo' width='46%'></img>
                </div>

            </div>
            <div className='members'>
                <MemberCard name='Andrea Asprer' major='Computer Science' role='Web Developer' />
                <MemberCard name='Biruk Kahsay' major='Civil Engineering' role='Circuit Code' />
                <MemberCard name='Alyssa Agarie' major='Materials Science' role='CAD' />
                <MemberCard name='Chen Chai' major='Electrical Engineering' role='Circuit Design and Circuit Schematics' />
            </div>
        </div>
    )
}

export default About