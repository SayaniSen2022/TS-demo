import { useState, useId } from "react";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState("");
  const [hotstar, setHotstar] = useState(0);
  const [netflix, setNetflix] = useState(0);
  const channelSelectId = useId(); //to generate unique ids
  const channels: {
    label: string,
    value: number
  }[] = [
    {
      label: "Select",
      value: 0
    },
    {
      label: "Disney Hotstar",
      value: 1
    },
    {
      label: "Netflix",
      value: 2
    }
  ];

  const handleSelect = (e) =>{
    setValue(e.target.value);
    console.log(value);

    updateCounter(e.target.value);
  }

  const updateCounter = (e) => {
    if(e == "1"){
      setHotstar(hotstar + 1);
    }
    else if(e == "2"){
      setNetflix(netflix + 1);
    }
  }

  return (
    <div>
      <div>Subscription Tracker</div>
      <label id="chnl-lbl" htmlFor={channelSelectId} > Choose a channel
        <select className="sub-options" id={channelSelectId} onChange={handleSelect}>
          {channels.map(channel => (
            <option key={channel.value} value={channel.value}>{channel.label}</option>
          ))}
        </select>
      </label>
      <button className="sub-btn">Add Subscription</button>
      <div>
        <div>Hotstar subs: {hotstar} </div>
        <div>Netflix subs: {netflix}</div>
      </div>
    </div>
  );
};

export default Home;
