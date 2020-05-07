class AuthService {
  public isLogged() {
    return false;
  }

  public isAdministrator() {
    return false;
  }
}

export const authService = new AuthService();
