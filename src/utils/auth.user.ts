export class AuthUser {
  private static id: string;

  static getId(): string {
    return AuthUser.id;
  }

  static setId(id: string) {
    AuthUser.id = id;
  }
}
