import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrderBook } from '../LogiiTech/orderBookSlice'; // Confirm this path

const useWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

    ws.onopen = () => {
      ws.send(JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'tBTCUSD',
      }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (Array.isArray(data[1])) {
        dispatch(updateOrderBook(data[1]));
      }
    };

    return () => ws.close();
  }, [dispatch]);
};

export default useWebSocket;
