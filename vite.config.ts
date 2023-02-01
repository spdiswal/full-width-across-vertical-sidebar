import { defineConfig } from "vite"

const viteConfig = defineConfig(() => {
	return {
		server: {
			host: "0.0.0.0",
			port: 3000,
			strictPort: true,
		},
	}
})

export default viteConfig
