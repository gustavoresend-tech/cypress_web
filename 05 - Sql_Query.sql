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
