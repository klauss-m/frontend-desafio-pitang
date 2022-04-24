export const notifications = [
  {
    status: 200,
    title: 'Agendamento atualizado',
    message: 'Conclusão do agendamento atualizada com sucesso!',
    color: 'green',
  },
  {
    status: 201,
    title: 'Agendamento efetuado',
    message: 'Agendamento para vacinação efetuado com sucesso. ',
    color: 'green',
  },
  {
    status: 404,
    title: 'Agendamento não encontrado',
    message: 'Agendamento não encontrado no sistema.',
    color: 'red',
  },
  {
    status: 500,
    title: 'Erro de banco de dados',
    message: 'Falha ao localizar o banco de dados.',
    color: 'red',
  },
];
