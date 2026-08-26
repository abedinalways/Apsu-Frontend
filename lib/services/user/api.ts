import type { UsersResponse } from './types';

export class ApiUserService {
  async getUsers(): Promise<UsersResponse> {
    throw new Error('getUsers not implemented');
  }
}

export const apiUserService = new ApiUserService();
