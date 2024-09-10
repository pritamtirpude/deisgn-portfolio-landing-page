import { cn } from '@/utils/util';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

type NavAndFooterProps = {
  className?: string;
};

function NavAndFooter({ className }: NavAndFooterProps) {
  return (
    <nav
      className={cn(
        'mx-4 mt-4 flex items-center justify-between md:mx-10 md:mt-[34px] lg:mx-10  xl:mx-auto xl:mt-[34px] xl:max-w-6xl 2xl:mx-auto 2xl:mt-[34px] 2xl:max-w-6xl',
        className
      )}
    >
      <Logo />
      <Button color="black" />
    </nav>
  );
}

export default NavAndFooter;
