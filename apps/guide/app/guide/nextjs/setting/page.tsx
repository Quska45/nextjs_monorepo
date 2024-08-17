import 프로젝트생성 from "@guide/nextjs/setting/프로젝트생성.mdx";
import 프로젝트생성옵션 from "@guide/nextjs/setting/프로젝트생성옵션.mdx";

export default function Page() {
  return (
    <>
      <h1>nextjs 프로젝트를 생성하기</h1>
      <h2 id="프로젝트생성">프로젝트 생성</h2>
      <p>
        아래 명령어를 터미널에 입력하여 nextjs 프로젝트를 생성할 수 있습니다.
      </p>
      <프로젝트생성 />
      <p>
        명령어를 입력하고 설치가 시작되면 아래 옵션을 선택하여 프로젝트가
        생성됩니다.
      </p>
      <프로젝트생성옵션 />
    </>
  );
}
