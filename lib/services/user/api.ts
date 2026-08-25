import type { User, UsersResponse } from './types';
import { Fetch } from '@/lib/Fetch';

export class ApiUserService {
  async getUsers(): Promise<UsersResponse> {
    const response = await Fetch.get('/users');
    return response.data as UsersResponse;
  }
}

export const apiUserService = new ApiUserService();
