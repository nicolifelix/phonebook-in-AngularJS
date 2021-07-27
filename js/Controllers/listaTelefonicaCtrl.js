angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, $http){
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
     
    ];

    $scope.operadoras = [
      {nome: "Oi",      codigo: 14, categoria: "Celular"},
      {nome: "Vivo",    codigo: 15, categoria: "Celular"},
      {nome: "Tim",     codigo: 41, categoria: "Celular"}, 
      {nome: "GVT",     codigo: 25, categoria: "Fixo"}, 
      {nome: "Embratel",codigo: 21, categoria: "Fixo"}, 
    ];
    $scope.tipos = [
      {tipo: "#e88924", nome: "Família"},
      {tipo: "#256ad2", nome: "Pessoal"},
      {tipo: "#25d25a", nome: "Trabalho"}
    ];
    $scope.adicionarContato = function (contato) {
      $scope.contatos.push(contato);
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
       $scope.contatos = contatos.filter(function (contato){
          if(!contato.selecionado) return contato;
       });
    };
    $scope.isContatoSelecionado = function (contatos) {
      return contatos.some(function (contato) {
        return contato.selecionado;
      });
    };
    $scope.ordenarPor = function (campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }
  });
  