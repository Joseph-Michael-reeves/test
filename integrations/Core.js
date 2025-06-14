export async function SendEmail({ to, subject, body }) {
  console.log('Mock send email:', { to, subject, body });
  return true;
}
