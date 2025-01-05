function setColor(varName, color) {
    document.documentElement.style.setProperty(varName, color);
}
function changeTheme(theme) {
    if (theme === 'dark') {
        setColor("--primary-text-color", "white");
        setColor("--secondary-text-color", "white");
        setColor("--light-text-color", "white");
        setColor("--nav-primary-text-color", "#107d64");
        setColor("--extra-light-text-color", "#b2bec3");
        setColor("--sponsered-text-color", "#ffc212");
        setColor("--new-text-color", "#00f7bf");
        setColor("--sale-text-color", "#ff0022");
        setColor("--bg-color", "#1F1F1F");
        setColor("--white-bg", "#141414 ");
        setColor("--white-text", "white");
        setColor("--primary-font-size", "14px");
        setColor("--secondary-font-size", "12px");
        setColor("--big-font-size", "16px");
        setColor("--gutter-big", "32px");
        setColor("--gutter-small", "24px");
        setColor("--bg-color-1", "#107d64");
        setColor("--small-border-radius", "7px");
        setColor("--padding1", "0px 8px");
        setColor("--badge-primary", "#050342");
    } else if (theme === 'light') {
        setColor("--primary-text-color", '#2d3436');
        setColor("--secondary-text-color", "#0010f7");
        setColor("--light-text-color", "#636e72");
        setColor("--nav-primary-text-color", "#0063f7");
        setColor("--extra-light-text-color", "#b2bec3");
        setColor("--sponsered-text-color", "#ffc212");
        setColor("--new-text-color", "#00f7bf");
        setColor("--sale-text-color", "#ff0022");
        setColor("--bg-color", "#f0f3f5");
        setColor("--white-bg", "white ");
        setColor("--white-text", "white");
        setColor("--primary-font-size", "14px");
        setColor("--secondary-font-size", "12px");
        setColor("--big-font-size", "16px");
        setColor("--gutter-big", "32px");
        setColor("--gutter-small", "24px");
        setColor("--bg-color-1", "#0010f7");
        setColor("--small-border-radius", "7px");
        setColor("--padding1", "0px 8px");
        setColor("--badge-primary", "#ebfafa");
    }
}

let isDark = false;
function callback() {
    // Change Text and Bg color.
    changeTheme(isDark ? 'light' : 'dark');
    
    // Change logo.
    const logoBtn = document.getElementById('logoImg')
    if(logoBtn){
        logoBtn.src = !isDark ? './logo-dark.png': 'logo.png'
    }
    
    isDark = !isDark;
}

// Theme change Code Static
const changeThemeBtn = document.getElementById('changeThemeBtn');
if (changeThemeBtn) { // validation
    changeThemeBtn.addEventListener('click', callback)
}





// Theme change Code Automatic
// setInterval(() => {
//     // function generateColor(){
//     //     return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
//     // }
//     // const randomColor = generateColor();
//     // console.log(randomColor);
//     // setColor('--secondary-text-color', randomColor);
//     // setColor('--bg-color-1', randomColor);
//     // setColor('--nav-primary-text-color', randomColor);
// }, 5000)