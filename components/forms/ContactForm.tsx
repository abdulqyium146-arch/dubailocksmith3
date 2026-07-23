'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { COVERAGE_AREAS } from '@/lib/constants';

const SERVICE_OPTIONS = [
  'Emergency Lockout',
  'Car Lockout',
  'House / Apartment Lockout',
  'Office / Commercial Lockout',
  'Lock Change or Replacement',
  'Lock Rekeying',
  'Key Duplication',
  'Broken Key Extraction',
  'Smart Lock Installation',
  'Digital Lock Installation',
  'Safe Opening',
  'Safe Repair / Installation',
  'Security Upgrade',
  'Access Control System',
  'Master Key System',
  'Residential Locksmith',
  'Commercial Locksmith',
  'Other / Not Sure',
] as const;

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(9, 'Please enter a valid phone number')
    .regex(/^[\+\d\s\-()]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  area: z.string().min(1, 'Please select your area'),
  urgency: z.enum(['emergency', 'urgent', 'standard']),
  message: z.string().min(10, 'Please describe your situation briefly (at least 10 characters)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { urgency: 'standard' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setSubmitState('success');
      reset();
    } catch (err) {
      setSubmitState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (submitState === 'success') {
    return (
      <div className="glass-card rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Received</h3>
        <p className="text-gray-600 mb-6">
          Thank you for getting in touch. We will respond to your enquiry promptly. For urgent
          matters, please call us directly on{' '}
          <a href="tel:+971557689003" className="text-brand-600 font-semibold">
            +971 55 768 9003
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitState('idle')}
          className="btn btn-outline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Urgency selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          How urgent is this?
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'emergency', label: 'Emergency', desc: 'Right now', color: 'emergency' },
            { value: 'urgent', label: 'Urgent', desc: 'Today', color: 'amber' },
            { value: 'standard', label: 'Standard', desc: 'No rush', color: 'brand' },
          ].map((option) => (
            <label key={option.value} className="relative cursor-pointer">
              <input
                type="radio"
                value={option.value}
                {...register('urgency')}
                className="sr-only peer"
              />
              <div
                className={`border-2 rounded-xl p-3 text-center transition-all peer-checked:border-brand-500 peer-checked:bg-brand-50 border-gray-200 hover:border-gray-300`}
              >
                <p className="font-semibold text-gray-900 text-sm">{option.label}</p>
                <p className="text-xs text-gray-500">{option.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-emergency-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Mohammed Al-Hassan"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
              errors.name ? 'border-emergency-500 bg-emergency-50' : 'border-gray-300 bg-white'
            }`}
            {...register('name')}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-emergency-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-emergency-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+971 50 000 0000"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
              errors.phone ? 'border-emergency-500 bg-emergency-50' : 'border-gray-300 bg-white'
            }`}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-emergency-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address <span className="text-gray-400">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
            errors.email ? 'border-emergency-500 bg-emergency-50' : 'border-gray-300 bg-white'
          }`}
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-emergency-600">{errors.email.message}</p>
        )}
      </div>

      {/* Service + Area */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Service Required <span className="text-emergency-500">*</span>
          </label>
          <select
            id="service"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
              errors.service ? 'border-emergency-500 bg-emergency-50' : 'border-gray-300'
            }`}
            {...register('service')}
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-emergency-600">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your Area <span className="text-emergency-500">*</span>
          </label>
          <select
            id="area"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
              errors.area ? 'border-emergency-500 bg-emergency-50' : 'border-gray-300'
            }`}
            {...register('area')}
          >
            <option value="">Select your area...</option>
            {COVERAGE_AREAS.map((area) => (
              <option key={area.slug} value={area.name}>
                {area.name}
              </option>
            ))}
            <option value="Other">Other / Not Listed</option>
          </select>
          {errors.area && (
            <p className="mt-1 text-xs text-emergency-600">{errors.area.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Describe Your Situation <span className="text-emergency-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us what happened or what you need. The more detail you give, the more accurate our quote will be."
          className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition resize-y ${
            errors.message ? 'border-emergency-500 bg-emergency-50' : 'border-gray-300 bg-white'
          }`}
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-emergency-600">{errors.message.message}</p>
        )}
      </div>

      {/* Error message */}
      {submitState === 'error' && (
        <div className="bg-emergency-50 border border-emergency-200 rounded-xl p-4 text-emergency-700 text-sm">
          {errorMessage || 'Something went wrong. Please try again or call us directly.'}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState === 'loading'}
        className="w-full btn btn-primary py-4 text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitState === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        For immediate emergencies, please{' '}
        <a href="tel:+971557689003" className="text-brand-600 font-semibold">
          call us directly
        </a>{' '}
        — it is much faster than this form.
      </p>
    </form>
  );
}
