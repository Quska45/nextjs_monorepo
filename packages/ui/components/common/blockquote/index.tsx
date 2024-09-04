import { ReactNode } from "react";

const blockquoteDepth = {
  "1": "ml-2",
  "2": "ml-4",
  "3": "ml-6",
  "4": "ml-8",
  "5": "ml-10",
  "6": "ml-12",
  "7": "ml-14",
  "8": "ml-16",
};

/**
 * Blockquote의 데이터 타입 정의
 *
 * @param {string} id
 *
 * @param {ReactNode} text
 *
 * @param {keyof typeof blockquoteDepth} depth '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
 */
export interface BlockquoteData {
  id: string;
  text: ReactNode;
  depth?: keyof typeof blockquoteDepth;
}

/**
 * Blockquote의 props 정의
 *
 * @param {BlockquoteData[]} data Blockquote의 데이터
 *
 * @param {string} title Blockquote의 타이틀
 */
export interface BlockquoteProps {
  data: BlockquoteData[];
  title?: string;
}

/**
 * 본문 내용을 보충하거나 예외사항 등 글에 추가적인 정보를 제공하고 싶을 때 사용할 수 있습니다.
 *
 * 현재는 ul태그를 이용해 내용을 표시하고 있지만 추후 ol태그나 p태그 등을 사용하고 싶은 생각이 든다면 여러개의 Blockqute가 생길 지도 모르겠습니다.
 *
 * repo별로 정의된 스타일을 사용하고 싶기 때문에 모스타일은 적용되어 있지 않습니다. 현재 스토리북에 적용되어 있는 스타일은 guide 레포의 스타일 입니다.
 *
 * @param {BlockquoteProps} props.data Blockquote의 데이터
 *
 * @param {string} props.title Blockquote의 타이틀
 */
export default function Blockquote({ data, title }: BlockquoteProps) {
  return (
    <blockquote>
      {title && <p>{title}</p>}
      <ul>
        {data.map(({ id, text, depth }) => (
          <li className={blockquoteDepth[depth || "1"]} key={id}>
            {text}
          </li>
        ))}
      </ul>
    </blockquote>
  );
}
