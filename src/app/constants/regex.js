export const PASSWORD_VALID =
  /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

<<<<<<< HEAD
export const ONLY_ALPHA = /^[a-zA-Z]+$/;

export const FIRSTNAME = /^[a-zA-ZÀ-ÿ-]+$/;

export const LASTNAME = /^[a-zA-ZÀ-ÿ\s-]+$/;

export const PROJECT_NAME = /^[A-Za-z\-_ ]{3,50}$/;

export const EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
=======
export const FIRSTNAME = /^[a-zA-Zàáâäãåçèéêëìíîïñòóôöõøùúûüýÿ'\-]{2,}$/;

export const LASTNAME = /^[a-zA-Zàáâäãåçèéêëìíîïñòóôöõøùúûüýÿ'\-\s]{2,}$/;

export const PROJECT_NAME = /^.{3,50}$/;

export const EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const ONLY_ALPHA = /^[a-zA-ZÀ-ÿ\s\-]+$/;
>>>>>>> 3510b817c73110e99f94de21935400ea29e5e6ab
