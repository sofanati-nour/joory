
import { z } from "zod";

export const AttachmentTypeSchema = z.enum([
    "image", "pdf", "code", "audio", "video",
]);

export const AttachmentSchema = z.object({
    id: z.string().uuid(),
    messageId: z.string().uuid(),
    type: AttachmentTypeSchema,
    filename: z.string(),
    mimeType: z.string(),
    sizeBytes: z.number().int(),
    url: z.string().url(),
    width: z.number().int().nullable(),
    height: z.number().int().nullable(),
});

export const UploadResponseSchema = z.object({
    id: z.string().uuid(),
    url: z.string().url(),
    type: AttachmentTypeSchema,
    filename: z.string(),
});

// Allowed MIME types and limits — used by both frontend (early reject)
// and backend (authoritative check)
export const ALLOWED_UPLOADS = {
    "image/jpeg": { ext: "jpg", category: "image" as const, maxMB: 20 },
    "image/png": { ext: "png", category: "image" as const, maxMB: 20 },
    "image/webp": { ext: "webp", category: "image" as const, maxMB: 20 },
    "image/gif": { ext: "gif", category: "image" as const, maxMB: 10 },
    "application/pdf": { ext: "pdf", category: "pdf" as const, maxMB: 50 },
    "text/plain": { ext: "txt", category: "code" as const, maxMB: 5 },
    "text/markdown": { ext: "md", category: "code" as const, maxMB: 5 },
    "text/csv": { ext: "csv", category: "code" as const, maxMB: 10 },
    "application/json": { ext: "json", category: "code" as const, maxMB: 5 },
    "audio/mpeg": { ext: "mp3", category: "audio" as const, maxMB: 100 },
    "audio/wav": { ext: "wav", category: "audio" as const, maxMB: 100 },
    "audio/webm": { ext: "webm", category: "audio" as const, maxMB: 100 },
    "video/mp4": { ext: "mp4", category: "video" as const, maxMB: 200 },
    "video/webm": { ext: "webm", category: "video" as const, maxMB: 200 },
} as const;

export type AttachmentType = z.infer<typeof AttachmentTypeSchema>;
export type Attachment = z.infer<typeof AttachmentSchema>;
export type UploadResponse = z.infer<typeof UploadResponseSchema>;
export type AllowedMimeType = keyof typeof ALLOWED_UPLOADS;