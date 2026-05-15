// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// GitHub Pages 배포 시 채워야 할 값:
//   site: 'https://<github-username>.github.io'
//   base: '/<repo-name>'   // 사용자 페이지(루트)면 생략 또는 '/'
// 예시: 사용자가 leechanghyun, 저장소가 mysite 라면
//   site: 'https://leechanghyun.github.io',
//   base: '/mysite',
// TODO: GitHub 저장소 생성 후 실제 값으로 교체할 것.
export default defineConfig({
  // site: 'https://USERNAME.github.io',
  // base: '/REPO_NAME',
});
