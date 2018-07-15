export const iconDir = 'assets/icon';
export const loadIconSvg = (iconRegistry, sanitizer) => {
  iconRegistry.addSvgIcon(
    'avatar',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/avatar.svg`));
  iconRegistry.addSvgIcon(
    'menu',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/menu.svg`));
  iconRegistry.addSvgIcon(
    'list',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/list.svg`));
  iconRegistry.addSvgIcon(
    'add',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
  iconRegistry.addSvgIcon(
    'minus',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/minus.svg`));
  iconRegistry.addSvgIcon(
    'left',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/left.svg`));
  iconRegistry.addSvgIcon(
    'right',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/right.svg`));
    iconRegistry.addSvgIcon(
      'sword',
      sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/sword.svg`));
};
