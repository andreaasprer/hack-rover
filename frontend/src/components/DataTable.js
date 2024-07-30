// component for table in control center displaying data from sensors
const DataTable = ({ temp, hmd, dis }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Temperature</th>
                    <th>{temp} C</th>
                </tr>
                <tr>
                    <th>Humidity</th>
                    <th>{hmd}</th>
                </tr>
                <tr>
                    <th>Distance</th>
                    <th>{dis} cm</th>
                </tr>
            </tbody>
        </table>
    )
}

export default DataTable