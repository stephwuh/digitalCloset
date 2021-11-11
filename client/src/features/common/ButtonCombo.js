
import React from 'react';

export default function ButtonCombo(props) {
  return (
    <>
      <button className="form-button submit" type="submit" disabled={props.processingForm}>
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
        type="button"
        onClick={props.handleDeleteOnClick}
        disabled={props.processingForm}
      >
        Delete
      </button>
    </>
  );
}
