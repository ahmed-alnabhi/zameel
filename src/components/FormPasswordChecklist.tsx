import { useColorScheme } from "react-native";
import PasswordValidate from "react-native-password-validate-checklist";

export default function name(props) {
  const colorScheme = useColorScheme();
  return (
    <PasswordValidate
      containerStyle={{
        opacity: 0.7
      }}
      labelStyle={{
        color: colorScheme === "light" ? "black" : "white",
        fontFamily: "Alexandria",
        fontSize: 11
      }}
      newPassword={props.value}
      confirmPassword={props.passwordConfirm}
      validationRules={[
        {
          key: "MIN_LENGTH",
          ruleValue: 8,
          label: "يجب أن تتكون من 8 أحرف أو أكثر."
        },
        {
          key: "LOWERCASE_LETTER",
          label: "يجب أن تحتوي على حرفاً واحداً صغيراً على الأقل."
        },
        {
          key: "UPPERCASE_LETTER",
          label: "يجب أن تحتوي على حرفاً واحداً كبيراً على الأقل."
        },
        {
          key: "SPECIAL_CHARS",
          label: "يجب أن تحتوي على رمزاً واحداً على الأقل."
        },
        {
          key: "NUMERIC",
          label: "يجب أن تحتوي على رقماً واحداً على الأقل."
        },
        {
          key: "PASSWORDS_MATCH",
          label: "يجب أن تطابق تأكيد كلمة المرور."
        }
      ]}
      onPasswordValidateChange={props.onPasswordValidateChange}
      iconSuccessSource={require("@/assets/check.png")}
      iconErrorSource={require("@/assets/x.png")}
    />
  );
}