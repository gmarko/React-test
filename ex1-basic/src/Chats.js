import ChatItem from './ChatItem';
import test from './test.json'

function Chats() {
  const filter = 'Pe';

  return (
    <div className="chats">
      <h1>Chats</h1>
      <input value={filter} />
      <div>
        {test.chats.filter(c => c.name.includes(filter)).map((c, i) =>
          <ChatItem key={i} chat={c} />
        )}
      </div>
    </div>
  );
}

export default Chats;
