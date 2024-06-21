export const groupDataByDate = (data) => {
  return data.reduce((acc, current) => {
    const date = new Date(current.dt_txt).toISOString().split("T")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(current);
    return acc;
  }, {});
};

export const formatTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
