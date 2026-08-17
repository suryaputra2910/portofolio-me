import type { TechKey } from "@/data/skills";
import {
  MonitorSmartphone,
  PenTool,
  Workflow,
} from "lucide-react";

import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import type { IconType } from "react-icons";

type IconComp = IconType;

function VscodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
    </svg>
  );
}

const map: Record<
  TechKey,
  {
    Icon: IconComp;
    color: string;
  }
> = {
  html: {
    Icon: SiHtml5,
    color: "#E34F26",
  },

  css: {
    Icon: SiCss,
    color: "#1572B6",
  },

  javascript: {
    Icon: SiJavascript,
    color: "#F7DF1E",
  },

  typescript: {
    Icon: SiTypescript,
    color: "#3178C6",
  },

  nextjs: {
    Icon: SiNextdotjs,
    color: "#FFFFFF",
  },

  react: {
    Icon: SiReact,
    color: "#61DAFB",
  },

  tailwind: {
    Icon: SiTailwindcss,
    color: "#38BDF8",
  },

  git: {
    Icon: SiGit,
    color: "#F05032",
  },

  github: {
    Icon: SiGithub,
    color: "#FFFFFF",
  },

  vercel: {
    Icon: SiVercel,
    color: "#FFFFFF",
  },

  vscode: {
    Icon: VscodeIcon,
    color: "#22A7F0",
  },

  figma: {
    Icon: SiFigma,
    color: "#F24E1E",
  },

  responsive: {
    Icon: MonitorSmartphone,
    color: "#A78BFA",
  },

  uiux: {
    Icon: PenTool,
    color: "#67E8F9",
  },

  handoff: {
    Icon: Workflow,
    color: "#818CF8",
  },
};

export function techColor(key: TechKey): string {
  return map[key]?.color ?? "#A78BFA";
}

export default function TechIcon({
  name,
  className,
  colored = true,
}: {
  name: TechKey;
  className?: string;
  colored?: boolean;
}) {
  const entry = map[name];

  if (!entry) {
    return null;
  }

  const { Icon, color } = entry;

  return (
    <Icon
      className={className}
      style={colored ? { color } : undefined}
      aria-hidden="true"
    />
  );
}