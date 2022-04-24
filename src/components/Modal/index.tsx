import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';
import { format, setHours, setMinutes } from 'date-fns';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import * as Yup from 'yup';
import { Button, Modal as MantineModal } from '@mantine/core';
import { Formik, Form, Field } from 'formik';
import { NotificationProps, showNotification } from '@mantine/notifications';
import { useModal } from '../../states/modal.state';
import { api } from '../../services/api';
import { notifications } from '../../notifications';
import { useReload } from '../../states/reloadAppointment.state';
import './style.css';

registerLocale('ptBR', ptBR);

const AppointmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Nome não deve ser inferior a 3 caracteres.')
    .max(50, 'Nome não pode ser superior a 50 caracteres.')
    .matches(/^[A-Za-z ]*$/, 'Nome não deve conter números.')
    .required('Campo obrigatório.'),
  dateOfBirth: Yup.date()
    .required('Data de nascimento obrigatória.')
    .max(new Date(), 'Data não pode ser superior ao dia atual.'),
  appointmentDate: Yup.date()
    .required('Data e horário de agendamentos obrigatórios.')
    .min(new Date(), 'Data de agendamento não pode ser inferior ao dia atual.'),
});

function Modal() {
  const { opened, setOpened } = useModal();
  const { setReload } = useReload();

  return (
    <MantineModal
      title='Agendamento'
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <Formik
        initialValues={{ name: '', dateOfBirth: new Date(), appointmentDate: new Date() }}
        validationSchema={AppointmentSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={async (values, actions) => {
          let status = 201;
          await api
            .post('/appointments', {
              ...values,
              dateOfBirth: format(values.dateOfBirth, 'yyyy-LL-dd'),
              appointmentDate: format(values.appointmentDate, 'yyyy-LL-dd kk:m:ss'),
            })
            .catch((error) => {
              if (axios.isAxiosError(error)) {
                status = error.response?.status || 500;
              } else {
                status = 500;
              }
            });
          showNotification(
            notifications.find((notif) => notif.status === status) as NotificationProps,
          );
          actions.setSubmitting(false);
          setOpened(false);
          setReload(true);
        }}
      >
        {({ setFieldValue, values, errors }) => (
          <Form>
            <div className='groupDiv'>
              <Field
                type='text'
                id='name'
                name='name'
                placeholder='Nome'
                className='inputFormik'
              />
              {errors.name ? <p className='errorMsg'>{errors.name}</p> : null}
            </div>

            <div className='groupDiv'>
              <DatePicker
                id='dateOfBirth'
                name='dateOfBirth'
                dateFormat='dd/MM/yyyy'
                locale='ptBR'
                className='datePickerCustom'
                selected={values.dateOfBirth}
                onChange={(date) => setFieldValue('dateOfBirth', date)}
              />
              {errors.dateOfBirth ? (
                <p className='errorMsg'>{errors.dateOfBirth as string}</p>
              ) : null}
            </div>

            <div className='groupDiv'>
              <DatePicker
                id='appointmentDate'
                name='appointmentDate'
                dateFormat='dd/MM/yyyy'
                locale='ptBR'
                showTimeSelect
                timeFormat='HH:mm'
                timeCaption='Horário'
                className='datePickerCustom'
                minTime={setHours(setMinutes(new Date(), 0), 8)}
                maxTime={setHours(setMinutes(new Date(), 30), 17)}
                selected={values.appointmentDate}
                onChange={(date) => setFieldValue('appointmentDate', date)}
              />
              {errors.appointmentDate ? (
                <p className='errorMsg'>{errors.appointmentDate as string}</p>
              ) : null}
            </div>

            <Button type='submit'>Agendar</Button>
          </Form>
        )}
      </Formik>
    </MantineModal>
  );
}
export { Modal };
