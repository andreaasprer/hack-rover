// component for table in control center displaying data from sensors
const DataTable = ({ temp, hmd, dis }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Temperature</th>
                    <th>{temp}</th>
                </tr>
                <tr>
                    <th>Humidity</th>
                    <th>{hmd}</th>
                </tr>
                <tr>
                    <th>Distance</th>
                    <th>{dis}</th>
                </tr>
            </tbody>
        </table>
    )
}

export default DataTable