import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stypeImport,{AntdResolve} from 'vite-plugin-style-import'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stypeImport({
      resolves: [
        AntdResolve()
      ]
    })
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'/.src')
    }
  }
})
