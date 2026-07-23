import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  phone: z
    .string()
    .min(9, 'Please provide a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[\+\d\s\-()]+$/, 'Please provide a valid phone number'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service').max(100),
  area: z.string().min(1, 'Please select your area').max(100),
  urgency: z.enum(['emergency', 'urgent', 'standard']),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // Log the submission (in production, send to email / CRM)
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      urgency: data.urgency,
      name: data.name,
      phone: data.phone,
      email: data.email || 'not provided',
      service: data.service,
      area: data.area,
      message: data.message,
    });

    // In production, you would:
    // 1. Send an email via a service like Resend, SendGrid or AWS SES
    // 2. Add the lead to a CRM (HubSpot, Pipedrive, etc.)
    // 3. Send a WhatsApp notification to the business owner
    // 4. For emergency/urgent submissions, trigger an SMS alert

    // Example email payload (uncomment and configure when email service is ready):
    /*
    await sendEmail({
      to: 'info@dubailocksmiths.com',
      subject: `[${data.urgency.toUpperCase()}] New Contact Form: ${data.service} — ${data.area}`,
      text: `
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Service: ${data.service}
Area: ${data.area}
Urgency: ${data.urgency}

Message:
${data.message}
      `,
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will be in touch shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again or call us directly on +971 55 768 9003.',
      },
      { status: 500 }
    );
  }
}

// Return 405 for non-POST requests
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
