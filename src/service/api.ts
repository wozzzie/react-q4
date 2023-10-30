import { ApiResponseType } from '../types/types';

class Api {
  private static url =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  public static getDrinks = async (
    value: string | null
  ): Promise<ApiResponseType | null> => {
    try {
      const request = value || '';
      const response = await fetch(`${this.url}${request}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data. Please try again');
      }
      const result: ApiResponseType = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default Api;
