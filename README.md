# SISTEMAS
### Objetivo do Projeto

O objetivo é criar um sistema web responsivo com cinco interfaces principais, projetado com foco na abordagem **mobile first**. Isso significa que o sistema será inicialmente desenvolvido para dispositivos móveis e, posteriormente, adaptado para telas maiores, como tablets e desktops.  

### Interfaces do Sistema

1. **Cadastro**  
   Permite que novos usuários criem uma conta. Os campos necessários são:  
   - Nome  
   - E-mail  
   - Senha  

2. **Login**  
   Facilita o acesso dos usuários cadastrados ao sistema. Para isso, é necessário:  
   - E-mail  
   - Senha  

3. **Serviços**  
   Exibe os serviços disponíveis para contratação ou agendamento. Nesta interface, os usuários podem:  
   - Visualizar os serviços detalhadamente.  
   - Selecionar e contratar/agendar os serviços desejados.  

4. **Dashboard do Usuário**  
   É a área personalizada de cada usuário, onde ele pode:  
   - Ver suas informações pessoais.  
   - Acompanhar os serviços contratados.  
   - Consultar o histórico de agendamentos.  

5. **Contatos (opcional)**  
   Inclui informações de contato para suporte ou dúvidas, permitindo uma melhor interação entre o usuário e a equipe responsável pelo sistema.  

### Tecnologias Utilizadas  

O desenvolvimento será realizado com:  
- **HTML** e **CSS** para a estrutura e estilização das páginas.  
- **JavaScript** para adicionar interatividade.  
- **React.js** para construção de interfaces dinâmicas e reutilizáveis.  

### Metodologia de Desenvolvimento  

1. **Mobile First**  
   O sistema será projetado primeiramente para dispositivos móveis, priorizando layouts simples e funcionais. Em seguida, será adaptado para dispositivos maiores, como tablets e desktops, usando técnicas responsivas.  

2. **Testes**  
   O sistema será testado em diferentes dispositivos e navegadores para garantir funcionalidade e responsividade.  

3. **Documentação**  
   No final do desenvolvimento, será gerado um documento explicando:  
   - O funcionamento de cada interface.  
   - Os processos de desenvolvimento e testes realizados.  

Esse processo garante que o sistema seja intuitivo, acessível e funcional para todos os usuários.
**Documentação**
No final do desenvolvimento, será gerado um documento explicando:
   
   -O funcionamento de cada interface.
   
   -Os processos de desenvolvimento e testes realizados.
   
   -Esse processo garante que o sistema seja intuitivo, acessível e funcional para todos os usuários.

   Explicação dos Códigos
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

