<script>
    import { onMount } from "svelte";

    let twitchClient;
    let targetTime = 1664884800000;
    let pauseStartTime = 0;
    let currentTime = 0;
    let date = Date.now();

    let settings = {
        channel: "stanz",
        primeValue: 15,
        t1Value: 15,
        t2Value: 30,
        t3Value: 75,
    };

    let descriptors = {
        channel: "Twitch channel:",
        primeValue: "Value of Prime Sub:",
        t1Value: "Value of Tier 1 Sub:",
        t2Value: "Value of Tier 2 Sub:",
        t3Value: "Value of Tier 3 Sub:",
        Prime: "Add Prime",
        "1000": "Add Sub",
        "2000": "Add T2",
        "3000": "Add T3",
    };

    onMount(() => {
        const interval = setInterval(() => {
            date = Date.now();
        }, 100);

        return () => {
            clearInterval(interval);
        };
    });

    $: {
        if (pauseStartTime) {
            currentTime = Math.max(targetTime - pauseStartTime, 0);
        } else {
            currentTime = Math.max(targetTime - date, 0);
        }
    }

    function init() {
        settings =
            JSON.parse(localStorage.getItem("bikeathonSettings")) || settings;
        targetTime =
            parseInt(localStorage.getItem("bikeathonTargetTime")) || targetTime;
        pauseStartTime =
            parseInt(localStorage.getItem("bikeathonPauseStartTime")) ||
            pauseStartTime;

        setSettings(settings);
        setTargetTime(targetTime);
        setPauseStartTime(pauseStartTime);
        loadTwitch();
    }

    function setSettings(newSettings) {
        settings = newSettings;
        localStorage.setItem("bikeathonSettings", JSON.stringify(settings));
    }

    function setPauseStartTime(time) {
        pauseStartTime = time;
        localStorage.setItem("bikeathonPauseStartTime", pauseStartTime);
    }

    function setTargetTime(time) {
        targetTime = Math.trunc(time);
        localStorage.setItem("bikeathonTargetTime", targetTime);
    }

    function incTargetTime(inc) {
        setTargetTime(targetTime + inc);
    }

    function pause() {
        if (!pauseStartTime) {
            setPauseStartTime(Date.now());
        }
    }

    function unpause() {
        if (pauseStartTime) {
            incTargetTime(Date.now() - pauseStartTime);
            setPauseStartTime(0);
        }
    }

    function addSub(plan) {
        if (currentTime) {
            let ratio = 0;
            if (plan === "Prime") {
                ratio = settings["primeValue"];
            } else if (plan === "1000") {
                ratio = settings["t1Value"];
            } else if (plan === "2000") {
                ratio = settings["t2Value"];
            } else if (plan === "3000") {
                ratio = settings["t3Value"];
            }
            incTargetTime(parseFloat(ratio) * 1000);
        }
    }

    function loadTwitch() {
        if (twitchClient) {
            twitchClient.disconnect();
        }

        twitchClient = new window.tmi.Client({
            channels: [settings["channel"].toLowerCase()],
        });
        twitchClient.connect().then(() => console.log("CONNECTED"));

        twitchClient.on("message", async (channel, tags, message, self) => {
            //console.log(message);
        });

        twitchClient.on(
            "subscription",
            (channel, username, method, message, userstate) => {
                console.log(userstate);
                addSub(userstate["msg-param-sub-plan"]);
            }
        );

        twitchClient.on(
            "resub",
            (channel, username, months, message, userstate, methods) => {
                console.log(userstate);
                //let cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
                addSub(userstate["msg-param-sub-plan"]);
            }
        );

        twitchClient.on(
            "subgift",
            (
                channel,
                username,
                streakMonths,
                recipient,
                methods,
                userstate
            ) => {
                console.log(userstate);
                //let senderCount = ~~userstate["msg-param-sender-count"];
                addSub(userstate["msg-param-sub-plan"]);
            }
        );
    }

    init();

    let newStartValue = 3600;

    function newStart() {
        console.log(newStartValue);
        setTargetTime(Date.now() + newStartValue * 1000);
    }
</script>

<settings>
    <section>
        {Math.floor(currentTime / 3600000)}
        :
        {(Math.floor(currentTime / 60000) % 60).toString().padStart(2, "0")}
        :
        {(Math.floor(currentTime / 1000) % 60).toString().padStart(2, "0")}
    </section>
    <section>
        <input type="text" bind:value={newStartValue} />
        <button class="start" on:click={newStart}>START</button>
    </section>

    <section>
        <button class="pause" on:click={pause}> PAUSE </button>
        <button class="unpause" on:click={unpause}> UNPAUSE </button>
    </section>

    <section class="addButtons">
        {#each ["Prime", "1000", "2000", "3000"] as plan}
            <button class="add" on:click={() => addSub(plan)}>
                {descriptors[plan]}
            </button>
        {/each}
    </section>

    <section>
        <input type="text" bind:value={targetTime} />
    </section>

    <section>
        {#each Object.entries(settings) as [setting, value]}
            <setting>
                <descriptor>
                    {descriptors[setting] || setting + ":"}
                </descriptor>
                <input
                    type="text"
                    bind:value={settings[setting]}
                    on:change={() => {
                        setSettings(settings);
                    }}
                />
            </setting>
        {/each}
    </section>
</settings>

<style>
    settings {
        background-color: var(--color-grey-dark);
        color: white;
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    section {
        margin: 0.5rem;
    }

    section.addButtons {
        margin-bottom: 5rem;
    }

    button {
        display: inline-block;
        margin: 0.1rem;
    }

    button.pause,
    button.unpause {
        font-size: 1.5rem;
        width: 10rem;
        height: 4rem;
    }

    button.pause {
        background-color: #440a0a;
    }

    button.unpause {
        background-color: #113d06;
    }

    input {
        text-align: center;
    }

    setting input {
        width: 5rem;
    }

    descriptor {
        margin: 0.1rem;
    }

    setting {
        display: block;
    }
</style>
