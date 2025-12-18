import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
	const navigate = useNavigate();
	const { mutate: login, isLoading } = useMutation({
		mutationFn: ({ email, password }) => loginApi({ email, password }),
		// In onSuccess we can receive data that was passed to the function as an input
		onSuccess: (user) => {
			console.log(user);
			navigate("/dashboard");
		},
		onError: (err) => {
			console.log("ERROR:", err);
			toast.error("provided email or password is incorect");
		},
	});

	return { login, isLoading };
}
