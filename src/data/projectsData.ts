import swap from "../images/swap/swap.webp";
import swapDetail from "../images/swap/swap-detail.webp";
import swapEditor from "../images/swap/swap-editor.webp";

import blog from "../images/blog/soyeah-blog.webp";
import blogPost from "../images/blog/soyeah-blog-post.webp";
import blogEditor1 from "../images/blog/soyeah-blog-editor1.webp";
import blogEditor2 from "../images/blog/soyeah-blog-editor2.webp";

import instagram from "../images/instagram/instagram.webp";
import instagramPost from "../images/instagram/instagram-post.webp";
import instagramDetail from "../images/instagram/instagram-detail.webp";
import instagramSearch from "../images/instagram/instagram-search.webp";

import scissorRockPaper from "../images/scissor-rock-paper/scissor-rock-paper.webp";
import scissorRockPaperSave from "../images/scissor-rock-paper/scissor-rock-paper-save.webp";
import scissorRockPaperLoad from "../images/scissor-rock-paper/scissor-rock-paper-load.webp";

import portfolio from "../images/portfolio/portfolio.webp";
import portfolioProject from "../images/portfolio/portfolio-project.webp";
import portfolioStack from "../images/portfolio/portfolio-stack.webp";

type Props = {
  projectName: string;
  projectIntro: string;
  screenshot: string[];
  github?: string;
  notion?: string;
  deploy?: string;
  useStack: string[];
};

export const projectsData: Props[] = [
  {
    projectName: "Swap()",
    projectIntro:
      "아이돌 굿즈와 같은 덕질 물품을 교환하거나 나눔할 수 있는 플랫폼입니다. 이 사이드 프로젝트를 하면서 게시물 작성 및 등록 게시글 리스트, 디테일 페이지 등을 맡아 작업했습니다. ",
    screenshot: [swap, swapDetail, swapEditor],
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
  },
  {
    projectName: "Next Blog",
    projectIntro:
      "Next.js 13버전을 활용한 Blog로서 Toast UI를 활용한 Editor 환경 구축으로 손쉽게 블로깅할 수 있도록 하였습니다. 또한 모바일이나 태블릿에서도 블로그 글을 볼 수 있도록 반응형으로 제작한 개인 사이트 입니다.",
    screenshot: [blog, blogPost, blogEditor1, blogEditor2],
    github: "https://github.com/stardust6653/next-blog-project",
    notion:
      "https://sobak.notion.site/Blog-Project-1a0fad285f41445a8db1d3f0931a714f",
    deploy: "https://soyeah-log.vercel.app/",
    useStack: ["Next.js 13", "TypeScript", "Tailwind", "Firebase"],
  },
  {
    projectName: "Instagram Clone",
    projectIntro:
      "최신버전 넥스트를 활용한 인스타그램 클론코딩입니다. Sanity와 Next를 활용해 백엔드를 구현합니다. 이 클론 코딩을 통해 Next.js가 (프론트 지향적) 풀스택 프레임워크로 불리는 이유에 대해서 다시 한번 생각하게 되었습니다.",
    screenshot: [instagram, instagramPost, instagramDetail, instagramSearch],
    github: "https://github.com/stardust6653/instagram-clone",
    deploy: "https://instagram-clone-tawny-psi.vercel.app/",
    useStack: ["Next.js 13", "Tailwind", "Sanity", "TypeScript"],
  },
  {
    projectName: "가위바위보",
    projectIntro:
      "리액트를 활용하여 만든 가위바위보 게임입니다. 로컬스토리지를 활용한 데이터 저장 및 불러오기 기능을 지원하고 있습니다. ",
    screenshot: [scissorRockPaper, scissorRockPaperSave, scissorRockPaperLoad],
    github: "https://github.com/stardust6653/rock-paper-scissors",
    useStack: ["React.js", "JavaScript", "Styled-Components"],
  },
  {
    projectName: "포트폴리오 웹",
    projectIntro:
      "현재 보시고 계시는 사이트입니다. 리액트를 활용하여 만든 포트폴리오 사이트이며 모바일과 태블릿에 맞춰 반응형 사이트로 구현하였습니다.",
    screenshot: [portfolio, portfolioProject, portfolioStack],
    github: "https://github.com/stardust6653/introduction",
    deploy: "https://soye-portfolio.vercel.app/",
    useStack: ["React.js", "Styled-Components"],
  },
];

// type Props = {
//   projectName: string;
//   projectIntro: string;
//   screenshot: string[];
//   github?: string;
//   notion?: string;
//   deploy?: string;
//   useStack: string[];
//   whyUseStack?: {
//     stack: string;
//     reason: string[];
//   }[];
//   posts?: { title: string; link: string }[];
// };

// {
//   projectName: "",
//   projectIntro: "",
//   screenshot: ""
//   myTask: [{ task: "", description: "" }],
//   github: "",
//   notion: "",
//   deploy: "",
//   useStack: [],
//   whyUseStack: [{ stack: "", reason: "" }],
//   posts: [],
// },
