export default interface EventRegistration {
    name: string;
    type: "in-person" | "virtual" | "hybrid" | "";
    description: string;
    category: "conference" | "workshop" | "meetup" | "webinar" | "other"  | "";
    tags: string[];
    startDate: string; // ISO 8601 format (e.g., "2024-08-21")
    startTime: string; // 24-hour time format (e.g., "14:00")
    endDate: string; // ISO 8601 format (e.g., "2024-08-21")
    endTime: string; // 24-hour time format (e.g., "16:00")
    registrationDeadline: string; // ISO 8601 format (e.g., "2024-08-15")
    venue: string;
    virtualLink?: string; // Optional for in-person events
    maxAttendees: number;
    organizerName: string;
    organizerContact: string;
    organizerDepartment: string;
  }