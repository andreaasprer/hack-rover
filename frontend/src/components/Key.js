// Component for each individual key on command center that sends direction instructions
const Key = ({ text, button, condition }) => {
    return (
      <div className="Key" style={{ borderColor: condition ? "#e0243d" : "#847577"  }}>
        <p>{text}</p>
        <p>{button}</p>
      </div>
    )
}

export default Key