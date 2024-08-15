import { useContext } from "react";
import { ServiceContext } from "./ServiceProvider";

export default function useServiceProvider() {
	const context = useContext(ServiceContext);

	if (!context) {
		throw new Error("useServiceProvider must be used within a AuthProvider");
	}

	return { ...context };
}
