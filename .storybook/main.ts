/**
 * @type/node 패키지가 없으면 찾을 수 없다는 에러가 발생됨.
 * 실행이 안되는 것은 아니고 vscode에서 타입을 찾지 못하는 것으로 생각됨
 */
import path, { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  // require.resolve에서도 @type/node 패키지가 필요함.
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  /**
   * 기본 세팅은 스토리파일들을 하나의 폴더에 생성해야 하는 구조 입니다.
   * 하지만 저는 monorepo 환경에서 폴더별로 스토리를 추가하고 싶었기 때문에 설정을 추가했습니다.
   */
  stories: [
    "../apps/**/*.stories.ts",
    "../packages/ui/**/*.stories.ts",
    "../packages/ui/**/*.stories.tsx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  /**
   * 개인적으로 상대경로보다 절대 경로를 사용하는 것을 선호하는 편입니다.
   * 그래서 스토리북 빌드시 웹팩의 설정을 할 수 있는 webpackFinal 속성에 절대경로를 추가했습니다.
   * 만약 이 설정을 이용하지 않는 다면 내 프로젝트에서의 설정과는 상관 없이 절대경로를 이용할 수 없습니다.
   * 스토리북은 현재 프로젝트의 별개로 동작하기 때문입니다.
   */
  webpackFinal: async (config) => {
    // Add path aliases
    if (config && config.resolve && config.resolve.alias) {
      config.resolve.alias["@ui"] = path.resolve(
        __dirname,
        "../packages/ui/components"
      );
    }
    return config;
  },
};
export default config;
