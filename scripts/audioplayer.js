const audioPlayers = document.querySelectorAll(".audio-player");

audioPlayers.forEach((audioPlayer) => {
  const audioUrl = audioPlayer.dataset.url;
  const audio = new Audio(audioUrl);

  const btnPlayToggle = audioPlayer.querySelector(".btn-play");
  const slider = audioPlayer.querySelector("input[type='range']");

  function handleError() {
    const errors = {
      1: "Process Aborted by User",
      2: "Error Downloading File",
      3: "Audio Playback Error",
      4: "Fortmat Not Supported."
    };

    const errorMessage = `Erro: ${errors[audio.error.code]}`;

    audioPlayer.classList.add("error");
    audioPlayer.classList.remove("loading");
    console.error(errorMessage);
  }

  function setMessageDate() {
    const currentDateTime = new Date().toISOString().substr(11, 5);
    audioPlayer.style.setProperty(
      "--player-current-date-time",
      `'${currentDateTime}'`
    );
  }

  function formatTimeToDisplay(seconds) {
    const milliseconds = seconds * 1000;
    return new Date(milliseconds).toISOString().substr(14, 5);
  }

  function handlePlayButton() {
    audio.paused ? audio.play() : audio.pause();
  }

  function handleSlider(e) {
    const { duration } = audio;
    const percent = e.target.value;
    const currentTimeInSeconds = ((percent * duration) / 100).toFixed(2);
    audio.currentTime = currentTimeInSeconds;
  }

  function updateCurrentTimeDisplay(time) {
    audioPlayer.style.setProperty("--player-current-time", `'${time}'`);
  }

  function updateCurrentPercent() {
    const { currentTime, duration } = audio;
    const percentPlayed = (currentTime * 100) / duration;
    slider.value = percentPlayed;
    audioPlayer.style.setProperty(
      "--player-percent-played",
      `${percentPlayed}%`
    );
  }

  function showTimeDuration() {
    const { duration } = audio;
    const durationDisplay = formatTimeToDisplay(duration);
    updateCurrentTimeDisplay(durationDisplay);
  }

  function start() {
    btnPlayToggle.onclick = handlePlayButton;
    slider.oninput = handleSlider;

    let abort;
    audio.onerror = () => {
      abort = true;
      handleError();
    };
    if (abort) return;

    audio.onloadstart = () => {
      setMessageDate();
      audioPlayer.classList.add("loading");
    };

    audio.onplay = () => audioPlayer.classList.add("playing");
    audio.onpause = () => audioPlayer.classList.remove("playing");
    audio.onloadeddata = () => audioPlayer.classList.remove("loading");
    audio.ondurationchange = showTimeDuration;
    audio.onended = () => (audio.currentTime = 0);
    audio.ontimeupdate = () => {
      const { currentTime } = audio;
      const currentTimeDisplay = formatTimeToDisplay(currentTime);
      updateCurrentTimeDisplay(currentTimeDisplay);
      updateCurrentPercent();
      if (currentTime === 0) {
        showTimeDuration();
      }
    };
  }

  start();
});
