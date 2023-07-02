import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';

import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faBell } from '@fortawesome/free-regular-svg-icons';

library.add(faSearch, faBell);

interface IconProps {
  icon: IconProp;
  theme?: 'solid' | 'regular' | 'light' | 'brands';
}

function Icon({ icon, theme = 'regular', ...props }: IconProps) {
  const themeClassName = theme ? `fa${theme[0]}` : '';
  const iconInfo = typeof icon === 'string' ? [themeClassName, icon] : icon;
  return (
    <FontAwesomeIcon
      icon={iconInfo as IconProp}
      {...props}
    />
  );
}

export default Icon;
