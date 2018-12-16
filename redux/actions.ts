export const actionTypesMapping: any = {
  CATCH: "CATCH",
  DOG: "DOG",
  RESET: "RESET"
};

export const onCatch = (id: any) => {
  return { type: actionTypesMapping.CATCH, id };
};

export const onReset = () => {
  return { type: actionTypesMapping.RESET };
};

export const onDog = () => {
  return { type: actionTypesMapping.DOG };
};