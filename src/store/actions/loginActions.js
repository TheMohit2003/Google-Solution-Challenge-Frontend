export const SAVE_NAME = "SAVE_NAME";
export const saveName = (name) => {
  return {
    type: "SAVE_NAME",
    payload: name,
  };
};
