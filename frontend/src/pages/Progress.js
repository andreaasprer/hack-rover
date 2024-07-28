import Header from '../components/Header'

const Progress = () => {
    return (
        <div>
            <Header />
            <div className='progress-body'>
                <h2>Day 1</h2>
                <h3>Andrea:</h3>
                <ul>
                    <li>Difficulty linking the frontend to the backend. Had to install dependencies</li>
                    <li>In react app, coded the UI for the command center and other pages on the website</li>
                    <li>With the website organization, I was having trouble figuring out how to link the pages. 
                        Originally, I did this using the classic HTML method of using anchor tags,
                        but with research I found that react websites utilize the React Router DOM for this purpose. </li>
                </ul>
                <h3>Alyssa</h3>
                <h3>Biruk</h3>
                <ul>
                    <li>Played catch up at the end of Day 1 due to attending orientation.</li>
                    <li>Assisted in coding the wheels for the rover.</li>
                </ul>
                <h3>Chen</h3>
            </div>
        </div>
    )
}

export default Progress