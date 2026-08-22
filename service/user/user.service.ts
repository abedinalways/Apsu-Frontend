import { CookieHelper } from "../../helper/cookie.helper";
import { Fetch } from "../../lib/Fetch";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const UserService = {
  login: async (_payload: { email: string; password: string }) => {
    throw new Error('UserService.login not implemented');
  },

  register: async (_payload: { username: string; email: string; password: string }) => {
    throw new Error('UserService.register not implemented');
  },

  logout: (_context: any = null) => {
    CookieHelper.destroy({ key: "token", context: _context });
  },

  getUserDetails: async (_payload: { token?: string; context?: any } = {}) => {
    throw new Error('UserService.getUserDetails not implemented');
  },

  findAll: async (_context: any = null) => {
    throw new Error('UserService.findAll not implemented');
  },

  findOne: async (_id: number, _context: any = null) => {
    throw new Error('UserService.findOne not implemented');
  },

  findOneByUsername: async (_payload: { username: string; token?: string; context?: any }) => {
    throw new Error('UserService.findOneByUsername not implemented');
  },

  update: async (_payload: any, _context: any = null) => {
    throw new Error('UserService.update not implemented');
  },

  updateAvatar: async (_data: any, _context: any = null) => {
    throw new Error('UserService.updateAvatar not implemented');
  },

  create: async (_payload: any, _context: any = null) => {
    throw new Error('UserService.create not implemented');
  },

  confirm: async (_payload: any, _context: any = null) => {
    throw new Error('UserService.confirm not implemented');
  },
};
