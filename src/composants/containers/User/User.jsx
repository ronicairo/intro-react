import FullName from './FullName';
import Hobbies from './Hobbies';
import Player from './Player';

function User() {
  return (
    <div>
      <h2>User Component</h2>
      <FullName />
      <Hobbies />
      <Player />
    </div>
  );
}

export default User;