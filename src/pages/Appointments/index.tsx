import { useEffect, useState } from 'react';
import { StyledAccordion } from '../../components/Accordion';
import { api } from '../../services/api';
import { Appointment } from '../../types';
import { useReload } from '../../states/reloadAppointment.state';

function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { reload, setReload } = useReload();

  useEffect(() => {
    async function loadAppointments() {
      try {
        const res = await api.get<Appointment[]>('/appointments');
        setAppointments(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    if (reload) {
      loadAppointments();
      setReload(false);
    }
  }, [reload, setReload]);

  return <StyledAccordion items={appointments} />;
}

export { Appointments };
