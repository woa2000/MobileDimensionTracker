export interface AuthUser {
  id: number;
  username: string;
  name: string;
  role: string;
}

class AuthService {
  private currentUser: AuthUser | null = null;

  async login(username: string, password: string): Promise<AuthUser> {
    // Simulate authentication - in production, this would call the backend
    if (username === "carlos@empresa.com" && password === "password123") {
      this.currentUser = {
        id: 1,
        username: "carlos@empresa.com",
        name: "Carlos Antônio",
        role: "technician"
      };
      localStorage.setItem("auth_user", JSON.stringify(this.currentUser));
      return this.currentUser;
    }
    throw new Error("Credenciais inválidas");
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem("auth_user");
  }

  getCurrentUser(): AuthUser | null {
    if (!this.currentUser) {
      const stored = localStorage.getItem("auth_user");
      if (stored) {
        this.currentUser = JSON.parse(stored);
      }
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}

export const authService = new AuthService();
