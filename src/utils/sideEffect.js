import { message } from "antd";

const sideEffect = async (
  effect,
  { success, successMessage, errorMessage, failure, payload }
) => {
  try {
    const result = await effect(payload);
    if (successMessage) {
      message.success(successMessage);
    }
    if (success) {
      return success(result);
    }
    return null;
  } catch (e) {
    if (errorMessage || typeof e === "string") {
      message.error(errorMessage || e);
    }
    if (failure) {
      return failure(e);
    }
  }
};

export default sideEffect;
