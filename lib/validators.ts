import { z } from 'zod';

// Trial Booking Form Schema
export const trialFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .regex(/^[a-zA-Z\s.'-]+$/, 'Name contains invalid characters'),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be less than 15 digits')
        .regex(/^[+]?[\d\s-]+$/, 'Invalid phone number format'),
    email: z
        .string()
        .email('Invalid email address')
        .max(100, 'Email must be less than 100 characters'),
    city: z
        .string()
        .min(2, 'Please select or enter a city')
        .max(50, 'City name is too long'),
    mode: z.enum(['online', 'center', 'home', 'group'], {
        errorMap: () => ({ message: 'Please select a learning mode' }),
    }),
    instrument: z
        .string()
        .min(2, 'Please select an instrument')
        .max(50, 'Invalid instrument'),
    level: z.enum(['beginner', 'intermediate', 'advanced'], {
        errorMap: () => ({ message: 'Please select your level' }),
    }),
    preferredTime: z
        .string()
        .max(100, 'Time preference is too long')
        .optional(),
    message: z
        .string()
        .max(500, 'Message must be less than 500 characters')
        .optional(),
    consent: z.literal(true, {
        errorMap: () => ({ message: 'You must agree to be contacted' }),
    }),
    // Honeypot field - should be empty
    website: z.string().max(0, 'Invalid submission').optional(),
});

// Teacher Application Form Schema
export const teacherFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .regex(/^[a-zA-Z\s.'-]+$/, 'Name contains invalid characters'),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be less than 15 digits')
        .regex(/^[+]?[\d\s-]+$/, 'Invalid phone number format'),
    email: z
        .string()
        .email('Invalid email address')
        .max(100, 'Email must be less than 100 characters'),
    city: z
        .string()
        .min(2, 'Please enter your city')
        .max(50, 'City name is too long'),
    instruments: z
        .array(z.string())
        .min(1, 'Please select at least one instrument')
        .max(5, 'Maximum 5 instruments allowed'),
    experience: z
        .number()
        .min(1, 'Minimum 1 year experience required')
        .max(50, 'Invalid experience'),
    languages: z
        .array(z.string())
        .min(1, 'Please select at least one language')
        .max(5, 'Maximum 5 languages allowed'),
    certifications: z
        .string()
        .max(300, 'Certifications must be less than 300 characters')
        .optional(),
    availability: z
        .string()
        .min(5, 'Please describe your availability')
        .max(200, 'Availability description is too long'),
    message: z
        .string()
        .max(1000, 'Message must be less than 1000 characters')
        .optional(),
    // Honeypot field
    website: z.string().max(0, 'Invalid submission').optional(),
});

// Resource Download Form Schema
export const resourceFormSchema = z.object({
    email: z
        .string()
        .email('Invalid email address')
        .max(100, 'Email must be less than 100 characters'),
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .optional(),
    resourceId: z
        .string()
        .min(1, 'Resource ID is required'),
    // Honeypot field
    website: z.string().max(0, 'Invalid submission').optional(),
});

// Contact Form Schema
export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters'),
    email: z
        .string()
        .email('Invalid email address')
        .max(100, 'Email must be less than 100 characters'),
    phone: z
        .string()
        .max(15, 'Phone number is too long')
        .optional(),
    subject: z
        .string()
        .min(5, 'Subject must be at least 5 characters')
        .max(200, 'Subject is too long'),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(2000, 'Message must be less than 2000 characters'),
    // Honeypot field
    website: z.string().max(0, 'Invalid submission').optional(),
});

// Type exports
export type TrialFormData = z.infer<typeof trialFormSchema>;
export type TeacherFormData = z.infer<typeof teacherFormSchema>;
export type ResourceFormData = z.infer<typeof resourceFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Validation helper
export function validateForm<T>(
    schema: z.ZodSchema<T>,
    data: unknown
): { success: true; data: T } | { success: false; errors: Record<string, string> } {
    const result = schema.safeParse(data);

    if (result.success) {
        return { success: true, data: result.data };
    }

    const errors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
        const path = issue.path.join('.');
        if (!errors[path]) {
            errors[path] = issue.message;
        }
    });

    return { success: false, errors };
}

// Spam detection
const SPAM_KEYWORDS = [
    'viagra',
    'casino',
    'lottery',
    'crypto',
    'bitcoin',
    'forex',
    'investment opportunity',
    'make money fast',
    'free money',
    'click here',
    'act now',
    'limited time',
    'congratulations',
    'you won',
    'million dollars',
];

export function containsSpam(text: string): boolean {
    const lowerText = text.toLowerCase();
    return SPAM_KEYWORDS.some((keyword) => lowerText.includes(keyword));
}

// Check honeypot
export function isHoneypotFilled(value: string | undefined): boolean {
    return !!value && value.length > 0;
}
