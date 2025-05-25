import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // Tắt rule cảnh báo ký tự không escape trong JSX
      "react/no-unescaped-entities": "off",
      // Cho phép sử dụng ts-comment nếu cần (ts-ignore, ts-expect-error)
      "@typescript-eslint/ban-ts-comment": "off",
      // Tắt kiểm tra biến/khai báo không dùng
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off"
    },
  }),
];

export default eslintConfig;
