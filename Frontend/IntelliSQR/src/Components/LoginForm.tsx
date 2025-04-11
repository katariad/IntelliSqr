import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const styleform: React.CSSProperties = {
  width: "min(320px, 90%)",
  height: "min(314px, 90%)",
  display: "flex",
  flexDirection: "column",
  padding: "1px",
  gap: "48px",
};

const loginSchema = z.object({
  UID: z.string().min(3, "UID must be at least 3 characters"),
  password: z.string().min(5, "Password must be at least 6 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

interface IFormInput {
  UID: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/login", data);

      if (response.status === 200) {
        alert("Login successful!"); // Replace with state handling
        console.log(response.data); // Example: { message: "Login successful", userId: 1 }
        window.location.href = "/home";
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid uid or password"); // Display error message
    }
  };
  return (
    <div style={styleform}>
      <Heading text="WELCOME BACK!" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <Input type="text" placeholdertext="UID" {...register("UID")} />
        {errors.UID && (
          <span style={{ color: "red" }}>{errors.UID.message}</span>
        )}

        <Input
          type="password"
          placeholdertext="password"
          {...register("password")}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
        <Button text="Login" type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
