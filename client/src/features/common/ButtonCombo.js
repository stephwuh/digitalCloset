
import React from 'react';

export default function ButtonCombo(props) {
  return (
    <>
      <button className="form-button submit" type="submit">
        Submit
      </button>
      <button
        className="form-button cancel"
        type="button"
        onClick={props.handleCancelOnClick}
      >
        Cancel
      </button>
      <button
        className="form-button delete"
        type="but ton"
        onClick={props.handleDeleteOnClick}
      >
        Delete
      </button>
    </>
  );
}
