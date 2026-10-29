'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { SITE } from '@/lib/site';

type Step = 'email' | 'done';

type ApiResult = {
  ok?: boolean;
  error?: string;
  code?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AccountDeletionForm() {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const confirmInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!confirmOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    confirmInputRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [confirmOpen]);

  function openConfirmation(event: FormEvent) {
    event.preventDefault();
    setError('');
    const normalized = email.trim().toLowerCase();
    if (!EMAIL_RE.test(normalized)) {
      setError('Enter a valid email address.');
      return;
    }
    setEmail(normalized);
    setConfirmText('');
    setConfirmOpen(true);
  }

  function closeConfirmation() {
    if (loading) return;
    setConfirmOpen(false);
    setConfirmText('');
    setError('');
  }

  async function confirmDeletion() {
    setError('');
    if (confirmText.trim().toUpperCase() !== 'DELETE') {
      setError('Type DELETE to confirm permanent deletion.');
      return;
    }

    setLoading(true);
    try {
      const result = await callDeletionApi(email);
      if (result.error) {
        setError(result.error);
        return;
      }
      setConfirmOpen(false);
      setStep('done');
    } catch {
      setError('Could not delete the account. Try again.');
    } finally {
      setLoading(false);
    }
  }

  if (step === 'done') {
    return (
      <div className="rounded-3xl border border-line bg-bg p-8 sm:p-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-soft text-navy">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-semibold text-ink">Account deleted</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
          The {SITE.name} account for <span className="font-semibold text-ink">{email}</span> has
          been permanently deleted, including profile data and uploaded media.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-deep"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={openConfirmation}
        className="rounded-3xl border border-line bg-bg p-8 sm:p-10"
        noValidate
      >
        <h2 className="font-display text-2xl font-semibold text-ink">Enter your account email</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          Enter the email on your {SITE.name} account. You will be asked to confirm before anything
          is deleted.
        </p>

        <label className="mt-8 block">
          <span className="mb-2 block text-sm font-semibold text-ink">Email address</span>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-12 w-full rounded-xl border border-line-strong bg-surface px-4 text-sm text-ink outline-none transition focus:border-navy"
          />
        </label>

        {error && !confirmOpen ? <ErrorBanner message={error} /> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-crimson px-5 text-sm font-semibold text-white transition hover:bg-[#a50d26] disabled:opacity-60"
        >
          Continue to delete account
        </button>
      </form>

      {confirmOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/45 p-4 sm:items-center"
          role="presentation"
          onClick={closeConfirmation}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-account-title"
            className="w-full max-w-md rounded-3xl border border-line bg-bg p-6 shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="delete-account-title" className="font-display text-2xl font-semibold text-ink">
              Confirm deletion
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              This permanently deletes the {SITE.name} account for{' '}
              <span className="font-semibold text-ink">{email}</span>, including profile data and
              uploaded media. This cannot be undone.
            </p>

            <label className="mt-6 block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Type <span className="text-crimson">DELETE</span> to confirm
              </span>
              <input
                ref={confirmInputRef}
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="DELETE"
                className="h-12 w-full rounded-xl border border-line-strong bg-surface px-4 text-sm text-ink outline-none transition focus:border-navy"
              />
            </label>

            {error ? <ErrorBanner message={error} /> : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse">
              <button
                type="button"
                disabled={loading}
                onClick={() => void confirmDeletion()}
                className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-crimson px-5 text-sm font-semibold text-white transition hover:bg-[#a50d26] disabled:opacity-60"
              >
                {loading ? 'Deleting…' : 'Permanently delete account'}
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={closeConfirmation}
                className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-5 text-sm font-semibold text-ink hover:bg-surface disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="mt-5 rounded-xl border border-crimson/25 bg-crimson-soft px-4 py-3 text-sm text-crimson">
      {message}
    </div>
  );
}

async function callDeletionApi(email: string): Promise<ApiResult> {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, '');
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!base || !anon) {
    return { error: 'Deletion service is not configured on this website.' };
  }

  const response = await fetch(`${base}/functions/v1/web-delete-account`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${anon}`,
      apikey: anon,
    },
    body: JSON.stringify({ email }),
  });

  const data = (await response.json().catch(() => null)) as ApiResult | null;
  if (!response.ok) {
    return { error: data?.error || 'Something went wrong. Try again.', code: data?.code };
  }
  return data ?? { ok: true };
}
