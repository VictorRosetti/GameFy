async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'connection string here',
        ssl: {
            rejectUnauthorized: false
          }
    });
 
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
    
}

async function selectCustomers(id) {
    const client = await connect();
    const res = await client.query("SELECT * FROM tb_teste WHERE nome='"+id+"';");
    return res.rows;
}


async function insertCustomer(customer){
    const client = await connect();
    const sql = 'INSERT INTO tb_teste(nome,sobrenome,idade,altura) VALUES ($1,$2,$3,$4);';
    const values = [customer.nome,customer.sobrenome, customer.idade, customer.altura];
    return await client.query(sql, values);
}

module.exports = { selectCustomers, insertCustomer }