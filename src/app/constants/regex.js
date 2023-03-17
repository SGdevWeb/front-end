export const PASSWORD_VALID =
  /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

export const ONLY_ALPHA = /^[a-zA-Z]+$/;

export const FIRSTNAME = /^[a-zA-ZÀ-ÿ-]+$/;

export const LASTNAME = /^[a-zA-ZÀ-ÿ\s-]+$/;

export const PROJECTNAME = /^[A-Za-z- ]{3,50}$/;

export const EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
