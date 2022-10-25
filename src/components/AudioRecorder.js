import {useState, useEffect} from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import styled from 'styled-components';
import { AuthProvider } from './Auth';


const AudioRecorder = (props) => {
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const [mediaBlob, setMediaBlob] = useState(null)


  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true
  });
  console.log("deed", status, mediaBlobUrl);

  const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.mediaBlobUrl);

      reader.onload = () =>
        resolve({
          fileName: file.title,
          base64: reader.result
        });
      reader.onerror = reject;
    });

  return (
    <RecorderContainer>
        <h4
          style={{
            marginLeft: "10px",
            textTransform: "capitalize",
            fontFamily: "sans-serif",
            fontSize: "18px",
            color: "white"
          }}
        >
          {status}
        </h4>
      <div
        className="timer-controller-wrapper"
      >
        <div style={{ fontSize: "54px" }}>
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "center"}}>
          <label
            style={{
              fontSize: "15px",
              fontWeight: "Normal"
              // marginTop: "20px"
            }}
            htmlFor="icon-button-file"
          >
            <h3 style={{ marginLeft: "15px", fontWeight: "normal" }}>
              Press the Start to record
            </h3>

            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
              <button
                style={{
                  padding: "0.8rem 2rem",
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  backgroundColor: "#42b72a",
                  color: "white",
                  transition: "all 300ms ease-in-out",
                  transform: "translateY(0)"
                }}
                onClick={() => {
                  if (!isActive) {
                    startRecording();
                  } else {
                    pauseRecording();
                  }

                  setIsActive(!isActive);
                }}
              >
                {isActive ? "Pause" : "Start"}
              </button>
              <button
                style={{
                  padding: "0.8rem 2rem",
                  border: "none",
                  backgroundColor: "#df3636",
                  fontSize: "1rem",
                  cursor: "pointer",
                  color: "white",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  transition: "all 300ms ease-in-out",
                  transform: "translateY(0)"
                }}
                onClick={() => {
                  pauseRecording();
                  stopRecording();
                  setIsActive(!isActive);
                }}
              >
                Stop
              </button>
              <button
          style={{
            backgroundColor: "black",
            borderRadius: "8px",
            color: "white"
          }}
          onClick={stopTimer}
        >
          Clear
        </button>
              <audio
              controls
              src={mediaBlobUrl}>
                Audio
              </audio>
            </div>
          </label>
        </div>
      </div>
    </RecorderContainer>
  );
};
export default AudioRecorder;

export const RecorderContainer = styled.div`
    max-width: 700px;
    height: 350px;
    margin: 0 auto;
`