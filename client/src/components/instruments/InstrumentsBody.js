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
      <React.Fragment key={instrument._id}>
        <section className="section">
          <div>
            <h1 className="title">{empty(instrument.instrument)}</h1>
            <div className="instruments-info">
              <div>Instrument Type: </div>
              <span>{empty(instrument.instrumenttype)}</span>
            </div>
            <div className="instruments-info">
              <div>Playing Style: </div>
              <span>{empty(instrument.playingstyle)}</span>
            </div>
            <div className="instruments-info">
              <div>Time Played: </div>
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
      </React.Fragment>
    );
  });

  return <div className="instruments-body">{content}</div>;
};

export default InstrumentsBody;
