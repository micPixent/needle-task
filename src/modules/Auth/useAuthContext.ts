import { useContext } from "react";
import { AuthContext } from "./Auth.provider";

export default function useAuthContext() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}

	return { ...context };
}
