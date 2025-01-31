import { useState, useEffect } from "react";
import { Slide, toast } from "react-toastify";

type Slip = {
  id: number;
  advice: string;
};

const Quotes = () => {
  const [slip, setSlip] = useState<Slip | null>(null);

  const getAdvice = async () => {
    try {
      const resp = await fetch(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      );
      const data = await resp.json();
      setSlip(data.slip);
    } catch (error) {
      console.error("Can't get advice:", error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);
  const copyToClipboard = () => {
    if (slip) {
      navigator.clipboard.writeText(slip.advice);
      toast.success("Copied to clipboard!", {
        theme: "light",
        transition: Slide,
        position: "top-center",
      });
    }
  };
  return (
    <section>
      <div className="index">
        <p>ADVICE #{slip?.id ?? "..."}</p>
      </div>
      <div className="advice">{slip?.advice ?? "Loading advice..."}</div>
      <div className="break"></div>
      <div className="pause">
        <i className="icon-media-pause" onClick={copyToClipboard}></i>
      </div>
      <div className="button">
        <i className="icon-dice" onClick={getAdvice}></i>
      </div>
    </section>
  );
};

export default Quotes;

// event als je een text wil copieren naar je clipboard
// onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}
// TEST COPY -----> Happiness depends upon ourselves.
// TEST COPY ---> Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.
