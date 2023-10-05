import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const clearHandle = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="container">
        <h2> Text Converter</h2>
        <hr />
        <br />
        <p>
          are you bored of typing? then this is very useful to you just read and
          click on text and then copy your text and just paste it. enjoy 😉😉
        </p>
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Pause</button>
          <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy Text"}
          </button>
          <button onClick={clearHandle}>Clear</button>
        </div>
      </div>
    </>
  );
};

export default App;
