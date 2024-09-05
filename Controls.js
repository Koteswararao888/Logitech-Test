import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrecision, setZoom } from '../LogiiTech/orderBookSlice'; // Confirm this path

const Controls = () => {
  const dispatch = useDispatch();
  const { precision, zoom } = useSelector(state => state.orderBook);

  return (
    <div className="controls">
      <button onClick={() => dispatch(setPrecision(precision + 1))}>Increase Precision</button>
      <button onClick={() => dispatch(setPrecision(precision - 1))}>Decrease Precision</button>
      <button onClick={() => dispatch(setZoom(zoom + 0.1))}>Zoom In</button>
      <button onClick={() => dispatch(setZoom(zoom - 0.1))}>Zoom Out</button>
    </div>
  );
};

export default Controls;
