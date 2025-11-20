import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        // Add other pages here if they are separate entry points, 
        // but for a multi-page site, we might need to list them all.
        // For now, let's start with main and see if we need to add the subpages.
        // Since they are static HTML files, we should include them.
        education_uwo: resolve(__dirname, 'src/pages/education/uwo_besc.html'),
        jobs_gdls: resolve(__dirname, 'src/pages/jobs/gdls_systems.html'),
        jobs_jdpower: resolve(__dirname, 'src/pages/jobs/jdpower_qa.html'),
        jobs_jdpower_analyst: resolve(__dirname, 'src/pages/jobs/jdpower_qa_analyst.html'),
        projects_lymph: resolve(__dirname, 'src/pages/projects/lymph_node_extractor.html'),
        projects_bench: resolve(__dirname, 'src/pages/projects/self_cleaning_park_bench.html'),
        projects_robot: resolve(__dirname, 'src/pages/projects/tv_remote_passing_robot.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
