import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library, SizeProp } from '@fortawesome/fontawesome-svg-core';

import { faSearch, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

library.add(faSearch, faBell, faTelegram, faPhone, faEnvelope);

interface IconProps {
  icon: IconProp
  theme?: 'solid' | 'regular' | 'light' | 'brands'
  size?: SizeProp
  className?: string
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
