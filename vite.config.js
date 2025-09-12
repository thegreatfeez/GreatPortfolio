import {defineConfig} from "vite"

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        project1: 'project-1.html',
        project2: 'project-2.html', 
        project3: 'project-3.html'
      }
    }
  }
})