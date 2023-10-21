import { Component } from "react";

import TabItem from "./component/TabItem/index";
import ProjectItem from "./component/ProjectItem/index";
import Header from "./component/Header/index";

import "./App.css";

const tabsList = [
  { tabId: "STATIC", displayText: "Static" },
  { tabId: "RESPONSIVE", displayText: "Responsive" },
  { tabId: "DYNAMIC", displayText: "Dynamic" },
];

const projectsList = [
  {
    projectId: 0,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    title: "Tourism Website",
    link: "https://kcharytourism.ccbp.tech/",

    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
  },
  {
    projectId: 1,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",
    title: "Music Page",
    link: "https://kcharymusicpage.ccbp.tech",

    description:
      "The music page enables the users to browse through the images of all-time favorite music albums.",
  },

  //   {
  //     projectId: 2,
  //     category: "STATIC",
  //     imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",
  //     title: "Advanced Technologies",
  //     link: "notHaveLink",
  //     description:
  //       "A website that gives you a basic understanding of Advanced Technologies.",
  //   },
  {
    projectId: 2,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s2-img.png",
    title: "Happy Meals",
    link: "https://kcharyhappymeal.ccbp.tech",
    description: "Discover the best foods in over 1,000 restaurants.",
  },
  {
    projectId: 3,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    title: "Food Munch",
    link: "https://kcharyfoodmunch.ccbp.tech",

    description: "Food Much Website is a user-centric food tech website.",
  },
  {
    projectId: 4,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",
    title: "VR Website",
    link: "https://kcharyvrwebsite.ccbp.tech",
    description:
      "VR Website enables users to explore AR and VR Products and Industry happenings.",
  },

  {
    projectId: 5,
    category: "DYNAMIC",
    imageURL:
      "https://en.idei.club/uploads/posts/2023-06/1686775418_en-idei-club-p-portfolio-background-design-dizain-krasivo-1.jpg",
    title: "Portfolio",
    link: "https://kammarisuresh.github.io/suresh/",

    description:
      "A portfolio is the best alternative for a resume to showcase your skills to the digital world.",
  },
  //   {
  //     projectId: 6,
  //     category: "RESPONSIVE",
  //     imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r1-img.png",
  //     title: "Design",
  //     link: "notHaveLink",
  //     description:
  //       "A website to showcase the best features and give more information about the Design tool.",
  //   },
  {
    projectId: 7,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",
    title: "Speed Typing Test",
    link: "https://kcharyspeedtest.ccbp.tech",

    description:
      "Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.",
  },
  {
    projectId: 8,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",
    title: "Random Joke Page",
    link: "https://kcharyjokes.ccbp.tech",

    description:
      "Random Joke Page is an API-based dynamic Web Application that generates a new joke.",
  },
  {
    projectId: 9,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",
    title: "Sizing An Image",
    link: "https://kcharysizeimage.ccbp.tech",
    description:
      "This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.",
  },
];

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  };

  clickTabItem = (tabValue) => {
    this.setState({ activeTabId: tabValue });
  };

  getFilteredProjects = () => {
    const { activeTabId } = this.state;
    const filteredProjects = projectsList.filter(
      (eachprojectDetails) => eachprojectDetails.category === activeTabId
    );
    return filteredProjects;
  };

  render() {
    const { activeTabId } = this.state;
    const filteredProjects = this.getFilteredProjects();
    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          My skills and achievements showcase my strengths and abilities.
          Speaking about any new skills or software I learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map((tabDetails) => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map((projectDetails) => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
