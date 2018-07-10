export const iconDir = 'assets/icon';
export const loadIconSvg = (iconRegistry, sanitizer) => {
  iconRegistry.addSvgIcon(
    'avatar',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/avatar.svg`));
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/menu.svg`));
};
