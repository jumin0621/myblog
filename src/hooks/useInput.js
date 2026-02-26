import { useCallback, useState } from "react";

export default function useInput(initialValue) {
	const [value, setValue] = useState(initialValue);

	const onChange = useCallback(
		(e) => {
			setValue(e.target.value);
		},
		[initialValue],
	);

	const reset = useCallback(() => {
		setValue(value);
	}, [initialValue]);

	return { value, onChange, reset };
}
