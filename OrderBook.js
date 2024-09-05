import React from 'react';
import { useSelector } from 'react-redux';
import './OrderBook.scss';

const OrderBook = () => {
  const { bids, asks, precision, zoom } = useSelector(state => state.orderBook);

  const formatPrice = (price) => price.toFixed(precision);

  return (
    <div className="order-book" style={{ zoom }}>
      <div className="order-book-column">
        <h2>Bids</h2>
        {bids.map((bid, index) => (
          <div key={index} className="order-book-row">
            <span>{formatPrice(bid[0])}</span>
            <span>{bid[1]}</span>
          </div>
        ))}
      </div>
      <div className="order-book-column">
        <h2>Asks</h2>
        {asks.map((ask, index) => (
          <div key={index} className="order-book-row">
            <span>{formatPrice(ask[0])}</span>
            <span>{ask[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
