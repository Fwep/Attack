export const getUsersChannels = ({ entities: { channels } }) => (
  Object.values(channels).sort((ch1, ch2) => {
    const nameA = ch1.name.toUpperCase();
    const nameB = ch2.name.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  })
);