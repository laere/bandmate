import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  sidebarLinks = [
    { name: "My Info", path: "myinfo" },
    { name: "Experience", path: "experience" },
    { name: "Education", path: "education" },
    { name: "Instruments", path: "instruments" },
    { name: "Favorites", path: "favorites" },
    { name: "My Bands", path: "mybands" }
  ];

  renderSidebar() {
    return this.sidebarLinks.map(({ name, path }) => {
      return (
        <Link key={name} to={`/${path}`} className="dashboard-links">
          {name}
        </Link>
      );
    });
  }

  render() {
    return <div className="sidebar">{this.renderSidebar()}</div>;
  }
}

export default Sidebar;
