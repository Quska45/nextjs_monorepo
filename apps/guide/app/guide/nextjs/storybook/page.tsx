import 패키지설치 from "@guide/nextjs/storybook/패키지설치.mdx";
import Main파일커스텀 from "@guide/nextjs/storybook/main파일커스텀.mdx";
import Tsconfig설정추가 from "@guide/nextjs/storybook/tsconfig설정추가.mdx";

export default function Page() {
  return (
    <>
      <h2>Storybook 설치</h2>
      <p>
        스토리북 세팅은 매우 간단합니다. 패키지를 설치하는 것 만으로 사실상
        세팅은 끝났다고 볼 수 있습니다. 루트경로에서 실행해 주시면 됩니다.
      </p>
      <패키지설치 />

      <h2>
        <a href="https://storybook.js.org/docs/configure">
          main.js / preview.js
        </a>
      </h2>
      <p>
        세팅은 너무 간단하게 끝나지만 꼭 알아둬야하는 파일이 2개 있습니다. 바로
        main.js와 preview.js 파일입니다. 개인적으로 storybook이 어떻게
        돌아가는지 까지는 알 필요 없다고 생각하지만 디테일한 설정을 위해서는 이
        두가지 파일을 이해하는 것이 꼭 필요합니다. 스토리북을 사용하신다면
        언젠가 꼭 건드려야 할 파일 이기도 합니다.
      </p>
      <p>
        크게 봤을 때 main.js는 스토리북 프로젝트를 빌드하는 것과 관련이 있고
        preview는 뭔가 커스텀한 로직을 넣는데 사용한다고 볼 수 있습니다.
      </p>

      <h2>main.js</h2>
      <p>
        공식문서에서는 behavior를 제어한다는 표현을 사용합니다. stories의 위치나
        사용하는 addon, 프로젝트의 세부설정에 관여합니다. 세부옵션이 여러가지
        있으니 공식문서를 한번 쯤은 읽어 보시면 좋을 것 같습니다.
      </p>

      <h2>preview.js</h2>
      <p>
        preview에 대해서는 implementation 이라는 단어를 써서 설명하고 있습니다.
        실행에 관련된 것들을 제어 한다고 생각해볼 수 있습니다. 예를 들면 css
        파일을 미리 로드 해놓는 다거나 커스텀한 로직을 실행시킬 때 사용한다고 할
        수 있습니다.
      </p>

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
