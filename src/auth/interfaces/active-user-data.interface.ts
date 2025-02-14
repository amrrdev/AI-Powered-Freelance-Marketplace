export interface ActiveUserDate {
  /**
   * the "subject",  whom the token refer to
   * the value of this properity is the user ID
   */
  sub: number;

  /**
   * the subject's (user) email
   */
  email: string;
}
