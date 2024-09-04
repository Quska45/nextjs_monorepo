import { ReactNode } from "react";
import "@packages/ui/components/common/header/index.css";

/**
 * 헤더 컴포넌트의 데이터 타입 정의
 *
 * @param {string} id
 *
 * @param {ReactNode} reactNode 헤더내부에 들어갈 컴포넌트
 *
 * @param {string} className
 */
export interface HeaderData {
  id: string;
  reactNode: ReactNode;
  className?: string;
  type?: "pc" | "mobile";
}

/**
 * 헤더 컴포넌트의 props 정의
 *
 * @param {HeaderData[]} data 헤더 컴포넌트에 들어갈 컴포넌트의 정보
 *
 * @param {string} height
 *
 * @param {string} className
 */
export interface HeaderProps {
  data: HeaderData[];
  height?: string;
  className?: string;
}

/**
 * 헤더 컴포넌트 입니다.
 *
 * 어떤 환경에서든 사용할 수 있도록 구체적인 형태에 대한 css는 적용되어 있지 않습니다.
 *
 * data props를 사용해 내부를 채우는 형태로 되어 있기 때문에 별도의 children을 받거나 하는 것은 불가능 합니다.
 *
 * @param {HeaderData[]} data 헤더 컴포넌트에 들어갈 컴포넌트의 정보. 헤더 안에 flex로 배치됩니다.
 *
 * @param {string} height 헤더의 높이를 설정할 수 있습니다.(기본값: h-16)
 *
 * @param {string} className
 */
export default function Header({
  data,
  height = "h-16",
  className,
}: HeaderProps) {
  return (
    <div
      className={`sticky top-0 z-100 flex justify-start items-center ${height} ${className || ""}`}
    >
      {data &&
        data.map(({ id, reactNode, className, type }) => {
          const typeClass =
            type === "mobile" ? "header-mobile" : "header-content";
          return (
            <div key={id} className={`flex ${typeClass} ${className || ""}`}>
              {reactNode}
            </div>
          );
        })}
    </div>
  );
}
