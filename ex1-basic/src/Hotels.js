import HotelItem from './HotelItem';
import test from './test.json'

function Hotels() {
  const selected = 7;

  return (
    <div>
      <h1>Hoteles</h1>
      <ul>
        {test.hotels.map(h =>
          <HotelItem key={h.id} hotel={h} isSelected={h.id === selected} />
        )}
      </ul>
    </div>
  );
}

export default Hotels;
