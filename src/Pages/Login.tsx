import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchemas";
import { z } from "zod";
import toast from "react-hot-toast";
import { useAppSelector } from "../hooks/useAppSelector";
import { loginUser } from "../store/authslice";
import Input from "../Components/Input";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import Button from "../Components/Button";

type FormData = z.infer<typeof loginSchema>;

export default function Login() {
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const loading = useAppSelector((s) => s.auth.loading);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [email, password] = watch(["email", "password"]);

    const onSubmit = async (data: FormData) => {
        const id = toast.loading("Authenticating...");

        try {
            await dispatch(loginUser({ email: data.email })).unwrap();

            toast.success("Welcome!!!! 🎉", {
                id,
                duration: 2000,
                style: {
                    borderRadius: "10px",
                    background: "#1D1D1D",
                    color: "#fff",
                },
            });

            setTimeout(() => {
                nav("/account");
            }, 800);
        } catch {
            toast.error("Login failed", { id });
        }
    };

    useEffect(() => {
        emailRef.current?.focus();
    }, []);

    return (
        <div className="p-6 h-full flex flex-col">
            <h1 className="text-[22px] font-semibold text-textDark leading-[28px] mb-2">
                Signin to your PopX account
            </h1>

            <p className="text-[14px] text-textLight leading-[20px] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email Address"
                    placeholder="Enter email address"
                    autoComplete="off"
                    className="w-full text-[14px] bg-transparent placeholder:text-textLight border-none outline-none focus:outline-none focus:ring-0 focus:border-none active:outline-none"                    {...register("email")}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            passwordRef.current?.focus();
                        }
                    }}
                    error={errors.email?.message}
                />

                <Input
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    autoComplete="off"
                    {...register("password")}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSubmit(onSubmit)();
                        }
                    }}
                    error={errors.password?.message}
                />

                <Button
                    text="Login"
                    loading={loading}
                    disabled={loading || !email?.trim() || !password?.trim()}
                />
            </form>
        </div>
    );
}