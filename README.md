# frontend-desafio-pitang

Diante do cenário atual, existe uma demanda gigante de pessoas para tomar a vacina para
o COVID-19. E com isso nossa cidade está precisando de um simples sistema para realizar
os agendamentos.
O processo consiste na criação de um portal onde será possível agendar pacientes para
tomar a vacina, construir uma página para consulta dos agendamentos feitos por dia e
horário.

## Regras de Negócio

- O paciente deve informar seu nome, data de nascimento e dia e horário para o
agendamento.

- Deverá ser checado se o formulário foi preenchido.

- Os dados do paciente/agendamentos devem ser armazenados em memória.

- Dentro da página para consultar os agendamentos deve ser possível visualizar a
listagem de agendamentos feitos e informar se o agendamento foi realizado ou não,
e qual a conclusão do atendimento(se foi realizado).

- Quando o usuário der F5 ou recarregar a página os dados não podem ser perdidos.

## Regras de Execução

- Portal escrito em React, utilizar o react-datepicker para o gerenciamento das datas.
- Axios como cliente http.
- Utilizar o Formik para a validação dos dados na view.
