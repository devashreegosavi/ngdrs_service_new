const { request } = require('express')
const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ngdrs_ch',
  password: 'postgres',
  port: 5433,
})


const getUsers = (request, response) => {
    pool.query('SELECT user_id,username FROM ngdrstab_mst_user', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getIdentificationsData = (request, response) => {
    pool.query('SELECT identificationtype_id,identificationtype_desc_en FROM ngdrstab_mst_identificationtype', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getallUsersCitizen = (request, response) => {
    pool.query('select user_id,username,office_id,role_id,full_name,mobile_no,email_id from ngdrstab_mst_user_citizen' , (error, results) => {
      if(error){
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getallState = (request,response) => {
    pool.query('select state_id,state_name_en from ngdrstab_conf_admblock1_state order by state_name_en', (error,results) => {
      if(error){
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getDistricts = (request, response) => {
    const stateid = parseInt(request.params.id)
  //console.log(stateid);
    //pool.query('select district_id,district_name_en FROM ngdrstab_conf_admblock3_district WHERE state_id = $1', [stateid], (error, results) => {

    pool.query('select district_id,district_name_en from ngdrstab_conf_admblock3_district WHERE state_id = $1', [stateid], (error,results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getTalukas = (request, response) => {
    const districtid = parseInt(request.params.id)

    pool.query('select taluka_id, taluka_name_en from ngdrstab_conf_admblock5_taluka where district_id = $1', [districtid], (error, result) => {
      if(error){
        throw error
      }
      response.status(200).json(result.rows)
    })
  }

  const getRecordExist = (request, response) => {
    const username = request.params.username
    const pwd = request.params.pwd
    //console.log(username)
    //console.log(pwd)
    pool.query('select count(*) as cnt from ngdrstab_mst_user where username= $1 and password=$2', [username,pwd], (error, result) => {
      if(error){
        throw error
      }
      response.status(200).json(result.rows)
    })

  }

  const getpwdfromdb = (request, response) => {
    const username = request.params.username

    pool.query('select password from ngdrstab_mst_user where username = $1', [username], (error, result) => {
      if(error){
        throw error
      }
      response.status(200).json(result.rows)
    })

  }

  const instusercitizen = async (request, response) => {
    const userData = request.body;
    console.log(userData);

    const query = 'INSERT INTO ngdrstab_mst_user_citizen (full_name, state_id, email_id, mobile_no) VALUES ($1, $2, $3, $4) RETURNING id';

    try {
      const result = await pool.query(query, [userData.firstname, userData.state, userData.email_id, userData.mobile_no]);
      response.status(201).json({ success: true, id: result.rows[0].id });
    } catch (err) {
      console.error('Error inserting data:', err);
      response.status(500).json({ success: false, message: 'Internal server error' });
    }
  }

  module.exports = {
    getUsers,
    getIdentificationsData,
    getallUsersCitizen,
    getallState,
    getDistricts,
    getTalukas,
    getRecordExist,
    getpwdfromdb,
    instusercitizen
}