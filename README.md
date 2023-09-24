# QA System Front Repository

---

용도 : EMP 쇼핑몰 신규 연동 후 다양한 케이스의 연동을 진행하여 버그 혹은 예상치 못한 오류를 파악하여 운영상의 안정성을 높이기 위함  
사용 기술 : React, Typescript, Stroybook  
설치 방법 :   
1. 레포지토리 주소 복사 및 로컬 PC에 설치
2. npm install 
  => 해당 과정에서 styled components와 styled nomarlize 모듈간 의존성 오류로 install에 실패할 수 있음  
  => npm uninstall styled-normalize 명령어 실행  
  => npm install 진행  
  => npm install styled-normalize로 모듈 재설치  
  => npm run start 및 npm run storybook으로 Application 정상 실행 확인
