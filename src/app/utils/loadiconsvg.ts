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
    'padd',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/padd.svg`));
  iconRegistry.addSvgIcon(
    'madd',
    sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/madd.svg`));
};
