import { useEffect } from 'react';
import { mirage } from 'ldrs';

const Loader = () => {
  useEffect(() => {
    mirage.register();
  }, []);

  return (
    <l-mirage size="90" speed="2.5" color="#FF00FF"></l-mirage>
  );
};

export default Loader;