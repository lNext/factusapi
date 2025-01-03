import createRequestService from "../service/CreateRequestService.js";

export const get = async (req, res) => {
  const songInfo = {
    songName: "yellow",
    artistName: "coldplay",
  };

  try {
    const apiData = await createRequestService.get(songInfo);
    res.json({ data: apiData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al obtener las letras de la canción" });
  }
};
