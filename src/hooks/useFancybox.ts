import { useState, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// 公式の React 向けラッパーフック
// ref を渡したコンテナ内の [data-fancybox] 要素に Fancybox をバインドする
export default function useFancybox(
  options: Record<string, unknown> = {}
): [(node: HTMLElement | null) => void] {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (root) {
      Fancybox.bind(root, "[data-fancybox]", options);
      return () => Fancybox.unbind(root);
    }
  }, [root, options]);

  return [setRoot];
}
