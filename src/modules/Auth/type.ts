import { User } from "firebase/auth";

export interface IAuthContext {
	isAuthenticated: boolean;
	user: User | null;
	authorised: (status: boolean) => void;
	loading: (status: boolean) => void;
	logout: () => void;
}
