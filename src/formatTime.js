export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);

  const getSeconds = (time % 60 < 10 ? "0" : "") + (time % 60);

  const getMinutes = (minutes % 60 < 10 ? "0" : "") + (minutes % 60);

  const getHours =
    (Math.floor(minutes / 60) < 10 ? "0" : "") + Math.floor(minutes / 60);

  return `${getHours}:${getMinutes}:${getSeconds}`;
};
