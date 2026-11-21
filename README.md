# Multi-Platform Deploy

## 라이브 URL
- Frontend (Vercel): https://multi-platform-deploy.vercel.app
- Backend (Cloud Run): https://demo-api-n4aoz6efbq-du.a.run.app
- Health check: https://demo-api-n4aoz6efbq-du.a.run.app/health

## 구성
- Frontend: Vite + React, Vercel 자동 배포, PR마다 Preview URL 생성
- Backend: Express + Docker, GCP Cloud Run
- CI/CD: GitHub Actions
  - `.github/workflows/ci.yml`: PR 시 빌드, Docker 빌드, 스모크 테스트
  - `.github/workflows/backend-deploy.yml`: main 푸시 시 이미지 빌드, Artifact Registry 푸시, Cloud Run 배포, 헬스체크

## 배포 파이프라인
PR 생성 → CI 검증 → Vercel Preview → merge → Docker 빌드(태그: git SHA) → Cloud Run 배포 → /health 스모크 테스트

## 롤백
Cloud Run 이전 리비전으로 트래픽 전환 (`gcloud run services update-traffic`)

## 모니터링
- Docker HEALTHCHECK, `/health` 엔드포인트
- Cloud Monitoring Uptime Check (1분 주기, 4개 지역) + 이메일 알림

## PR
- https://github.com/pckdou/multi-platform-deploy/pull/1