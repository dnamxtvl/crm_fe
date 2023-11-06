import { EXPIRES_COOKIE_DAY } from "~/constants/application";

export default class LocalStorageManager {
    static setItemWithKey = (key: string, value: any) => {
      const now = new Date();
      const dayExpires = EXPIRES_COOKIE_DAY;
      const minutes = dayExpires * 24 * 60;
      const item = {
        value: value,
        expiry: now.getTime() + minutes * 60 * 1000,
      };
      try {
        localStorage.setItem(key, JSON.stringify(item));
      } catch (error) {
        return;
      }
    }
  
    static getItemWithKey = (key: string) => {
      try {
        const item = JSON.parse(localStorage.getItem(key));
        const now = new Date().getTime();
        if (item !== null && now <= item.expiry) {
          return item.value;
        } else {
          localStorage.removeItem(key);
          return null;
        }
      } catch (error) {
        return null;
      }
    }
  
    static removeItem = (key: string) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        return;
      }
    }
  }