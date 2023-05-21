import { useState } from 'react';


export default function ToggleState() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((current) => !current);
  };

  return (
    <div>
      <button onClick={handleToggle}>Show Profile</button>
      {visible && <p></p>}
    </div>
  );
}