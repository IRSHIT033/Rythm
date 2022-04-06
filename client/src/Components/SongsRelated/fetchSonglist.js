export const getSongs = async () => {
  return await fetch(`/api/songs/getAllSongs`)
    .then((res) => res.json())
    .then((json) => json);
};
