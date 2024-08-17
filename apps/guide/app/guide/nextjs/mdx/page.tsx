import InstallDependencies from "@guide/nextjs/mdx/install-dependencies.mdx";
import Config세팅 from "@guide/nextjs/mdx/config세팅.mdx";
import MdxComponent파일세팅 from "@guide/nextjs/mdx/mdx-component파일생성.mdx";

export default function Page() {
  return (
    <>
      <h1>nextjs에 markdown을 사용하기 위해 mdx확장자 적용시키기</h1>
      <h2>
        <a href="https://nextjs.org/docs/app/building-your-application/configuring/mdx#add-an-mdx-componentstsx-file">
          Markdown and MDX
        </a>
      </h2>
      <p>
        nextjs에서 markdown을 적용할 수 있습니다. mdx라는 확장자를 가진 파일로
        가능합니다. 이걸 세팅하고 사용하는 방법에 대해 소개 하겠습니다. 참고로
        이 화면도 mdx를 일부 활용하여 작성되었습니다.
      </p>

      <h2 id="install-dependencies">Install dependencies</h2>
      <p>가장 먼저 필요한 패키지들을 설치해주세요.</p>
      <InstallDependencies />

      <h2 id="config-세팅">next.config.mjs 세팅</h2>
      <p>next.config.mjs 파일에 mdx를 적용하기 위한 코드를 작성해 줍니다.</p>
      <Config세팅 />

      <h2 id="mdx-component-세팅">MDX Component 세팅</h2>
      <p>mdx-component 파일을 생성해서 root 경로에 추가해주세요.</p>
      <MdxComponent파일세팅 />
      <blockquote>
        <p>
          <strong>알아두면 좋은 점</strong>
        </p>
        <ul>
          <li>
            @next/mdx에서 mdx-component.tsx는 반드시 필요하며 없을 경우 작동하지
            않습니다.
          </li>
          <li>
            <a href="https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components">
              mdx-components.tsx file convention
            </a>
            에서 자세한 내용을 확인 할 수 있습니다.
          </li>
          <li>
            md문법으로 생성되는 tag에 대해서{" "}
            <a href="https://nextjs.org/docs/app/building-your-application/configuring/mdx#using-custom-styles-and-components">
              커스텀 스타일
            </a>
            도 적용할 수 있습니다.
          </li>
        </ul>
      </blockquote>

      <h2>Remark and Rehype Plugins</h2>
      <p>
        mdx가 적용됐지만 기본적은 스타일은 제공되지 않습니다. 따라서 css를
        이용한 스타일링은 필수적이라고 할 수 있습니다.
      </p>
      <p>
        앞서 제시 드린 커스텀 스타일을 이용하는 방법도 있지만 외부 플러그인을
        활용하는 방법도 있습니다. 저는 Rehype을 이용해 코드블럭엠나 스타일을
        적용해 사용하고 있습니다. 코드블럭을 제외한 모든 것은 태그로 해결하고
        있습니다. 상황과 기호에 맞게 적절히 사용하시면 좋을 것 같습니다.
      </p>
    </>
  );
}
