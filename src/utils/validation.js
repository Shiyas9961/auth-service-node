const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    if (typeof password !== "string") return false;
    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
}

const validateUserInput = ({ email, password }, isUpdate = false) => {
  if (!isUpdate) {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
  }

  if (email && !isValidEmail(email)) {
    throw new Error("Invalid email format");
  }

  if (password && !isValidPassword(password)) {
    throw new Error(
      "Password must be at least 8 characters long and contain letters and numbers"
    );
  }
};

module.exports = {
    isValidEmail,
    isValidPassword,
    validateUserInput
}