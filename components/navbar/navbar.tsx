import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '../../styles/navbar.module.scss';
import NavbarData from './navbarData';

export enum ENavbarPosition {
  'absolute' = 'absolute',
  'fixed' = 'fixed',
  'inherit' = 'inherit',
  'initial' = 'initial',
  'relative' = 'relative',
  'revert' = 'revert',
  'static' = 'static',
  'sticy' = 'sticy',
  'unset' = 'unset',
}

type NavbarProps = {
  logoSrc?: string;
  logoLink?: string;
  menuRendererCenter?: React.ReactNode;
  hideNavbarOnScroll?: boolean;
  mobileMenuDefaultOpen?: boolean;
  navbarPosition?: ENavbarPosition;
}

const Navbar: NextPage<NavbarProps> = ({
  logoSrc = undefined,
  logoLink = '.',
  menuRendererCenter = null,
  hideNavbarOnScroll = false,
  mobileMenuDefaultOpen = false,
  navbarPosition = ENavbarPosition.fixed,
}) => {
  const { pathname } = useRouter();

  const [menuVisibility, setMenuVisibility] = useState<boolean>(mobileMenuDefaultOpen);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarRef: LegacyRef<HTMLUListElement> | undefined | any = useRef(null);
  const burgerMenuRef: LegacyRef<HTMLUListElement> | undefined | any = useRef(null);

  // close burger menu on page change
  useEffect(() => {
    setMenuVisibility(false);
  }, [pathname])

  // close burgermenu on click outside of menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
        const brgrMenuBtnElNames = ['svg', 'path']
        const clickedElementName = Object.values(((event as any).path) as HTMLElement[])[0].tagName;

        if (brgrMenuBtnElNames.includes(clickedElementName)) {
          setMenuVisibility(true); // true because onClick set menu visibility to !menuVisibility after this handler.
        } else {
          setMenuVisibility(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [burgerMenuRef]);

  // display & hide navbar by scroll
  useEffect(() => {
    if (!hideNavbarOnScroll) return;

    const handleScroll = () => {
      const position = window.scrollY;
      navbarRef.current.style.top = prevScrollPos >= position ? '0' : '-101px';
      setPrevScrollPos(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideNavbarOnScroll, prevScrollPos]);

  return (
    <nav
      ref={navbarRef}
      className={styles.container}
      data-position={navbarPosition}
    >
      {/* Logo */}
      <div className={styles.logo}>
        <a href={logoLink}>
          <h3>Rints.in</h3>
          {/* <Image src={'/vercel.svg'} alt='logo' height={80} width={80} /> */}
        </a>
      </div>

      {/* linkrenderer center */}
      <div className={styles.navbarMenuRendererCenter} style={{ marginLeft: 'auto' }}>
        {menuRendererCenter}
      </div>

      {/* linkrenderer end */}
      <div
        className={styles.navbarMenuRendererEnd}
        style={{ marginLeft: 'auto', marginRight: '10px' }}
      >
        <div className={styles.navbarMenuItems}>
          {
            NavbarData.map(x => {
              return (
                <Link key={x.key} href={x.src}>{x.name}</Link>
              );
            })
          }
        </div>
      </div>

      {/* hamburger menu */}
      <span className={styles.hamburger}>
        <input
          type='checkbox'
          checked={menuVisibility}
          onChange={() => setMenuVisibility(!menuVisibility)}
        />
        <GiHamburgerMenu size={30} onClick={() => setMenuVisibility(!menuVisibility)} />
      </span>
      {menuVisibility ? (
        <div ref={burgerMenuRef} className={styles.hamburgerMenu}>
          <div className={styles.hamburgerMenuItems}>
            {
              NavbarData.map(x => {
                return (
                  <Link key={x.key} href={x.src}>{x.name}</Link>
                );
              })
            }
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
