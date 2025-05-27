import React from "react";
import "./Humanbody.css";
import ActivityChart from "./Activitychart";
import Progressbar from "./Progressbar";
import { FaLungs } from "react-icons/fa";

import {
  ICON_SIZE,
  PROGRESS_COLOR1,
  PROGRESS_COLOR2,
  PROGRESS_COLOR3,
} from "../../constant";
import { FaTooth } from "react-icons/fa";
import { PiBoneLight } from "react-icons/pi";

const Humanbody = () => {
  return (
    <div>
      Dashboard
      <div className="humancontainer">
        {/* <div class="image-container"> */}
        <img src="/humanbody.jpg" alt="Human Body" class="human-img" />
        <button class="btn heart-btn">❤️ Healthy Heart</button>
        <button class="btn leg-btn">🦵 Healthy Leg</button>
        {/* </div> */}

        <div className="progress-bar-align-vertical">
          <div className="progress-icon">
            <div className="progress-text">
              <FaLungs size={ICON_SIZE} /> <span>Lungs</span>
            </div>
            <span>Date : 26 oct 2021</span>

            <Progressbar color={PROGRESS_COLOR1} />
          </div>
          <div className="progress-icon">
            <div className="progress-text">
              <FaTooth size={ICON_SIZE} /> <span>Teeth</span>
            </div>
            <span>Date : 26 oct 2021</span>

            <Progressbar color={PROGRESS_COLOR2} />
          </div>

          <div className="progress-icon">
            <div className="progress-text">
              <PiBoneLight size={ICON_SIZE} /> <span>Bone</span>
              <span>Bone</span>
            </div>
            <span>Date : 26 oct 2021</span>

            <Progressbar color={PROGRESS_COLOR3} />
          </div>
        </div>
      </div>
      <div className="activity-chart">
        <span style={{ fontWeight: "bold" }}>Activity</span>
        <span style={{ color: "grey" }}>3 Appointment on this weeks</span>
      </div>
      <div style={{ marginRight: "20px" }}>
        <ActivityChart />
      </div>
    </div>
  );
};

export default Humanbody;
