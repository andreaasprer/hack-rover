import CommandCenter from '../components/CommandCenter'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='body'>
                <CommandCenter />   
            </div>
        </div>
    )
}

export default Home