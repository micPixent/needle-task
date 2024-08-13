import { ReactNode } from "react";

export type DropdownProps = {
	options: Array<{ value: string; label: string }>;
	selected: { value: string; label: string } | null;
	onChange: (option: { value: string; label: string } | null) => void;
	placeholder?: string;
	disabled?: boolean;
	renderIcon?: (option: { value: string; label: string } | null) => ReactNode;
	placement?: "top" | "bottom";
	renderClassName?: string;
	optionPosition?: "relative" | "absolute";
};
