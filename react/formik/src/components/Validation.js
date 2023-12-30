import * as yup from "yup";

const validation = yup.object().shape({
  email: yup.string().email("Geçerli bir Email girin").required("Zorunlu alan"),
  password: yup.string().min(5, "En az 5 karekterli olmalı").required("Zorunlu alan"),
  passwordChecked: yup.string().oneOf([yup.ref('password')], "Parolalar uyuşmuyor").required("Zorunlu alan")
})

export default validation;