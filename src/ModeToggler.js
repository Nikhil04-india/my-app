function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <h1> Dark Mode is On</h1>
    const lightMode = <h1> Light Mode is On</h1>

function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
       console.log("Dark is mode on")
    } else{
       console.log("Light is mode on")
    }
}

    return (
        <div>
       { darkModeOn ?  darkMode : lightMode}
       <button onClick={handleClick}>
        PRESS
       </button>
       </div>
    )
}

export default ModeToggler