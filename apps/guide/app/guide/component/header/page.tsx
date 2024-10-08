import Blockquote, {
  BlockquoteData,
} from "@packages/ui/components/common/blockquote";

export default function Page() {
  const 헤더분석: BlockquoteData[] = [
    {
      id: "1",
      text: "몇개의 영역으로 나뉘어 있어 로고, 드롭다운메뉴, 로그인 등의 기능을 분리해서 배치할 수 있습니다.",
    },
    {
      id: "2",
      text: "반응형을 지원하며 뷰포트가 작아지는 경우 미디어 쿼리를 이용해 사이드 메뉴를 열 수 있는 버튼을 노출 시킵니다.",
    },
    {
      id: "3",
      text: "stikcy를 사용해 항상 최상위에 고정되어 있으며 height는 px값을 이용해 고정된 크기를 가집니다.",
    },
  ];

  const 헤더요구사항정의: BlockquoteData[] = [
    {
      id: "1",
      text: "기본적으로 구체적인 css를 가지지 않는 형태로 만들어야 한다.",
    },
    {
      id: "1-1",
      text: "구체적인 css를 가지지 않는 이유는 css만 부여해서 어떤 환경에서도 사용할 수 있게 하기 위함이다.",
      depth: "2",
    },
    {
      id: "2",
      text: "영역은 n개로 나눠질 수 있어야 한다.",
    },
    {
      id: "2-1",
      text: "영역을 n개로 나누려 하는 이유는 시스템 별로 헤더에 넣고자 하는 영역에 유연함을 주기 위함이다.",
      depth: "2",
    },
    {
      id: "2-2",
      text: "영역별로 개별적인 css를 부여할 수 있어야 한다.",
      depth: "2",
    },
    {
      id: "3",
      text: "헤더의 props는 children이 존재하지 않는다. 모든 요소는 data라는 props로 컨트롤 되어야 한다.",
    },
    {
      id: "4",
      text: "위치는 sticky를 이용해 상단에 고정되어 있으며 바꿀 수 없지만 css를 부여할 수 있는 방법은 제공 되어야 한다.",
    },
    {
      id: "5",
      text: "미디어 쿼리를 이용해 뷰포트가 작아지는 경우 반응형을 지원하고 이에 따른 형태를 지원해야 한다.",
    },
  ];

  return (
    <>
      <h1>nextjs 공홈 헤더 클론해서 평생 쓸 헤더 만들기</h1>
      <h2>헤더 만들기 시작</h2>
      <p>
        헤더는 항상 프로젝트에 맞춰 적당히 만들어 사용했었습니다. 나름에
        노하우는 있지만 기억에 의존해 만들다 보니 그때 그때 조금씩 달라지는
        코드가 약간 마음에 들지 않았었습니다. 그리고 헤더에 best pratice는 뭘까
        하는 생각도 했었구요. 그래서 이번에 제대로 된 헤더를 만들어 보려고
        합니다. <a href="https://nextjs.org/">nextjs</a>의 헤더를 참고하도록
        하겠습니다.
      </p>

      <h2>Next 공홈 헤더 분석</h2>
      <Blockquote data={헤더분석} />
      <p>
        뭐 거창하게 얘기하고 시작했지만 막상 뜯어보면 별게 없습니다. 아마
        대부분의 헤더는 이렇게 만들어져 사용되고 있겠죠.
      </p>

      <h2>헤더 요구사항 정의</h2>
      <Blockquote data={헤더요구사항정의} />
      <p>
        요구사항이 뭔가 개발자 스럽게 작성된 부분이 있는 것 같지만 제가 쓰고
        제가 개발하는 것이니 오히려 좋지 않나 싶습니다. 간단한 내용이지만 한번
        정리를 해보니 어떻게 만들지 머리속에 정리가 되는 것 같습니다.
      </p>

      <h2>기본 구조 잡기</h2>
    </>
  );
}
