import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/authSchemas";
import { z } from "zod";
import Input from "../Components/Input";
import { useAppDispatch } from "../hooks/useAppDispatch";
import toast from "react-hot-toast";
import { registerUser } from "../store/authslice";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useAppSelector } from "../hooks/useAppSelector";

type FormData = z.infer<typeof registerSchema>;

export default function Register() {
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(registerSchema),
        mode: "onSubmit",
        criteriaMode: "all",
        defaultValues: {
            agency: undefined,
        },
    });

    const values = watch();

    const isFilled =
        values.name?.trim() &&
        values.phone?.trim() &&
        values.email?.trim() &&
        values.password?.trim() &&
        values.agency;

    const loading = useAppSelector((s) => s.auth.loading);

    const onSubmit = async (data: FormData) => {
        const id = toast.loading("Registering...");

        try {
            await dispatch(
                registerUser({
                    name: data.name,
                    email: data.email,
                })
            ).unwrap();

            toast.success("Registered ✅", { id });

            setTimeout(() => {
                toast.success("Welcome!!!! 🎉", {
                    duration: 2000,
                    style: {
                        borderRadius: "10px",
                        background: "#1D1D1D",
                        color: "#fff",
                    },
                });
                nav("/account");
            }, 800);
        } catch {
            toast.error("Registration failed", { id });
        }
    };

    return (
        <div className="h-screen flex flex-col justify-between p-6">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 overflow-y-auto"
            >
                <h1 className="text-[22px] font-semibold text-textDark leading-[28px] mb-4">
                    Create your <br /> PopX account
                </h1>

                <Input label="Full Name*" {...register("name")} placeholder="Enter your full name" error={errors.name?.message} />
                <Input label="Phone number*" {...register("phone")} placeholder="Enter your phone number" error={errors.phone?.message} />
                <Input label="Email address*" {...register("email")} placeholder="Enter your email address" error={errors.email?.message} />
                <Input label="Password*" type="password" {...register("password")} placeholder="Enter your password" error={errors.password?.message} />
                <Input label="Company name" {...register("company")} placeholder="Enter your company name" />
                <div className="mt-2">
                    <p className="text-[13px] font-semibold text-[#6C25FF] mb-2">
                        Are you an Agency?*
                    </p>

                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="yes" {...register("agency")} className="accent-[#6C25FF]" />
                            <span className="text-sm font-medium">Yes</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="no" {...register("agency")} className="accent-[#6C25FF]" />
                            <span className="text-sm font-medium">No</span>
                        </label>
                    </div>

                    {errors.agency && (
                        <p className="text-red-500 text-xs mt-1">{errors.agency.message}</p>
                    )}
                </div>
            </form>
            <div className="pt-4">
                <Button
                    text="Create Account"
                    loading={loading}
                    disabled={loading || !isFilled}
                    onClick={handleSubmit(onSubmit)}
                />
            </div>
        </div>
    );
}