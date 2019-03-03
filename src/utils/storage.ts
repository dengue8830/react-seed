import { ISesionAttrs } from '../models/sesion';

export class SStorage {
  private static SESION = 'SESION';
  private static TOKEN = 'TOKEN';

  static async setToken(raw: string) {
    // await AsyncStorage.setItem(SStorage.TOKEN, raw);
    localStorage.setItem(SStorage.TOKEN, raw);
  }

  static async getToken(): Promise<string | undefined> {
    return localStorage.getItem(SStorage.TOKEN) || undefined;
  }

  static async setSesion(raw: ISesionAttrs) {
    localStorage.setItem(SStorage.SESION, JSON.stringify(raw));
  }

  static async getSesion(): Promise<ISesionAttrs | undefined> {
    const jsonstring = await localStorage.getItem(SStorage.SESION);
    return jsonstring ? JSON.parse(jsonstring) : undefined;
  }

  static async cerrarSesion() {
    localStorage.clear();
    // localStorage.removeItem(SStorage.SESION);
    // localStorage.removeItem(SStorage.TOKEN);
  }
}