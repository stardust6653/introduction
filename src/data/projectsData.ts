type Props = {
  projectName: string;
  projectIntro: string;
  myTask: {
    task: string;
    description?: string;
  }[];
  github?: string;
  notion?: string;
  deploy?: string;
  useStack: string[];
  whyUseStack?: {
    stack: string;
    reason: string[];
  }[];
  posts?: { title: string; link: string }[];
};

export const projectsData: Props[] = [
  {
    projectName: "Swap()",
    projectIntro:
      "아이돌 굿즈와 같은 덕질 물품을 교환하거나 나눔할 수 있는 플랫폼",
    myTask: [
      {
        task: "게시물 작성 마크업 및 기능 구현",
        description:
          "로그인 시 게시글을 작성할 수 있도록 했으며, 게시물 작성 시 이미지 추가 및 이미지 드래그 앤 드롭으로 순서 지정 및 해시 태그 작성 기능을 추가했습니다.",
      },
      {
        task: "게시물 리스트 마크업 및 필터 구현",
        description:
          "등록된 게시물들의 리스트를 마크업하고 파이어베이스의 기능을 활용해 최신 순, 오래된 순 필터 기능을 구현하였습니다.",
      },
      {
        task: "디테일 페이지 캐러셀 구현",
        description:
          "등록된 이미지가 다수일 경우 동작하는 캐러셀을 구현하였습니다.",
      },
    ],
    github: "https://github.com/project-swap/swap",
    notion:
      "https://dull-foundation-110.notion.site/swap-a3162998f48642dd88688b1281a692c4",
    deploy: "https://swap-a69f8.firebaseapp.com/",
    useStack: [
      "React.js",
      "TypeScript",
      "Styled-Components",
      "Recoil",
      "Firebase",
    ],
    whyUseStack: [
      {
        stack: "Firebase",
        reason: [
          "서버와의 통신이 필요한 서비스를 제작하지만 백엔드 개발자가 없는 Swap() 프로젝트의 단점을 상당부분 커버해줄 수 있는 서비리스 서비스였습니다. 다양한 기능을 지원하면서 공식문서의 설명이 잘되어있어 비교적 쉽게 적응하고 활용할 수 있는 장점이 있어 사용했습니다.",
        ],
      },
      {
        stack: "Recoil",
        reason: [
          "Recoil을 사용한 이유는 보일러 플레이트가 거의 없어 사용법이 간단하다. 라는 리코일의 장점 때문에 도입하였고, 이는 팀원 모두 만족하는 선택이 되었습니다.",
        ],
      },
      {
        stack: "TypeScript",
        reason: [
          "데이터를 서버와 주고 받으며 사용하는 서비스 특성 상 타입과 관련된 버그들이 발생해 TS 도입을 논의했으나 러닝 커브가 높은 TS를 당장 도입하기 어렵다 판단해 JS로 개발했습니다.",
          "이후 프로젝트 내 모든 파일이 JS 혹은 TS로 통일될 필요 없다는 조언을 듣고 정적타이핑을 통해 발생 가능한 버그의 범위를 축소하고 가이드 라인을 제시하기 위해 순차적으로 TS를 도입하였고, 현재는 모두 마이그레이션이 완료되어 TS로 작업하게 되었습니다.",
        ],
      },
    ],
    posts: [
      {
        title: "[최종 회고] 팀프로젝트를 하면서 느낀 몇가지",
        link: "https://soyeah-log.vercel.app/posts/1684583894102",
      },
      {
        title: "alt에 대한 회고, 장애 접근성과 사용성",
        link: "https://soyeah-log.vercel.app/posts/1681222693388",
      },
      {
        title: "프론트엔드 개발자는 DB를 몰라...",
        link: "https://soyeah-log.vercel.app/posts/1681223838019",
      },
    ],
  },
  {
    projectName: "Next Blog",
    projectIntro: "Next.js 13버전을 활용한 Blog",
    myTask: [
      { task: "Next.js를 활용한 SSG" },
      { task: "Toast UI Editor를 활용한 Editor 및 Viewer 구현" },
      { task: "Firebase를 활용한 게시물 저장과 조회" },
      { task: "반응형 웹페이지 구현" },
    ],
    github: "https://github.com/stardust6653/next-blog-project",
    notion:
      "https://sobak.notion.site/Blog-Project-1a0fad285f41445a8db1d3f0931a714f",
    deploy: "https://soyeah-log.vercel.app/",
    useStack: ["Next.js 13", "TypeScript", "Tailwind", "Firebase"],
    whyUseStack: [
      {
        stack: "Next.js",
        reason: [
          "Next.js의 장점은 렌더링 방식에 있습니다. Next.js 13버전부터는 layout.js를 활용한 레이아웃 재사용과 더불어 컴포넌트 단위의 렌더링 방식 설정이 가능해졌습니다. 이 때문에 더 나은 성능을 기대할 수 있게 되었고, 더불어 블로그 프로젝트이므로 SEO최적화를 고려해 Next.js를 활용하게 되었습니다.",
        ],
      },
      {
        stack: "Tailwind CSS",
        reason: [
          "Next.js의 단점으로는 아직까지 낮은 호환성이 있습니다. 그 중 가장 불편했던 것이 CSS IN JS의 사용이 어렵다는 점이었는데, 13버전부터 CSS IN JS의 공식 지원을 시작했으나 여전히 불안정적이어서 Utility CSS 라이브러리인 Tailwind를 활용해 CSS 작성 편의성을 고려했습니다.",
        ],
      },
    ],
  },
];

// {
//   projectName: "",
//   projectIntro: "",
//   myTask: [{ task: "", description: "" }],
//   github: "",
//   notion: "",
//   deploy: "",
//   useStack: [],
//   whyUseStack: [{ stack: "", reason: "" }],
//   posts: [],
// },
