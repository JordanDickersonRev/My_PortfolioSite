import './darkModeButton.css';

export default function DarkModeButton() {

    let clickedClass = "clicked"; // applied to the button when we click on it, we will singal the change of its state
    const body = document.body; // documents body element, we need a reference to it so we can apply styling once we click the button
    const lightTheme = "light"; // lightTheme and darkTheme will be the class names we apply to the body
    const darkTheme = "dark";
    let theme; // local property we will use to handle the currently selected mode

    if(localStorage)
    {
        theme = localStorage.getItem("theme");
    }

    if(theme === lightTheme || theme === darkTheme) 
    {
        body.classList.add(theme);
    } 
    else 
    {
        body.classList.add(darkTheme);
    }

    const switchTheme = (e) => {
        if(theme === lightTheme)
        {
            body.classList.replace(lightTheme,darkTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
        else
        {
            body.classList.replace(darkTheme,lightTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        }
    };

    return (
            <button
                className={theme === "light" ? clickedClass : ""}
                id="lightMode"
                onClick={(e) => switchTheme(e)}>
            </button>
    )
}