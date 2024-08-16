import 설치 from "@guide/nextjs/rehype/설치.mdx";
import NextConfig등록 from "@guide/nextjs/rehype/nextConfig등록.mdx";
import 스타일추가 from "@guide/nextjs/rehype/스타일추가.mdx";

export default function Page() {
  return (
    <>
      <h2>Rehype Pretty Code</h2>
      <p>
        <a href="https://github.com/rehype-pretty/rehype-pretty-code">
          rehype-pretty-code
        </a>
        는 <a href="https://github.com/shikijs/shiki">shiki</a>에서 제공하는
        md의 코드블럭에 대한 하이라이터를 제공하는 패키지 입니다. 저는
        코드블럭에 대한 스타일만을 제공받고 싶기 때문에 사용했고 아주 만족스럽게
        사용하고 있습니다. 이 글에서는 설치부터 제가 어떻게 사용하고 있는지에
        대해 간단하고 퀵하게 알아볼 예정입니다. 자세한 내용은 공식홈을
        참고해주세요.
      </p>

      <h2>설치</h2>
      <p>가장 먼저 패키지를 설치해줘야 합니다.</p>
      <설치 />

      <h2>next.config.mjs</h2>
      <p>
        설치한 패키지를 nextjs에서 사용할 수 있도록 추가해주는 과정이
        필요합니다. 저는{" "}
        <a href="https://github.com/rehype-pretty/rehype-pretty-code/blob/master/examples/next/assets/moonlight-ii.json">
          공식 예제
        </a>
        에서 제공하는 테마도 추가해봤습니다. 다른 테마를 추가하거나 직접 커스텀
        하는 것도 가능하니 기호에 따라 자유롭게 사용하시면 될 것 같습니다.
      </p>
      <NextConfig등록 />

      <h2>코드블록 스타일 추가</h2>
      <p>
        위의 과정을 마쳤다고 해서 바로 코드블록에 대한 스타일 정의가 모든
        끝났다고 보기는 어렵습니다. 적용을 마치고 코드블록을 추가해보면 적용이
        제대로 안됐나? 라는 생각이 아마도 드실 것 같습니다. 추가적인 스타일링이
        필요합니다.
      </p>
      <p>
        이부분은 공식 가이드에서는 언급만하고 전체 코드는 제공하지 않는
        부분으로, 사용하시는 시스템에 맞게 직접 해주셔야 하는 부분 입니다. 제가
        현재 사용 중인 코드를 첨부 드리니 이런 느낌으로 해주면 되겠구나
        참고하시면 좋을 것 같습니다.
      </p>
      <스타일추가 />
    </>
  );
}
