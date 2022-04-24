export interface Appointment {
  id: string;
  name: string;
  dateOfBirth: Date;
  appointmentDate: Date;
  attendance: boolean;
}

export interface AccordionProps {
  items: Appointment[];
}
