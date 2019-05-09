import React from "react";
import { connect } from "react-redux";
import ContentHeader from "components/dashboard/ContentHeader";
import InstrumentsBody from "components/instruments/InstrumentsBody";

class Instruments extends React.Component {
  render() {
    return (
      <div className="content">
        <ContentHeader
          header="My Instruments"
          btn="Add Instruments"
          path="/add-instruments"
        />
        <InstrumentsBody
          isLoading={this.props.isLoading}
          instruments={this.props.instruments}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  profiles: {
    isLoading,
    profile: { instruments }
  }
}) => {
  return { isLoading, instruments };
};

export default connect(mapStateToProps)(Instruments);
