import React from "react";
import GitHubCalendar from "react-github-calendar";
import {Fade} from "react-reveal";


export default function GitContributions() {
return (
<Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">Asad's GitHub Contributions</h1>
        </div>
        <div className="blog-main-div">
          <GitHubCalendar username="asadshahid04" />
        </div>
      </div>
    </Fade>)
}
