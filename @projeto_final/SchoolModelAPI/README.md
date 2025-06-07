Pré requisitos:

1 - Instale os Requirements

pip install -f .\requirements.txt

(OBS.: se aparecer a mensagem abaixo, significa que já foram instalados quando a .env foi criada)
ERROR: You must give at least one requirement to install (maybe you meant "pip install .\requirements.txt"?)

2 - Certifique-se que tem a conexão com Postgres 

USER: postgres
PASSWORD: postgres

3 - Ao lado direito da conexão postgres, clique nas databases (exemplo: '1 of 2')

Se na lista de databases (EXISTIR 'escola') -> Selecione 'escola' e dentro dela, Selecione 'All Schemas'
Senão -> Crie a database 'escola';  SQL = create database escola;
*IMPORTANTE = 'escola' é todo minúsculo

4 - Faça migration

python manage.py migrate

(OBS.: se aparecer a mensagem abaixo, significa que o banco já tem os modelos salvos nas tabelas)
No migrations to apply.

5 - Tente rodar 

python manage.py runserver localhost:8000

6 - Acesse http://localhost:8000/
