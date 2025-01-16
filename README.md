# <img src = "https://github.com/user-attachments/assets/4dc6c66d-bc38-4a9d-b10e-3caf788e0dbc" width="130">

![MacBook Air - 1 (1)](https://github.com/user-attachments/assets/e7c20ded-8061-473d-b5a1-dbd2bd81e4e9)

##  📋 목차
1. [프로젝트 개요](#-프로젝트-개요)
2. [팀구성 및 역할](#-팀구성-및-역할)
3. [폴더구조](#-폴더구조)
4. [페이지 설명](#-페이지-설명)

## 📄 프로젝트 개요

#### 배포URL : https://rolling05.netlify.app/
#### 일정 : 24.06.10 ~ 24.06.22

### 🗒️ 프로젝트 주제 및 선정 배경 

 **`Rolling`** 의 주제는 <br />
요즘엔 축하 메시지나 감사의 마음을 전하는 방식이 점점 더 온라인화되고 있습니다. 손글씨 롤링페이퍼는 따뜻한 감성이 담긴 방법이지만,<br />
접근성과 공유의 한계가 있습니다.
 Rolling은 이러한 한계를 해결하며, 누구나 쉽고 빠르게 롤링페이퍼를 작성하고 공유할 수 있도록 하는 플랫폼입니다.
또한, React의 hooks 등 주요 기능을 배우고 적용하기에 적합하다고 판단하여, 웹 개발 기술을 심도 있게 학습하기 위한 프로젝트로 선정되었습니다.

**`Rolling`** 은 다음과 같은 목표를 지향합니다:

- **사용자 친화적인 플랫폼 제공** : 직관적이고 간편한 UI/UX를 통해 누구나 쉽게 사용할 수 있도록 설계합니다.
- **다양한 기능 지원** : 프로필 이미지 업로드, 다크 모드, 애니메이션 등 감성적이고 풍부한 표현을 가능하게 하는 기능을 제공합니다.
- **소셜 공유 가능**: 카카오톡 공유 기능을 추가하여 손쉽게 메시지를 전파할 수 있습니다.

### 💻 개발 환경

#### - 개발 기술
![Static Badge](https://img.shields.io/badge/%20React-000000?style=for-the-badge&logo=React&logoColor=%2361DAFB)
![Static Badge](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SASS&logoColor=white) 
#### - 협업 툴
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
#### - 배포
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

### 🌳 브랜치 전략
 - [브랜치 전략 Wiki](https://github.com/hbs0133/FE-Rolling-5team/wiki/%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5)


## 👥 팀구성 및 역할

| **이름**     | **담당 역할**                                                                                                                                                 |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **김가영**   | - 메인 페이지, 롤링페이퍼 만들기 페이지  <br> - Unsplash API 연동하여 이미지 가져오기 기능                                            |
| **김당찬**   | - 롤링페이퍼 페이지 <br> - 무한스크롤 기능 , 중첩 모달 기능                                                                                  |
| **김예준**   | - 롤링페이퍼 목록 페이지 <br> - 슬라이더 기능                                                                                                           |
| **서미영**   | - 이모지 컴포넌트, 헤더 컴포넌트 <br> - 다크테마 기능, 카카오 공유 기능                                                                  |
| **황병선**   | - 롤링페이퍼 작성,수정 페이지 <br> - 프로필이미지 업로드 기능, 롤링페이퍼 미리보기 기능

## 🗂️ 폴더구조

```

├── public
├── src
│   ├── App.jsx           # 앱 엔트리 포인트
│   ├── Main.jsx          # 메인 컴포넌트
│   ├── assets            # 리소스
│   │   ├── icons         # 아이콘 파일
│   │   └── images        # 이미지 리소스
│   ├── components        # UI 및 레이아웃 컴포넌트
│   │   ├── UI            # 공통 UI 컴포넌트
│   │   └── layout        # 페이지 레이아웃 컴포넌트
│   ├── hooks             # 커스텀 훅 모음
│   ├── pages             # 페이지 컴포넌트
│   │   ├── CreatedRollingListPage
│   │   ├── HomePage
│   │   ├── ListPage
│   │   ├── PostMessagePage
│   │   ├── PostPage
│   │   └── PutMessagePage
│   ├── services          # API 및 비즈니스 로직
│   └── styles            # 전역 스타일

```

## 🔍 페이지 설명

### - 랜딩페이지('/')
| 기본 | 다크모드 |
|:-:|:-:|
| <img src="https://github.com/user-attachments/assets/17e9dd9b-bb94-4a29-8fef-b1c903bedef5" width="475" height="314" /> | <img src="https://github.com/user-attachments/assets/06f299df-c303-4849-9cdf-78f36d515e3d" width="475" height="314" /> |

- **롤링페이퍼 만들기 버튼**을 클릭하여 **롤링페이퍼 만들기 페이지('/post')** 로 이동할 수 있습니다.
- **날씨모양 아이콘 토글버튼**을 클릭하여 **다크모드**를 활성화할 수 있습니다.
- **구경해보기 버튼**을 클릭하여 **롤링페이퍼 목록 페이지('/list')** 로 이동할 수 있습니다.

### - 롤링페이퍼 목록 페이지('/list)
<div align="center">
  <img src="https://github.com/user-attachments/assets/1aeaf24e-e0fe-4187-b911-aaba461669fe" alt="롤링페이퍼 목록 페이지" />
</div>

- **생성된 롤링페이퍼**를 클릭하여 **해당 롤링페이퍼 페이지**로 이동할 수 있습니다.
- **슬라이더**의 **화살표 버튼**를 클릭하여 슬라이더를 넘길수있습니다.
- **나도 만들어보기 버튼**을 클릭하여 **롤링페이퍼 만들기 페이지('/post')** 로 이동할 수 있습니다.

### - 롤링페이퍼 페이지('/post/{id}')
| 자세히보기 | 무한스크롤 |
|:-:|:-:|
| <img src="https://github.com/user-attachments/assets/2363081a-2e92-419f-85f3-2d206353d513" width="475" /> | <img src="https://github.com/user-attachments/assets/c26ea296-11dd-4a3e-a58c-f95faa3ec04b" width="475" /> |

- **롤링페이퍼**를 클릭하여 **해당롤링페이퍼를 확대**하여 볼 수 있습니다. 해당 롤링페이퍼를 **수정,삭제** 할수있습니다.
- 롤링페이퍼는 React Intersection Observer를 사용해 **무한 스크롤**할 수 있습니다.
- **+ 버튼**을 눌러 **롤링페이퍼 메시지 작성 페이지(‘/post/{id}/message’)** 로 이동할 수 있습니다.
<br />

| 이모지 추가 | 소셜 공유 | URL공유 |
|:-:|:-:|:-:|
|<img src="https://github.com/user-attachments/assets/650e83af-011a-4fd4-93bb-2c0c6e679b3c" width="309" height="240" />| <img src="https://github.com/user-attachments/assets/4cf4271b-bf5a-49d7-801e-30261aa7461e" width="309"  height="240" /> | <img src="https://github.com/user-attachments/assets/88440655-9feb-453f-8a07-53bcbc34f408" width="309" height="240" />|

- **이모지**는 Emoji Mart 라이브러리를 사용하여 사용자가 이모지를 손쉽게 검색하고 선택하여 반응 **이모지를 추가**할 수 있습니다.
- **카카오톡 공유하기 버튼**을 클릭하여 카카오API를 사용해 **소셜 공유**할 수 있습니다.
- **URL공유 버튼**을 클릭하여 **URL을 클립보드에 저장**할 수 있습니다. react-toastify를 사용하여 **토스트 메시지를 표기**합니다.

### - 롤링페이퍼 메시지 생성페이지('/post/{id}/message')

| 프로필 이미지 | 텍스트 에디터 |
|:-:|:-:|
| <img src="https://github.com/user-attachments/assets/803289d7-d8a1-43ae-916d-79dfa1a41db4"  width="475" height="270" /> | <img src="https://github.com/user-attachments/assets/c44287e4-a379-42a9-a3a1-139b8d62561d" width="475" height="270" /> |

- **프로필 이미지**를 선택하지 않을시 기본이미지 입니다. 또한 **기본 남성이미지, 여성이미지를 제공**하여 선택할 수 있습니다.	
- 프로필이미지의 **+버튼**을 클릭하여 **커스텀 프로필 이미지**로 변경할 수 있습니다. Firebase Storage를 사용해 프로필 이미지를 업로드하고, 업로드된 이미지의 다운로드 URL을 생성하여 데이터베이스에 저장합니다.
- React-Quill 텍스트 에디터를 사용하여 **다양한 서식과 스타일을 적용한 텍스트 입력**을 할 수 있습니다.

| 드롭다운 | 메시지 생성 |
|:-:|:-:|
| <img src="https://github.com/user-attachments/assets/f2a981f7-e1bf-4044-aa95-0b37404e121a"  width="475" height="270" /> | <img src="https://github.com/user-attachments/assets/6ecb7268-c442-4222-85d9-67c251adbea7" width="475" height="270" /> |

- **상대와의 관계**와 **글꼴**을 **드롭다운**을 사용해 선택할 수 있습니다.
- 롤링페이퍼 메시지의 From값과 내용을 입력하지 않으면 **생성하기 버튼**이 **비활성화** 되어있습니다. 
- **생성하기버튼**을 클릭하여 **메시지를 생성**할 수 있습니다.

### - 롤링페이퍼 생성페이지(/post)
| 배경색,배경이미지 선택 | 롤링페이퍼 생성 |
|:-:|:-:|
| <img src="https://github.com/user-attachments/assets/25c195e7-de1b-4758-b538-b9f7564269bf"  width="475" height="270" /> | <img src="https://github.com/user-attachments/assets/0dfdd14f-25c5-4b0f-b003-6cd5dcd31184" width="475" height="270" /> |

- To값을 입력하지 않으면 “값을 입력해 주세요.” **에러 메세지**가 나타나고, **생성하기 버튼**이 **비활성화** 됩니다.
- **컬러 버튼**를 클릭하여 **배경색을 선택**할 수 있습니다.
- **이미지 버튼**를 클릭하여 Unsplash API를 사용해 이미지를 가져와 **배경 이미지**를 선택할수 있습니다.
- **생성하기 버튼**을 클릭하여 **롤링페이퍼를 생성**할수 있습니다.
