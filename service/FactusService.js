import axios from "axios";

class FactusService {
  async get(songInfo) {
    const { artistName, songName } = songInfo;
    const url = `https://api.lyrics.ovh/v1/${artistName}/${songName}`;
    
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener las letras: ${error.message}`);
    }
  }
}

export default new FactusService();
