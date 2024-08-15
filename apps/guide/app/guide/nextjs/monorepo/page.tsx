import 프로젝트파일이동 from "@/app/guide/nextjs/monorepo/프로젝트파일이동.mdx";
import 터보레포패키지다운 from "@/app/guide/nextjs/monorepo/터보레포패키지다운.mdx";
import Turbo제이슨추가 from "@/app/guide/nextjs/monorepo/turbo제이슨추가.mdx";
import Packgejson작성 from "@/app/guide/nextjs/monorepo/packgejson작성.mdx";
import 모노레포실행 from "@/app/guide/nextjs/monorepo/모노레포실행.mdx";

export default function Page() {
  // ERROR  run failed: Could not find the following tasks in project: dev
  //  ELIFECYCLE  Command failed with exit code 1.
  return (
    <>
      <h2>nextjs 프로젝트를 turborepo를 이용한 monorepo로 전환</h2>
      <p>
        처음부터 turborepo를 이용한 monorepo를 구성하는 것은 아주 쉬운 일입니다.
        커맨드 몇번으로 끝나기 때문이죠. 그래서 nextjs로 프로젝트를 구성한
        이후에 전환하는 방향을 택했습니다.
      </p>
      <p>
        처음부터 monorepo를 구성하면 에러를 경험하는 것도, 문서를 읽어가며
        어떻게 해야하는지 경험 해볼 일이 거의 없죠. 추가로 많은 회사들이 원하는
        경험은 전환에 대한 경험일 것이라 생각했기 때문입니다.
      </p>
      <p>
        본격적인 시작에 앞서 제가
        <a href="https://dev.to/himohitmehta/migrating-a-nextjs-app-to-turbo-repo-mono-repo-24gl">
          참고
        </a>
        한 글을 공유 드립니다. 아주 잘 정리가 되어 있지만 디테일한 부분이 좀
        빠져있는 부분이 있어 보충하면서 글을 작성해보겠습니다.
      </p>

      <h2>프로젝트 구조 재설정</h2>
      <p>
        가장 먼저 프로젝트의 폴더 구조를 monorepo에 적합한 구조로 변경해야
        합니다. 제시드린 커맨드를 이용해도 되지만 그냥 폴더를 생성하고 드래그앤
        드롭을 사용하셔도 무방합니다. 결과적으로 프로젝트에 apps라는 폴더 밖에
        남지 않기 때문에 좀 당황스러우실 수 있겠지만 전혀 문제가 없다는 점알고
        계시면 좋을 것 같습니다.
      </p>
      <프로젝트파일이동 />
      <blockquote>
        <p>
          <strong>폴더 구조</strong>
        </p>
        <ul>
          <li>apps</li>
          <li className="m-2">website</li>
          <li className="m-4">app</li>
          <li className="m-4">package.json</li>
          <li className="m-4">...</li>
        </ul>
      </blockquote>

      <h2>turborepo 설치</h2>
      <p>이제 터보레포 패키지를 설치하겠습니다.</p>
      <터보레포패키지다운 />

      <h2>turbo.json 추가</h2>
      <p>설치가 완료 되었다면 turbo.json 파일을 추가해주세요.</p>
      <Turbo제이슨추가 />

      <h2>package.json 추가</h2>
      <p>
        package.json 파일도 추가해야 합니다. packageManager를 명시하지 않는 경우
        turbo가 경고 메시지를 띄우며 동작하지 않습니다. 추가로 dev 스크립트는
        기호 따라 다른 명령어도 가능하고 사용하지 않으셔도 무방합니다.
      </p>
      <Packgejson작성 />

      <h2>완료</h2>
      <p>
        위의 과정을 통해 쉽게 모노레포로 전환이 가능했습니다. 이제 터미널에
        명령어를 이용해 monorepo로 구성된 프로젝트 전체를 실행 시킬 수 있습니다.
      </p>
      <모노레포실행 />
    </>
  );
}
