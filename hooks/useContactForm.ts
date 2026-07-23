'use client';

import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { ContactFormData } from '@/types';

// ── Zod schema ────────────────────────────────────────────────────────────────

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters')
    .regex(/^[a-zA-Z\s؀-ۿ'-]+$/, 'Please enter a valid name'),

  phone: z
    .string()
    .min(9, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,}$/,
      'Please enter a valid UAE phone number'
    ),

  email: z.string().email('Please enter a valid email address').max(254, 'Email is too long'),

  service: z.string().min(1, 'Please select a service'),

  area: z.string().min(1, 'Please select your area'),

  message: z
    .string()
    .min(10, 'Please provide a brief description (at least 10 characters)')
    .max(1000, 'Message must be under 1000 characters'),

  urgency: z.enum(['emergency', 'urgent', 'standard'], {
    required_error: 'Please select an urgency level',
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// ── Submission state ──────────────────────────────────────────────────────────

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface SubmissionState {
  status: SubmissionStatus;
  message: string | null;
}

// ── Hook ──────────────────────────────────────────────────────────────────────

interface UseContactFormOptions {
  /** Called after a successful submission */
  onSuccess?: (data: ContactFormData) => void;
  /** Called on submission error */
  onError?: (error: Error) => void;
  /** API endpoint to POST the form data (default: '/api/contact') */
  endpoint?: string;
}

export function useContactForm(options: UseContactFormOptions = {}) {
  const { onSuccess, onError, endpoint = '/api/contact' } = options;

  const [submission, setSubmission] = useState<SubmissionState>({
    status: 'idle',
    message: null,
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      area: '',
      message: '',
      urgency: 'standard',
    },
    mode: 'onBlur',
  });

  const onSubmit = useCallback(
    async (data: ContactFormValues) => {
      setSubmission({ status: 'submitting', message: null });

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorBody = (await response.json().catch(() => ({}))) as { message?: string };
          throw new Error(
            errorBody.message ?? `Request failed with status ${response.status}`
          );
        }

        setSubmission({
          status: 'success',
          message:
            'Thank you for your message. We will be in touch within the hour. For immediate assistance, call +971 55 768 9003.',
        });

        form.reset();
        onSuccess?.(data as ContactFormData);
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error('An unexpected error occurred.');
        setSubmission({
          status: 'error',
          message:
            'We could not submit your message right now. Please call us directly on +971 55 768 9003.',
        });
        onError?.(error);
      }
    },
    [endpoint, form, onSuccess, onError]
  );

  const resetSubmission = useCallback(() => {
    setSubmission({ status: 'idle', message: null });
  }, []);

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    submission,
    resetSubmission,
    isSubmitting: submission.status === 'submitting',
    isSuccess: submission.status === 'success',
    isError: submission.status === 'error',
    isIdle: submission.status === 'idle',
  };
}

// ── Service options for the form select ───────────────────────────────────────

export const SERVICE_OPTIONS = [
  { value: 'emergency-locksmith', label: 'Emergency Locksmith' },
  { value: 'car-lockout', label: 'Car Lockout' },
  { value: 'house-lockout', label: 'House / Apartment Lockout' },
  { value: 'office-lockout', label: 'Office Lockout' },
  { value: 'villa-lockout', label: 'Villa Lockout' },
  { value: 'lock-change', label: 'Lock Change' },
  { value: 'lock-repair', label: 'Lock Repair' },
  { value: 'lock-rekeying', label: 'Lock Rekeying' },
  { value: 'key-duplication', label: 'Key Duplication' },
  { value: 'key-cutting', label: 'Key Cutting' },
  { value: 'broken-key-extraction', label: 'Broken Key Extraction' },
  { value: 'smart-locks', label: 'Smart Lock Installation' },
  { value: 'digital-locks', label: 'Digital / Keypad Lock' },
  { value: 'fingerprint-locks', label: 'Fingerprint Lock' },
  { value: 'safe-opening', label: 'Safe Opening' },
  { value: 'safe-installation', label: 'Safe Installation' },
  { value: 'master-key-systems', label: 'Master Key System' },
  { value: 'access-control-systems', label: 'Access Control System' },
  { value: 'car-locksmith', label: 'Car Key Programming' },
  { value: 'security-upgrades', label: 'Security Upgrade / Assessment' },
  { value: 'other', label: 'Other / Not Listed' },
] as const;

export const AREA_OPTIONS = [
  { value: 'al-bada', label: 'Al Bada' },
  { value: 'downtown-dubai', label: 'Downtown Dubai' },
  { value: 'business-bay', label: 'Business Bay' },
  { value: 'dubai-marina', label: 'Dubai Marina' },
  { value: 'palm-jumeirah', label: 'Palm Jumeirah' },
  { value: 'jumeirah-village-circle', label: 'JVC (Jumeirah Village Circle)' },
  { value: 'jumeirah-lake-towers', label: 'JLT (Jumeirah Lake Towers)' },
  { value: 'al-barsha', label: 'Al Barsha' },
  { value: 'deira', label: 'Deira' },
  { value: 'bur-dubai', label: 'Bur Dubai' },
  { value: 'dubai-hills', label: 'Dubai Hills Estate' },
  { value: 'mirdif', label: 'Mirdif' },
  { value: 'dubai-silicon-oasis', label: 'Dubai Silicon Oasis' },
  { value: 'arabian-ranches', label: 'Arabian Ranches' },
  { value: 'motor-city', label: 'Motor City' },
  { value: 'sports-city', label: 'Sports City' },
  { value: 'international-city', label: 'International City' },
  { value: 'jumeirah', label: 'Jumeirah (1, 2, 3)' },
  { value: 'difc', label: 'DIFC' },
  { value: 'al-quoz', label: 'Al Quoz' },
  { value: 'karama', label: 'Al Karama' },
  { value: 'other', label: 'Other Dubai Area' },
] as const;

export const URGENCY_OPTIONS = [
  {
    value: 'emergency',
    label: 'Emergency — need help now',
    description: 'Locked out, urgent security issue',
  },
  {
    value: 'urgent',
    label: 'Urgent — same day',
    description: 'Important but not a lockout',
  },
  {
    value: 'standard',
    label: 'Standard — flexible timing',
    description: 'Planned work, can schedule a visit',
  },
] as const;
