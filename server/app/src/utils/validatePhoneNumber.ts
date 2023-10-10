import { sendAxiosRequest } from "./axiosClient";
import env from "./validateEnv";

type ValidatePhoneNumberResponse = {
  isValid: boolean;
  phoneNumber: string;
  countryIso2: string;
  countryIso3: string;
  countryCode: string;
};

const baseURL = env.PHONE_VALIDATOR_BASE_URL;

export const validatePhoneNumber = async (phoneNumber: string) => {
  try {
    const response = await sendAxiosRequest<ValidatePhoneNumberResponse>({
      method: "get",
      url: `${baseURL}/validator/phone?phone=96171392534`,
      config: { params: { phone: phoneNumber } },
    });

    return response.data;
  } catch (error) {
    return null;
  }
};
