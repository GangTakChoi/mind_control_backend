export class AuthUser {
  private static id: number;

  static getId(): number {
    return AuthUser.id;
  }

  static setId(id: number) {
    AuthUser.id = id;
  }
}
