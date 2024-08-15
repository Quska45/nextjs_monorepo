import 패키지설치 from "@/app/guide/nextjs/storybook/패키지설치.mdx";
import Main파일커스텀 from "@/app/guide/nextjs/storybook/main파일커스텀.mdx";
import Tsconfig설정추가 from "@/app/guide/nextjs/storybook/tsconfig설정추가.mdx";

export default function Page() {
  return (
    <>
      <h2>Storybook 설치</h2>
      <p>
        스토리북 세팅은 매우 간단합니다. 패키지를 설치하는 것 만으로 사실상
        세팅은 끝났다고 볼 수 있습니다. 루트경로에서 실행해 주시면 됩니다.
      </p>
      <패키지설치 />

      <h2>.storybook/main.js 커스텀</h2>
      <p>
        storybook 사용을 위해 거의 모든 작업은 터미널에 명령어를 입력하는 것으로
        끝나지만 프로젝트 환경에 따라 커스텀이 조금 필요할 수 있습니다. 제가
        사용한 설정을 참고용으로 공유드립니다.
      </p>
      <p>
        제 경우엔 루트 경로에서 스토리를 실행하고 있습니다. 개인적인 목적의
        프로젝트인 만큼 모든 결과물들을 한번에 보고 싶기 때문입니다. 그리고
        절대경로를 선호하기 때문에 이 설정도 추가해줬습니다.
      </p>
      <Main파일커스텀 />

      <h2>tsconfig 설정</h2>
      <p>
        만약 typescript를 사용하지 않거나 monorepo를 사용하지 않으신다면 이
        부분은 크게 신경쓰시지 않으셔도 될 것 같습니다. 그리고 typescript나
        monorepo를 사용하시더라도 제 프로젝트의 설정 일 뿐 다른 프로젝트에는
        맞지 않는 세팅일 수도 있습니다. 그냥 참고 용으로 봐주시면 좋을 것
        같습니다.
      </p>
      <p>
        루트경로에서 실행되는 storybook을 위해서 tsconfig 설정을 추가해줬습니다.
        타입설정이 없다면 vscode에서도 에러가 잡히게 되니 필요한 설정이었습니다.
        monorepo의 component/ui 경로에 추가하면 vscode에서는 에러가 발생하지
        않지만 스토리북은 절대경로를 찾을 수 없습니다.
      </p>
      <Tsconfig설정추가 />
    </>
  );
}
