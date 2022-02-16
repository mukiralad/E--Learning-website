import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./NavbarBox";
import "../styles/CourseStructure.css";
import ReactPlayer from "react-player";

function CourseStructure(props) {
  let { courseRoute } = useParams();

  const courses = {
    introduction: [
      { title: "Introduction to Computer Science", vid: "CNFK86hJRfE" },
      { title: "What is Web Development?", vid: "rarJvL5tDUA" },
      { title: "What is a Full-Stack Developer?", vid: "H4M19g0xVJs" },
      { title: "What is Technical Interviewing?", vid: "iK2O6SuJkN4" },
      { title: "Design Thinking Origins", vid: "LT_nfWRqyWs" },
      { title: "What is Code?", vid: "qepp8a2fDHQ" },
      { title: "Introduction to Ethics", vid: "3_t4obUc51A" },
      { title: "What are Soft Skills?", vid: "Tiy2LONr050" },
      { title: "What is Problem Solving?", vid: "E5ENFnMqsHQ" },
      { title: "The Importance of Time Management", vid: "Z6kAEQJhSoU" },
    ],
    elc: [
      { title: "Basics of Communication", vid: "Pcp2qmtsYs0" },
      {
        title: "An Easy Guide to giving Great Presentations",
        vid: "5RzNFqB7VcQ",
      },
      { title: "How to Ace Group Discussions", vid: "1GQR7tdyzpw" },
      { title: "Listening Skills", vid: "D6-MIeRr1e8" },
      { title: "Speaking Strategies", vid: "96i840d1zyI" },
    ],
    pps: [
      { title: "Introduction to C Programming", vid: "rLf3jnHxSmU" },
      { title: "Variables", vid: "fO4FwJOShdc" },
      { title: "Operators", vid: "50Pb27JoUrw" },
      { title: "Conditionals", vid: "Led5aHdLoT4" },
      { title: "Patterns - Pyramid", vid: "KdM6OrvcjPI" },
    ],
    em: [
      { title: "EM-I -- 1", vid: "4QFsiXfgbzM" },
      { title: "EM-I -- 2", vid: "bJPuy0QZ-tE" },
      { title: "EM-I -- 3", vid: "0apMXhWG_W8" },
      { title: "EM-I -- 4", vid: "PaaW9MzLFq4" },
      { title: "EM-I -- 5", vid: "kOoVOXE11HM" },
    ],
    spod: [
      { title: "SPOD - 1", vid: "h0Y9jDKqScQ" },
      { title: "SPOD - 2", vid: "JA3sCmrv11M" },
      { title: "SPOD - 3", vid: "tdo_cqP_JnE" },
      { title: "SPOD - 4", vid: "W-VN6D3aSqo" },
      { title: "SPOD - 5", vid: "2m6FRf235mM" },
    ],
    bee: [
      { title: "Basic Electrical Engineering - 1", vid: "IZA_bJiGiJc" },
      { title: "Basic Electrical Engineering - 2", vid: "aWz8yOnenGw" },
      { title: "Basic Electrical Engineering - 3", vid: "GeWictfG9Zg" },
      { title: "Basic Electrical Engineering - 4", vid: "sBw7e5fwsnY" },
      { title: "Basic Electrical Engineering - 5", vid: "QOTKweOtqL8" },
    ],
  };

  const [vid, uid] = useState(courses[courseRoute][0].vid);
  const [title, utitle] = useState(courses[courseRoute][0].title);
  const [count, setCount] = useState(0);
  const [watchComplete, setWatchComplete] = useState(false);

  const handleWatchComplete = ({ played }) => {
    console.log(played);
    if (played >= 0.95 && !watchComplete) {
      setWatchComplete(true);
      setCount(count + 1);
    }
  };

  const renderVideo = () => {
    return (
      <div className="video-wrapper">
        <h4> {title} </h4>
        <ReactPlayer
          url={"//www.youtube.com/embed/" + vid + "?rel=0"}
          controls
          onProgress={handleWatchComplete}
        />
        <div
          className={
            watchComplete
              ? "marker marker--is-complete"
              : "marker marker--not-complete"
          }
        >
          Completed
        </div>
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      <div className="courseStructure">
        <div className="list-group">
          {courses[courseRoute].map((item) => {
            return (
              <label
                className="list-group-item"
                key={item.vid}
                onClick={() => {
                  uid(item.vid);
                  utitle(item.title);
                  setWatchComplete(false);
                }}
              >
                {item.title}
              </label>
            );
          })}
        </div>
        <div>{renderVideo()}</div>
        <div>
          <h5>
            Completed: {count} / {courses[courseRoute].length}{" "}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CourseStructure;
