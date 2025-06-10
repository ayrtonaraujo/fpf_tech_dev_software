# 01
    Introdução do curso

# 02
    Aula sobre arquitetura de computadores

# 03
    Módulo 2 - Lógica de Programação
    Introdução à Logica de programação
    Introdução à Algoritmos

# 04 e 05
    Fluxogramas e Pensando Algoritmicamente

# 06
    Exercícios de Fluxograma na ferramenta Draw.io

# 07
    Algoritmos em pseudocódigo na ferramenta Portugol Webstudio

# 08
    for loop
    biblioteca Matematica, função arredondar(2 argumentos = cálculoOUnúmero, nºcasasDecimais)
    vetor[Lista]
    algoritmo do robo japones

# 09
    biblioteca Texto, função posicao_texto(3 argumentos = palavraAbuscar, textoOndeBuscar, nºindiceComeçaBusca) -> retorna um numero inteiro do índice achado, senão retorna -1
    biblioteca Tipos, função inteiro_para_cadeia(2 argumentos = nºpraConverterEmString, nºbase10ou2ou16)              -> retorna uma cadeira de caracteres numéricos
    biblioteca Util, função numero_elementos(1 argumento = lista) -> retorna o numero inteiro de elementos da lista
    Algoritmo do Sapato barato
    Conceito de tabela verdade com operações lógicas (e, ou)
    Algoritmo Validar email
    Laço Enquanto (While loop)
    Se -> Senão Se -> Senão

# 10
    Introdução a Python
    PIP 
    venv

# 11
    tipagem em python
    declarar tipos nas variáveis
    input()
    convertendo tipos
    argumentos nomeados e posicionais
    função
    print()
    fstring
    IDE pycharm
    IDE vscode
    operações aritméticas
    operações relacionais
    lógicos

# 12
    estrutura de decisão (if, elif, else)
    estrutura de repetição (for loop, while loop)
    range()
    enumerate()
    break / continue
    LISTAS - definição
    TUPLAS - definição
    DICIONARIOS - definição
    Métodos de lista: .append(), .remove(), .pop(), .index()
    len(lista) #length/tamanho
    METODOS de TUPLA = .count(), .index()
    METODOS de DICIONARIO = .keys(), .values(), .items()


# 13
    resumão Python
    Iteráveis (listas, tuplas, dicionários) e funções
    funções de string
    built-in functions


# 14 e 15
    o que é POO
    classe e objetos
    atributos e métodos
    exemplos de classes e objetos em python
    herança
    encapsulamento


# 16 e 17
    versionamento git


# 18
    Introdução ao Banco de dados
    entidade e atributos
    atibutos multivalorados/compostos
    Primary key (PK) = chave primaria
    Foreign Key (FK) = chave estrangeira
    Modelo Conveitual > Logico > Fisico
    Cardinalidade 1:1, 1:N, N:N


# 19
    Normalização
    1 norma Formal
    2 norma Formal
    3 norma Formal
    Modelagem do banco de dados (exemplos)


# 20
    Exemplos de Modelagem:
    Escola
    Biblioteca
    Restaurante


# 21
    Introdução a SQL
    DDL = 
        create table (cria uma tabela nova, coloca-se o nome e os atributos com os tipos)
        alter table (altera uma tabela.. no exemplo vimos o ADD que adiciona uma coluna nova)
        drop table (deleta/derruba ou "dropa" uma tabela do banco de dados)
    DQL = 
        SELECT (seleciona, faz uma consulta "query" retornando o valor desejado)
        * significa TUDO, ou seja, todas as colunas (atributos) de uma tabela
        WHERE (filtro, seleciona onde aquela lógica descrita em seguida é cumprida)
    DML = 
        INSERT INTO (insere novos dados na tabela)
        UPDATE...WHERE (atualiza dados filtrados existentes na tabela)
        DELETE...WHERE (deleta os dados filtrados existentes na tabela)


# 22
    Prática de SQL
        Agregações
        Group by
        Joins


# 23
    Introdução ao Django REST framework


# 24
    Django project
        settings


# 25
    resolução exercicio
    django models
    migrations (aplicar no banco de dados)


# 26
    Django
    Aplicação Principal = settings, wsgi, asgi, urls
    Sua Aplicação baseada na principal = models
    ORM = migrations (python manage.py makemigrations, migrate, showmigrations)


# 27
    django = models & serializers


# 28
    - serializers
    - viewsets


# 29
    Django
        viewsets
    urls
        configuração pra rodar django localmente.
        rodando o projeto django.
        Testes de endpoints


# 30
    Django
    (melhoria models)
        permissões (login)
                paginação
        - filters


# 31
    Exercicio Django


# 32
    Conceitos WEB
    HTML


# 33
    HTML exemplo


# 34
    WEB CSS


# 35
    JavaScript JS
    Finalização do website


# 36
    Angular
        componentes


# 37
    Data binding
        {{ interpolação }}
        [(ngModel)]=Two-way binding
    Diretivas
        @If
        @For
        @Switch


# 38
    Serviços
    Injeção de Dependências


# 39
    Roteamento


# 40
    requisições HTTP
    API do clima

# 41
    Introdução a Kotlin

# 42
    Controle de Fluxo
    Data Classes
    Tipagem, 
    Funções que retornam Any, Unit, Nothing
    Funções Lambda, 
    Estrutura de decisão (if/else)
    Estrutura de repetição (for/while/do-while)


# 43
    Coleções (lists, sets, maps)
    Tratamento de Dados (filter, sumOf, sortedBy, maxByOrNull)
    forEach
    data class(toString(), equals(), copy())
    LazyColunm/LazyList (precisam de items)


# 44
    Requisições Simuladas e Manipulação de JSON
    instalar bilioteca gson
    salvar um jsonProdutos  e um objProdutos no arquivo SERVICES > ProdutoService
    usar gson.fromJson(<jsonProsutos>, Produto::class.java)
    isso transforma o jsonProdutos em objetos do tipo Produto
    usar gson.toJson(objProdutos)
    isso transforma a lista de produtos do tipo List<Produto> em json
    Podemos usar @Preview com um @Composable pasa mostrar rapidamente um resultado na tela de Preview sem ter que precisar rodar o aplicativo inteiro.

# 45
    Kotlin e conexão com a API Django
    Kotlin Models -> ServiceApi -> (Views) clientView -> (Views) Swiper -> MainActivity

# 46
    Aula 46
    Conecxão do Django com Kotlin e com Angular