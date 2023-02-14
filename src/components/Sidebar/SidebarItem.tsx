import { LayoutIcon } from '@/icons';

interface SidebarItemProps {
  title: string;
  href: string;
  isActive?: boolean;
}

export const SidebarItem = ({
  title,
  href,
  isActive = false,
}: SidebarItemProps) => {
  return (
    <li className="h-full w-full">
      <a
        className={`block flex w-full items-center gap-2 rounded-r-full  ${
          isActive ? 'bg-purple text-white' : 'text-mediumGrey'
        } py-4 pl-6 hover:bg-purpleHover hover:text-purple`}
        href={href}
      >
        <span>
          <LayoutIcon isActive={isActive} />
        </span>
        <span className={'font-semibold'}>{title}</span>
      </a>
    </li>
  );
};
