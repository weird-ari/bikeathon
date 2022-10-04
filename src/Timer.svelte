<script>
    import { onMount } from "svelte";
    let targetTime = 0;
    let pauseStartTime = 0;
    let currentTime = 0;
    let date = Date.now();

    function loadFromStorage() {
        targetTime = parseInt(localStorage.getItem("bikeathonTargetTime"));
        pauseStartTime = parseInt(
            localStorage.getItem("bikeathonPauseStartTime")
        );
    }

    onMount(() => {
        const interval = setInterval(() => {
            date = Date.now();
        }, 100);

        return () => {
            clearInterval(interval);
        };
    });

    window.addEventListener("storage", () => {
        loadFromStorage();
    });

    $: {
        if (pauseStartTime) {
            currentTime = Math.max(targetTime - pauseStartTime, 0);
        } else {
            currentTime = Math.max(targetTime - date, 0);
        }
    }

    loadFromStorage();

    let animationPosition = 0;
    let animationLimit = 15;
    setInterval(() => {
        if (!pauseStartTime && currentTime) {
            let newPos = animationPosition + (Math.random() - 0.5);
            animationPosition = Math.max(
                Math.min(animationLimit, newPos),
                -animationLimit
            );
        }
    }, 100);
</script>

<main>
    <box
        id="timerbox"
        class:finished={currentTime === 0}
        style="{currentTime > 300000
            ? ''
            : 'animation-name: blinking;'} animation-duration:{Math.max(
            currentTime / 60000,
            1
        )}s"
    >
        <time>
            <segment class="hours">
                {Math.floor(currentTime / 3600000)}
            </segment>:
            <segment>
                {(Math.floor(currentTime / 60000) % 60)
                    .toString()
                    .padStart(2, "0")}
            </segment>:
            <segment class="seconds">
                {(Math.floor(currentTime / 1000) % 60)
                    .toString()
                    .padStart(2, "0")}
            </segment>
        </time>
        <animation>
            <img
                class="peepo"
                alt="peepoBike"
                src={currentTime
                    ? pauseStartTime
                        ? "peepoBike.png"
                        : "peepoBike.gif"
                    : "PeepoFinish.webp"}
                style="right:{animationPosition}rem"
            />
            <img
                class="animation-background"
                class:paused={pauseStartTime || !currentTime}
                alt="landscape background"
                src="bg.png"
            />
        </animation>
    </box>
</main>

<style>
    main {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    animation {
        width: 100%;
        height: 0rem;
        background-color: yellowgreen;
        display: flex;
        flex-direction: column-reverse;
        justify-content: baseline;
        align-items: center;
    }

    img.animation-background {
        background-color: var(--color-blue);
        background: linear-gradient(to top, #f69b6c 25%, #70cedf 100%);

        display: block;
        position: relative;

        height: 16rem;
        width: 300%;
        margin-bottom: -6.7rem;

        z-index: -1;
        animation: slide 15s linear infinite;
    }

    .paused {
        animation-play-state: paused !important;
    }

    @keyframes slide {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-33%, 0, 0);
        }
    }

    img.peepo {
        width: 6.5rem;
        margin-bottom: 0.2rem;
        filter: drop-shadow(-0.35rem 0.25rem 0.35rem var(--color-grey-dark));
        position: relative;
        transition: right 0.25s ease-in-out;
    }

    box {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 38rem;
        height: 16rem;

        background-color: var(--color-cream);
        background-color: transparent;
        border: 0.5rem solid var(--color-grey-medium);
        border-radius: 1.5rem;

        color: var(--color-orange);
        -webkit-text-stroke: 0.45rem var(--color-grey-dark);

        font-family: Anton;
        font-size: 10rem;

        overflow: hidden;

        animation: none 2s ease-in-out infinite;
    }

    time {
        display: flex;
        justify-content: center;
    }

    segment {
        padding: 0 0.5rem;
        width: 10rem;
        text-align: center;
        font-variant-numeric: tabular-nums lining-nums;
    }

    segment.hours {
        width: auto;
        text-align: right;
    }

    segment.seconds {
        text-align: left;
    }
</style>
