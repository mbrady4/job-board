import React from "react";
import "./jobListing.css";

let logos = {
  "Invent and Wander": require("../../images/inventandwander.png"),
  "The Psychology of Money": require("../../images/PsychologyOfMoney.png"),
  "The Machinery of Life": require("../../images/TheMachineryOfLife.png"),
  "A Computer Scientist's Guide to Cell Biology": require("../../images/AComputersScientistsGuideToCellBiology.png"),
  "Tape Sucks": require("../../images/TapeSucks.png"),
  "Molecular Biology of the Cell - Part 1": require("../../images/MolecularBiologyOfTheCell.png"),
  "The Slight Edge": require("../../images/TheSlightEdge.jpg"),
  "Zero To One": require("../../images/ZeroToOne.jpg"),
  "Never Eat Alone": require("../../images/NeverEatAlone.jpg"),
  Smartcuts: require("../../images/Smartcuts.jpg"),
};

const JobListing = (props) => {
  const logoCode = logos[props.job.position];

  return (
    <div
      className={props.job.new ? "joblisting featuredlisting" : "joblisting"}
    >
      <div className="job-info">
        <div className="col">
          <img src={`${logoCode}`} alt="" />
        </div>
        <div className="col">
          <div className="row">
            <h3>{props.job.company}</h3>
            {props.job.new === true ? <h4 className="new">NEW!</h4> : null}
            {props.job.featured === true ? (
              <h4 className="featured">FEATURED</h4>
            ) : null}
          </div>
          <div className="row">
            <h2>{props.job.position}</h2>
          </div>
          <div className="row">
            <p>{props.job.postedAt}</p>
            <span>&#183;</span>
            <p>{props.job.contract}</p>
            <span>&#183;</span>
            <p>{props.job.location}</p>
          </div>
        </div>
      </div>
      <div className="job-right">
        <div className="job-filters">
          <button
            className="jobfilter"
            onClick={() => props.roleFilter(props.job.role)}
          >
            {props.job.role}
          </button>
          <button
            className="jobfilter"
            onClick={() => props.levelFilter(props.job.level)}
          >
            {props.job.level}
          </button>
          {props.job.tools
            ? props.job.tools.map((tool, key) => {
                return (
                  <button
                    className="jobfilter"
                    onClick={() => props.toolFilter(tool)}
                    key={key}
                  >
                    {tool}
                  </button>
                );
              })
            : null}
          {props.job.languages
            ? props.job.languages.map((language, key) => {
                return (
                  <button
                    className="jobfilter"
                    onClick={() => props.languageFilter(language)}
                    key={key}
                  >
                    {language}
                  </button>
                );
              })
            : null}
        </div>
        <div className="download-div">
          <a href={props.job.download} className="download">
            Download Cards
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
