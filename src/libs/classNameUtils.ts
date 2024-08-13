export const classNames = (
	...classes: Array<string | undefined | null | false>
): string => {
	return classes.filter(Boolean).join(" ");
};
