module.exports = (on, config) => {
    on('task', {
      sqlQuery: async ({ config, query, params }) => {
        const pool = await sql.connect(config);
        const result = await pool.request()
          .input('params', sql.TVP, params)
          .query(query);
        return result;
      },
    });
  };