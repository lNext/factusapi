import axios from "axios";
class FactusService {
  async get(songInfo) {
    const { artistName, songName } = songInfo;
    const url = `${process.env.API_BASE_URL}${artistName}/${songName}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener las letras: ${error.message}`);
    }
  }
}

export default new FactusService();
