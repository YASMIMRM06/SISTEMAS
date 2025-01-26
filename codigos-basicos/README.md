
### **Explicação dos Códigos HTML**

#### **1. Página de Serviços (`servicos.html`)**

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Serviços Disponíveis</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="servicos">
    <h1>Serviços Disponíveis</h1>
    <ul>
      <li>
        <h2>Limpeza</h2>
        <p>Limpeza geral da casa</p>
        <button>Agendar</button>
      </li>
      <li>
        <h2>Jardinagem</h2>
        <p>Cuidados com o jardim</p>
        <button>Agendar</button>
      </li>
    </ul>
  </div>
</body>
</html>

> **Explicação:** 
> Essa página lista os serviços disponíveis de forma simples e clara. Usamos a tag `<ul>` para criar uma lista de serviços, com cada serviço dentro de um `<li>`. Cada item da lista tem um título (`<h2>`), uma descrição (`<p>`) e um botão para agendar. O layout será estilizado usando CSS no arquivo `styles.css`.

---

#### **2. Página de Login (`login.html`)**

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="login">
    <h1>Login</h1>
    <form action="#" method="POST">
      <input type="email" placeholder="E-mail" required>
      <input type="password" placeholder="Senha" required>
      <button type="submit">Entrar</button>
    </form>
  </div>
</body>
</html>


> **Explicação:** 
> A página de login contém um formulário simples com dois campos de entrada: um para o e-mail e outro para a senha. O atributo `required` em cada campo garante que os dados sejam preenchidos antes do envio. O botão "Entrar" envia as informações quando o formulário é preenchido corretamente. A estilização também será feita no arquivo `styles.css`.

---

#### **3. Página de Cadastro (`cadastro.html`)**

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="cadastro">
    <h1>Cadastro</h1>
    <form action="#" method="POST">
      <input type="text" placeholder="Nome" required>
      <input type="email" placeholder="E-mail" required>
      <input type="password" placeholder="Senha" required>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</body>
</html>

> **Explicação:** 
> Semelhante à página de login, mas aqui temos um campo adicional para o nome do usuário. Essa página coleta os dados necessários para criar uma conta. O formulário é enviado usando o método POST para maior segurança. Todo o layout será estilizado para facilitar a navegação.

---

#### **4. Página de Dashboard (`dashboard.html`)**

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="dashboard">
    <h1>Dashboard do Usuário</h1>
    <p>Bem-vindo, [Nome do Usuário]</p>
    <h2>Serviços Contratados</h2>
    <ul>
      <li>Limpeza - Data: 25/01/2025</li>
      <li>Jardinagem - Data: 30/01/2025</li>
    </ul>
  </div>
</body>
</html>

> **Explicação:** 
> Essa página serve como a área principal do usuário. Aqui mostramos uma mensagem de boas-vindas e listamos os serviços contratados. A lista pode ser dinâmica no futuro, atualizada com base nos dados de um servidor ou banco de dados. O layout é minimalista, com foco em exibir informações claras.

1. Página de Serviços (Servicos.js)
"A página de serviços é onde listamos todos os serviços disponíveis para os usuários agendarem. Aqui usamos um array chamado servicos para armazenar os dados de cada serviço, como o nome e a descrição. Esse array é exibido na tela utilizando a função map, que percorre os serviços e renderiza um item da lista (<li>) para cada um deles. No final, adicionamos um botão para agendar o serviço. A estrutura é simples, mas podemos torná-la mais dinâmica conectando a uma API no futuro."

2. Página de Login (Login.js)
"Essa é a página de login, onde os usuários inserem o e-mail e a senha para acessar suas contas. Usei os hooks useState para controlar o estado dos campos de entrada. Quando o usuário clica no botão 'Entrar', a função handleLogin é chamada e impede o comportamento padrão do formulário (recarregar a página). Por enquanto, ela só imprime os dados no console, mas mais tarde podemos integrar um backend para autenticação real."

3. Página de Cadastro (Cadastro.js)
"Na página de cadastro, a lógica é semelhante à do login, mas aqui os usuários preenchem nome, e-mail e senha para criar uma conta. Também usei useState para armazenar os valores desses campos e a função handleSubmit para processar o envio do formulário. Para melhorar a experiência do usuário, adicionei estilos no arquivo CSS (Cadastro.css), como centralização dos elementos, espaçamento e cores amigáveis. Assim, a página fica mais organizada e intuitiva."

4. Página de Dashboard (Dashboard.js)
"A dashboard é a área do usuário. Aqui, podemos exibir informações como o nome do usuário e os serviços contratados. O código ainda é estático, mas podemos usar essa base para futuramente exibir dados reais vindos de uma API ou banco de dados. É uma página ideal para personalizar a experiência do usuário, como mostrar saudações e um histórico de agendamentos."

CSS (Estilos)
"No código CSS, cuidamos da aparência do site. Usei uma abordagem simples e organizada, dividindo os estilos por classes. Por exemplo, na classe .cadastro, alinhei os elementos ao centro e adicionei espaçamentos nos campos para melhorar a usabilidade. Além disso, usei animações no estilo geral do site, como a rotação infinita da logo na classe .App-logo. Essa atenção aos detalhes dá uma aparência mais profissional e amigável."


**Melhorias Futuras**
"Podemos fazer algumas melhorias importantes no projeto:

Adicionar integração com APIs para carregar serviços e informações dinâmicas.
Melhorar a responsividade no CSS, garantindo que tudo fique perfeito em dispositivos móveis.
Implementar autenticação real nas páginas de login e cadastro.
Criar componentes reutilizáveis como botões e listas, para manter o código organizado e fácil de escalar.
Adicionar mais estilos personalizados nas páginas, como botões animados e ícones para cada tipo de serviço."
