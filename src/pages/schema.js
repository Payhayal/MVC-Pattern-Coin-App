import * as yup from "yup";

// Source of regex: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Rules for password:
// 1lowercase 1 uppercase letter
// 1 number
// 1 special character
const passwordRules =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// we are using yup with formik, that`s why we write `shape()`
// if you want to change the language or write different warning you can write >>
// email("Lutfen gecerli bir email giriniz")
// required("Zorunlu alan..")
// min(18,"18 yasindan kucukler giremez")
// max(100, "Yasiniz 100`den buyuk olamaz")
export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required field!"),
  age: yup
    .number()
    .positive()
    .min(18, "Children under the age of 18 cannot enter!")
    .max(100, "Your age cannot be greater than 100!")
    .required("Required field!"),
  password: yup
    .string()
    .min(
      5,
      "Password should be at least 5 characters and should contain lowercase-uppercase letters, numbers and special symbols(!@#$%^&*)"
    )
    .matches(
      passwordRules,
      "The password should contain lowercase-uppercase letters, numbers and special symbols(!@#$%^&*)"
    )
    .required("Required field!"),
  confirmPassword: yup
    .string()
    // oneOf >> elemanın değeri verilen değerlerden biriyle eşleşiyor mu kontrol eder.
    // oneOf >>checks if the element`s value matches one of the given values.
    .oneOf([yup.ref("password")], "Your password does not match!")
    // ref >> is used to call the value of a different input
    //ref >> farklı bir inputun değerini çağırmaya yarar
    .required("Required field!"),
  terms: yup
    .boolean()
    .isTrue("You cannot continue without accepting the terms!"),
});
