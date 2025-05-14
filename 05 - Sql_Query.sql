DELETE FROM dbo.SolicitacaoCnd
WHERE OperacaoId IN (
  SELECT OperacaoId 
  FROM dbo.Operacao
  WHERE EXISTS (
    SELECT 1
    FROM dbo.atividade a
    WHERE OperacaoId = a.OperacaoId
  )
  );


DELETE FROM dbo.HistoricoExecucaoRegraAutomatica
WHERE AtividadeId IN (
  SELECT a.ID
  FROM dbo.atividade a
  WHERE EXISTS (
    SELECT 1
    FROM dbo.operacao o
    WHERE EXISTS (
      SELECT 1
      FROM dbo.atividade a2
      WHERE a2.OperacaoId = o.ID
    )
  )
);

DELETE FROM dbo.atividade
WHERE EXISTS (
  SELECT 1
  FROM dbo.operacao o
  WHERE EXISTS (
    SELECT 1
    FROM dbo.atividade a
    WHERE a.OperacaoId = o.ID
  )
);

DELETE FROM dbo.ExecucoesEtapas;
DELETE FROM dbo.Operacao;

DELETE FROM dbo.TipoAtividade
WHERE Nome LIKE '%Teste%';

 ============================================================================================
-- Validação

SELECT TOP (10) [Id]
      ,[IdValidacao]
      ,[StatusValidoBasico]
      ,[StatusValidoMicroDeposito]
      ,[DataSolicitacaoValidacaoBasica]
      ,[DataRetornoValidacaoBasica]
      ,[DataSolicitacaoValidacaoMicroDeposito]
      ,[DataRetornoValidacaoMicroDeposito]
      ,[DataRetornoPreValidacaoMicroDeposito]
      ,[Informativo]
      ,[TipoConta]
      ,[Banco]
      ,[CodigoBanco]
      ,[OperacaoBancaria]
      ,[Agencia]
      ,[AgenciaDigito]
      ,[Conta]
      ,[ContaDigito]
      ,[Pessoa_Id]
      ,[RegistroExcluido]
  FROM [pjusdadosbancarios].[dbo].[Validacao]
  ORDER BY [ID] DESC

  -- log requisições

  SELECT TOP (10) [Id]
      ,[Date]
      ,[Thread]
      ,[Level]
      ,[Logger]
      ,[Message]
      ,[Exception]
  FROM [pjusdadosbancarios].[dbo].[LogRequisicoes]
  ORDER BY [ID] DESC

 ============================================================================================
