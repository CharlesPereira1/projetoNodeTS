import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

// instanciando a classe criada no repositories
const appointmentsRepository = new AppointmentsRepository();

/**
 * Movido para o appointmentsRepository
 // Esta falando que o appointments é um array de Appointments do interface do models (TS)
 const appointments: Appointment[] = [];
 */

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  /**
   * Movido para o appointmentsRepository.findByDate
   *Verifica se existem 2 datas e horas iguais
   *const findAppointmentInSameDate = appointments.find(appointment =>
   *  isEqual(parsedDate, appointment.date),
   *);
   */

  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  /**
   * movido para o appointmentsRepository.create
   *const appointment = new Appointment(provider, parsedDate);
   *appointments.push(appointment);
   */

  // dados trazidos no appointmentsRepository
  const appointment = appointmentsRepository.create(provider, parsedDate);

  return response.json(appointment);
});

export default appointmentsRouter;
