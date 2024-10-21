export interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

export interface GridItemProps {
  title: string;
  children?: React.ReactNode;
}

export interface LegendProps {
  title: string;
  data: { ton?: string; value: number }[];
  colors: string[];
}

export interface PieChartItemProps {
  title: string;
  data: { value: number }[];
}

export interface NavMenuProps {
  isCollapsed: boolean;
  toggleSidebar?: () => void;
}

export interface NavLinkProps {
  src: string;
  href: string;
  title: string;
  className: string;
  isCollapsed: boolean;
  linkStyles: string;
  size: string;
}

export interface ProfileFormData {
  titles: string[];
  placeholders: string[];
  placeholdersImage: string[];
  className?: string;
  prefix: string;
}
