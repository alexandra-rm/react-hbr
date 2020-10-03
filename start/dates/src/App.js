import React from 'react';

const styles = {
    backgroundColor: "#CCCCCC",
    fontSize: 24,
    width: 200,
};

function App() {
    const date = new Date()
    // const date = new Date(2020, 8, 30, 10)

    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }

    return (
        <>
            <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
            <h2 style={styles}>Good {timeOfDay}!</h2>
            <h3 style={{color: "#FF8C00", fontSize: "24px"}}>Date: {date.toISOString()}</h3>
            <h3>Hours: {hours}</h3>
        </>
    )
}

export default App;
