import { Injectable } from '@angular/core';

//TODO: REMOVE WHEN BACKEND IMPLEMENTED
import { mockUser } from './mock-user';

@Injectable()
export class UserService {
  getMockUser() {
    return Promise.resolve(mockUser);
  }
}
