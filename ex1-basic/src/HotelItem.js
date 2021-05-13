function HotelItem({ hotel, isSelected }) {

  return (
    <li className={isSelected ? 'selected' : ''}>
      <span className="name">{hotel.name}</span>
      <span className="city">({hotel.city})</span>
    </li>
  );
}

export default HotelItem;
