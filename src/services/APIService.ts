export interface IAPIService<T> {
  data: T | null;
  error: Record<string, any> | null;
}

export default class APIService {
  private static instance: APIService;

  private constructor() {}

  public static getInstance(): APIService {
    if (!APIService.instance) {
      APIService.instance = new APIService();
    }

    return APIService.instance;
  }

  async fetch<T>(url: string, options?: RequestInit): Promise<IAPIService<T>> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${url}`,
        options,
      );

      const data: T = await response.json();

      return { data, error: null };
    } catch (reason: any) {
      return { data: null, error: reason.statusText };
    }
  }
}
