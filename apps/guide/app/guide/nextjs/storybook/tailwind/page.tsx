import 테일윈드설치 from "@guide/nextjs/storybook/tailwind/테일윈드설치.mdx";
import Tailwind컨피그파일커스텀 from "@guide/nextjs/storybook/tailwind/tailwind컨피그파일커스텀.mdx";
import 테일윈드css파일생성 from "@guide/nextjs/storybook/tailwind/테일윈드css파일생성.mdx";
import 프리뷰파일에css파일적용 from "@guide/nextjs/storybook/tailwind/프리뷰파일에css파일적용.mdx";

export default function Page() {
  return (
    <>
      <h1>storybook 환경에서 tailwind 세팅하기 </h1>
      <p>
        만약 nextjs와 같은 프레임웍을 사용하시다면 tailwind를 세팅하는 일은
        없으실 것 같습니다. 프레임웍이 알아서 해주기 때문이죠. 하지만 storybook
        환경이라면 tailwind를 설치하고 세부적인 설정이 조금 필요합니다.
      </p>

      <h2>
        <a href="https://tailwindcss.com/docs/guides/nextjs">tailwind 설치</a>
      </h2>
      <p>
        아래 커맨드를 이용해 테일윈드를 설치할 수 있습니다. 설치가 완료되면
        postcss.config.js 파일과 tailwind.config.js가 생성되게 됩니다.
      </p>
      <테일윈드설치 />

      <h2>tailwind.config.js 커스텀</h2>
      <p>
        꼭 monorepo 환경이 아니더라도 기본 세팅된 환경을 그대로 활용하긴 어려울
        것 같습니다. 최소한 경로 수정 정도는 필요할 것이고 저도 초기 세팅에서는
        경로 정도만 수정해서 사용했습니다. 제 프로젝트는 monorepo라는 점
        참고해주세요.
      </p>
      <Tailwind컨피그파일커스텀 />

      <h2>tailwind css 적용</h2>
      <p>
        위의 과정까지 진행해도 테일윈드는 아직 적용되지 않습니다. 테일윈드의
        css가 적용되지 않았기 때문입니다. 스토리북의 preview.js 파일에 css를
        추가해주셔야 합니다. 저는 ts 파일을 사용하고 있지만 js라고 해서 크게
        다르지 않으니 프로젝트의 상황에 맞게 적용해주시면 됩니다.
      </p>
      <테일윈드css파일생성 />
      <p />
      <프리뷰파일에css파일적용 />
    </>
  );
}
