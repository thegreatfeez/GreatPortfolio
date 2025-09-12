import {defineConfig} from "vite"

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        project1: 'src/project-1.html',
        project2: 'src/project-2.html', 
        project3: 'src/project-3.html'
      }
    }
  }
})