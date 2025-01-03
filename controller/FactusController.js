import factusService from "../service/FactusService.js";

export const get = async (req, res) => {
  const songInfo = {
    songName: "yellow",
    artistName: "coldplay",
  };

  try {
    const lyrics = await factusService.get(songInfo);
    res.json({ data: lyrics });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al obtener las letras de la canción" });
  }
};
