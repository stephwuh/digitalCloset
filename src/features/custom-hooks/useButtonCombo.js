
import React from 'react';

export default function useButtonCombo(cancelFunc, deleteFunc) {
  return (
    <>
      <button className="form-button submit" type="submit">
        Submit
      </button>
      <button
        className="form-button cancel"
        type="button"
        onClick={cancelFunc}
      >
        Cancel
      </button>
      <button
        className="form-button delete"
        type="but ton"
        onClick={deleteFunc}
      >
        Delete
      </button>
    </>
  );
}
