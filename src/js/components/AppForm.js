import React, { useState } from 'react';

function AppForm() {
  const [bear, setBear] = useState('B E A R');
  const [toggleFlg, setToggleFlg] = useState(1);

  const clickBearButton = () => {
    if (toggleFlg) {
      setBear('Believe Effort Action Result');
      setToggleFlg(0);
    } else {
      setBear('B E A R');
      setToggleFlg(1);
    }
  };
  return (
    <div>
      <h1>*** {bear} ***</h1>
      <button onClick={clickBearButton}>NoPlanB</button>
    </div>
  );
}

export default AppForm;
