'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { SITE } from '@/lib/site';

type Step = 'email' | 'confirm' | 'done';

type ApiResult = {
  ok?: boolean;
  error?: string;
  code?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AccountDeletionForm() {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function requestCode(event: FormEvent) {
    event.preventDefault();
    setError('');
    const normalized = email.trim().toLowerCase();
    if (!EMAIL_RE.test(normalized)) {
      setError('Enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const result = await callDeletionApi({ action: 'request', email: normalized });
      if (result.error) {
        setError(result.error);
        return;
      }
      setEmail(normalized);
      setStep('confirm');
    } catch {
      setError('Could not send the confirmation code. Try again.');
    } finally {
      setLoading(false);
    }
  }

  async function confirmDeletion(event: FormEvent) {
    event.preventDefault();
    setError('');

    if (!/^\d{6}$/.test(code.trim())) {
      setError('Enter the 6-digit code from your email.');
      return;
    }
    if (confirmText.trim().toUpperCase() !== 'DELETE') {
      setError('Type DELETE to confirm permanent deletion.');
      return;
    }

    setLoading(true);
    try {
      const result = await callDeletionApi({
        action: 'confirm',
        email,
        code: code.trim(),
      });
      if (result.error) {
        setError(result.error);
        return;
      }
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

  if (step === 'confirm') {
    return (
      <form
        onSubmit={confirmDeletion}
        className="rounded-3xl border border-line bg-bg p-8 sm:p-10"
        noValidate
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Step 2 of 2</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Confirm deletion</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          We sent a 6-digit code to <span className="font-semibold text-ink">{email}</span>. Enter
          it below and type DELETE to permanently remove your account.
        </p>

        <label className="mt-8 block">
          <span className="mb-2 block text-sm font-semibold text-ink">Confirmation code</span>
          <input
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="000000"
            className="h-12 w-full rounded-xl border border-line-strong bg-surface px-4 text-center font-mono text-2xl tracking-[0.35em] text-ink outline-none transition focus:border-navy"
          />
        </label>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-semibold text-ink">
            Type <span className="text-crimson">DELETE</span> to confirm
          </span>
          <input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="DELETE"
            className="h-12 w-full rounded-xl border border-line-strong bg-surface px-4 text-sm text-ink outline-none transition focus:border-navy"
          />
        </label>

        {error ? <ErrorBanner message={error} /> : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-crimson px-5 text-sm font-semibold text-white transition hover:bg-[#a50d26] disabled:opacity-60"
          >
            {loading ? 'Deleting…' : 'Permanently delete account'}
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={() => {
              setStep('email');
              setCode('');
              setConfirmText('');
              setError('');
            }}
            className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-5 text-sm font-semibold text-ink hover:bg-surface disabled:opacity-60"
          >
            Back
          </button>
        </div>

        <button
          type="button"
          disabled={loading}
          onClick={() => void resendCode(email, setError, setLoading)}
          className="mt-4 text-sm font-medium text-navy hover:underline disabled:opacity-60"
        >
          Resend code
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={requestCode}
      className="rounded-3xl border border-line bg-bg p-8 sm:p-10"
      noValidate
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Step 1 of 2</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Enter your account email</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate">
        We will email a confirmation code to verify you own this {SITE.name} account before
        anything is deleted.
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

      {error ? <ErrorBanner message={error} /> : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white transition hover:bg-navy-deep disabled:opacity-60"
      >
        {loading ? 'Sending code…' : 'Send confirmation code'}
      </button>
    </form>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="mt-5 rounded-xl border border-crimson/25 bg-crimson-soft px-4 py-3 text-sm text-crimson">
      {message}
    </div>
  );
}

async function resendCode(
  email: string,
  setError: (value: string) => void,
  setLoading: (value: boolean) => void,
) {
  setError('');
  setLoading(true);
  try {
    const result = await callDeletionApi({ action: 'request', email });
    if (result.error) setError(result.error);
  } catch {
    setError('Could not resend the code. Try again.');
  } finally {
    setLoading(false);
  }
}

async function callDeletionApi(body: {
  action: 'request' | 'confirm';
  email: string;
  code?: string;
}): Promise<ApiResult> {
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
    body: JSON.stringify(body),
  });

  const data = (await response.json().catch(() => null)) as ApiResult | null;
  if (!response.ok) {
    return { error: data?.error || 'Something went wrong. Try again.', code: data?.code };
  }
  return data ?? { ok: true };
}
