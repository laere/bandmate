import React from "react";
import empty from "utils/empty";
import { Link } from "react-router-dom";
import Spinner from "components/common/Spinner";

const InstrumentsBody = ({ isLoading, instruments }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!instruments) {
    return <h1>You currently have no instruments listed!</h1>;
  }

  const content = instruments.map(instrument => {
    return (
      <section className="section" key={instrument._id}>
        <div>
          <h1 className="title">{empty(instrument.instrument)}</h1>
          <div className="content-info">
            <div className="subtitle">Instrument Type: </div>
            <span>{empty(instrument.instrumenttype)}</span>
          </div>
          <div className="content-info">
            <div className="subtitle">Playing Style: </div>
            <span>{empty(instrument.playingstyle)}</span>
          </div>
          <div className="content-info">
            <div className="subtitle">Time Played: </div>
            <span>{empty(instrument.timeplayed)}</span>
          </div>
        </div>
        <Link
          to={`/instruments/${instrument._id}`}
          className="button is-danger is-small"
          style={{ margin: 0 }}
        >
          Delete
        </Link>
      </section>
    );
  });

  return <div className="instruments-body">{content}</div>;
};

export default InstrumentsBody;
