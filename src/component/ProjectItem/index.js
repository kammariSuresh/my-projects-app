import React from "react";
import Popup from "reactjs-popup";
// import { ClipLoader } from "react-spinners";
import { GridLoader } from "react-spinners"; // import Loader from "react-loader-spinner";

import "./index.css";

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { projectId, imageURL, description, title, link } = projectDetails;

  //   const onClickOpenWebsite = (url) => window.open(url);

  const onClickTriggerLinkItem = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            Open
          </button>
        }
      >
        {(close) => (
          <>
            <div className="trigger-container">
              <div className="loading">
                {/* <ClipLoader color={"#36D7B7"} type="" size={120}> */}
                <GridLoader
                  color="#36D7B7"
                  size={15}
                  margin={2}
                  radius={2}
                  loading={true}
                />
                {/* </ClipLoader> */}
                {/* <Loader
                  color="#36D7B7"
                  height={100}
                  width={100}
                  className="reducing-speed"
                /> */}
              </div>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </>
        )}
      </Popup>
    </div>
  );

  const linkedItem = link === "notHaveLink";

  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
          <div className="trigger-item">
            {linkedItem ? (
              onClickTriggerLinkItem()
            ) : (
              <a href={`${link}`} className="anchor-item">
                Open
              </a>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectItem;
