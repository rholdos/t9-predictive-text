import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		react(),
		VitePluginFonts({
			google: {
				families: ['DM Sans']
			}
		}),
		svgr()
	],
	server: {
		port: 8000,
		open: true
	}
})
