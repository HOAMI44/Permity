using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MitarbeiterController : Controller
    {
        private readonly IConfiguration _configuration;

        public MitarbeiterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        //api/Mitarbeiter/all
        [HttpGet("all")]
        public JsonResult findAll()
        {
            string query = @"select ""ID"", ""KURZZEICHEN"", ""NAME"", ""PERSONALNR"", ""ABTEILUNG"", ""TEAM"", ""BEREICH"" from ""Mitarbeiter""";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;

            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        //api/Mitarbeiter/find/{id}
        [HttpGet("find/{id}")]
        public JsonResult FindById(int id)
        {
            string query = @"select * from ""Mitarbeiter"" where ""ID"" = @id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        //api/Mitarbeiter/login
        [HttpGet("login")]
        public JsonResult Login(string name, string kurzzeichen)
        {
            string query = @"select * from ""Mitarbeiter"" where ""KURZZEICHEN"" = @kurzzeichen and ""NAME"" = @name";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;

            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@name", name);
                    myCommand.Parameters.AddWithValue("@kurzzeichen", kurzzeichen);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    HttpContext.Session.SetString("name", name);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
