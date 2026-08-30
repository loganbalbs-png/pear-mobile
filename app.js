const apps = [

    ["Mail", "✉", "blue", "mail"],
    ["Phone", "☎", "green", "phone"],
    ["Contacts", "●", "green", "contacts"],
    ["Messages", "●", "blue", "messages"],

    ["Camera", "●", "gray", "camera"],
    ["Photos", "✿", "blue", "photos"],
    ["Music", "♪", "yellow", "music"],
    ["Videos", "▶", "gray", "videos"],

    ["Internet", "@", "blue", "internet"],
    ["Maps", "•", "yellow", "maps"],
    ["Weather", "☼", "blue", "weather"],
    ["Calendar", "27", "white", "calendar"],

    ["Notes", "▤", "yellow", "notes"],
    ["Clock", "◷", "gray", "clock"],
    ["Calculator", "＋", "orange", "calculator"],
    ["Settings", "⚙", "gray", "settings"],

    ["Games", "✚", "purple", "games"],
    ["Pear Store", "●", "blue", "store"],
    ["Recorder", "●", "red", "recorder"],
    ["Music Box", "♪", "pink", "musicbox"]
];

const grid = document.getElementById("appGrid");

const appScreen = document.getElementById("appScreen");

const appTitle = document.getElementById("appTitle");

const appContent = document.getElementById("appContent");


/* CREATE HOME SCREEN */

function createHomeScreen() {

    grid.innerHTML = "";

    apps.forEach(app => {

        const button = document.createElement("button");

        button.className = "app";

        button.innerHTML = `
            <div class="icon ${app[2]}">
                ${app[1]}
            </div>

            <div class="label">
                ${app[0]}
            </div>
        `;

        button.onclick = () => openApp(app[3]);

        grid.appendChild(button);

    });

}

createHomeScreen();


/* OPEN APP */

function openApp(id) {

    const app = apps.find(a => a[3] === id);

    if (!app) return;

    appTitle.textContent = app[0];

    appContent.innerHTML = getAppContent(id);

    appScreen.classList.remove("hidden");

}


/* GO HOME */

function goHome() {

    appScreen.classList.add("hidden");

}


/* APP CONTENT */

function getAppContent(id) {

    const screens = {

        mail: `
            <div class="panel">
                <h2>Inbox</h2>

                <div class="row">
                    Welcome to Pear Phone
                </div>

                <div class="row">
                    New message
                </div>

                <div class="row">
                    Your Pear account
                </div>
            </div>
        `,

        phone: `
            <div class="panel">
                <h2>Phone</h2>

                <div class="row">
                    Carly
                </div>

                <div class="row">
                    Sam
                </div>

                <div class="row">
                    Freddie
                </div>
            </div>
        `,

        contacts: `
            <div class="panel">
                <h2>Contacts</h2>

                <div class="row">
                    Carly
                </div>

                <div class="row">
                    Sam
                </div>

                <div class="row">
                    Freddie
                </div>
            </div>
        `,

        messages: `
            <div class="panel">

                <h2>Messages</h2>

                <div class="row">
                    <b>Sam</b><br>
                    where are you?
                </div>

                <div class="row">
                    <b>Carly</b><br>
                    call me
                </div>

            </div>
        `,

        camera: `
            <div class="panel"
                style="
                    height:300px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    font-size:50px;
                "
            >
                ●
            </div>

            <div class="panel" style="text-align:center;">
                TAKE PHOTO
            </div>
        `,

        photos: `
            <div class="panel">

                <h2>Photos</h2>

                <div class="photo-grid">

                    <div class="photo">○</div>
                    <div class="photo">●</div>
                    <div class="photo">✿</div>

                    <div class="photo">☼</div>
                    <div class="photo">•</div>
                    <div class="photo">◉</div>

                </div>

            </div>
        `,

        music: `
            <div class="panel" style="text-align:center;">

                <div style="font-size:70px;">
                    ♪
                </div>

                <h2>Now Playing</h2>

                <p>
                    Leave It All to Me
                </p>

                <p>
                    ◀　▶　▶
                </p>

            </div>
        `,

        videos: `
            <div class="panel">

                <h2>Videos</h2>

                <div class="row">
                    My Videos
                </div>

                <div class="row">
                    Clips
                </div>

            </div>
        `,

        internet: `
            <div class="panel">

                <input
                    value="www.pear.com"
                    style="
                        width:100%;
                        padding:9px;
                        background:#0f3042;
                        color:white;
                        border:1px solid #3d677c;
                        border-radius:6px;
                    "
                >

                <h2>Pear</h2>

                <p>
                    Welcome to Pear Internet.
                </p>

            </div>
        `,

        maps: `
            <div
                class="panel"
                style="
                    height:400px;
                    background:#609660;
                "
            >

                <h2>Pear Maps</h2>

                <div style="font-size:40px;">
                    •
                </div>

            </div>
        `,

        weather: `
            <div class="panel" style="text-align:center;">

                <div style="font-size:60px;">
                    ☼
                </div>

                <h1>
                    24°
                </h1>

                <p>
                    Sunny
                </p>

            </div>
        `,

        calendar: `
            <div class="panel">

                <h1>
                    27
                </h1>

                <p>
                    Today
                </p>

                <div class="row">
                    No events
                </div>

            </div>
        `,

        notes: `
            <div class="panel">

                <h2>
                    Notes
                </h2>

                <p>
                    • call Spencer
                </p>

                <p>
                    • film new video
                </p>

                <p>
                    • get snacks
                </p>

            </div>
        `,

        clock: `
            <div class="panel" style="text-align:center;">

                <div style="font-size:60px;">
                    ◷
                </div>

                <h1>
                    9:41
                </h1>

            </div>
        `,

        settings: `
            <div class="panel">

                <h2>
                    Settings
                </h2>

                <div class="row">
                    Sound
                </div>

                <div class="row">
                    Wallpaper
                </div>

                <div class="row">
                    About Pear Phone
                </div>

            </div>
        `,

        games: `
            <div class="panel">

                <h2>
                    Games
                </h2>

                <div class="row">
                    Pear Snake
                </div>

                <div class="row">
                    Pear Match
                </div>

            </div>
        `,

        store: `
            <div class="panel">

                <h2>
                    Pear Store
                </h2>

                <div class="row">
                    Pear Chat — GET
                </div>

                <div class="row">
                    Pear Maps — GET
                </div>

            </div>
        `,

        recorder: `
            <div class="panel"
                style="text-align:center;"
            >

                <div style="font-size:60px;">
                    ●
                </div>

                <h2>
                    Recorder
                </h2>

            </div>
        `,

        musicbox: `
            <div class="panel"
                style="text-align:center;"
            >

                <div style="font-size:60px;">
                    ♪
                </div>

                <h2>
                    Music Box
                </h2>

            </div>
        `,

        calculator: `
            <div class="panel">

                <input
                    id="calcDisplay"
                    class="calc-display"
                    value="0"
                    readonly
                >

                <div class="calc">

                    ${[
                        "7","8","9","/",
                        "4","5","6","*",
                        "1","2","3","-",
                        "0","C","=","+"
                    ].map(x => `
                        <button onclick="calculator('${x}')">
                            ${x}
                        </button>
                    `).join("")}

                </div>

            </div>
        `
    };

    return screens[id] || `
        <div class="panel">
            <h2>${id}</h2>
            <p>
                This Pear app is ready.
            </p>
        </div>
    `;
}


/* CALCULATOR */

function calculator(value) {

    const display =
        document.getElementById("calcDisplay");

    if (!display) return;

    if (value === "C") {

        display.value = "0";

        return;
    }

    if (value === "=") {

        try {

            display.value =
                Function(
                    "return " + display.value
                )();

        } catch {

            display.value = "Error";

        }

        return;
    }

    if (display.value === "0") {

        display.value = value;

    } else {

        display.value += value;

    }

}


/* CLOCK */

function updateTime() {

    const now = new Date();

    let hours = now.getHours();

    let minutes = now.getMinutes();

    hours =
        hours % 12 ||
        12;

    minutes =
        minutes
            .toString()
            .padStart(2, "0");

    document.getElementById("time").textContent =
        `${hours}:${minutes}`;

}

updateTime();

setInterval(updateTime, 1000);
