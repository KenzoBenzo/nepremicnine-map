import { useColorMode, Switch, LightMode } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<LightMode>
			<Switch
				colorScheme="emerald"
				isChecked={isDark}
				onChange={toggleColorMode}
			/>
		</LightMode>
	);
};
