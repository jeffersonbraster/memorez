export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
};
