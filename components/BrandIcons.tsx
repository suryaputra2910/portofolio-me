import type { SVGProps } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

type P = SVGProps<SVGSVGElement> & { className?: string };

export function GithubIcon(props: P) {
  const Comp = FaGithub as unknown as (p: P) => React.ReactElement;
  return <Comp aria-hidden="true" {...props} />;
}

export function LinkedinIcon(props: P) {
  const Comp = FaLinkedinIn as unknown as (p: P) => React.ReactElement;
  return <Comp aria-hidden="true" {...props} />;
}
