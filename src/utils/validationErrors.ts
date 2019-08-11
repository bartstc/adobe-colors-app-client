interface ValidationError {
  path: string;
  message: string;
}

export const validationErrors = (
  errors: ValidationError[] | undefined,
  field: string
) => {
  if (!errors) return undefined;

  for (let val of errors) {
    if (val.path === field) return val.message;
  }

  return undefined;
};
