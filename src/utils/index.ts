export function getETCImage(name: string) {
  /**
   * 동적 import시, 빌드 시스템에서 청크 파일을 만들 때,
   * ${name}값에 무엇이 들어갈지 알 수 없어 "/assets/etc/" 내부에 있는 모든 파일을 가져옴
   * */
  const imageUrl = new URL(`../assets/etc/${name}.png`, import.meta.url).href;
  return imageUrl;
}

/**
 * 동적 import시, 빌드 시스템에서 청크 파일을 만들 때,
 * 특정 패턴에 해당하는 파일만 가져오게 하려면 "폴더 경로 + 파일의 특정 패턴"을 사용해야 함
 * */
export function getETCFileImage(name: string) {
  const imageUrl = new URL(`../assets/etc/file-${name}.png`, import.meta.url)
    .href;
  return imageUrl;
}
