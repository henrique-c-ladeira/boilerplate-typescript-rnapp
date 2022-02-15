import { useEffect, useState } from 'react';

type TimeType = number | false;

export const useTimer = (timeInSeconds: TimeType) => {
  const scaleTime = timeInSeconds && timeInSeconds * 10;
  const [timer, setTimer] = useState<TimeType>(scaleTime);

  useEffect(() => {
    const intervalListener = setInterval(
      () =>
        setTimer(prevValue => {
          if (prevValue === 0 || prevValue === false) {
            return false;
          }
          return prevValue - 1;
        }),
      100,
    );

    return () => clearInterval(intervalListener);
  }, []);

  if (timer) {
    return [
      `${Math.floor(timer / 600)
        .toString()
        .padStart(2, '0')} : ${(timer % 600)
        .toString()
        .padStart(3, '0')
        .slice(0, 2)} : ${(timer % 600)
        .toString()
        .padStart(3, '0')
        .slice(2, 3)}`,
      () => setTimer(timeInSeconds),
    ];
  }

  return [false, () => setTimer(timeInSeconds)];
};
