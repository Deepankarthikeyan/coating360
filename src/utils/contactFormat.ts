const INDIA_COUNTRY_CODE = "91";

export const formatPhoneDisplay = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith(INDIA_COUNTRY_CODE) && digits.length > 10) {
    return `+${digits.slice(0, 2)} ${digits.slice(2)}`;
  }
  return `+${INDIA_COUNTRY_CODE} ${digits}`;
};

export const formatPhoneTel = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith(INDIA_COUNTRY_CODE) && digits.length > 10) {
    return `+${digits}`;
  }
  return `+${INDIA_COUNTRY_CODE}${digits}`;
};
