'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';

const NAV = [
  { href: '/#features', label: 'Features' },
  { href: '/#screens', label: 'App' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/account-deletion', label: 'Delete account' },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5"
          aria-label={`${SITE.name} home`}
          onClick={closeMenu}
        >
          <Image
            src="/brand/logo.png"
            alt={SITE.name}
            width={150}
            height={40}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate transition hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#download"
            className="inline-flex h-9 items-center rounded-full bg-navy px-3.5 text-sm font-semibold text-white transition hover:bg-navy-deep sm:h-10 sm:px-4"
            onClick={closeMenu}
          >
            Get the app
          </Link>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink transition hover:bg-navy-soft md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bg md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-5" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink transition hover:bg-navy-soft hover:text-navy"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/terms"
              className="rounded-xl px-3 py-3 text-base font-medium text-ink transition hover:bg-navy-soft hover:text-navy"
              onClick={closeMenu}
            >
              Terms
            </Link>
            <p className="mt-3 px-3 text-xs leading-relaxed text-muted">
              Owned by {SITE.owner} ·{' '}
              <a
                href={SITE.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy underline underline-offset-2"
              >
                {SITE.company}
              </a>
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
