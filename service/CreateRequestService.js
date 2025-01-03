import axios from "axios";

class CreateRequestService {
  async get(songInfo) {
    const { artistName, songName } = songInfo;
    const url = `${process.env.EXTERNAL_API_BASE_URL}${artistName}/${songName}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener las letras: ${error.message}`);
    }
  }
}

export default new CreateRequestService();
