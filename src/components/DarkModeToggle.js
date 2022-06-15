import { ToggleSwitch } from '@fremtind/jkl-toggle-switch-react';
import '@fremtind/jkl-toggle-switch/toggle-switch.min.css';
import { useEffect, useState } from 'react';

export const DarkModeToggle = () => {
  const [darkmodeIsOn, setDarkmodeIsOn] = useState(false);

  useEffect(() => {
    if (darkmodeIsOn) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [darkmodeIsOn]);

  return (
    <ToggleSwitch
      pressed={darkmodeIsOn}
      onClick={() => setDarkmodeIsOn(!darkmodeIsOn)}
    />
  );
};
