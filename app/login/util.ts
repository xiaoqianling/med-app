export enum LoginResult {
  Success = 0,
  Failed = 1,
  Unknown = 2
}

export function verifyLoginForm(form: FormData): LoginResult {
  // 检验非空
  if (form.get("account") === "" || form.get("password") === "") {
    return LoginResult.Failed;
  }
  return LoginResult.Success;
}
