/**
 * Reminder Data Pre-processing & Token Logic
 * * This script prepares the appointment data for multi-channel delivery:
 * 1. Formats the date and time to a human-readable Spanish locale.
 * 2. Constructs the dynamic confirmation URL with secure ID and Token parameters.
 */

// 1. Format Date and Time for the patient
const appointmentDate = new Date($('Get tomorrow Appointments').item.json.start);

const fecha_cita = appointmentDate.toLocaleDateString('es-ES', { 
    timeZone: 'Europe/Madrid' 
});

const hora_cita = appointmentDate.toLocaleTimeString('es-ES', { 
    timeZone: 'Europe/Madrid', 
    hour: '2-digit', 
    minute: '2-digit' 
});

// 2. Build the Secure Confirmation URL
// These parameters are caught by the Webhook/Telegram listeners to update the DB
const baseUrl = "https://flow.ericfelguera.com/api/webhook/confirmar_cita";
const appointmentId = $('Get tomorrow Appointments').item.json.id;
const token = $('Get tomorrow Appointments').item.json.cita_token;

const enlace_confirmar_cita = `${baseUrl}?id=${appointmentId}&token=${token}`;

return {
    fecha_cita,
    hora_cita,
    enlace_confirmar_cita
};
